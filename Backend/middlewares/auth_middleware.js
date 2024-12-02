const userModel = require("../models/user_model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require('dotenv').config()




module.exports.authuser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        const user = await userModel.findById(decoded._id);

        req.user = user;
        return next();
    } catch (err) {
        return res.status(500).json({ message: "Invalid token" });
    }
};
