const express = require("express");
const router = express.Router();
const db = require("../database/db");

// GET ALL Professors
router.get("/", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  let startValue;
  let endValue;

  if (page > 0) {
    startValue = page * limit - limit; // 0,10,20,30
    endValue = page * limit;
  } else {
    startValue = 0;
    endValue = 10;
  }

  db.query(
    `SELECT * FROM professors LIMIT ${startValue}, ${limit}`,
    (err, results) => {
      if (err) console.log(err);
      else res.json(results);
    }
  );
});

// GET SINGLE Professor BY ID
router.get("/:professorId", async (req, res) => {
  const { professorId } = req.params;
  db.query(
    `SELECT * FROM professors WHERE id = ${professorId}`,
    (err, results) => {
      if (err) console.log(err);
      else res.json(results[0]);
    }
  );
});

module.exports = router;
