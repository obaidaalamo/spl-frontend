import { useContext, useEffect, useState } from "react";
import { ChatIcon } from "../../svgImages";
import { WebsocketContexts } from "../../Contexts/WebsoketContexts";
// import {io} from "socket.io"

export const Chat = () => {
  const socket = useContext(WebsocketContexts);

  type Messages = {
    user: String;
    message: String;
  };
  const [messagesList, setMessagesList] = useState<Messages[]>([
    { user: "user1", message: "hi 1" },
    { user: "user2", message: "hi 2" },
    { user: "user3", message: "hi 3" },
  ]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });
    socket.on("onMessage", (data) => {
      console.log(data);
    });
    return () => {
      socket.off("connect");
      socket.off("onMessage");
    };
  }, []);
  return (
    <div className="w-color p20">
      <div className="d-flex g20  mb10">
        <div>
          <ChatIcon />
        </div>
        <div>Chat</div>
      </div>
      <div className=" card-bg mbr br10 ">
        <div className="messages-container p20">
          {messagesList.map((data: Messages, index: number) => {
            return (
              <div key={index} className="d-flex g10 mb10">
                <div>{data.user}</div>
                <div>{data.message}</div>
              </div>
            );
          })}
        </div>
        <div className="d-flex g10 card-bg2 p20 ">
          <input className="w-100" />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};
