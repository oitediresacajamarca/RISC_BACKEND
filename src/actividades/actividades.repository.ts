import { EntityRepository, Repository } from "typeorm";
import { ActividadesEntity } from "./actividades.entity";

@EntityRepository(ActividadesEntity)
export class ActividadesRepository extends Repository<ActividadesEntity> {}
