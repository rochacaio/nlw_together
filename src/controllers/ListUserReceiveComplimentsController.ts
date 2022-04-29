import {Request, Response} from "express";
import {ListUserReceiveCompliments} from "../services/ListUserReceiveCompliments";


class ListUserReceiveComplimentsController{
    async handle(request: Request,response:  Response){
        const listUserReceiveService = new ListUserReceiveCompliments()
        const { user_id } = request;
        const elogio = await listUserReceiveService.index(user_id)

        return response.json(elogio);
    }
}

export { ListUserReceiveComplimentsController };