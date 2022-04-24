import CategoryAPI from "./CategoryAPI";
import {Request, Response} from "express";
import CategoryDTO from "./CategoryDTO";

export default class CategoryController {

    constructor(private mCategoryAPI: CategoryAPI) {
    }

    async createCategory(aRequest: Request, aResponse: Response): Promise<void> {
        try {
            const lCategoryDTO: CategoryDTO = aRequest.body
            await this.mCategoryAPI.createCategory(lCategoryDTO)
            aResponse.status(201).json({message: "Categoria criada com sucesso!"})
        } catch (e) {
            console.error(e)
            aResponse.status(400).json({message: "Erro ao criar categoria, tente novamnete mais tarde!"})
        }

    }

}
