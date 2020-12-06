const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const dotenv = require("dotenv");

const { isNotLoggedIn } = require("./middlewares");

const User = require("../models/User");

const router = express.Router();

dotenv.config();

//회원가입
router.post("/", isNotLoggedIn, async (req, res, next) => {
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

    await User.create({
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

//로그인
router.post("/login", isNotLoggedIn, (req, res, next) => {
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

      const accessToken = await jwt.sign(
        exUser.toJSON(),
        process.env.JWT_SECRET
        // { expiresIn: "1h" } 나중에 세팅
      );

      res.cookie("accessToken", accessToken);

      return res.status(200).json({ exUser });
    });
  })(req, res, next);
});

module.exports = router;
