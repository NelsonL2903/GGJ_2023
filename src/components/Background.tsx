import { useEffect } from "react";
import "../styles/DayNight.css";
import PauseMenu from "./PauseMenu";
import { animateBackground } from "../anime/animations";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Background = (props: any) => {  
  const turnNumber = useSelector((state: RootState) => state.game.turnNumber);


  useEffect(() => {
    for (var i = 0; i < 200; i++) {
      const star = document.createElement("div");
      star.style.top = Math.random() * window.innerHeight + "px";
      star.style.left = Math.random() * window.innerWidth + "px";
      star.className = "star";
      document.getElementById("stars")?.appendChild(star);
    }
  }, []);

  useEffect(() => {
    const color = turnNumber % 2 === 0 ?  "#426ff5" : '#000';
    animateBackground(document.getElementById('background')!, color)
  }, [turnNumber]);

  return (
    <div id="container" className="bg-[#426ff5]">
      <div className="">
        <PauseMenu />
      </div>
      <div className="flex justify-center items-center z-20">{props.children}</div>
    </div>
  );
};

export default Background;
