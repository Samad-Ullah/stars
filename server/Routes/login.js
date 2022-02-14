const express = require("express");
// const { requireLogin } = require("../auth/auth");
const router = express.Router();
const { login }  = require('../Controllers/login')

router.post('/login',login);

module.exports = router;