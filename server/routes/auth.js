const express = require("express");
const router = express.Router();

const {
    loginUser
} = require('../controller/auth')


router.post('/login', loginUser)

module.exports = router;