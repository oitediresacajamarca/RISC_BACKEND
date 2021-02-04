import { Test, TestingModule } from '@nestjs/testing';
import { DistribucionIpressController } from './distribucion-ipress.controller';

describe('DistribucionIpressController', () => {
  let controller: DistribucionIpressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DistribucionIpressController],
    }).compile();

    controller = module.get<DistribucionIpressController>(DistribucionIpressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
