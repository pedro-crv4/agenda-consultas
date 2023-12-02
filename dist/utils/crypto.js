"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hashValue", {
    enumerable: true,
    get: function() {
        return hashValue;
    }
});
const _bcrypt = require("bcrypt");
const hashValue = async (value, salts = 10)=>{
    const hashed = await (0, _bcrypt.hash)(value, salts);
    return hashed;
};
