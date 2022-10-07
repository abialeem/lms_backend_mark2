const express = require("express");
const router = express.Router();
const db = require("../database/db");
const adminController = require("../controllers/adminController");

// Get all admins
router.get("/", (req, res) => {
  db.query("SELECT * FROM admins", (err, results) => {
    if (err) console.log(err);
    else res.json(results);
  });
});

//add a professor
router.post("/addProfessor",adminController.addProfessor);

//get TotalProfessors
router.get("/gettotalprofessors", adminController.gettotalprofessors);

//get Total users
router.get("/gettotalusers", adminController.gettotalusers); 

//get Total courses
router.get("/gettotalcourses", adminController.gettotalcourses);

//get Total Wishlist
router.get("/gettotalwishlist", adminController.gettotalwishlist);

//get Total Enrollments
router.get("/gettotalenrollments", adminController.gettotalenrollments);

//get Total Enrollments Count
router.get("/gettotalenrollmentcount", adminController.gettotalenrollmentcount);

//get Total Chapters
router.get("/gettotalchapters", adminController.gettotalchapters);


//update single admin 
router.put("/:adminId", adminController.update_admin);

module.exports = router;
