import { useEffect, useState } from "react";
import "./App.css";
import { Table } from "./components/table";
import { RankingIcon, TrophyIcon } from "./svgImages";
import { Chat } from "./view/Chat";
// import { ChartView } from "./view/Chat";
import { Col, Row } from "antd";
import { SpeedBar } from "./components/speed";
import Particles from "./utils/Particles";
import { ChartView } from "./view/Chart";
import { ConnectView } from "./view/Connect";
import { UserInfo } from "./view/UserInfo";
import { MultiplierUser } from "./view/UserInfo/multiplier";
import { PointsUser } from "./view/UserInfo/points";

function App() {
  type UserInfo = {
    name: string;
    amount: number;
  };
  const [user, setUser] = useState<UserInfo>();
  const [points, setPoints] = useState<any>(0);
  const [Multiplier, setMultiplier] = useState<any>(0);
  useEffect(() => {
    console.log(points);
    console.log(Multiplier);
  }, [points, Multiplier]);

  return (
    <div className="App">
      <div className="p-absolute w-100 h-100">
        <Particles />
      </div>
      <div className="container">
        <Row justify="center" gutter={[20, 20]}>
          <Col xl={8} lg={24} md={24} sm={24} xs={24}>
            {user ? (
              <>
                <div className="d-flex g20">
                  <PointsUser handleClick={(e) => setPoints(e)} />
                  <MultiplierUser handleClick={(e) => setMultiplier(e)} />
                </div>
                <button className="w-100 mt20 mb10 w-color">Start</button>
                <Table
                  image={<TrophyIcon />}
                  list={[
                    { name: "-", point: "-", multiplier: "-" },
                    { name: "-", point: "-", multiplier: "-" },
                    { name: "-", point: "-", multiplier: "-" },
                    { name: "-", point: "-", multiplier: "-" },
                  ]}
                  header={["name", "point", "multiplier"]}
                  title="Current Round"
                />
                <SpeedBar />
              </>
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
                list={[
                  { no: 1, name: "-", score: "-" },
                  { no: 2, name: "-", score: "-" },
                  { no: 3, name: "-", score: "-" },
                  { no: 4, name: "-", score: "-" },
                ]}
                header={["no", "name", "score"]}
                title="Ranking"
              />
            </div>
          </Col>
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <div className="w-100">
              <Chat />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
