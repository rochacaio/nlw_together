import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";

class CreateTagController{
async handle(request: Request, response: Response){
        const { name } = request.body
        const createTagService = new CreateTagService();

        const create_tag = await createTagService.index(name)

        return response.json(create_tag);
    }
}

export { CreateTagController };