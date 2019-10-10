const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});
// Controllers
const ctrlAuth = require('../controllers/authentication');
// Login, Registration routes
router.post('/register',ctrlAuth.register);
router.post('/login',ctrlAuth.login);
// Exporting
module.exports = router;