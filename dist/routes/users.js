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
const _UserController = require("../controllers/UserController");
const router = (0, _express.Router)();
router.get('/users', _UserController.findAll);
router.post('/users', _UserController.createUser);
const _default = router;
