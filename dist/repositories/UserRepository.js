"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserRepository", {
    enumerable: true,
    get: function() {
        return UserRepository;
    }
});
const _datasource = require("../data-source");
const _User = require("../entities/User");
const _crypto = require("../utils/crypto");
const db = _datasource.AppDataSource.getRepository(_User.User);
class UserRepository {
    async findAll() {
        const results = await db.find();
        return results;
    }
    async create(userData) {
        try {
            const hashedPassword = await (0, _crypto.hashValue)(userData.password);
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
    async update(userId, userData) {
        const user = await db.findOneBy({
            id: userId
        });
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
        const user = await db.findOneBy({
            id: userId
        });
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
