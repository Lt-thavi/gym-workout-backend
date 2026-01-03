const express = require('express');
const router = express.Router();
const controller = require('./user.controller');
const auth = require("../../middleware/auth");
const { adminOnly } = require("../../middleware/roles");

router.post('/register', controller.register);
router.post('/login', controller.login);
router.put("/:id/role", auth, adminOnly, controller.updateUserRole);


module.exports = router;
