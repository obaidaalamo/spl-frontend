import { useState } from "react";
import { DownIcon, UpIcon } from "../../svgImages";

type ButtonProps = {
  handleClick: (event: React.MouseEvent<Number>) => void;
};

export const MultiplierUser = ({ handleClick }: ButtonProps) => {
  const [numberValue, setNumberValue] = useState<any>(0);

  const updateData = (value: any) => {
    setNumberValue(value);
    // @ts-ignore
    handleClick(value);
  };
  return (
    <div className="d-flex pl10 pr10 flex-direction-column text-align-center card-bg br10 mbr justify-content-center">
      <div className="w-color pt10">Multiplier</div>
      <div className="d-flex align-items-center pl10 pr10 pb10 g10">
        <div
          className="p-cursor"
          onClick={() => {
            updateData(numberValue + 1);
          }}
        >
          <UpIcon />
        </div>
        <input
          className="br5 text-center"
          type="number"
          value={numberValue}
          onChange={(e) => updateData(parseInt(e.target.value))}
        />
        <div
          className="p-cursor"
          onClick={() => {
            if (numberValue >= 1) {
              updateData(numberValue - 1);
            }
          }}
        >
          <DownIcon />
        </div>
      </div>
    </div>
  );
};
