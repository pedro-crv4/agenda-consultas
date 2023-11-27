import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar")
    name: string

    @Column("varchar")
    email: string

    @Column("varchar")
    password: string

    @Column("varchar", { length: 10 })
    date_of_birth: string
}
