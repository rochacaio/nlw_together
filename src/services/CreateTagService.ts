import {getCustomRepository} from "typeorm";
import { TagsRepositories } from "../repositories/tagsRepositories";

class CreateTagService{
    async index( name : string){
        const tagRepositories = getCustomRepository(TagsRepositories);
        if(!name){
            throw new Error("Nome incorreto!");
        }
        const tag_existente = await tagRepositories.findOne({
            name: name
        })

        if(tag_existente){
            throw new Error("Tag existente!");
        }

        const tag = tagRepositories.create({
            name,
        })
        await tagRepositories.save(tag);

        return tag;
    }
}

export { CreateTagService };