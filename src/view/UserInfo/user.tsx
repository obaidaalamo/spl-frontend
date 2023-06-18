import { UserIcon } from "../../svgImages";

export const UserName = ({ userName }: { userName: string }) => {
  return (
    <div
      className="d-flex w-100 pl10 pr10 flex-direction-column text-align-center card-bg br10 mbr justify-content-center"
      style={{ height: 75 }}
    >
      <div className="d-flex align-items-center pl10 pr10 pb10 g10 w-color mt10">
        <UserIcon />
        <div className="w-100 c-first-letter thicker">{userName}</div>
      </div>
    </div>
  );
};
