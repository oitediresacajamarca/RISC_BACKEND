import { Injectable } from '@nestjs/common';
import { DistribucionIpressRepository } from './distribucion-ipress.repository';

@Injectable()
export class DistribucionIpressService {

    constructor(private distribrep: DistribucionIpressRepository) {

    }


     devolverIpressPorPunto(id_punto: string) {


      return this.distribrep.find({ where: { ID_PUNTO_DIG_HIS: id_punto } })
       
    }

}
