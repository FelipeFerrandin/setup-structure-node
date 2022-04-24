import {Router} from "express";
import {categoryController} from "./CategoryModule";

const CategoryRouter = Router()

CategoryRouter.post("/adicionar-categoria", (request, response) => {
    return categoryController.createCategory(request, response)
})

export default CategoryRouter
