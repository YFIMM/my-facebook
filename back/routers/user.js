const express = require("express");

const { isLoggedIn } = require("./middlewares");

const User = require("../models/User");

const router = express.Router();

//유저 정보
router.get("/", isLoggedIn, (req, res, next) => {
  return res.json(req.user || false);
});

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
