"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createUser: function() {
        return createUser;
    },
    findAll: function() {
        return findAll;
    }
});
const _datasource = require("../data-source");
const _User = require("../entities/User");
const userRepository = _datasource.AppDataSource.getRepository(_User.User);
const findAll = async (_, res)=>{
    try {
        const users = await userRepository.find();
        console.log(users);
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal server error"
        });
    }
};
const createUser = async (req, res)=>{
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
        res.status(500).json({
            error: "Internal server error"
        });
    }
};
