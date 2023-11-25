"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _datasource = require("./data-source");
const _User = require("./entity/User");
const _express = /*#__PURE__*/ _interop_require_wildcard(require("express"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
_datasource.AppDataSource.initialize().then(async ()=>{
    console.log("Inserting a new user into the database...");
    const user = new _User.User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await _datasource.AppDataSource.manager.save(user);
    console.log("Saved a new user with id: " + user.id);
    console.log("Loading users from the database...");
    const users = await _datasource.AppDataSource.manager.find(_User.User);
    console.log("Loaded users: ", users);
    console.log("Here you can setup and run express / fastify / any other framework.");
    const app = (0, _express.default)();
    const router = (0, _express.Router)();
    app.use(_express.default.json());
    router.get('/', (req, res)=>{
        res.json({
            message: "Hello World from typescript"
        });
    });
    app.use(router);
    app.listen(3000, ()=>"Server running on port 3000");
}).catch((error)=>console.log(error));
