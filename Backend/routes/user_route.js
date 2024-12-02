const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const userController  = require('../controllers/user_controller')
const authmiddlware = require("../middlewares/auth_middleware")

router.post('/register', [body('email').isEmail().withMessage('invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({min: 6}).withMessage('password must be at least 6 characters long')
], 
userController.registerUser
)

router.post("/login", [
    body('email').isEmail().withMessage('invalid Email'),
    body('password').isLength({min: 6}).withMessage('password must be at least 6 characters long')
],

userController.loginUser
)


router.get('/profile',authmiddlware.authuser, userController.getUserProfile)

module.exports = router