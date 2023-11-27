"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _express = require("express");
const router = (0, _express.Router)();
router.get('/', (req, res)=>{
    res.json({
        message: "Hello World from typescript"
    });
});
const _default = router;
