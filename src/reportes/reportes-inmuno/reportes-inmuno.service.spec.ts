import { Test, TestingModule } from '@nestjs/testing';
import { ReportesInmunoService } from './reportes-inmuno.service';

describe('ReportesInmunoService', () => {
  let service: ReportesInmunoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportesInmunoService],
    }).compile();

    service = module.get<ReportesInmunoService>(ReportesInmunoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
