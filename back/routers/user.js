const express = require("express");

const { isLoggedIn } = require("./middlewares");

const User = require("../models/User");

const router = express.Router();

//유저 정보
router.get("/", isLoggedIn, (req, res, next) => {
  return res.json(req.user || false);
});

module.exports = router;
