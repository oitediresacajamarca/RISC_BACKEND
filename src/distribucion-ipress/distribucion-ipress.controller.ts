import { Controller, Get, Param } from '@nestjs/common';
import { DiscoveryService } from '@nestjs/core';
import { DistribucionIpressService } from './distribucion-ipress.service';

@Controller('risc_b/distribucion-ipress')
export class DistribucionIpressController {
    constructor(private distrserv: DistribucionIpressService) {
    }
    @Get(':id_punto')
    async devolverIpressPorPunto(@Param('id_punto') id_punto: string) {
      
        const result = await this.distrserv.devolverIpressPorPunto(id_punto)
        return result
    }
}
