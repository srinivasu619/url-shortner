const express = require("express");
const { fecthRecord } = require("../db/db-client");
const router = express.Router();

router.get("/", function(req, res) {
  return res.render("index", { title: "Hey", message: "Hello there!" });
});

router.get("/:id", (req, res) => {
  let data = {
    code: req.params.id
  };
  try {
    fecthRecord(data, function(result) {
      return res.status(302).redirect(result["orignalURL"]);
    });
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
