import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entities/User"
import { Doctor } from './entities/Doctor'
import { Pacient } from './entities/Pacient'
import { Appointment } from './entities/Appointment'

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'mysql-db',
    port: 3306,
    username: 'root',
    password: 'secret',
    database: 'appointments',
    entities: [User, Doctor, Pacient, Appointment],
    synchronize: true,
})
