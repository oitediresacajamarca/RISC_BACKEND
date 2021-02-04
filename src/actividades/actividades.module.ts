import { Module } from '@nestjs/common';
import { ActividadesService } from './actividades.service';
import { ActividadesController } from './actividades.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { ActividadesRepository } from './actividades.repository';

@Module({
  imports:[TypeOrmModule.forFeature([ActividadesRepository])],
  providers: [ActividadesService],
  controllers: [ActividadesController]
})
export class ActividadesModule {}
