import { AppDataSource } from '../data-source';
import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { UpdateUserDTO } from '../dtos/UpdateUserDTO';
import { Doctor } from '../entities/Doctor';
import { Pacient } from '../entities/Pacient';
import { User } from '../entities/User';
import { hashValue } from '../utils/crypto';

const db = AppDataSource.getRepository(User);
const doctorRepository = AppDataSource.getRepository(Doctor);
const pacientRepository = AppDataSource.getRepository(Pacient);
export class UserRepository {
    async findAll() {
        const results = await db.createQueryBuilder("user")
                                .select(['user.id', 'user.name', 'user.email', 'user.date_of_birth', 'user.type'])
                                .getMany();

        return results;
    }

    async create(userData: CreateUserDTO) {
        try {
            const { name, password, email, date_of_birth, type } = userData;

            const hashedPassword = await hashValue(password);

            const user = await db.save({
                name,
                email,
                password: hashedPassword,
                date_of_birth,
                type
            });

            if (type === 'doctor') {
                const doctor = await doctorRepository.save({
                    specialization: 'foo',
                    user: user
                });
            }

            if (type === 'pacient') {
                const pacient = await pacientRepository.save({
                    medical_history: '',
                    user: user
                });
            }

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
