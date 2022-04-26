import {Repository,EntityRepository} from "typeorm";
import {User } from "../database/entities/User";

@EntityRepository(User)
class UserRepositories extends Repository<User>{

}

export { UserRepositories }