import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RolesRisc {
    @PrimaryGeneratedColumn({ type: "int" })
    id_rol_risc: number;
    @Column({ type: "nvarchar", length: 250, nullable: false })
    nombre_rol_risc: string;
    @Column({ type: "nvarchar", length: 250, nullable: false })
    descripcion_rol_risc: string;
}