import CategoryDTO from "../category/CategoryDTO";

export interface ProductWithCategoriesDTO {
    id_product: number
    name: string
    bar_code: string
    price: number
    categories: CategoryDTO[]
}

export interface ProductDTO {
    name: string
    bar_code: string
    price: number
    id_category: number
}

