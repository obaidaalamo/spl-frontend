import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Table } from "./components/table";
import { BackGroundImage, RankingIcon } from "./svgImages";
import { Chat } from "./view/Chat";
import { Col, Row } from "antd";
import Particles from "./utils/Particles";
import { ChartView } from "./view/Chart";
import { ConnectView } from "./view/Connect";
import { UserInfo } from "./view/UserInfo";
import { GameBar } from "./view/GameBar";
import { Socket } from "socket.io-client";
import { WebsocketContexts } from "./Contexts/WebsoketContexts";

function App() {
  type UserInfo = {
    name: string;
    amount: number;
  };

  const [user, setUser] = useState<UserInfo>();
  const socket: Socket = useContext(WebsocketContexts);
  const [tableData, setTableData] = useState<any>([
    { no: 1, name: "-", score: "-" },
    { no: 2, name: "-", score: "-" },
    { no: 3, name: "-", score: "-" },
    { no: 4, name: "-", score: "-" },
  ]);
  function compare(a: any, b: any) {
    if (a.score < b.score) {
      return 1;
    }
    if (a.score > b.score) {
      return -1;
    }
    return 0;
  }
  useEffect(() => {
    socket.on("onGameStarted", (data) => {
      setUser({
        //@ts-ignore
        name: user?.name,
        //@ts-ignore
        amount: user?.amount - data.data[3].points,
      });
      setTableData([
        { no: 1, name: "-", score: "-" },
        { no: 2, name: "-", score: "-" },
        { no: 3, name: "-", score: "-" },
        { no: 4, name: "-", score: "-" },
      ]);
    });
    socket.on("onGameEnds", (data) => {
      const listData: any = [];
      if (data.value[3].state === 1) {
        setUser({
          //@ts-ignore
          name: user?.name,

          amount:
            //@ts-ignore
            user?.amount + data.value[3].points * data.value[3].multiplier,
        });
      }
      data.value.map((value: any) =>
        listData.push({
          name: value.user,
          score:
            value.state === 1
              ? (value.points * value.multiplier).toFixed(2)
              : "-",
          no: -1,
        })
      );
      listData.sort(compare);
      setTableData(listData);
    });
    // return () => {
    //   socket.off("onGameStarted");
    //   socket.off("onGameEnds");
    // };
  }, [socket, user]);

  return (
    <div className="App">
      <div className="p-absolute w-100 h-100">
        <BackGroundImage />
        <Particles />
      </div>
      <div className="container">
        <Row justify="center" gutter={[20, 20]}>
          <Col xl={8} lg={24} md={24} sm={24} xs={24}>
            {user ? (
              <GameBar user={user.name} />
            ) : (
              <ConnectView
                submitUserName={(name: string) => {
                  setUser({ name: name, amount: 1000 });
                }}
              />
            )}
          </Col>
          <Col xl={16} lg={24} md={24} sm={24} xs={24}>
            <div className="h-100">
              {/* @ts-ignore */}
              <UserInfo userName={user?.name} userAmount={user?.amount} />
              <div
                className="card-bg br20 p20 mt20 mbr br10"
                style={{ height: "73.5%" }}
              >
                <ChartView />
              </div>
            </div>
          </Col>

          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <div className="w-100">
              <Table
                image={<RankingIcon />}
                list={tableData}
                header={["no", "name", "score"]}
                title="Ranking"
              />
            </div>
          </Col>
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <div className="w-100 h-100">
              <Chat user={user ? user.name : ""} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
