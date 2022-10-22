const { getMadrasaCount,  getPrincipalCount, getTeacherCount, getStudentCount, getCourseCount, getSubjectCount, getMadrasas, updateAdmin, addProfessor, getTotalProfessors, getTotalUsers, getTotalUsersCount,  getTotalCourses, getTotalWishlist, getTotalEnrollments, getTotalEnrollmentCount, getTotalChapters } = require("../services/adminService");

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

  exports.gettotaluserscount = async (req, res, next) => {
    getTotalUsersCount()
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

//count of stuff functions starts here

exports.getMadrasaCount = async (req, res, next) => {
  getMadrasaCount()
    .then((result) => {
      const { message, data } = result;
      res.status(200).send({ message, data });
    })
    .catch((err) => {
      const { statusCode = 400, message } = err;
      res.status(statusCode).send({ message }) && next(err);
    });
};

exports.getPrincipalCount = async (req, res, next) => {
  getPrincipalCount()
    .then((result) => {
      const { message, data } = result;
      res.status(200).send({ message, data });
    })
    .catch((err) => {
      const { statusCode = 400, message } = err;
      res.status(statusCode).send({ message }) && next(err);
    });
};


exports.getTeacherCount = async (req, res, next) => {
  getTeacherCount()
    .then((result) => {
      const { message, data } = result;
      res.status(200).send({ message, data });
    })
    .catch((err) => {
      const { statusCode = 400, message } = err;
      res.status(statusCode).send({ message }) && next(err);
    });
};


exports.getStudentCount = async (req, res, next) => {
  getStudentCount()
    .then((result) => {
      const { message, data } = result;
      res.status(200).send({ message, data });
    })
    .catch((err) => {
      const { statusCode = 400, message } = err;
      res.status(statusCode).send({ message }) && next(err);
    });
};


exports.getCourseCount = async (req, res, next) => {
  getCourseCount()
    .then((result) => {
      const { message, data } = result;
      res.status(200).send({ message, data });
    })
    .catch((err) => {
      const { statusCode = 400, message } = err;
      res.status(statusCode).send({ message }) && next(err);
    });
};

exports.getSubjectCount = async (req, res, next) => {
  getSubjectCount()
    .then((result) => {
      const { message, data } = result;
      res.status(200).send({ message, data });
    })
    .catch((err) => {
      const { statusCode = 400, message } = err;
      res.status(statusCode).send({ message }) && next(err);
    });
};
//count of stuff functions ends here


//all get stuff starts here
exports.getMadrasas = async (req, res, next) => {
  getMadrasas()
    .then((result) => {
      const { message, data } = result;
      res.status(200).send({ message, data });
    })
    .catch((err) => {
      const { statusCode = 400, message } = err;
      res.status(statusCode).send({ message }) && next(err);
    });
};

//all get stuff ends here