const Users = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { signUpValidation, signInValidation,} = require("../validate/Input");

// SIGN-UP
const signUp = async (req, res) => {
  // validate before creating new user
  const { error } = signUpValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if user already exist
  const checkEmail = req.body.email;
  const emailExist = await Users.find((user) => user.email === checkEmail);
  if (emailExist) return res.status(400).send("Email already exists.");

  // Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create a new user
  const fullName = req.body.fullName;
  const email = req.body.email;
  const password = hashedPassword;

  // Generate unique ID and add new user to end of User array
  const id = Users.length + 1;
  const newUser = { id, fullName, email, password };
  Users.push(newUser);

  // Return new user details
  res.status(200).json({
    success: true,
    msg: `User ${id} has been created.`,
    data: newUser,
  });
};

//  SIGN-IN 
const signIn = async (req, res) => {
  // validate the entered user data
  const { error } = signInValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if user exist
  const checkEmail = req.body.email;
  const User = await Users.find((user) => user.email === checkEmail);
  if (!User) return res.status(400).send("Invalid Email or Password.");

  // Check if password is correct
  const validPassword = await bcrypt.compare(req.body.password, User.password);
  if (!validPassword) return res.status(400).send("Invalid Email or Password.");

  // Create a token
  const token = jwt.sign({ id: User.id }, process.env.TOKEN_SECRET);

  // Assign token and send user details
  res.cookie("auth_token", token).status(200).json({
    success: true,
    msg: "Logged in successfully!",
    userDetails: User,
  });

  console.log(token);
};

//  LOG OUT 
const logOut = (req, res) => {
  return res
    .clearCookie("auth_token")
    .status(200)
    .json({ msg: "Successfully logged out!" });
};

module.exports = { signUp, signIn, logOut };