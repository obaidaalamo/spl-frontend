import moment from "moment";
import { AmountUser } from "./amount";
import { TimeUser } from "./time";
import { UserName } from "./user";

export const UserInfo = ({
  userName,
  userAmount,
}: {
  userName: string;
  userAmount: string;
}) => {
  return (
    <div className="d-flex g30 justify-content-space-around">
      <AmountUser userAmount={userAmount} />
      <UserName userName={userName} />
      <TimeUser time={moment().format(" h:mm:ss")} />
    </div>
  );
};
