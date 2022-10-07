const { updateAdmin, addProfessor, getTotalProfessors, getTotalUsers, getTotalCourses, getTotalWishlist, getTotalEnrollments, getTotalEnrollmentCount, getTotalChapters } = require("../services/adminService");

exports.update_admin = async (req, res, next) => {
  const { userid } = req.params;
  const { username, email, password, mobile, gender, profession, address } = req.body;

  updateAdmin({ userid, username, email, password, mobile, gender, profession, address })
    .then((result) => {
      const { statusCode = 200, message, data } = result;
      res.status(statusCode).send({ message, data });
    })
    .catch((err) => {
      const { statusCode = 400, message, data } = err;
      res.status(statusCode).send({ message, data }) && next(err);
    });
};


  exports.addProfessor = async (req, res, next) => {
    const {professorname, email, degreecompleted, institutionname, department, experience,  password, mobile, gender, status } = req.body;
  
    addProfessor({ professorname, email, degreecompleted, institutionname, department, experience,  password, mobile, gender, status })
      .then((result) => {
        const { statusCode = 200, message, data, token } = result;
        res.status(statusCode).send({ message, data, token });
      })
      .catch((err) => {
        const { statusCode = 400, message, data } = err;
        res.status(statusCode).send({ message, data }) && next(err);
      });
  };

  exports.gettotalprofessors = async (req, res, next) => {
    const { userId } = req.query;
    getTotalProfessors({ userId })
      .then((result) => {
        const { message, data } = result;
        res.status(200).send({ message, data });
      })
      .catch((err) => {
        const { statusCode = 400, message } = err;
        res.status(statusCode).send({ message }) && next(err);
      });
  };

  exports.gettotalusers = async (req, res, next) => {
    const { userId } = req.query;
    getTotalUsers({ userId })
      .then((result) => {
        const { message, data } = result;
        res.status(200).send({ message, data });
      })
      .catch((err) => {
        const { statusCode = 400, message } = err;
        res.status(statusCode).send({ message }) && next(err);
      });
  };

  exports.gettotalcourses = async (req, res, next) => {
    const { userId } = req.query;
    getTotalCourses({ userId })
      .then((result) => {
        const { message, data } = result;
        res.status(200).send({ message, data });
      })
      .catch((err) => {
        const { statusCode = 400, message } = err;
        res.status(statusCode).send({ message }) && next(err);
      });
  };

  exports.gettotalwishlist = async (req, res, next) => {
    const { userId } = req.query;
    getTotalWishlist({ userId })
      .then((result) => {
        const { message, data } = result;
        res.status(200).send({ message, data });
      })
      .catch((err) => {
        const { statusCode = 400, message } = err;
        res.status(statusCode).send({ message }) && next(err);
      });
  };

  exports.gettotalenrollments = async (req, res, next) => {
    const { userId } = req.query;
    getTotalEnrollments({ userId })
      .then((result) => {
        const { message, data } = result;
        res.status(200).send({ message, data });
      })
      .catch((err) => {
        const { statusCode = 400, message } = err;
        res.status(statusCode).send({ message }) && next(err);
      });
  };

  exports.gettotalenrollmentcount = async (req, res, next) => {
    const { userId } = req.query;
    getTotalEnrollmentCount({ userId })
      .then((result) => {
        const { message, data } = result;
        res.status(200).send({ message, data });
      })
      .catch((err) => {
        const { statusCode = 400, message } = err;
        res.status(statusCode).send({ message }) && next(err);
      });
  };

  exports.gettotalchapters = async (req, res, next) => {
    const { userId } = req.query;
    getTotalChapters({ userId })
      .then((result) => {
        const { message, data } = result;
        res.status(200).send({ message, data });
      })
      .catch((err) => {
        const { statusCode = 400, message } = err;
        res.status(statusCode).send({ message }) && next(err);
      });
  };

