const { updateAdminValidation } = require("../middleware/validation");
const db = require("../database/db");
const md5 = require("md5");



exports.updateAdmin = async (params) => {
  const { error } = updateAdminValidation(params);
  if (error) throw { message: error.details[0].message, statusCode: 400 };

  const { userId, fullName, email, password } = params;
  const hashedPassword = md5(password.toString());

  return new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM admins WHERE user_id = ? AND password = ?`,
      [userId, hashedPassword],
      (err, result) => {
        if (err) reject({ message: err, statusCode: 500 });

        if (result.length === 0) {
          reject({
            message: "Wrong credentials, please try again",
            statusCode: 400,
          });
        } else {
          if (email === result[0].email && fullName === result[0].fname) {
            reject({
              message: "No new data has been provided",
              statusCode: 400,
            });
          }

          let query = "";

          if (email !== result[0].email && fullName !== result[0].fname) {
            query = `fname = '${fullName}', email = '${email}'`;
          } else if (email !== result[0].email) {
            query = `email = '${email}'`;
          } else {
            query = `fname = '${fullName}'`;
          }

          db.query(
            `UPDATE users SET ${query} WHERE user_id = ?`,
            [userId],
            (err, result) => {
              if (err) throw { message: err, statusCode: 500 };
              resolve({
                message: "User details have been successfully updated",
                data: result,
              });
            }
          );
        }
      }
    );
  });
};


exports.getTotalProfessors = async (params) => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT COUNT(*) FROM professors `,
      (err, result) => {
        if (err) reject({ message: err, statusCode: 500 });

        if (result.length === 0)
          reject({ message: "No professors were found", statusCode: 400 });

        resolve({
          statusCode: 200,
          message: `${result.length} professors were found`,
          data: result,
        });
      }
    );
  });
};

exports.getTotalUsers = async (params) => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT COUNT(*) FROM users `,
      (err, result) => {
        if (err) reject({ message: err, statusCode: 500 });

        if (result.length === 0)
          reject({ message: "No users were found", statusCode: 400 });

        resolve({
          statusCode: 200,
          message: `${result.length} users were found`,
          data: result,
        });
      }
    );
  });
};

exports.getTotalCourses= async (params) => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT COUNT(*) FROM courses `,
      (err, result) => {
        if (err) reject({ message: err, statusCode: 500 });

        if (result.length === 0)
          reject({ message: "No courses were found", statusCode: 400 });

        resolve({
          statusCode: 200,
          message: `${result.length} courses were found`,
          data: result,
        });
      }
    );
  });
};


exports.getTotalWishlist= async (params) => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT COUNT(*) FROM wishlists `,
      (err, result) => {
        if (err) reject({ message: err, statusCode: 500 });

        if (result.length === 0)
          reject({ message: "No wishlists were found", statusCode: 400 });

        resolve({
          statusCode: 200,
          message: `${result.length} wishlists were found`,
          data: result,
        });
      }
    );
  });
};


exports.getTotalEnrollments= async (params) => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT COUNT(*) FROM enrollments `,
      (err, result) => {
        if (err) reject({ message: err, statusCode: 500 });

        if (result.length === 0)
          reject({ message: "No enrollments were found", statusCode: 400 });

        resolve({
          statusCode: 200,
          message: `${result.length} enrollments were found`,
          data: result,
        });
      }
    );
  });
};


exports.getTotalEnrollments= async (params) => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT COUNT(*) FROM enrollments `,
      (err, result) => {
        if (err) reject({ message: err, statusCode: 500 });

        if (result.length === 0)
          reject({ message: "No enrollments were found", statusCode: 400 });

        resolve({
          statusCode: 200,
          message: `${result.length} enrollments were found`,
          data: result,
        });
      }
    );
  });
};


exports.getTotalEnrollmentCount= async (params) => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT COUNT(*) FROM enrollments `,
      (err, result) => {
        if (err) reject({ message: err, statusCode: 500 });

        if (result.length === 0)
          reject({ message: "No enrollments were found", statusCode: 400 });

        resolve({
          statusCode: 200,
          message: `${result.length} enrollments were found`,
          data: result,
        });
      }
    );
  });
};

exports.getTotalChapters= async (params) => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT COUNT(*) FROM chapters `,
      (err, result) => {
        if (err) reject({ message: err, statusCode: 500 });

        if (result.length === 0)
          reject({ message: "No chapters  were found", statusCode: 400 });

        resolve({
          statusCode: 200,
          message: `${result.length} chapters  were found`,
          data: result,
        });
      }
    );
  });
};