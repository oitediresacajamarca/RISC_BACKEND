import { Module } from '@nestjs/common';
import { ReportesInmunoModule } from './reportes-inmuno/reportes-inmuno.module';

@Module({
  imports: [ReportesInmunoModule]
})
export class ReportesModule {}
