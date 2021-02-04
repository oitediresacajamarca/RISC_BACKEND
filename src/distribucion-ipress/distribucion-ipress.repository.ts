import { EntityRepository, Repository } from "typeorm";
import { DistribucionIpressEntity } from "./distribucion-ipress.entity";

@EntityRepository(DistribucionIpressEntity)
export class DistribucionIpressRepository  extends Repository<DistribucionIpressEntity> {



}
