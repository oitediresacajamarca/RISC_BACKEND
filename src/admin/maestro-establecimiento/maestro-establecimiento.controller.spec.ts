import { Test, TestingModule } from '@nestjs/testing';
import { MaestroEstablecimientoController } from './maestro-establecimiento.controller';

describe('MaestroEstablecimientoController', () => {
  let controller: MaestroEstablecimientoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaestroEstablecimientoController],
    }).compile();

    controller = module.get<MaestroEstablecimientoController>(MaestroEstablecimientoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
