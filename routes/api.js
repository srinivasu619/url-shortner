const express = require("express");
const dns = require("dns");
const randomstring = require("randomstring");
var router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
  const url = req.body.url;
  dns.lookup(url, (err, address, family) => {
    if (err)
      return res.send({
        error: "Invalid URL"
      });
    else {
      let id = randomstring.generate(7);
      return res.send({
        id,
        original_url: url
      });
    }
  });
});

router.get("/:id", (req, res) => {});

module.exports = router;
