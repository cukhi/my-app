import Image from "next/image";
import * as React from "react";
import { PlayerBox } from "./components/ProfileBoxes/PlayerBox";
import { PlayerBoxManager } from "./components/ProfileBoxes/PlayerBoxManager";
import { SidePanel } from "./components/FightManager/SidePanel/SidePanel";
export default function Home() {
  return (
    <>
    <div className=" flex  items-center justify-evenly">
    <PlayerBoxManager />
    </div>

    <hr />
     <div>
      <SidePanel/>
     </div>
    </>
  );
}
