import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class UsuariosRisc {
    @PrimaryColumn({ type: "nvarchar", length: 8 })
    dni: string;
    @Column({ type: "nvarchar", length: 250, nullable: false })
    password: string;
    @Column({ type: "nvarchar", length: 200, nullable: false })
    email: string;
    @Column({ type: "nvarchar", length: 200, nullable: false })
    apellido_paterno: string;
    @Column({ type: "nvarchar", length: 200, nullable: false })
    apellido_materno: string;
    @Column({ type: "nvarchar", length: 200, nullable: false })
    nombres: string;
    @Column({ type: "nvarchar", length: 200, nullable: false })
    tipo_ambito: string;
    @Column({ type: "nvarchar", length: 200, nullable: false })
    descripcion_ambito: string;
    @Column({ type: "nvarchar", length: 8, nullable: false })
    estado: string;
    @Column({ type: "nvarchar", length: 1, nullable: false })
    isLogged: string;
    @Column({ type: "datetime", nullable: false })
    fecha_creacion: Date;
}