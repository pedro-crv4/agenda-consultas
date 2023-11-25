import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import express from "express";
import { Router, Request, Response } from "express";

AppDataSource.initialize().then(async () => {
    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

    const app = express();
    const router = Router();

    app.use(express.json());

    router.get('/', (req: Request, res: Response) => {
        res.json({ message: "Hello World from typescript" });
    });

    app.use(router);

    app.listen(3000, () => "Server running on port 3000");


}).catch(error => console.log(error))
