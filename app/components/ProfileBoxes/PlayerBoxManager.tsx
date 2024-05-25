"use client";
import { useState } from "react";
import { PlayerBox } from "./PlayerBox";
import { BoxData, BoxDataProps } from "./BoxData";
export const PlayerBoxManager: React.FC = () => {
  const [boxes, setBoxes] = useState<boolean[]>([true, false]);

  const handleBoxClick = (index: number, clicked: boolean) => {
    const updatedBoxes = boxes.map((boxState, idx) =>
      idx === index ? clicked : boxState
    );

    if (index === boxes.length - 2 && !clicked) {
      updatedBoxes.pop();
    }

    if (clicked) {
      updatedBoxes.push(false);
    }
    setBoxes(updatedBoxes);
  };


  return (
    <div className="flex flex-row">
      {boxes.map((boxState, index) => (
        <PlayerBox
          key={index}
          clicked={boxState}
          boxData={BoxData[index]}
          onClick={(clicked) => handleBoxClick(index, clicked)}
          
        />
      ))}
    </div>
  );
};
