const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/registeruser", authController.register_user);

router.post("/loginuser", authController.login_user);

router.post("/registerprofessor", authController.register_professor);

router.post("/loginprofessor", authController.login_professor);

router.post("/registeradmin", authController.register_admin);

router.post("/loginadmin", authController.login_admin);

module.exports = router;


