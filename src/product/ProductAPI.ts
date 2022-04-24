import IProductRepository from "./IProductRepository";
import {ProductDTO} from "./ProductDTO";

export default class ProductAPI {
    private static mInstance: ProductAPI;

    public static create(aIProductRepository: IProductRepository) {
        return this.mInstance || (this.mInstance = new this(aIProductRepository));
    }

    constructor(private mIProductRepository: IProductRepository) {
    }

    async createProduct(aProductDTO: ProductDTO) {
        await this.mIProductRepository.createProduct(aProductDTO)
    }

    async getProductAndCategoriesById(aIdProduct: number) {
        return await this.mIProductRepository.getProductAndCategoriesById(aIdProduct)
    }


}
