import { createContext } from "react";
import { io, Socket } from "socket.io-client";

export const socket = io("http://localhost:3001");

export const WebsocketContexts = createContext<Socket>(socket);

export const WebsocketProvider = WebsocketContexts.Provider;
