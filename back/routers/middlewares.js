const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

exports.isLoggedIn = (req, res, next) => {
  if (!req.cookies.accessToken) {
    return res.status(401).send("로그인한 유저만 접근이 가능합니다.");
  }

  let payload;

  try {
    payload = jwt.verify(req.cookies.accessToken, process.env.JWT_SECRET);

    if (!req.user) {
      req.user = payload;
    }
    next();
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
