const passport = require("passport");

exports.isLoggedIn = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (user) {
      next();
    } else {
      res.status(401).send("로그인이 필요합니다.");
    }
  })(req, res, next);
};

exports.isNotLoggedIn = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (!user) {
      next();
    } else {
      res.status(401).send("로그인하지 않은 사용자만 접근 가능합니다.");
    }
  })(req, res, next);
};
