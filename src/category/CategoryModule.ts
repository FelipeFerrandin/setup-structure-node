import CategoryRepository from "./CategoryRepository";
import CategoryAPI from "./CategoryAPI";
import CategoryController from "./CategoryController";

const categoryRepository = CategoryRepository.create()
const categoryAPI = CategoryAPI.create(categoryRepository)
const categoryController = new CategoryController(categoryAPI)

export {categoryController}
