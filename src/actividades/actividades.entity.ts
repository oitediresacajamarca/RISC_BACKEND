import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('activid')
export class ActividadesEntity {
    @PrimaryColumn()
    idactividad:String;
    @PrimaryColumn()
    idestrategia:String;
    @Column()
    descripcion:String;
    @Column()
    estado:String;
    @Column()
    observaciones:string;
}
