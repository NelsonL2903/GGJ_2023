import DeadTree from "../assets/DeadTree.png";
import LiveTree from "../assets/tree_base.png";
import SickTree from "../assets/infected_trunk.png";

import Fungus from "../assets/fungus.png";

import FallGround from "../assets/FallGround.png";
import WinterGround from "../assets/WinterGround.png";
import SpringGround from "../assets/SpringGround.png";

import SummerLeaves from "../assets/summer_leaves.png";
import FallLeaves from "../assets/fall_leaves.png";
import WinterLeaves from "../assets/snow_branches.png";
import SpringLeaves from "../assets/spring_leaves.png";

import { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Tree = () => {
  const events = useSelector((state: RootState) => state.game.event);
  const seasonNum = useSelector((state: RootState) => state.game.season);

  var isSick = false;
  var isFungus = false;
  var isDead = false;

  if (events.includes(0)) {
    isSick = true;
  }
  if (events.includes(1)) {
    isFungus = true;
  }
  if (events.includes(2)) {
    isDead = true;
  }

  const [season, setSeason] = useState([
    { season: "Spring", leafSource: SpringLeaves, groundSource: SpringGround },
    { season: "Summer", leafSource: SummerLeaves, groundSource: null },
    { season: "Fall", leafSource: FallLeaves, groundSource: FallGround },
    { season: "Winter", leafSource: WinterLeaves, groundSource: WinterGround },
    { season: "Dead", leafSource: null, groundSource: null },
  ]);

  return (
    <div>
      {season[seasonNum].leafSource && (
        <img
          src={season[seasonNum].leafSource!}
          alt="leaf source"
          className="h-[100vh] w-[100vw] z-4 absolute bottom-[0] left-[-2vw]"
        ></img>
      )}
      {season[seasonNum].groundSource && (
        <img
          src={season[seasonNum].groundSource!}
          alt="ground source"
          className="h-[100vh] w-[100vw] z-4 absolute bottom-[0] left-[0vw]"
        ></img>
      )}
      {isSick && !isDead && (
        <img
          src={SickTree}
          alt="sick tree"
          className="h-[100vh] w-[100vw] z-4 absolute bottom-[0] left-[-2vw]"
        ></img>
      )}
      {!isSick && !isDead && (
        <img
          src={LiveTree}
          alt="live tree"
          className="h-[100vh] w-[100vw] z-4 absolute bottom-[0] left-[-2vw]"
        ></img>
      )}
      {isFungus && !isDead && (
        <img
          src={Fungus}
          alt="fungus"
          className="h-[100vh] w-[100vw] z-4 absolute bottom-[0] left-[-2vw]"
        ></img>
      )}
      {isDead && (
        <img
          src={DeadTree}
          alt="dead tree"
          className="h-[100vh] w-[100vw] z-4 absolute bottom-[0] left-[-2vw]"
        ></img>
      )}
    </div>
  );
};

export default Tree;
