const express = require("express");
const dns = require("dns");
const randomstring = require("randomstring");
const { insertRecord, fecthRecord } = require("../db/db-client");
const { urlValidator } = require("../validator");
const router = express.Router();

router.post("/", urlValidator, (req, res) => {
  let data = {
    orignalURL: req.body.url,
    code: randomstring.generate(7)
  };
  try {
    insertRecord(data, function(result) {
      return res.status(201).send(result);
    });
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
