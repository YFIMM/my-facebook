const passport = require("passport");
const { ExtractJwt, Strategy: JWTStrategy } = require("passport-jwt");
const { Strategy: LocalStrategy } = require("passport-local");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

const User = require("../models/User");

dotenv.config();

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const user = await User.findOne({
            where: { email },
          });
          if (!user) {
            return done(null, false, { reason: "존재하지 않는 이메일입니다!" });
          }
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            return done(null, user);
          }
          return done(null, false, { reason: "비밀번호가 틀렸습니다." });
        } catch (error) {
          console.error(error);
          return done(error);
        }
      }
    )
  );
  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
      },
      async (jwtPayload, done) => {
        try {
          const exUser = await User.findOne({
            where: {
              id: jwtPayload.id,
              name: jwtPayload.name,
              email: jwtPayload.email,
            },
          });

          if (exUser) {
            return done(null, exUser);
          } else {
            return done(null, false, { reason: "존재하지 않은 아이디입니다." });
          }
        } catch (error) {
          return done(error);
        }
      }
    )
  );
};
