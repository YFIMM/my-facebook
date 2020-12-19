const express = require("express");

const { User, Post, Image } = require("../models");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: User,
          attributes: ["id", "name", "profileImgUrl"],
          include: [
            {
              model: User,
              as: "Followers",
              attributes: ["id"],
            },
          ],
        },
        { model: Image, attributes: ["src", "id"] },
        { model: User, attributes: ["id"], as: "Likers" },
      ],
    });

    res.json(posts);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
