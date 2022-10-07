const {
  loginValidation,
  registerUserValidation,
  registerProfessorValidation,
  registerAdminValidation,
} = require("../middleware/validation");
const db = require("../database/db");
const jwt = require("jsonwebtoken");
const md5 = require("md5");

exports.loginUser = async (params) => {
  const { error } = loginValidation(params);
  if (error) throw { message: error.details[0].message, statusCode: 400 };

  const { email, password } = params;
  const hashedPassword = md5(password.toString());

  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, hashedPassword],
      (err, result) => {
        if (err) {
          reject({
            data: err,
            message: "Something went wrong, please try again",
            statusCode: 400,
          });
        }

        if (result.length === 0) {
          reject({
            message: "Wrong credentials, please try again",
            statusCode: 400,
          });
        }

        if (result.length > 0) {
          const token = jwt.sign({ data: result }, "secret");
          resolve({
            message: "User Logged in successfully",
            data: result,
            token,
          });
        }
      }
    );
  });
};

exports.registerUser = async (params) => {
  const { error } =  registerUserValidation(params);
  if (error) throw { message: error.details[0].message, statusCode: 400 };

  const {  username, email, password, mobile, gender, profession, address } = params;
  const hashedPassword = md5(password.toString());

  return new Promise((resolve, reject) => {
    db.query(
      `SELECT email FROM users WHERE email = ?`,
      [email],
      (err, result) => {
        if (result.length > 0) {
          reject({
            message: "Email address is in use, please try a different one",
            statusCode: 400,
          });
        } else if (result.length === 0) {
          db.query(
            `INSERT INTO users (username, email, password, mobile, gender, profession, address) VALUES (?,?,?,?,?,?,?)`,
            [username, email, hashedPassword ,mobile, gender, profession, address],
            (err, result) => {
              if (err) {
                reject({
                  message: "Something went wrong, please try again",
                  statusCode: 400,
                  data: err,
                });
              } else {
                const token = jwt.sign({ data: result }, "secret");
                resolve({
                  data: result,
                  message: "You have successfully registered a new user.",
                  token: token,
                  statusCode: 200,
                });
              }
            }
          );
        }
      }
    );
  });
};



exports.loginProfessor = async (params) => {
  const { error } = loginValidation(params);
  if (error) throw { message: error.details[0].message, statusCode: 400 };

  const { email, password } = params;
  const hashedPassword = md5(password.toString());

  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM professors WHERE email = ? AND password = ?",
      [email, hashedPassword],
      (err, result) => {
        if (err) {
          reject({
            data: err,
            message: "Something went wrong, please try again",
            statusCode: 400,
          });
        }

        if (result.length === 0) {
          reject({
            message: "Wrong credentials, please try again",
            statusCode: 400,
          });
        }

        if (result.length > 0) {
          const token = jwt.sign({ data: result }, "secret");
          resolve({
            message: "Professor Logged in successfully",
            data: result,
            token,
          });
        }
      }
    );
  });
};


exports.registerProfessor = async (params) => {
  const { error } =  registerProfessorValidation(params);
  if (error) throw { message: error.details[0].message, statusCode: 400 };

  const {  professorname, email, degreecompleted, institutionname, department, experience,  password, mobile, gender, status } = params;
  const hashedPassword = md5(password.toString());

  return new Promise((resolve, reject) => {
    db.query(
      `SELECT email FROM professors WHERE email = ?`,
      [email],
      (err, result) => {
        if (result.length > 0) {
          reject({
            message: "Email address is in use, please try a different one",
            statusCode: 400,
          });
        } else if (result.length === 0) {
          db.query(
            `INSERT INTO professors ( professorname, email, degreecompleted, institutionname, department, experience,  password, mobile, gender, status) VALUES (?,?,?,?,?,?,?,?,?,?)`,
            [ professorname, email, degreecompleted, institutionname, department, experience,  hashedPassword, mobile, gender, status],
            (err, result) => {
              if (err) {
                reject({
                  message: "Something went wrong, please try again",
                  statusCode: 400,
                  data: err,
                });
              } else {
                const token = jwt.sign({ data: result }, "secret");
                resolve({
                  data: result,
                  message: "You have successfully registered a new professor.",
                  token: token,
                  statusCode: 200,
                });
              }
            }
          );
        }
      }
    );
  });
};


exports.loginAdmin = async (params) => {
  const { error } = loginValidation(params);
  if (error) throw { message: error.details[0].message, statusCode: 400 };

  const { email, password } = params;
  const hashedPassword = md5(password.toString());

  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM admins WHERE email = ? AND password = ?",
      [email, hashedPassword],
      (err, result) => {
        if (err) {
          reject({
            data: err,
            message: "Something went wrong, please try again",
            statusCode: 400,
          });
        }

        if (result.length === 0) {
          reject({
            message: "Wrong credentials, please try again",
            statusCode: 400,
          });
        }

        if (result.length > 0) {
          const token = jwt.sign({ data: result }, "secret");
          resolve({
            message: "Admin Logged in successfully",
            data: result,
            token,
          });
        }
      }
    );
  });
};

exports.registerAdmin = async (params) => {
  const { error } = registerAdminValidation(params);
  if (error) throw { message: error.details[0].message, statusCode: 400 };

  const {  username, email, password } = params;
  const hashedPassword = md5(password.toString());

  return new Promise((resolve, reject) => {
    db.query(
      `SELECT email FROM admins WHERE email = ?`,
      [email],
      (err, result) => {
        if (result.length > 0) {
          reject({
            message: "Email address is in use, please try a different one",
            statusCode: 400,
          });
        } else if (result.length === 0) {
          db.query(
            `INSERT INTO admins (username, email, password) VALUES (?,?,?)`,
            [username, email, hashedPassword ],
            (err, result) => {
              if (err) {
                reject({
                  message: "Something went wrong, please try again",
                  statusCode: 400,
                  data: err,
                });
              } else {
                const token = jwt.sign({ data: result }, "secret");
                resolve({
                  data: result,
                  message: "You have successfully registered a new admin.",
                  token: token,
                  statusCode: 200,
                });
              }
            }
          );
        }
      }
    );
  });
};