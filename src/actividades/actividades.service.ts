import { Injectable } from '@nestjs/common';
import { ActividadesRepository } from './actividades.repository';

@Injectable()
export class ActividadesService {
    constructor(private actividadesr:ActividadesRepository){

    }

    async devolverLista(){
        const result=await   this.actividadesr.find()
        return result;
    }
    async devolverActividad(id:string){      
        const result=await   this.actividadesr.findOne({idactividad:id})    
        return result;
       }
}
