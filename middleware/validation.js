const Joi = require("joi");

var options = {
  errors: {
    wrap: {
      label: "",
    },
  },
};

const registerUserValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().required().strict(),
    email: Joi.string().email().required().strict(),
    password: Joi.string().min(6).required().strict(),
    mobile: Joi.string().required().strict(),
    gender: Joi.string().required().strict(),
    profession: Joi.string().required().strict(),
    address: Joi.string().required().strict(),
  });

  return schema.validate(data, options);
};
const registerProfessorValidation = (data) => {
  const schema = Joi.object({
    professorname: Joi.string().required().strict(),
    email: Joi.string().email().required().strict(),
    degreecompleted: Joi.string().required().strict(),
    institutionname: Joi.string().required().strict(),
    department: Joi.string().required().strict(),
    experience: Joi.string().required().strict(),
    password: Joi.string().min(6).required().strict(),
    mobile: Joi.string().required().strict(),
    gender: Joi.string().required().strict(),
    status: Joi.string().required().strict(),
  });

  return schema.validate(data, options);
};
const registerAdminValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().required().strict(),
    email: Joi.string().email().required().strict(),
    password: Joi.string().min(6).required().strict(),
  });

  return schema.validate(data, options);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().strict(),
    password: Joi.string().min(6).required().strict(),
  });

  return schema.validate(data, options);
};

const updateUserValidation = (data) => {
  const schema = Joi.object({
    userid: Joi.string().required().strict(),
    username: Joi.string().required().strict(),
    email: Joi.string().email().required().strict(),
    password: Joi.string().min(6).required().strict(),
    mobile: Joi.string().required().strict(),
    gender: Joi.string().required().strict(),
    profession: Joi.string().required().strict(),
    address: Joi.string().required().strict(),
  });

  return schema.validate(data, options);
};

const updateProfessorValidation = (data) => {
  const schema = Joi.object({
    professorid: Joi.string().required().strict(),
    professorname: Joi.string().required().strict(),
    email: Joi.string().email().required().strict(),
    degreecompleted: Joi.string().required().strict(),
    institutionname: Joi.string().required().strict(),
    department: Joi.string().required().strict(),
    experience: Joi.string().required().strict(),
    password: Joi.string().min(6).required().strict(),
    mobile: Joi.string().required().strict(),
    gender: Joi.string().required().strict(),
    status: Joi.string().required().strict(),
  });

  return schema.validate(data, options);
};

const updateAdminValidation = (data) => {
  const schema = Joi.object({
    adminid: Joi.string().required().strict(),
    email: Joi.string().email().required().strict(),
    password: Joi.string().min(6).required().strict(),
    username: Joi.string().required().strict(),
  });

  return schema.validate(data, options);
};

module.exports = {
  registerUserValidation,
  registerProfessorValidation,
  registerAdminValidation,
  loginValidation,
  updateUserValidation,
  updateProfessorValidation,
  updateAdminValidation,
};
