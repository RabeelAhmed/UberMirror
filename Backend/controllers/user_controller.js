const userModel = require("../models/user_model")
const userService = require('../services/user_service ')
const {validationResult} = require('express-validator')
const BlackListTokenModel  = require('../models/blackListtoken_model')

module.exports.registerUser = async (req, res, next) => {

    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

    // Check if user already exists
    const isUserAlreadyExist = await userModel.findOne({ email });
    if (isUserAlreadyExist) {
        return res.status(400).json({ message: 'User already exists!' });
    }

    // Hash the password
    const hashedPassword = await userModel.hashPassword(password);

    // Create new user
    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword 
    });

    // Generate token (assuming the user object has this method)
    const token = user.generateAuthToken();

    // Return success response
    res.status(201).json({ token, user });
};

module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() })
    }

    const {email, password} = req.body;

    const user = await userModel.findOne({email}).select('password')

    if(!user){
        return res.status(401).json({error: 'Invalid email or password'})
    }

    const isMacth = await user.comparePassword(password)

    if(!isMacth){
        return res.status(401).json({error: 'Invalid email or password'})
    }

    const token = user.generateAuthToken()

    res.cookie('token', token)
    
    res.status(200).json({token, user})
}


module.exports.getUserProfile = async (req, res, next) => {

    if (!req.user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(req.user)
}

module.exports.logoutUser = async (req, res, next) => {
    // Clear the cookie
    res.clearCookie('token');

    // Access token from cookie or authorization header
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);

    // Ensure token exists before attempting to blacklist it
    if (!token) {
        return res.status(400).json({ message: "No token found to blacklist" });
    }

    // Blacklist the token
    await BlackListTokenModel.create({ token });

    res.status(200).json({ message: 'Logged out successfully' });
};


