import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class UsuariosRolesRisc {
    @PrimaryColumn({ type: "nvarchar", length: 8 })
    dni: string;
    @PrimaryColumn({ type: "int" })
    id_rol_risc: number;
    @Column({ type: "nvarchar", length: 250, nullable: false })
    nombre_rol_risc: string;
    @Column({ type: "nvarchar", length: 250, nullable: false })
    descripcion_rol_risc: string;
}