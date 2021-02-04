import { Module } from '@nestjs/common';
import { ReportesInmunoService } from './reportes-inmuno.service';
import { ReportesInmunoController } from './reportes-inmuno.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { DistribucionIpressRepository } from 'src/distribucion-ipress/distribucion-ipress.repository';
import { ReportesInmunoRepository } from './reportes-inmuno.repository';

@Module({
  providers: [ReportesInmunoService],
  controllers: [ReportesInmunoController],
  imports:[TypeOrmModule.forFeature([DistribucionIpressRepository,ReportesInmunoRepository])]
})
export class ReportesInmunoModule {

}
