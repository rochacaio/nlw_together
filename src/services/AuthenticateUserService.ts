import {getCustomRepository} from "typeorm";

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import {UserRepositories} from "../repositories/userRepositories";

interface IAuthenticateRequest{
    email: string,
    password: string
}

class AuthenticateUserService {
    async index({ email, password }: IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UserRepositories);

        const user_existente = await usersRepositories.findOne({email});

        if(!user_existente){
            throw new Error("Email/Password incorreto!")
        }

       const password_correta =  await compare(password,user_existente.password)

        if(!password_correta){
            throw new Error("Email/Password incorreto!")
        }

        const token = sign({
            email: user_existente.email
        },"09e4b7db28fab868fa716753eea45218",{
            subject: user_existente.id,
            expiresIn: "1d"
        });

        return token;
    }
}

export { AuthenticateUserService };