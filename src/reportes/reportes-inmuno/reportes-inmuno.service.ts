import { Injectable } from '@nestjs/common';
import { DistribucionIpressRepository } from 'src/distribucion-ipress/distribucion-ipress.repository';
import { DistribucionIpressService } from 'src/distribucion-ipress/distribucion-ipress.service';
import { ReportesInmunoRepository } from './reportes-inmuno.repository';

@Injectable()
export class ReportesInmunoService {
    constructor(private reportes: ReportesInmunoRepository,private distrib:DistribucionIpressRepository) {

    }

    async devolverReporteIdPunto(id_punto: string) {
   var ipress_punto=await    this.distrib.find({where:{ID_PUNTO_DIG_HIS:id_punto}})
   

        
    }
}
