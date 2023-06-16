import { useContext, useEffect, useState } from "react";
import { ChatIcon } from "../../svgImages";
// import {io} from "socket.io"
import { connectUser } from "../../utils/connectUser";

export const Chat = () => {
  const [message, setMessage] = useState<string>("");
  const [connected, setConnected] = useState<boolean>(false);

  type Messages = {
    user: String;
    message: String;
  };

  const [messagesList, setMessagesList] = useState<any>([]);
  const socket = useContext(connectUser("obaida"));

  useEffect(() => {
    if (!connected) {
      socket.on("connect", () => {
        setConnected(true);
        console.log("connected");
      });

      socket.on("onMessage", (data) => {
        console.log(data);
        if (data.msg === "New Message") {
          const newMessage: any = { user: "obaida", message: data.content };

          //@ts-ignore
          setMessagesList((oldMessage) => [...oldMessage, newMessage]);
        }
      });

      return () => {
        socket.off("connect");
        socket.off("onMessage");
      };
    }
  }, []);

  window.setInterval(function () {
    let elem: any = document.getElementById("messages-div");
    elem.scrollTop = elem.scrollHeight;
  }, 5000);

  return (
    <div className="w-color">
      <div className="d-flex g20 align-items-center mb10">
        <div>
          <ChatIcon />
        </div>
        <div>Chat</div>
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
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={() => {
              socket.emit("newMessage", message);
              setMessage("");
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
