import { Module } from '@nestjs/common';

import { VariablesManualesService } from './variables-manuales.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { VariablesManualesRepository } from './variables-manuales-repository';
import { VariablesManualesController } from './variables-manuales.controller';

@Module({
  providers: [VariablesManualesService],
  imports:[TypeOrmModule.forFeature([VariablesManualesRepository])],
  controllers: [VariablesManualesController]
})
export class VariablesManualesModule {}
