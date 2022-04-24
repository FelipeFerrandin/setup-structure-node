import CategoryDTO from "./CategoryDTO";
import ICategoryRepository from "./ICategoryRepository";

export default class CategoryAPI {
    private static mInstance: CategoryAPI;

    public static create(aICategoryRepository: ICategoryRepository) {
        return this.mInstance || (this.mInstance = new this(aICategoryRepository));
    }

    constructor(private mICategoryRepository: ICategoryRepository) {
    }

    async createCategory(aCategoryDTO: CategoryDTO) {
        await this.mICategoryRepository.createCategory(aCategoryDTO)
    }


}
