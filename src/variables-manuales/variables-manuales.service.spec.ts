import { Test, TestingModule } from '@nestjs/testing';
import { VariablesManualesService } from './variables-manuales.service';

describe('VariablesManualesService', () => {
  let service: VariablesManualesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VariablesManualesService],
    }).compile();

    service = module.get<VariablesManualesService>(VariablesManualesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
