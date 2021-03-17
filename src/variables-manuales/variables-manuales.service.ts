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
    let resp
    let resp1
    if(datos.valor=='0'){
      console.log(datos)
          }
   

   if(datos.valor!='' && datos.valor != undefined ){
   let ex= await  this.variablesm.findOne({where:{cod_2000:datos.cod_2000,anio:datos.anio,idactividad:datos.idactividad,mes:datos.mes}})
 

   if(ex !=undefined){
    ex.valor=datos.valor
    ex.fecha_actu=new Date()

    resp=ex
    resp1 = await this.variablesm.update({cod_2000:datos.cod_2000,anio:datos.anio,idactividad:datos.idactividad,mes:datos.mes},resp)
  

   }
   else{
    resp =  this.variablesm.create(datos)
    resp.fecha_actu=new Date()
    resp1 = await this.variablesm.save(resp)
   }
  
   

  
    }
    if (datos.valor=='' || datos.valor==0 ){
      resp1=  await  this.variablesm.delete({cod_2000:datos.cod_2000,anio:datos.anio,idactividad:datos.idactividad,mes:datos.mes})
    }
    console.log(resp1)

    return resp1;
  }

  async DevolverVariable(datos){
    const resp = await this.variablesm.findOne({anio:datos.anio,mes:datos.mes,idactividad:datos.idactividad,cod_2000:datos.cod_2000})
   
    return resp
  }
}


