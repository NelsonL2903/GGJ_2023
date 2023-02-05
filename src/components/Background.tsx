import { useEffect, useState } from "react";
import "../styles/DayNight.css";
import LeftMenu from "./LeftMenu";

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
        <LeftMenu />
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
