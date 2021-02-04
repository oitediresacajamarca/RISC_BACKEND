import { EntityRepository, Repository } from "typeorm";
import { ReportesInmunoEntity } from "./reportes-inmuno.entity";

@EntityRepository(ReportesInmunoEntity)
export class ReportesInmunoRepository  extends Repository<ReportesInmunoEntity>{}
