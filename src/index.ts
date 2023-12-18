import { AppDataSource } from "./data-source"
import express from "express";
import routes from './routes/index';
import users from './routes/users';
import appointments from './routes/appointments';
import bodyParser from "body-parser";

AppDataSource.initialize().then(async () => {
    const app = express();

    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/', routes);
    app.use(users);
    app.use(appointments);

    app.listen(3000, () => "Server running on port 3000");
}).catch(error => console.log(error))
