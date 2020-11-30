const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const dotenv = require("dotenv");

const User = require("../models/User");

const router = express.Router();

dotenv.config();

//회원가입
router.post("/", async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (exUser) {
      return res.status(403).send("이미 사용 중인 아이디입니다.");
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const user = await User.create({
      email: req.body.email,
      name: req.body.name,
      password: hashedPassword,
    });

    return res.status(201).send("ok");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, { session: false }, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }

      const exUser = await User.findOne({
        where: { id: user.id },
        attributes: ["id", "name", "email"],
      });

      const token = await jwt.sign(exUser.toJSON(), process.env.JWT_SECRET);

      return res.status(200).json({ exUser, token });
    });
  })(req, res, next);
});

module.exports = router;
