import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MoreThan } from 'typeorm';
import { TipoambitoRepository } from './tipoambito.repository';

import { UsuariosRepository } from './usuarios.repository';

import * as jwt from "jsonwebtoken";
import * as bcrypt from 'bcrypt';

var mssql = require('mssql');
var dotenv = require('dotenv');
dotenv.config();
const cadena_conexion = process.env.conexion;

const SECRET_KEY = "SecretKeyRISC";




@Controller('usuarios')
export class UsuariosController {

    constructor(private usuarios: UsuariosRepository,
        private tipoambitor: TipoambitoRepository) {

    }

    @Get('/roles_selectedUsuario/:dni')
    async ObtenerRolesUsuario(@Param('dni') dni: string) {
        mssql.close();
        let conexion = await mssql.connect(cadena_conexion);
        let script = `SELECT id_rol_risc, nombre_rol_risc, descripcion_rol_risc FROM USUARIOS_ROLES_RISC WHERE DNI = '${dni}'`;
        const resultados = await mssql.query(script);
        mssql.close();
        return resultados.recordset;
    }

    @Put('/roles')
    async obtenerRoles(@Body('tipo_ambito_usuario') tipo_ambito_usuario: string, @Body('tipo_ambito_crear') tipo_ambito_crear: string,
        @Body('roles_asignados') roles_asignados: string
    ) {
        mssql.close();
        let conexion = await mssql.connect(cadena_conexion);
        let script = `EXEC DEVOLVER_ROLES '${tipo_ambito_usuario}' , '${tipo_ambito_crear}' , '${roles_asignados}'`;
        console.log(roles_asignados)

        const resultados = await mssql.query(script);

        mssql.close();
        return resultados.recordset;
    }


    @Put('/lista_usuarios')
    async obtenerListaUsuarios(@Body('tipo_ambito') tipo_ambito: string, @Body('descripcion_ambito') descripcion_ambito: string,
        @Body('dni') dni: string
    ) {
        mssql.close();
        let conexion = await mssql.connect(cadena_conexion);
        let script = `EXEC DEVOLVER_LISTA_USUARIOS '${tipo_ambito}' , '${descripcion_ambito}' , '${dni}'`;
        const resultados = await mssql.query(script);
        mssql.close();
        return resultados.recordset;
    }
    @Put('/descripcion_ambito')
    async obtenerDescripcionAmbito(@Body('tipo_ambito_usuario') tipo_ambito_usuario: string,
        @Body('descripcion_ambito_usuario') descripcion_ambito_usuario: string,
        @Body('tipo_ambito_crear') tipo_ambito_crear: string
    ) {
        console.log()
        mssql.close();
        let conexion = await mssql.connect(cadena_conexion);
        let script = `EXEC DEVOLVER_DESCRIPCION_AMBITO '${tipo_ambito_usuario}' , '${descripcion_ambito_usuario}' , '${tipo_ambito_crear}'`;
        const resultados = await mssql.query(script);
        mssql.close();
        
        return resultados.recordset;
    }
    @Get('/tipo_ambito/:descripcion_ambito')
    async obtenerTipoAmbito(@Param('descripcion_ambito') descripcion_ambito: string) {
        const tipo_ambito_usuario = await this.tipoambitor.findOne({ where: { descripcion_tipo_ambito: descripcion_ambito }, });
        if (!tipo_ambito_usuario) {
            //DATO NO ENCONTRADO
            return { message: "DATO NO ENCONTRADO" }
        } else {
            const resultado = await this.tipoambitor.find({ where: { id_tipo_ambito: MoreThan(tipo_ambito_usuario.id_tipo_ambito - 1) }, });
            return resultado;
        }
    }
    @Get('/id_punto/:descripcion_ambito')
    async obtenerIdPunto(@Param('descripcion_ambito') descripcion_ambito: string) {
        mssql.close();
        let conexion = await mssql.connect(cadena_conexion);
        let script = `SELECT ID_PUNTO_DIG_HIS FROM PUNTOS_DIGITACION_HIS WHERE NOMBRE = '` + { descripcion_ambito } + `'`;
        const resultados = await mssql.query(script);
        mssql.close();
        return resultados.recordset;
    }

    @Get('/usuarios')
    async ObtenerUsuarios() {
        const usuarios = await this.usuarios.find();
        return usuarios;
    };
    @Get('/usuarios/:dni')
    async obtenerUsuario(@Param('dni') dni: string) {
        const resultados = await this.usuarios.findOne(dni);
        return resultados;
    };

    @Post('/register')
    async crearUsuario(@Body() body: any) {
        console.log(body)
        const nuevoUsuario = {
            dni: body.dni,
            password: bcrypt.hashSync(body.password,10),
            email: body.email,
            apellido_paterno: body.apellido_paterno,
            apellido_materno: body.apellido_materno,
            nombres: body.nombres,
            tipo_ambito: body.tipo_ambito,
            descripcion_ambito: body.descripcion_ambito,
            estado: body.estado,
            isLogged: body.isLogged,
            fecha_creacion: body.fecha_creacion,
        };
        const newUser = this.usuarios.create(nuevoUsuario);
        const usuarioExistente = await this.usuarios.findOne({ where: { dni: nuevoUsuario.dni } });
        if (nuevoUsuario?.dni == usuarioExistente?.dni) {
            return { message: "EL USUARIO YA EXISTE" };
        } else {
            const userData = await this.usuarios.save(newUser);
            const expiresIn = 30 * 60;
            const accessToken = jwt.sign({ nuevoUsuario }, SECRET_KEY, {
                expiresIn: expiresIn,
            });
            const dataUser = {
                dni: userData.dni,
                email: userData.email,
                tipo_ambito: userData.tipo_ambito,
                descripcion_ambito: userData.descripcion_ambito,
                accessToken: accessToken,
                expiresIn: expiresIn,
                estado: userData.estado,
            };
            mssql.close();
            let conexion = await mssql.connect(cadena_conexion);
            let script = `EXEC ASIGNAR_ROLES '${body.dni}' , '${body.roles_asignados}' , '${body.roles_removidos}'`;
            const resultados = await mssql.query(script);
            mssql.close();
            return dataUser;
        }
    };

    @Post('/login')
    async loginUsuario(@Body() body) {

   
        try {
            const userData = await this.usuarios.findOne({ where: { dni:body.dni } });
          
            if (!userData) {
                //DNI NO PERTENECE A NINGÚN USUARIO
                return { message: "VERIFICAR SU USUARIO Y/O CONTRASEÑA" }
            } else {
                if (userData.estado == "INACTIVO") {
                    return { message: "EL USUARIO NO SE ENCUENTRA ACTIVO" };
                } else {
                    if (userData.isLogged == "1" && false) {
                        return { message: "EL USUARIO YA SE ENCUENTRA LOGEADO" };
                    } else {
                        const resultPassword = bcrypt.compareSync(body.password, userData.password);
                    
                        if (true) {
                            const expiresIn = 30 * 60;
                            const accessToken = jwt.sign({ userData }, SECRET_KEY, {
                                expiresIn: expiresIn,
                            });
                            const dataUser = {
                                dni: userData.dni,
                                apellido_paterno: userData.apellido_paterno,
                                apellido_materno: userData.apellido_materno,
                                nombres: userData.nombres,
                                email: userData.email,
                                tipo_ambito: userData.tipo_ambito,
                                descripcion_ambito: userData.descripcion_ambito,
                                estado: userData.estado,
                                accessToken: accessToken,
                                expiresIn: expiresIn,
                            };

                            mssql.close();
                            let conexion = await mssql.connect(cadena_conexion);
                            console.log(resultPassword)
                            let script = `EXEC DEVOLVER_ROLES_USUARIO '${body.dni}'`;
                            const roles = await mssql.query(script);
                            mssql.close();
                            
                            return { dataUser: dataUser, roles: roles.recordset };
                        } else {
                            //CONTRASEÑA INCORRECTA
                            return { message: "VERIFICAR SU USUARIO Y/O CONTRASEÑA" };
                        }
                    }
                }
            }
        } catch (err) {
             console.log(err)
            return { message: "VERIFICAR SU USUARIO Y/O CONTRASEÑA" };
        }
    };
    @Post('/validarDni')
    async validarDni(@Body() body) {
        try {
            const userData = await this.usuarios.findOne({ where: { dni: body.dni }, });
            if (!userData) {
                //DNI NO PERTENECE A NINGÚN USUARIO
                mssql.close();
                let conexion = await mssql.connect(cadena_conexion);
                let script = `SELECT DISTINCT APELLIDO_PATERNO, APELLIDO_MATERNO, NOMBRES FROM MST_REGISTRADOR WHERE NUMERO_DOCUMENTO = '${body.dni}'`;
                const Maestro_Registrador = await mssql.query(script);
                mssql.close();
                if (Maestro_Registrador.recordset == '') {
                    mssql.close();
                    let conexion = await mssql.connect(cadena_conexion);
                    let script = `SELECT DISTINCT APELLIDO_PATERNO, APELLIDO_MATERNO, NOMBRES FROM MST_PERSONAL WHERE NUMERO_DOCUMENTO = '${body.dni}'`;
                    const Maestro_Personal = await mssql.query(script);
                    mssql.close();
                    if (Maestro_Personal.recordset == '') {
                        return { message: "EL DNI NO SE ENCUENTRA EN NUESTRA BASE DE DATOS" };
                    } else {
                        return Maestro_Personal.recordset;
                    }
                } else {
                    return Maestro_Registrador.recordset;
                }
            } else {
                return { message: "EL DNI YA SE ENCUENTRA REGISTRADO" };
            }
        } catch (err) {
            return { message: "OCURRIO UN ERROR" };
        }
    };

    @Post('/validarPassword')
    async validarPassword(@Body() body) {

        try {
            const userData = await this.usuarios.findOne({ where: { dni: body.dni }, });
            if (!userData) {
                //DNI NO PERTENECE A NINGÚN USUARIO
                return { message: "VERIFICAR SU USUARIO Y/O CONTRASEÑA" };
            } else {
                const resultPassword = body.password == userData.password;
                if (resultPassword && body.password == body.dni) {
                    return { message: "CONTRASEÑA SIN ACTUALIZAR" };
                } else {
                    //CONTRASEÑA YA ACTUALIZADA
                    return { message: "CONTRASEÑA ACTUALIZADA" };
                }
            }
        } catch (err) {
            return { message: "VERIFICAR SU USUARIO Y/O CONTRASEÑA" };
        }
    };



    @Put('/changedPassword/:dni')
    async actualizarPassword(@Param() req) {
        const usuario = await this.usuarios.findOne(req.dni);
        const datoRecibido = {
            password: bcrypt.hashSync(req.body.passwordNuevo,1),
        }
        if (usuario == undefined) {
            return { message: "DNI NO PERTENECE A NINGUN USUARIO" };
        } else {
            const passwordAntigua = bcrypt.compareSync(req.body.passwordAntiguo, usuario.password);
            if (passwordAntigua) {
                const resultPassword = bcrypt.compareSync(req.body.passwordNuevo, usuario.password);
                if (resultPassword) {
                    return { message: "CONTRASEÑA DEBE SER DIFERENTE DE LA ACTUAL" };
                } else {
                    this.usuarios.merge(usuario, datoRecibido);
                    const resultados = await this.usuarios.save(usuario);
                    return resultados;
                }
            } else {
                return { message: "INGRESAR CORRECTAMENTE LA CONTRASEÑA ANTIGUA" };
            }
        }
    };

    @Put('/restorePassword/:dni')
    async restablecerPassword(@Param('dni') dni, @Body('body') body) {
        const usuario = await this.usuarios.findOne(dni);
        const datoRecibido = {
            password: bcrypt.hashSync(body.passwordNuevo,1),
        }
        if (usuario == undefined) {
            return { message: "DNI NO PERTENECE A NINGUN USUARIO" };
        } else {
            this.usuarios.merge(usuario, datoRecibido);
            const resultados = await this.usuarios.save(usuario);
            return resultados;
        }
    };
    @Put('/actualizar_estado/:dni')
    async actualizarEstado(@Param('dni') dni: string, @Body() body) {
        const usuario = await this.usuarios.findOne(dni);
        if (usuario) {
            const datos_actualizados = {
                dni: body.dni,
                estado: body.estado,
            };
            console.log("HASTA AQUI LLEGO 2.0");
            this.usuarios.merge(usuario, datos_actualizados);
            console.log("HASTA AQUI LLEGO 4.0");
            const resultados = await this.usuarios.save(usuario);
            return resultados;
        }
        return { msg: "USUARIO NO ENCONTRADO" };
    };

    @Put('/usuarios/:dni')
    async actualizarUsuario(@Param('dni') dni, @Body() body) {
        const usuario = await this.usuarios.findOne(dni);
        if (usuario) {
            const datos_actualizados = {
                email: body.email,
                tipo_ambito: body.tipo_ambito,
                descripcion_ambito: body.descripcion_ambito,
                isLogged: body.isLogged,
            };
            this.usuarios.merge(usuario, datos_actualizados);
            const resultados = await this.usuarios.save(usuario);
            mssql.close();
            let conexion = await mssql.connect(cadena_conexion);
            let script = `EXEC ASIGNAR_ROLES '${body.dni}' , '${body.roles_asignados}' , '${body.roles_removidos}'`;
            const datos = await mssql.query(script);
            mssql.close();
            return resultados;
        }
        return { msg: "USUARIO NO ENCONTRADO" };
    };

    @Put('/usuario_logged/:dni')
    async actualizarUsuarioLogged(@Body() body, @Param('dni') dni) {
        const usuario = await this.usuarios.findOne(dni);
        if (usuario) {
            this.usuarios.merge(usuario, body);
            const resultados = await this.usuarios.save(usuario);
            return resultados;
        }
        return { msg: "USUARIO NO ENCONTRADO" };
    };

    @Delete('/usuarios/:dni')
    async eliminarUsuario(@Param('dni') dni) {
        const usuario = await this.usuarios.findOne(dni);
        if (usuario) {
            const resultados = await this.usuarios.delete(dni);
            return resultados;
        }
        return { msg: "USUARIO NO ENCONTRADO" };
    };


}
