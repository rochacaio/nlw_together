import {getCustomRepository} from "typeorm";
import {ComplimentsRepositories} from "../repositories/ComplimentsRepositories";

class ListUserReceiveCompliments{
    async index(user_id  :string){
        const compliment_repositorie = getCustomRepository(ComplimentsRepositories);

        const tag_user_receiver = await compliment_repositorie.find({
            where: {
                user_receiver:user_id
            },
            relations:["userSender","userReceiver","tag"]
        })
        if(!tag_user_receiver){
            throw new Error("Nenhum elogio encontrado")
        }

        return tag_user_receiver;
    }
}

export { ListUserReceiveCompliments };