import { useContext, useEffect, useState } from "react";
import { ChatIcon } from "../../svgImages";
import { WebsocketContexts } from "../../Contexts/WebsoketContexts";
import { Socket } from "socket.io-client";
// import {io} from "socket.io"

export const Chat = ({ user }: { user: string }) => {
  const [message, setMessage] = useState<string>("");

  type Messages = {
    user: String;
    message: String;
  };

  const [messagesList, setMessagesList] = useState<any>([]);
  const socket: Socket = useContext(WebsocketContexts);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("onMessage", (data: any) => {
      if (data.msg === "New Message") {
        const newMessage: any = {
          user: data.content.user,
          message: data.content.message,
        };
        //@ts-ignore
        setMessagesList((oldMessage) => [...oldMessage, newMessage]);
      }
    });

    return () => {
      socket.off("connect");
      socket.off("onMessage");
    };
  }, [socket]);

  window.setInterval(function () {
    let elem: any = document.getElementById("messages-div");
    elem.scrollTop = elem.scrollHeight;
  }, 5000);

  const sendMessageAction = () => {
    socket.emit("newMessage", { user: user, message: message });
    setMessage("");
  };

  return (
    <div className="w-color">
      <div className="d-flex g20 align-items-center mb10">
        <div>
          <ChatIcon />
        </div>
        <div className="thicker">Chat</div>
      </div>
      <div className=" card-bg mbr br10 ">
        <div id="messages-div" className="messages-container m20">
          {messagesList ? (
            messagesList.map((data: Messages, index: number) => {
              return (
                <div key={index} className="d-flex g10 mb10">
                  <div>{data.user}</div>
                  <div>{data.message}</div>
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </div>
        <div className="d-flex g10 card-bg2 p20 ">
          <input
            className="w-100"
            value={message}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                sendMessageAction();
              }
            }}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="p-cursor thicker"
            onClick={() => {
              sendMessageAction();
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
