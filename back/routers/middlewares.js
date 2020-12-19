const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const User = require("../models/User");

dotenv.config();

exports.isLoggedIn = async (req, res, next) => {
  if (!req.cookies.accessToken) {
    return res.status(401).send("로그인한 유저만 접근이 가능합니다.");
  }

  let payload;

  try {
    payload = await jwt.verify(req.cookies.accessToken, process.env.JWT_SECRET);

    const exUser = await User.findOne({
      where: { id: payload.id },
      attributes: ["id", "name", "email", "profileImgUrl"],
      include: [
        {
          model: User,
          as: "Followings",
          attributes: ["id", "name"],
        },
        {
          model: User,
          as: "Followers",
          attributes: ["id", "name"],
        },
      ],
    });

    if (exUser) {
      req.user = exUser;
      return next();
    } else {
      return res.status(401).send("존재하지 않은 아이디 입니다.");
    }
  } catch (error) {
    return res.status(401).send(error);
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.cookies.accessToken) {
    next();
  } else {
    res.status(401).send("로그인하지 않은 사용자만 접근 가능합니다.");
  }
};
