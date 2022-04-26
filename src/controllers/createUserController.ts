import { Request,Response } from "express";
import {CreateUserService} from "../services/CreateUserService";

class CreateUserController{
    async handle(request: Request,response: Response){
        const { name,email,admin } = request.body;
        console.log(request)
        const createUserService = new CreateUserService();

        const create_user = await createUserService.index({name,email,admin});

        return response.json(create_user);
    }
}

export { CreateUserController };