import { AmountUser } from "./amount";
import { MultiplierUser } from "./multiplier";
import { TimeUser } from "./time";
import { UserName } from "./user";
import { PointsUser } from "./points";
import { useEffect, useState } from "react";

export const UserInfo = () => {
  const [points, setPoints] = useState<any>(0);
  const [Multiplier, setMultiplier] = useState<any>(0);
  useEffect(() => {
    console.log(points);
    console.log(Multiplier);
  }, [points, Multiplier]);
  return (
    <div className="d-flex g30">
      <PointsUser handleClick={(e) => setPoints(e)} />
      <MultiplierUser handleClick={(e) => setMultiplier(e)} />
      <AmountUser userAmount={"asdas"} />
      <UserName userName="Obaida" />
      <TimeUser time="10/20" />
    </div>
  );
};
