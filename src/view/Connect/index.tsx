import { useState } from "react";

type UserName = {
  submitUserName: (name: string) => void;
};

export const ConnectView = ({ submitUserName }: UserName) => {
  const [user, setUser] = useState<any>();
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
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div className="d-flex">
        <button
          className="w-100 ml30 mr30 mt40"
          onClick={() => submitUserName(user)}
        >
          Login
        </button>
      </div>
    </div>
  );
};
