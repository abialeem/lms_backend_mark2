const express = require("express");
const router = express.Router();
const db = require("../database/db");

// GET ALL Sellers
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
    `SELECT * FROM sellers LIMIT ${startValue}, ${limit}`,
    (err, results) => {
      if (err) console.log(err);
      else res.json(results);
    }
  );
});

// GET SINGLE Seller BY ID
router.get("/:sellerId", async (req, res) => {
  const { sellerId } = req.params;
  db.query(
    `SELECT * FROM sellers WHERE id = ${sellerId}`,
    (err, results) => {
      if (err) console.log(err);
      else res.json(results[0]);
    }
  );
});

module.exports = router;
