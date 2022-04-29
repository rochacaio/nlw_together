
import {Request, Response} from "express";
import {ListUserSenderCompliments} from "../services/ListUserSenderComplimentsService";


class ListUserSendComplimentsController{
    async handle(request: Request,response:  Response){
        const listUserSenderService = new ListUserSenderCompliments()
        const { user_id } = request;
        const elogio = await listUserSenderService.index(user_id)

        return response.json(elogio);
    }
}

export { ListUserSendComplimentsController };