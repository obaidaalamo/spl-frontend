import { TimeIcon } from "../../svgImages";

export const TimeUser = ({ time }: { time: string }) => {
  return (
    <div
      className="d-flex w-100 pl10 pr10 flex-direction-column text-align-center card-bg br10 mbr justify-content-center"
      style={{ height: 75 }}
    >
      <div className="d-flex align-items-center pl10 pr10 pb10 g10 w-color mt10">
        <TimeIcon />
        <div className="w-100 thicker">{time}</div>
      </div>
    </div>
  );
};
