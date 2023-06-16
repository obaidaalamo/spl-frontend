import { createContext } from "react";
import { Socket, io } from "socket.io-client";

export const connectUser = (name: string) => {
  const socket = io("http://localhost:3001", { query: [name] });
  const result = createContext<Socket>(socket);
  return result;
};
