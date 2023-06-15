import { SpeedIcon } from "../svgImages";

export const SpeedBar = () => {
  return (
    <div className="w-color p20">
      <div className="d-flex g20  mb10">
        <div>
          <SpeedIcon />
        </div>
        <div>Speed</div>
      </div>
      <div className="p20 card-bg mbr br10 ">
        <input
          type="range"
          min="1"
          max="5"
          //   value="1"
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
