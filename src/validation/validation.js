const Joi = require("@hapi/joi");

// REGISTER VALIDATION
const signUpvalidation = (data) => {
  const scheme = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    repassword: Joi.string().min(6).required(),
  });
  return scheme.validate(data);
};

// LOGIN VALIDATION
const signInvalidation = (data) => {
  const scheme = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return scheme.validate(data);
};

export { signUpvalidation, signInvalidation };
