const SocketIO = require("socket.io");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

const onlineUsers = {};

module.exports = (server, app) => {
  const io = SocketIO(server, { path: "/socket.io" });
  app.set("io", io);
  app.set("onlineUsers", onlineUsers);

  io.on("connection", (socket) => {
    const namespace = socket.nsp;

    socket.on("login", (data) => {
      onlineUsers[data.id] = "online";
      console.log(onlineUsers);
      namespace.emit("onlineUsers", Object.keys(onlineUsers));
    });

    socket.on("disconnect", () => {
      console.log("disconnect!!");
    });
  });
};
