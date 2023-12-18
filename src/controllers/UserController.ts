import { UserRepository } from './../repositories/UserRepository';
import { Request, Response } from 'express';
import { UpdateUserDTO } from '../dtos/UpdateUserDTO';
import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { compare } from 'bcrypt'
import { hashValue } from '../utils/crypto';

const userRepository = new UserRepository();

const findAll = async (_, res: Response) => {
    try {
        const users = await userRepository.findAll();

        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const createUser = async(req: Request, res: Response) => {
    try {
        const data = new CreateUserDTO(req.body);

        const user = await userRepository.create(data);

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const updateUser = async(req: Request, res: Response) => {
    try {
        await userRepository.update(+req.params.id, new UpdateUserDTO(req.body));

        res.status(200).json({message: "User updated"});
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

const deleteUser = async(req: Request, res: Response) => {
    try {
        await userRepository.delete(+req.params.id);

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

const login = async(req, res) => {
    const user = await userRepository.find(req.body.email, 'email');

    let password = '$2b$10$3hauAFuGH0rRgfqSSwsih.sPlPbKmxxLI9zcr8kI3VIEb54HdRnGC';

    if (user) {
        password = user.password;
    }

    const passwordMatch = await compare(req.body.password, password);

    if (user && passwordMatch) {
        res.status(200).send();
    } else {
        res.status(404).json({message: "Foo"});
    }
}

export { findAll, createUser, updateUser, deleteUser, login }