import { Controller, Param, Get } from '@nestjs/common';
import { ReportesInmunoService } from './reportes-inmuno.service';

@Controller('risc_b/reportes-inmuno/')
export class ReportesInmunoController {


    constructor(private reportess: ReportesInmunoService) {

    }
    @Get(':id_punto')
    devolverIdPunto(@Param('id_punto') id_punto: String) {
 

    }


}
