import { EntityRepository, Repository } from "typeorm";
import { UsuariosRisc } from "./Usuario.entity";

@EntityRepository(UsuariosRisc)
export class UsuariosRepository extends Repository<UsuariosRisc> {}
