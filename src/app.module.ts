import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsModule } from './doctors/doctors.module';
import { UsersModule } from './users/users.module';
import TypeOrmModule from './database.module';
@Module({
    imports: [DoctorsModule, TypeOrmModule, UsersModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(private dataSource: DataSource) {}
}
