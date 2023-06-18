import { Socket } from "socket.io-client";
import { SpeedBar } from "../../components/speed";
import { Table } from "../../components/table";
import { TrophyIcon } from "../../svgImages";
import { MultiplierUser } from "../UserInfo/multiplier";
import { PointsUser } from "../UserInfo/points";
import { useContext, useEffect, useState } from "react";
import { WebsocketContexts } from "../../Contexts/WebsoketContexts";

export const GameBar = ({ user }: { user: string }) => {
  const socket: Socket = useContext(WebsocketContexts);
  const [points, setPoints] = useState<any>(25);
  const [multiplier, setMultiplier] = useState<any>(1);
  const [speed, setSpeed] = useState<any>(1);
  const [tableData, setTableData] = useState<any>([
    { name: "-", point: "-", multiplier: "-" },
    { name: "-", point: "-", multiplier: "-" },
    { name: "-", point: "-", multiplier: "-" },
    { name: "-", point: "-", multiplier: "-" },
  ]);
  const [buttonState, setButtonState] = useState<boolean>(false);

  useEffect(() => {
    socket.on("onGameStarted", (data) => {
      setButtonState(true);
      const result: any = [];
      data.data.map((value: any) =>
        result.push({
          name: value.user,
          point: value.points,
          multiplier: value.multiplier.toFixed(2) + "X",
        })
      );
      setTableData(result);
    });
    socket.on("onGameEnds", (data) => {
      setButtonState(false);
      const result: any = [];
      data.value.map((value: any) =>
        result.push({
          name: value.user,
          point: (value.points * value.multiplier).toFixed(2),
          multiplier: value.multiplier.toFixed(2) + "X",
          state: value.state,
        })
      );
      setTableData(result);
    });
  }, [socket]);
  return (
    <>
      <div className="d-flex g20">
        <PointsUser handleClick={(e) => setPoints(e)} />
        <MultiplierUser handleClick={(e) => setMultiplier(e)} />
      </div>
      <button
        disabled={buttonState}
        className="w-100 mt20 mb10 w-color p-cursor thicker"
        onClick={() => {
          socket.emit("startGame", {
            user: user,
            points: points,
            multiplier: multiplier,
            speed: speed,
          });
        }}
      >
        {buttonState ? "Started" : "Start"}
      </button>
      <Table
        image={<TrophyIcon />}
        list={tableData}
        header={["name", "point", "multiplier"]}
        title="Current Round"
      />
      <SpeedBar speed={(e) => setSpeed(e)} />
    </>
  );
};
