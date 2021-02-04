import { Injectable } from '@nestjs/common';
import { VariablesManualesRepository } from './variables-manuales-repository';

@Injectable()
export class VariablesManualesService {
  constructor(private variablesm: VariablesManualesRepository) {

  }
  async devolverlistado() {
    const resp = await this.variablesm.find()
    return resp;
  }
  async guardarVariable(datos) {
    const resp = await this.variablesm.create(datos)

    const resp1 = await this.variablesm.save(resp)
  
    return resp1;
  }

  async DevolverVariable(datos){
    const resp = await this.variablesm.findOne({anio:datos.anio,mes:datos.mes,idactividad:datos.idactividad,cod_2000:datos.cod_2000})
   
    return resp
  }
}


