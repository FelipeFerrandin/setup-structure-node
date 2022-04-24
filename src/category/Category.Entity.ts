import "reflect-metadata"
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("categories")
export default class CategoryEntity {
    @PrimaryGeneratedColumn("increment")
    id_category: number = 0

    @Column()
    name: string = ""

    @Column()
    ativo: string = ""
}
