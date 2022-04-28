import { Request,Response } from "express";
import {CreateUserService} from "../services/CreateUserService";

class CreateUserController{
    async handle(request: Request,response: Response){
        const { name,email,admin,password } = request.body;

        const createUserService = new CreateUserService();

        const create_user = await createUserService.index({name,email,admin,password});

        return response.json(create_user);
    }
}

export { CreateUserController };