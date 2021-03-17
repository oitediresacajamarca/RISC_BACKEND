import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('vartemp')
export class VariablesManualesEntity {
    @PrimaryColumn()
    idvartemp: string;
    @PrimaryColumn()
    idestrategia: string;
    @PrimaryColumn()
    idactividad: string;
    @PrimaryColumn()
    idestablec: string;
    @PrimaryColumn()
    mes: string;
    @PrimaryColumn()
    anio: string;
    @Column()
    valor: number;
    @Column()
    cod_2000:string;
    @Column()
    fecha_actu:Date

}
