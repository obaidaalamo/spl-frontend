import { useContext, useState } from "react";
import { WebsocketContexts } from "../../Contexts/WebsoketContexts";
import { Socket } from "socket.io-client";

type UserName = {
  submitUserName: (name: string) => void;
};

export const ConnectView = ({ submitUserName }: UserName) => {
  const [user, setUser] = useState<any>();
  const socket: Socket = useContext(WebsocketContexts);
  const sendMessageAction = () => {
    socket.emit("newUser", user);
    submitUserName(user);
  };
  return (
    <div
      className="card-bg mbr br10 h-100 d-flex justify-content-center flex-direction-column"
      style={{ height: "99%" }}
    >
      <div className="d-flex">
        <div className="w-100 ml30 mr30 w-color text-align-center mb50">
          Welcome
        </div>
      </div>
      <div className="d-flex">
        <div className="w-100 ml30 mr30 s-color text-align-center mb10">
          Please Enter Your Name
        </div>
      </div>
      <div className="d-flex">
        <input
          className="w-100 ml30 mr30"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              sendMessageAction();
            }
          }}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div className="d-flex">
        <button
          className="w-100 ml30 mr30 mt40 w-color"
          onClick={() => {
            sendMessageAction();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};
