const express = require("express");
const passport = require("passport");

const { isLoggedIn } = require("./middlewares");

const User = require("../models/User");

const router = express.Router();

//유저 정보
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    return res.json(req.user || false);
  }
);

module.exports = router;
