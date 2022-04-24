import {ProductDTO, ProductWithCategoriesDTO} from "./ProductDTO";

export default interface IProductRepository {
    createProduct(aProductDTO: ProductDTO): Promise<void>

    getProductAndCategoriesById(aIdProduct: number): Promise<ProductWithCategoriesDTO>
}
