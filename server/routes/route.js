const express = require('express');
const router = express.Router();
const userController = require('../userController/userController')

router.get("/getAllUser", userController.getUser)

module.exports = router;