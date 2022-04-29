import {getCustomRepository} from "typeorm";
import {TagsRepositories} from "../repositories/tagsRepositories";
import { classToPlain } from "class-transformer";

class ListTagsService{
    async index(){
        const tag_repositorie = getCustomRepository(TagsRepositories);

        const tags = await tag_repositorie.find();

        return classToPlain(tags);

    }
}

export { ListTagsService };