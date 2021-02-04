import { Column, ViewEntity } from "typeorm";
@ViewEntity('DISTRIBUCION_IPRESS')
export class DistribucionIpressEntity {
    @Column()
    UBIGEO_ESTABLECIMIENTO:Number
    @Column()
    DEPARTAMENTO:String;
    @Column()
    PROVINCIA:String;
    @Column()
    DISTRITO:String;
    @Column()
    CODIGO_UGIPRESS:Number;
    @Column()
    UNIDAD_EJECUTORA:String;
    @Column()
    SUB_REGION:String;
    @Column()
    RED:String;
    @Column()
    MICRORED:String;
    @Column()
    CLAS:String;
    @Column()
    ID_PUNTO_DIG_HIS:Number;
    @Column()
    PUNTO_DIGITACION_HIS:String;
    @Column()
    IPRESS:String;
    @Column()
    RENIPRESS:String;
    @Column()
    CATEGORIA:String;
    @Column()
    Id_Establecimiento:Number;
    @Column()
    ID_SUBREGION:Number;
    @Column()
    ID_RED:Number;
    @Column()
    ID_MICRORED:Number;
   

}
