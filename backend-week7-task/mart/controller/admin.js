const Users = require("../model/User");

//  Read all existing user records 
const getUsers = (req, res) => {
  res.status(200).json({ success: true, data: Users });
};

//  Read specific user record 
const getSpecificUser = (req, res) => {
  const { email } = req.body;
  specificUser = Users.find((user) => user.email === email);
  if (!specificUser) {
    return res
      .status(400)
      .json({ success: false, msg: `No user with email ${email}.` });
  }
  return res.status(200).json({
    success: true,
    data: specificUser,
  });
};

module.exports = { getUsers, getSpecificUser };