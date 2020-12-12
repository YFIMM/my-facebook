const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
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
app.use("/", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const authAPIRouter = require("./routers/auth");
const userAPIRouter = require("./routers/user");
const postAPIRouter = require("./routers/post");
const postsAPIRouter = require("./routers/posts");
const messengerAPIRouter = require("./routers/messenger");

app.use("/api/auth", authAPIRouter);
app.use("/api/user", userAPIRouter);
app.use("/api/post", postAPIRouter);
app.use("/api/posts", postsAPIRouter);
app.use("/api/messenger", messengerAPIRouter);

const webSocket = require("./socket");

const server = app.listen(app.get("PORT"), () => {
  console.log(`listening on port ${app.get("PORT")}`);
});

webSocket(server, app);
