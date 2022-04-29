import {getCustomRepository} from "typeorm";
import {UserRepositories} from "../repositories/userRepositories";
import { classToPlain } from "class-transformer";

class ListUserService{
    async index(){
        const user_repositorie = getCustomRepository(UserRepositories);

        const users = await user_repositorie.find()

        return classToPlain(users);
    }
}

export { ListUserService };