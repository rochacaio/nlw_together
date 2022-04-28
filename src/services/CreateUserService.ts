import { getCustomRepository} from "typeorm";
import {UserRepositories} from "../repositories/userRepositories";
import { hash } from "bcryptjs";

interface IUserRequest{
    name: string,
    email: string,
    password: string,
    admin ?: boolean
}

class CreateUserService {

    async index({ name,email,admin = false, password } :IUserRequest){
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

        const passwordHash = await hash(password,8);

        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash
        })

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService }