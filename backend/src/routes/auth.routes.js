const express = require('express');
const authcontroller = require('../controllers/auth.controller');

const router = express.Router();


router.post('/register', authcontroller.registerUser )
router.post('/login', authcontroller.loginUser);








module.exports = router