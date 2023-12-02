"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateUserDTO", {
    enumerable: true,
    get: function() {
        return CreateUserDTO;
    }
});
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
class CreateUserDTO {
    constructor({ name, email, password, date_of_birth }){
        _define_property(this, "name", void 0);
        _define_property(this, "email", void 0);
        _define_property(this, "password", void 0);
        _define_property(this, "date_of_birth", void 0);
        this.name = name;
        this.email = email;
        this.password = password;
        this.date_of_birth = date_of_birth;
    }
}
