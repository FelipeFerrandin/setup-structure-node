import IProductRepository from "./IProductRepository";
import {DataSource, Repository} from "typeorm";
import ProductEntity from "./Product.Entity";
import {AppDataSource} from "../database/data-source/DatasourceApplication";
import ProductsCategoriesEntity from "../products-categories/ProductsCategories.Entity";
import {YESNO} from "../framework/constants/ApplicationConstants";
import CategoryDTO from "../category/CategoryDTO";
import {ProductDTO, ProductWithCategoriesDTO} from "./ProductDTO";

export default class ProductRepository implements IProductRepository {
    private static mInstance: ProductRepository;
    private mProductRepository: Repository<ProductEntity>;
    private mProductsCategoriesRepository: Repository<ProductsCategoriesEntity>;
    private mAppDataSource: DataSource;

    public static create() {
        return this.mInstance || (this.mInstance = new this());
    }

    constructor() {
        this.mAppDataSource = AppDataSource
        this.mProductRepository = this.mAppDataSource.getRepository(ProductEntity)
        this.mProductsCategoriesRepository = this.mAppDataSource.getRepository(ProductsCategoriesEntity)
    }

    async createProduct({name, bar_code, price, id_category}: ProductDTO) {
        await this.mAppDataSource.manager.transaction(async (transactionalEntityManager) => {
            const lProductEntity = this.mProductRepository.create({name, bar_code, price, ativo: YESNO.SIM})

            const {id_product} = await transactionalEntityManager.save(lProductEntity)

            const lProductsCategoriesEntity = this.mProductsCategoriesRepository.create({id_product, id_category})

            await transactionalEntityManager.save(lProductsCategoriesEntity)
        })
    }

    async getProductAndCategoriesById(aIdProduct: number): Promise<ProductWithCategoriesDTO> {
        const lProductEntity = await this.mProductRepository.findOne({
            relations: ["categories"],
            where: {
                id_product: aIdProduct,
                ativo: YESNO.SIM
            },

        })
        return {
            id_product: lProductEntity?.id_product || 0,
            name: lProductEntity?.name || "",
            bar_code: lProductEntity?.bar_code || "",
            price: Number(lProductEntity?.price) || 0,
            categories: lProductEntity?.categories?.map(iCategoryDTO => <CategoryDTO><unknown>{
                name: iCategoryDTO.name,
                id_category: iCategoryDTO.id_category
            }) || [],
        }
    }


}
