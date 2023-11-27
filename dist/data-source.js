"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppDataSource", {
    enumerable: true,
    get: function() {
        return AppDataSource;
    }
});
require("reflect-metadata");
const _typeorm = require("typeorm");
const _User = require("./entities/User");
const AppDataSource = new _typeorm.DataSource({
    type: 'mysql',
    host: 'mysql-db',
    port: 3306,
    username: 'root',
    password: 'secret',
    database: 'appointments',
    entities: [
        _User.User
    ],
    synchronize: true
});
