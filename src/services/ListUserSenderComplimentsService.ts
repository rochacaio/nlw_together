import {getCustomRepository} from "typeorm";
import {ComplimentsRepositories} from "../repositories/ComplimentsRepositories";

class ListUserSenderCompliments{
    async index( user_id : string){
        const compliment_repositorie = getCustomRepository(ComplimentsRepositories);

        const tag_user_sender = await compliment_repositorie.find({
            where: {
                user_sender:user_id
            }
        })
        if(!tag_user_sender){
            throw new Error("Nenhum elogio encontrado")
        }

        return tag_user_sender;
    }
}

export { ListUserSenderCompliments };