import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../entities/User';

const userRepository = AppDataSource.getRepository(User);

const findAll = async (_, res: Response) => {
    try {
        const users = await userRepository.find();
        console.log(users);

        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const createUser = async(req: Request, res: Response) => {
    try {
        const user = await userRepository.save({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            date_of_birth: req.body.date_of_birth
        });

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export { findAll, createUser }