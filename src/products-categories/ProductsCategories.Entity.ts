import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity("products_categories")
export default class ProductsCategoriesEntity {
    @PrimaryColumn()
    id_product_category: number = 0

    @Column()
    id_product: number = 0

    @Column()
    id_category: number = 0

}
