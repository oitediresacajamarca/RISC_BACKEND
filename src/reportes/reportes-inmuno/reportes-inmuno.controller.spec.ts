import { Test, TestingModule } from '@nestjs/testing';
import { ReportesInmunoController } from './reportes-inmuno.controller';

describe('ReportesInmunoController', () => {
  let controller: ReportesInmunoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportesInmunoController],
    }).compile();

    controller = module.get<ReportesInmunoController>(ReportesInmunoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
