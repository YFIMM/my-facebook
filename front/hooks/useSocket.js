import { useCallback } from "react";
import io from "socket.io-client";

const server = "http://localhost:5003";

const sockets = {};

const useSocket = (namespace) => {
  const disconnectSocket = useCallback(() => {
    if (namespace && sockets[namespace]) {
      sockets[namespace].disconnect();
      delete sockets[namespace];
    }
  }, [namespace]);

  if (!namespace) {
    return [undefined, disconnectSocket];
  }

  if (!sockets[namespace]) {
    sockets[namespace] = io(`${server}/${namespace}`, {
      transports: ["websocket"],
    });
  }

  return [sockets[namespace], disconnectSocket];
};

export default useSocket;
