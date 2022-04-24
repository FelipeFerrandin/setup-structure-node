import {ProductDTO} from "./ProductDTO";
import ProductAPI from "./ProductAPI";
import {Request, Response} from "express";

export default class ProductController {

    constructor(private mProductAPI: ProductAPI) {
    }

    async createProduct(aRequest: Request, aResponse: Response): Promise<void> {
        try {
            const lProductDTO: ProductDTO = aRequest.body
            await this.mProductAPI.createProduct(lProductDTO)
            aResponse.status(201).json({message: "Produto criado com sucesso!"})
        } catch (e) {
            console.error(e)
            aResponse.status(400).json({message: "Erro ao criar produto, tente novamente mais tarde!"})
        }
    }

    async getProductAndCategoriesById(aRequest: Request, aResponse: Response): Promise<Response> {
        try {
            const lIdProduct = Number(aRequest.params.idProduto)
            return aResponse.status(200).json(await this.mProductAPI.getProductAndCategoriesById(lIdProduct))
        } catch (e) {
            console.error(e)
            return aResponse.status(400).json({message: "Erro ao buscar produto, tente novamente mais tarde!"})
        }

    }

}
