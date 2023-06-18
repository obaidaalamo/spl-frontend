import { useState } from "react";
import { DownIcon, UpIcon } from "../../svgImages";

type ButtonProps = {
  handleClick: (event: React.MouseEvent<Number>) => void;
};

export const MultiplierUser = ({ handleClick }: ButtonProps) => {
  const [numberValue, setNumberValue] = useState<any>(1);

  const updateData = (value: any) => {
    setNumberValue(value);
    // @ts-ignore
    handleClick(value);
  };
  return (
    <div
      className="d-flex align-items-center w-100 pl10 pr10 flex-direction-column text-align-center card-bg br10 mbr justify-content-center"
      style={{ height: 75 }}
    >
      <div className="w-color pt10 thicker">Multiplier</div>
      <div className="d-flex align-items-center pl10 pr10 pb10 g10">
        <div
          className="p-cursor"
          onClick={() => {
            updateData(numberValue + 0.25);
          }}
        >
          <UpIcon />
        </div>
        <input
          className="br5 text-center thicker"
          type="number"
          value={numberValue}
          defaultValue={1}
          onChange={(e) => {
            updateData(parseFloat(e.target.value));
          }}
        />
        <div
          className="p-cursor"
          onClick={() => {
            if (numberValue >= 0.01) {
              updateData(numberValue - 0.25);
            }
          }}
        >
          <DownIcon />
        </div>
      </div>
    </div>
  );
};
