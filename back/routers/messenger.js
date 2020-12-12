const express = require("express");
const { Op } = require("sequelize");

const { Messenger, User } = require("../models");

const { isLoggedIn } = require("./middlewares");

const router = express.Router();

router.get("/:id", isLoggedIn, async (req, res, next) => {
  try {
    const messages = await Messenger.findAll({
      where: {
        [Op.or]: [
          {
            SenderId: req.user.id,
            ReceiverId: req.params.id,
          },
          {
            SenderId: req.params.id,
            ReceiverId: req.user.id,
          },
        ],
      },
      include: [
        {
          model: User,
          as: "Sender",
          attributes: ["id", "name"],
        },
        {
          model: User,
          as: "Receiver",
          attributes: ["id", "name"],
        },
      ],
    });
    res.json(messages);
  } catch (error) {
    next(error);
  }
});

router.post("/:id", isLoggedIn, async (req, res, next) => {
  try {
    const SenderId = req.user.id;
    const ReceiverId = req.params.id;

    const message = await Messenger.create({
      SenderId,
      ReceiverId,
      content: req.body.content,
    });

    const messageWithSender = await Messenger.findOne({
      where: { id: message.id },
      include: [
        {
          model: User,
          as: "Sender",
          attributes: ["id", "name"],
        },
        {
          model: User,
          as: "Receiver",
          attributes: ["id", "name"],
        },
      ],
    });
    const io = req.app.get("io");
    const onlineUsers = req.app.get("onlineUsers");
    const receiverSocketId = Object.keys(onlineUsers).find(
      (key) => onlineUsers[key] === Number(ReceiverId)
    );

    io.to(receiverSocketId).emit("message", messageWithSender);
    res.send("ok");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
