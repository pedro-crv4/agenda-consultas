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
    deleteUser: function() {
        return deleteUser;
    },
    findAll: function() {
        return findAll;
    },
    updateUser: function() {
        return updateUser;
    }
});
const _UserRepository = require("../repositories/UserRepository");
const _UpdateUserDTO = require("../dtos/UpdateUserDTO");
const _CreateUserDTO = require("../dtos/CreateUserDTO");
const userRepository = new _UserRepository.UserRepository();
const findAll = async (_, res)=>{
    try {
        const users = await userRepository.findAll();
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
        const data = new _CreateUserDTO.CreateUserDTO(req.body);
        const user = await userRepository.create(data);
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal server error"
        });
    }
};
const updateUser = async (req, res)=>{
    try {
        await userRepository.update(+req.params.id, new _UpdateUserDTO.UpdateUserDTO(req.body));
        res.status(200).json({
            message: "User updated"
        });
    } catch (error) {
        res.status(500).json({
            error: "Internal server error"
        });
    }
};
const deleteUser = async (req, res)=>{
    try {
        await userRepository.delete(+req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({
            error: "Internal server error"
        });
    }
};
