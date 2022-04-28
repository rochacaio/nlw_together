import { Repository, EntityRepository} from "typeorm";
import {Compliment} from "../database/entities/Compliment";

@EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment>{

}

export { ComplimentsRepositories };