import {Router} from "express";
import {productController} from "./ProductModule";

const ProductRouter = Router()

ProductRouter.post("/adicionar-produto", (request, response) => {
    return productController.createProduct(request, response)
})

ProductRouter.get("/consultar-produto-categorias/:idProduto", (request, response) => {
    return productController.getProductAndCategoriesById(request, response)
})

export default ProductRouter
