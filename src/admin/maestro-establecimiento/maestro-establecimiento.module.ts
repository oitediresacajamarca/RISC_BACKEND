import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { MaestroEstablecimientoRepository } from './maestro-establecimiento.repository';
import { MaestroEstablecimientoService } from './maestro-establecimiento.service';
import { MaestroEstablecimientoController } from './maestro-establecimiento.controller';


@Module({
    imports: [TypeOrmModule.forFeature([MaestroEstablecimientoRepository])],
    providers: [MaestroEstablecimientoService],
    controllers: [MaestroEstablecimientoController],
 
})
export class MaestroEstablecimientoModule {}
