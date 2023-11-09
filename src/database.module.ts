import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

export default TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'mysql-db',
    port: 3306,
    username: 'root',
    password: 'secret',
    database: 'appointments',
    entities: [User],
    synchronize: true,
});
