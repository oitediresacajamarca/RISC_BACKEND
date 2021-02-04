import { Module } from '@nestjs/common';
import { DistribucionIpressService } from './distribucion-ipress.service';
import { DistribucionIpressController } from './distribucion-ipress.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { DistribucionIpressEntity } from './distribucion-ipress.entity';
import { DistribucionIpressRepository } from './distribucion-ipress.repository';

@Module({
  providers: [DistribucionIpressService],
  imports:[TypeOrmModule.forFeature([DistribucionIpressRepository])],
  controllers: [DistribucionIpressController]
})
export class DistribucionIpressModule {





}
