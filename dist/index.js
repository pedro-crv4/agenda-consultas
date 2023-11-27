"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _datasource = require("./data-source");
const _express = /*#__PURE__*/ _interop_require_default(require("express"));
const _index = /*#__PURE__*/ _interop_require_default(require("./routes/index"));
const _users = /*#__PURE__*/ _interop_require_default(require("./routes/users"));
const _bodyparser = /*#__PURE__*/ _interop_require_default(require("body-parser"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
_datasource.AppDataSource.initialize().then(async ()=>{
    const app = (0, _express.default)();
    app.use(_express.default.json());
    app.use(_bodyparser.default.urlencoded({
        extended: true
    }));
    app.use('/', _index.default);
    app.use(_users.default);
    app.listen(3000, ()=>"Server running on port 3000");
}).catch((error)=>console.log(error));
