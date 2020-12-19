const express = require("express");
const multer = require("multer");
const path = require("path");

const { isLoggedIn } = require("./middlewares");

const User = require("../models/User");

const router = express.Router();

//유저 정보
router.get("/", isLoggedIn, (req, res, next) => {
  console.log("HI");
  return res.json(req.user || false);
});

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      done(null, basename + new Date().getTime() + ext);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});

router.post(
  "/image",
  isLoggedIn,
  upload.single("image"),
  async (req, res, next) => {
    try {
      await User.update(
        { profileImgUrl: req.file.filename },
        { where: { id: req.user.id } }
      );
      res.send("ok");
    } catch (error) {
      next(error);
    }
  }
);

router.patch("/:userId/follow", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.params.userId } });
    if (!user) {
      res.status(403).send("없는 사람을 팔로우하려고 하시네요?");
    }
    await user.addFollowers(req.user.id);
    res.send("ok");
  } catch (error) {
    next(error);
  }
});

router.delete("/:userId/follow", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.params.userId } });
    if (!user) {
      res.status(403).send("없는 사람을 언팔로우하려고 하시네요?");
    }
    await user.removeFollowers(req.user.id);
    res.send("ok");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
