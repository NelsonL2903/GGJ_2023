import { useEffect } from "react";
import "../styles/DayNight.css";
import PauseMenu from "./PauseMenu";

const Background = (props: any) => {
  useEffect(() => {
    for (var i = 0; i < 200; i++) {
      const star = document.createElement("div");
      star.style.top = Math.random() * window.innerHeight + "px";
      star.style.left = Math.random() * window.innerWidth + "px";
      star.className = "star";
      document.getElementById("stars")?.appendChild(star);
    }
  }, []);

  return (
    <div id="container">
      <div className="">
        <PauseMenu />
      </div>
      <div className="flex justify-center items-center">{props.children}</div>
      <div id="stars" className="-z-10"></div>
      <div id="asters" className="-z-10">
        <div className="sun"></div>
        <div className="moon"></div>
      </div>
    </div>
  );
};

export default Background;
