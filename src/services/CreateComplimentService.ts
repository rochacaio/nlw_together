import {getCustomRepository} from "typeorm";
import {ComplimentsRepositories} from "../repositories/ComplimentsRepositories";
import {UserRepositories} from "../repositories/userRepositories";

interface IComplimentRequest{
    tag_id: string,
    user_sender: string,
    user_receiver: string,
    message: string
}

class CreateComplimentService{
    async index({ tag_id,user_sender,user_receiver,message}: IComplimentRequest){
        const compliments_repositories = getCustomRepository(ComplimentsRepositories)
        const user_repositories = getCustomRepository(UserRepositories)

        const user_receiver_existente = await user_repositories.findOne(user_receiver) // pega como default o ID

        if(user_receiver === user_sender){
            throw new Error("User Receiver e User Sender Iguais!")
        }
        if(!user_receiver_existente){
            throw new Error("User Receiver não existe!")
        }

        const compliment = compliments_repositories.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        });

        await compliments_repositories.save(compliment);

        return compliment;
    }
}

export { CreateComplimentService };