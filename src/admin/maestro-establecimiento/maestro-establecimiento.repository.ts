import { EntityRepository, Repository } from "typeorm";
import { MaestroEstablecimientoEntity } from "../maestro-establecimiento.entity";

@EntityRepository(MaestroEstablecimientoEntity)
export class MaestroEstablecimientoRepository extends Repository<MaestroEstablecimientoEntity>{}
