var express = require("express");
var router = express.Router();
var { formatUrl, redirect } = require("../controller/url");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.post("/url", formatUrl);
router.get("/:id", redirect);
module.exports = router;
