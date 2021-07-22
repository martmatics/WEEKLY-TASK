const jwt = require("jsonwebtoken");

verify = (req, res, next) => {
  const token = req.cookies.auth_token;
  if (!token) return res.status(403).send("You Need to Sign In!");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.User = verified;
    next();
  } catch (err) {
    return res.status(403).send("Invalid Token!");
  }
};

module.exports = verify;