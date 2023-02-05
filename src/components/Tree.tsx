import DeadTree from "/DeadTree.png";
import LiveTree from "/tree_base.png";
import SickTree from "/infected_trunk.png";

import Fungus from "/fungus.png";

import FallGround from "/FallGround.png";
import WinterGround from "/WinterGround.png";
import SpringGround from "/SpringGround.png";

import SummerLeaves from "/summer_leaves.png";
import FallLeaves from "/fall_leaves.png";
import WinterLeaves from "/snow_branches.png";
import SpringLeaves from "/spring_leaves.png";

import { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Tree = () => {
  const events = useSelector((state: RootState) => state.game.event);
  const seasonNum = useSelector((state: RootState) => state.game.season);

  var isSick = false;
  var isFungus = false;
  var isDead = false;

  if (events.includes(6)) {
    isSick = true;
  }
  if (events.includes(2)) {
    isFungus = true;
  }
  if (events.includes(4)) {
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
          className="h-[100vh] w-[100vw] z-20 absolute bottom-[0] left-[-2vw]"
        ></img>
      )}
      {season[seasonNum].groundSource && (
        <img
          src={season[seasonNum].groundSource!}
          alt="ground source"
          className="h-[100vh] w-[100vw] z-20 absolute bottom-[0] left-[0vw]"
        ></img>
      )}
      {isSick && !isDead && (
        <img
          src={SickTree}
          alt="sick tree"
          className="h-[100vh] w-[100vw] z-20 absolute bottom-[0] left-[-2vw]"
        ></img>
      )}
      {!isSick && !isDead && (
        <img
          src={LiveTree}
          alt="live tree"
          className="h-[100vh] w-[100vw] z-20 absolute bottom-[0] left-[-2vw]"
        ></img>
      )}
      {isFungus && !isDead && (
        <img
          src={Fungus}
          alt="fungus"
          className="h-[100vh] w-[100vw] z-20 absolute bottom-[0] left-[-2vw]"
        ></img>
      )}
      {isDead && (
        <img
          src={DeadTree}
          alt="dead tree"
          className="h-[100vh] w-[100vw] z-20 absolute bottom-[0] left-[-2vw]"
        ></img>
      )}
    </div>
  );
};

export default Tree;
