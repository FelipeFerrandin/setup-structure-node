import CategoryDTO from "./CategoryDTO";

export default interface ICategoryRepository {
    createCategory(aCategoryDTO: CategoryDTO): Promise<void>
}
