import { AppDataSource } from '../data-source';
import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { UpdateUserDTO } from '../dtos/UpdateUserDTO';
import { User } from '../entities/User';
import { hashValue } from '../utils/crypto';

const db = AppDataSource.getRepository(User);

export class UserRepository {
    async findAll() {
        const results = await db.find();
    
        return results;
    }

    async create(userData: CreateUserDTO) {
        try {
            const hashedPassword = await hashValue(userData.password);

            const user = await db.save({
                name: userData.name,
                email: userData.email,
                password: hashedPassword,
                date_of_birth: userData.date_of_birth
            });

            return user;
        } catch (error) {
            throw new Error("Internal error");
        }
    }

    async update(userId, userData: UpdateUserDTO) {
        const user = await db.findOneBy({ id: userId });

        if (!user) {
            throw new Error("User not found");
        }

        try {
            await db.update(userId, {
                name: userData.name || user.name,
                email: userData.email || user.email,
                password: userData.password || user.password,
                date_of_birth: userData.date_of_birth || user.date_of_birth
            });
        } catch (error) {
            throw new Error("Internal server error");
        }
    }

    async delete(userId) {
        const user = await db.findOneBy({ id: userId });

        if (!user) {
            throw new Error("User not found");
        }

        try {
            await db.delete(userId);
        } catch (error) {
            throw new Error("Internal server error");
        }
    }
}
