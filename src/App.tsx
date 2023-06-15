import "./App.css";
import { Table } from "./components/table";
import { TrophyIcon } from "./svgImages";
import { ChartView } from "./view/Chat";
import { UserInfo } from "./view/UserInfo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="d-flex">
          <UserInfo />
        </div>
      </header>
      <div className="d-flex">
        <Table
          image={<TrophyIcon />}
          list={[
            { user: "obaida", amount: 2000 },
            { user: "obaida2", amount: 345345 },
          ]}
          header={["user", "amount"]}
          title="test"
        />
        <ChartView />
      </div>
    </div>
  );
}

export default App;
