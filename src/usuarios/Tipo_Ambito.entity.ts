import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TipoAmbito {
    @PrimaryGeneratedColumn({ type: "int" })
    id_tipo_ambito: number;
    @Column({ type: "nvarchar", length: 50, nullable: false })
    descripcion_tipo_ambito: string;
}