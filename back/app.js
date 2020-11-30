const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

dotenv.config();

const { sequelize } = require("./models");
const passportConfig = require("./passport");

const app = express();

sequelize
  .sync()
  .then(() => {
    console.log("DB 연결 성공");
  })
  .catch(console.error);
passportConfig();

app.set("PORT", process.env.PORT || 5003);
app.use(morgan("dev"));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const authAPIRouter = require("./routers/auth");

app.use("/api/auth", authAPIRouter);

app.listen(app.get("PORT"), () => {
  console.log(`listening on port ${app.get("PORT")}`);
});
