const Joi = require("joi");

//  Sign-Up Validation
const signUpValidation = (user) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    fullName: Joi.string().min(2).max(40).required(),
    password: Joi.string().min(6).max(40).required(),
    confirmPassword: Joi.string().required().valid(Joi.ref("password")),
  }).unknown();

  return schema.validate(user);
};

//  Sign-In Validation 
const signInValidation = (user) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  }).unknown();

  return schema.validate(user);
};

module.exports = { signUpValidation, signInValidation };