import ProductRepository from "./ProductRepository";
import ProductAPI from "./ProductAPI";
import ProductController from "./ProductController";

const productRepository = ProductRepository.create()
const productAPI = ProductAPI.create(productRepository)
const productController = new ProductController(productAPI)

export {productController}
