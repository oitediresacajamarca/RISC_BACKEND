import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { TipoambitoRepository } from './tipoambito.repository';
import { UsuariosController } from './usuarios.controller';
import { UsuariosRepository } from './usuarios.repository';

@Module({
  controllers: [UsuariosController],
  imports:[TypeOrmModule.forFeature([UsuariosRepository,TipoambitoRepository])]
})
export class UsuariosModule {}
