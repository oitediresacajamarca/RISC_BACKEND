import { Body, Controller, Get, Post } from '@nestjs/common';
import { MaestroEstablecimientoService } from './maestro-establecimiento.service';
import { MaestroEstablecimiento } from './maestro-establecimiento.interface';

@Controller('risc_b/maestro-establecimiento')
export class MaestroEstablecimientoController {
    constructor(private estas: MaestroEstablecimientoService) {

    }

    @Get('listar')
    async listarEst() {

        let resp = await this.estas.listarMaestroRep()
        return resp
    }

    @Post('nuevo')
    async NuevoEstablec(@Body() establec) {

        let estable: MaestroEstablecimiento = {
            Codigo_Disa: 7, Codigo_MicroRed: "",
            Codigo_Red: "", Codigo_Sector: 7, Codigo_Unico: "", Departamento: "CAJAMARCA", Descripcion_Sector: "GOBIERNO REGIONAL",
            Disa: "CAJAMARCA", Distrito: "", Id_Establecimiento: 9, MicroRed: "", Nombre_Establecimiento: "", Provincia: "", Red: "", Ubigueo_Establecimiento: 10
        };
        Object.assign(estable, establec)
        let resp = await this.estas.NuevoEstablec(estable)
        return resp

    }

}
