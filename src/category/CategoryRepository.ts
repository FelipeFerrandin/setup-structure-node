import CategoryDTO from "./CategoryDTO";
import ICategoryRepository from "./ICategoryRepository";
import {DataSource, Repository} from "typeorm";
import CategoryEntity from "./Category.Entity";
import {AppDataSource} from "../database/data-source/DatasourceApplication";
import {YESNO} from "../framework/constants/ApplicationConstants";

export default class CategoryRepository implements ICategoryRepository {
    private static mInstance: CategoryRepository;
    private mCategoryRepository: Repository<CategoryEntity>;
    private mAppDataSource: DataSource;

    public static create() {
        return this.mInstance || (this.mInstance = new this());
    }

    constructor() {
        this.mAppDataSource = AppDataSource
        this.mCategoryRepository = this.mAppDataSource.getRepository(CategoryEntity)
    }

    async createCategory({name}: CategoryDTO) {
        const lCategoryEntity = this.mCategoryRepository.create({name, ativo: YESNO.SIM})
        await this.mCategoryRepository.save(lCategoryEntity)
    }


}
