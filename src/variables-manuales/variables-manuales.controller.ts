import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { VariablesManualesService } from './variables-manuales.service';

@Controller('risc_b/variables-manuales')
export class VariablesManualesController {
    constructor(private variabless: VariablesManualesService) {

    }

    @Get('listar')
    async devolverListado() {
        const resul = await this.variabless.devolverlistado()
        return resul;
    }

    @Post('guardar')
    async GuardarVariable(@Body() datos:any) {        
        const resul = await this.variabless.guardarVariable(datos)
        return resul;
    }

    
    @Put('devolver')
    async DevolverVariable(@Body() datos:any) {        
        const resul = await this.variabless.DevolverVariable(datos)
        console.log(datos)
        return resul;
    }


}
