import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

export enum UserType {
    NORMAL = "normal",
    DOCTOR = "doctor",
    PACIENT = "pacient"
}

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

    @Column({
        type: "enum",
        enum: UserType,
        default: UserType.NORMAL
    })
    type: UserType;
}
