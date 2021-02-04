import { EntityRepository, Repository } from "typeorm";
import { TipoAmbito } from "./Tipo_Ambito.entity";

@EntityRepository(TipoAmbito)
export class TipoambitoRepository  extends Repository<TipoAmbito>{}
