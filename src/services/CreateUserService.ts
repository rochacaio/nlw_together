import { getCustomRepository} from "typeorm";
import {UserRepositories} from "../repositories/userRepositories";

interface IUserRequest{
    name: string,
    email: string,
    admin ?: boolean
}

class CreateUserService {

    async index({ name,email,admin } :IUserRequest){
        const usersRepository = getCustomRepository(UserRepositories);

        if(!email){
            throw new Error('E-mail incorreto');
        }
        const user_existente = await usersRepository.findOne({
             email
        })
        if(user_existente){
            throw new Error('Usuário existente');
        }
        const user = usersRepository.create({
            name,
            email,
            admin
        })

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService }