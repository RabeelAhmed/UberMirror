const blackListtoken_model = require("../models/blackListtoken_model");
const captainModel = require("../models/captain_model");
const captainService = require("../services/captain_service");
const { validationResult } = require("express-validator");

module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;

  const isCaptainAlreadyExist = await captainModel.findOne({ email });
  if (isCaptainAlreadyExist) {
    return res.status(400).json({ message: "Captain already exists!" });
  }

  const hashedPassword = await captainModel.hashPassword(password);

  const captain = await captainService.createcaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = captain.generateAuthToken();

  res.status(201).json({ token, captain });
};

module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { email, password } = req.body;
    
    // Find captain and explicitly select the password
    const captain = await captainModel.findOne({ email }).select('+password');
    
    if (!captain) {
      return res.status(400).json({ message: "Captain not found!" });
    }
  
    // Compare the entered password with the hashed password
    const isValidPassword = await captain.comparePassword(password);
    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid password!" });
    }
  
    // Generate JWT token
    const token = captain.generateAuthToken();
    
    // Send token and captain data
    res.cookie('token', token);
    res.status(200).json({ token, captain });
  };
  

module.exports.getCaptainProfile = async (req, res, next) => {
  res.status(200).json({ captain: req.captain });
};

module.exports.logoutCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  await blackListtoken_model.create({ token });

  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully!" });
};
