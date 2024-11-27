const userModel = require("../models/user_model")
const userService = require('../services/user_service ')
const {validationResult} = require('express-validator')

module.exports.registerUser = async (req, res, next) => {

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() })
    }

    const {firstname, lastname,  email, password} = req.body;

    const hashedPassword = await userModel.hashPassword(password)

    const user = await userService.createUser({
        firstname,
        lastname,
        email,
        password: hashedPassword 
    })
}