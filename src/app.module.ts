import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VariablesManualesModule } from './variables-manuales/variables-manuales.module';
import { ActividadesModule } from './actividades/actividades.module';
import { ReportesModule } from './reportes/reportes.module';
import { DistribucionIpressModule } from './distribucion-ipress/distribucion-ipress.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MaestroEstablecimientoModule } from './admin/maestro-establecimiento/maestro-establecimiento.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: '.',
      database: 'risc_2030',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: false,
      options: {
        cryptoCredentialsDetails: {
          minVersion: 'TLSv1'
        }
      }
    
    }),
    VariablesManualesModule,
    ActividadesModule,
    ReportesModule,
    DistribucionIpressModule,
    UsuariosModule,
    MaestroEstablecimientoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
