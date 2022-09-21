import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name:"sample"})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    role: string
}