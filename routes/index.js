const express = require("express");
const router = express.Router();

const authRoute = require("./auth");
const usersRoute = require("./users");
const chaptersRoute = require("./chapters");
const coursesRoute = require("./courses");
const enrollmentsRoute = require("./enrollments");
const professorsRoute = require("./professors");
const wishlistsRoute = require("./wishlists");
const adminsRoute = require("./admins");

router.use("/api/v1/auth", authRoute);
router.use("/api/v1/users", usersRoute);
router.use("/api/v1/chapters", chaptersRoute);
router.use("/api/v1/courses", coursesRoute);
router.use("/api/v1/enrollments", enrollmentsRoute);
router.use("/api/v1/professors", professorsRoute);
router.use("/api/v1/wishlists", wishlistsRoute);
router.use("/api/v1/admins", adminsRoute);

module.exports = router;
