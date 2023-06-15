import "./App.css";
import { SpeedBar } from "./components/speed";
import { Table } from "./components/table";
import { TrophyIcon } from "./svgImages";
import { Chat } from "./view/Chat";
// import { ChartView } from "./view/Chat";
import { UserInfo } from "./view/UserInfo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="d-flex">
          <UserInfo />
        </div>
      </header>
      <div>
        <Table
          image={<TrophyIcon />}
          list={[
            { user: "obaida", amount: 2000 },
            { user: "obaida2", amount: 345345 },
          ]}
          header={["user", "amount"]}
          title="test"
        />

        {/* <ChartView /> */}
      </div>
      <SpeedBar />
      <Chat />
    </div>
  );
}

export default App;
