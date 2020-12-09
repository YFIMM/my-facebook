import { useCallback } from "react";
import io from "socket.io-client";

const server = "http://localhost:5003";

let socket = null;

const useSocket = () => {
  const disconnectSocket = useCallback(() => {
    socket.disconnect();
    socket = null;
  }, []);

  socket = io(`${server}`, {
    transports: ["websocket"],
  });

  return [socket, disconnectSocket];
};

export default useSocket;
