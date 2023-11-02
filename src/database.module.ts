import { TypeOrmModule } from '@nestjs/typeorm';

export default TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'mysql-db',
    port: 3306,
    username: 'root',
    password: 'secret',
    database: 'appointments',
    entities: [],
    synchronize: true,
});