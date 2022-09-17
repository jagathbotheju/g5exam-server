const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken.js");
const User = require("../models/user.model");

module.exports.getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

module.exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const loginUser = await User.findOne({ email });
  if (loginUser && (await loginUser.matchPassword(password))) {
    res.status(200).json({
      user: {
        _id: loginUser._id,
        name: loginUser.name,
        email: loginUser.email,
        school: loginUser.school,
        grade: loginUser.grade,
        profileImage: loginUser.profileImage,
        isAdmin: loginUser.isAdmin,
        token: generateToken(loginUser._id),
      },
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

module.exports.register = asyncHandler(async (req, res) => {
  const { name, email, password, school, grade, profileImage } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User Already Exist");
  }

  const user = await User.create({
    name,
    email,
    password,
    school,
    grade,
    profileImage,
  });
  if (user) {
    res.status(200).json({
      message: `User ${user.name} Registered successfully, please Login`,
      success: true,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});
