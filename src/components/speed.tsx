import { SpeedIcon } from "../svgImages";

export const SpeedBar = ({ speed }: { speed: (time: number) => void }) => {
  return (
    <div className="w-color pt20 pb20">
      <div className="d-flex g20 align-items-center mb10">
        <div>
          <SpeedIcon />
        </div>
        <div className="thicker">Speed</div>
      </div>
      <div className="p20 card-bg mbr br10 ">
        <input
          type="range"
          min="1"
          max="5"
          defaultValue="1"
          onChange={(e) => {
            speed(parseInt(e.target.value));
          }}
          className="slider"
          id="myRange"
        />
        <div className="d-flex justify-content-space-between">
          <div>1x</div>
          <div>2x</div>
          <div>3x</div>
          <div>4x</div>
          <div>5x</div>
        </div>
      </div>
    </div>
  );
};
