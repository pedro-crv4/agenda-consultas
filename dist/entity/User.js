"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "User", {
    enumerable: true,
    get: function() {
        return User;
    }
});
const _typeorm = require("typeorm");
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
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
class User {
    constructor(){
        _define_property(this, "id", void 0);
        _define_property(this, "firstName", void 0);
        _define_property(this, "lastName", void 0);
        _define_property(this, "age", void 0);
    }
}
_ts_decorate([
    (0, _typeorm.PrimaryGeneratedColumn)()
], User.prototype, "id", void 0);
_ts_decorate([
    (0, _typeorm.Column)("varchar")
], User.prototype, "firstName", void 0);
_ts_decorate([
    (0, _typeorm.Column)("varchar")
], User.prototype, "lastName", void 0);
_ts_decorate([
    (0, _typeorm.Column)("tinyint")
], User.prototype, "age", void 0);
User = _ts_decorate([
    (0, _typeorm.Entity)()
], User);
