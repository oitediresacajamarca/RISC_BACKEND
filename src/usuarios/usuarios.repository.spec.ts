import { UsuariosRepository } from './usuarios.repository';

describe('UsuariosRepository', () => {
  it('should be defined', () => {
    expect(new UsuariosRepository()).toBeDefined();
  });
});
