const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

dotenv.config();

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

app.listen(app.get("PORT"), () => {
  console.log(`listening on port ${app.get("PORT")}`);
});
