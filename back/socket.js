const SocketIO = require("socket.io");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

const onlineUsers = {};

module.exports = (server, app) => {
  const io = SocketIO(server, { path: "/socket.io" });
  app.set("io", io);
  app.set("onlineUsers", onlineUsers);

  const online = io.of("/online");

  online.on("connect", (socket) => {
    const namespace = socket.nsp;

    socket.on("login", (data) => {
      onlineUsers[socket.id] = data.id;

      namespace.emit("onlineUsers", Object.values(onlineUsers));
    });

    socket.on("disconnect", () => {
      delete onlineUsers[socket.id];
      namespace.emit("onlineUsers", Object.values(onlineUsers));
    });
  });

  // io.on("connection", (socket) => {
  //   const namespace = socket.nsp;

  //   socket.on("login", (data) => {
  //     onlineUsers[socket.id] = data.id;
  //     namespace.emit("onlineUsers", Object.values(onlineUsers));
  //     console.log("login");
  //   });

  //   socket.on("disconnect", () => {
  //     delete onlineUsers[socket.id];
  //     console.log("disconnect");
  //     namespace.emit("onlineUsers", Object.values(onlineUsers));
  //   });
  // });
};
