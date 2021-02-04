import { Test, TestingModule } from '@nestjs/testing';
import { VariablesManualesController } from './variables-manuales.controller';

describe('VariablesManualesController', () => {
  let controller: VariablesManualesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VariablesManualesController],
    }).compile();

    controller = module.get<VariablesManualesController>(VariablesManualesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
