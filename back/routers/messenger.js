const express = require("express");
const { Op } = require("sequelize");

const { Messenger, User } = require("../models");

const { isLoggedIn } = require("./middlewares");

const router = express.Router();

router.get("/:id", isLoggedIn, async (req, res, next) => {
  try {
    console.log(req.query.perPage, req.query.page);
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
      order: [["createdAt", "DESC"]],
      limit: parseInt(req.query.perPage, 10),
      offset: req.query.perPage * (req.query.page - 1),
    });
    res.json(messages.reverse());
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

    const theMessage = await Messenger.findOne({
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
    const io = req.app.get("io").of("/online");
    const onlineUsers = req.app.get("onlineUsers");
    const receiverSocketId = Object.keys(onlineUsers).find(
      (key) => onlineUsers[key] === Number(ReceiverId)
    );

    io.to(receiverSocketId).emit("message", theMessage);
    res.json(theMessage);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
