const { registerUser, loginUser, loginProfessor, loginAdmin, registerProfessor, registerAdmin } = require("../services/authService");

exports.login_user = async (req, res, next) => {
  const { email, password } = req.body;

  loginUser({ email, password })
    .then((result) => {
      console.log(result);
      const { statusCode = 200, message, data, token } = result;
      res.status(statusCode).send({ message, data, token });
    })
    .catch((err) => {
      const { statusCode = 400, message, data } = err;
      res.status(statusCode).send({ message, data }) && next(err);
    });
};

exports.login_professor = async (req, res, next) => {
  const { email, password } = req.body;

  loginProfessor({ email, password })
    .then((result) => {
      console.log(result);
      const { statusCode = 200, message, data, token } = result;
      res.status(statusCode).send({ message, data, token });
    })
    .catch((err) => {
      const { statusCode = 400, message, data } = err;
      res.status(statusCode).send({ message, data }) && next(err);
    });
};

exports.login_admin = async (req, res, next) => {
  const { email, password } = req.body;

  loginAdmin({ email, password })
    .then((result) => {
      console.log(result);
      const { statusCode = 200, message, data, token } = result;
      res.status(statusCode).send({ message, data, token });
    })
    .catch((err) => {
      const { statusCode = 400, message, data } = err;
      res.status(statusCode).send({ message, data }) && next(err);
    });
};

exports.register_user = async (req, res, next) => {
  const {username, email, password, mobile, gender, profession, address } = req.body;

  registerUser({ username, email, password, mobile, gender, profession, address })
    .then((result) => {
      const { statusCode = 200, message, data, token } = result;
      res.status(statusCode).send({ message, data, token });
    })
    .catch((err) => {
      const { statusCode = 400, message, data } = err;
      res.status(statusCode).send({ message, data }) && next(err);
    });
};

exports.register_professor = async (req, res, next) => {
  const {professorname, email, degreecompleted, institutionname, department, experience,  password, mobile, gender, status } = req.body;

  registerProfessor({ professorname, email, degreecompleted, institutionname, department, experience,  password, mobile, gender, status })
    .then((result) => {
      const { statusCode = 200, message, data, token } = result;
      res.status(statusCode).send({ message, data, token });
    })
    .catch((err) => {
      const { statusCode = 400, message, data } = err;
      res.status(statusCode).send({ message, data }) && next(err);
    });
};

exports.register_admin = async (req, res, next) => {
  const {username, email, password } = req.body;

  registerAdmin({ username, email, password })
    .then((result) => {
      const { statusCode = 200, message, data, token } = result;
      res.status(statusCode).send({ message, data, token });
    })
    .catch((err) => {
      const { statusCode = 400, message, data } = err;
      res.status(statusCode).send({ message, data }) && next(err);
    });
};
