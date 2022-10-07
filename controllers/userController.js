const { updateUser } = require("../services/userService");

exports.update_user = async (req, res, next) => {
  const { userid } = req.params;
  const { username, email, password, mobile, gender, profession, address } = req.body;

  updateUser({ userid, username, email, password, mobile, gender, profession, address })
    .then((result) => {
      const { statusCode = 200, message, data } = result;
      res.status(statusCode).send({ message, data });
    })
    .catch((err) => {
      const { statusCode = 400, message, data } = err;
      res.status(statusCode).send({ message, data }) && next(err);
    });
};
