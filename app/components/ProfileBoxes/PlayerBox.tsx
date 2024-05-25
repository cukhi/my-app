"use client";
import { useState, useEffect } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { BoxDataProps } from "./BoxData";
import { FaPen } from "react-icons/fa6";

interface PlayerBoxProps {
  clicked: boolean;
  boxData?: BoxDataProps;
  onClick: (clicked: boolean) => void;
  

}

export const PlayerBox: React.FC<PlayerBoxProps> = ({
  clicked,
  boxData,
  onClick,
  
  
}) => {
  const [boxClicked, setBoxClicked] = useState(clicked);
  const [isEditing,setIsEditing] = useState(false);
  const [boxName,setBoxName] = useState(boxData?.boxName || "");



  useEffect(() => {
    setBoxClicked(clicked);
  }, [clicked]);

  const handleReturnIconClick = () => {
    const newClickedState = !boxClicked;
    setBoxClicked(newClickedState);
    onClick(newClickedState);
  };
  const handleEditIconClick = () =>{
    
    setIsEditing(!isEditing);
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setBoxName(e.target.value);
  }
  const returnIcon = () => {
    if (boxClicked) {
      return <FaRegCircleUser size={60} onClick={handleReturnIconClick} />;
    } else {
      return <FaPlus size={60} onClick={handleReturnIconClick} />;
    }
  };

  return (
    <div>

   
    <div
      className={`border-4 border-amber-400 rounded-sm w-32 h-32 flex justify-center items-center m-2 ${
        boxData?.backgroundColor || ""
      }`}
      
    >
      <div className=" relative left-20 bottom-12 hover:bg-slate-400 rounded-lg">
      <FaPen onClick={handleEditIconClick}/>
      </div>
      
      {returnIcon()}
    </div>
    <div className=" flex justify-center items-center flex-col">
    {boxData && (
        <>
          {boxData.profilePicture} <br />
          {isEditing ? (
            <input 
              type="text" 
              value = {boxName}
              onChange={handleInputChange}
              placeholder={boxData.boxName}
              className=" border w-16 border-gray-300 rounded p-1 text-center"/>
          ):(
            <span>{boxName}</span>
          )
          
        }
        </>
      )}
    </div>
   
    </div>
  );
};
