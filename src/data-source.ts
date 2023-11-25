import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'mysql-db',
    port: 3306,
    username: 'root',
    password: 'secret',
    database: 'appointments',
    entities: [User],
    synchronize: true,
})
