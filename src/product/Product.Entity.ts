import {Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import CategoryEntity from "../category/Category.Entity";

@Entity("products")
export default class ProductEntity {
    @PrimaryGeneratedColumn("increment")
    id_product: number = 0

    @Column()
    name: string = ""

    @Column()
    bar_code: string = ""

    @Column()
    price: number = 0

    @CreateDateColumn()
    created_at: Date = new Date();

    @Column()
    ativo: string = ""

    // @OneToMany(() => ProductsCategoriesEntity, productCategory => productCategory.categories)
    // categories?: Promise<ProductsCategoriesEntity[]>

    @ManyToMany(type => CategoryEntity)
    @JoinTable({
        name: "products_categories", // table name for the junction table of this relation
        joinColumn: {
            name: "id_product",
            referencedColumnName: "id_product"
        },
        inverseJoinColumn: {
            name: "id_category",
            referencedColumnName: "id_category"
        }
    })
    categories?: CategoryEntity[];

}
