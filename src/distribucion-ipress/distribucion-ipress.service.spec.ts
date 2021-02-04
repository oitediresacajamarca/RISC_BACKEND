import { Test, TestingModule } from '@nestjs/testing';
import { DistribucionIpressService } from './distribucion-ipress.service';

describe('DistribucionIpressService', () => {
  let service: DistribucionIpressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DistribucionIpressService],
    }).compile();

    service = module.get<DistribucionIpressService>(DistribucionIpressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
