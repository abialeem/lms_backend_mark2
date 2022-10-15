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

//get Total users count
router.get("/gettotaluserscount", adminController.gettotaluserscount);  

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


//get all stuff functions starts here

router.get("/getMadrasas", adminController.getMadrasas);

//get all functions ends here



//count of stuff routes starts here
router.get("/getMadrasaCount", adminController.getMadrasaCount);

router.get("/getPrincipalCount", adminController.getPrincipalCount);

router.get("/getTeacherCount", adminController.getTeacherCount);

router.get("/getStudentCount", adminController.getStudentCount);

router.get("/getCourseCount", adminController.getCourseCount);

router.get("/getSubjectCount", adminController.getSubjectCount);


//count of stuff routes ends here


//update single admin 
router.put("/:adminId", adminController.update_admin);

module.exports = router;
