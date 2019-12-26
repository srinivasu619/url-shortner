const dns = require("dns");

const urlValidator = function(req, res, next) {
  const regex = /(http:|https:)\/\/(www.|)[a-zA-Z0-9]+\.\w+/;
  if (!regex.test(req.body.url)) {
    return res.status(400).send({
      error: "Invalid URL"
    });
  } else {
    next();
  }
};

module.exports = {
  urlValidator
};
