import { Controller, Get, Param } from '@nestjs/common';
import { ActividadesService } from './actividades.service';

@Controller('risc_b/actividades')
export class ActividadesController {

    constructor(private actidadser:ActividadesService){

    }
@Get('listar')
    async devolverListado(){
        const result = await this.actidadser.devolverLista()
        return result;

    }
    @Get(':id')
    async devolverActividad(@Param('id') id:string){
        const result = await this.actidadser.devolverActividad(id)
        return result;

    }
}
