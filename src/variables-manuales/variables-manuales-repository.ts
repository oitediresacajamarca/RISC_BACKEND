import { EntityRepository, Repository } from "typeorm";
import { VariablesManualesEntity } from "./variables-manuales.entity";



@EntityRepository(VariablesManualesEntity)
export class VariablesManualesRepository extends Repository<VariablesManualesEntity>{}
