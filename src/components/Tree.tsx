import DeadTree from "../assets/DeadTree.png";
import LiveTree from "../assets/tree_base.png";
import SickTree from "../assets/infected_trunk.png";

import FallGround from "../assets/FallGround.png";
import WinterGround from "../assets/WinterGround.png";
import SpringGround from "../assets/SpringGround.png";

import SummerLeaves from "../assets/summer_leaves.png";
import FallLeaves from "../assets/fall_leaves.png";
import WinterLeaves from "../assets/snow_branches.png";
import SpringLeaves from "../assets/spring_leaves.png";


import { RootState } from "../store/store";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';


const Tree = () => {
    const healthNum = useSelector((state: RootState) => state.game.season);
    const seasonNum = useSelector((state: RootState) => state.game.season); 


    const [health, setHealth] = useState([{ type: "Alive", source: LiveTree },
    { type: "Sick", source: SickTree },
    { type: "Dead", source: DeadTree }]);

    const [season, setSeason] = useState([{ season: "Spring", leafSource: SpringLeaves, groundSource: SpringGround },
    { season: "Summer", leafSource: SummerLeaves, groundSource: null },
    { season: "Fall", leafSource: FallLeaves, groundSource: FallGround },
    { season: "Winter", leafSource: WinterLeaves, groundSource: WinterGround },
    { season: "Dead", leafSource: null, groundSource: null }]);

    return (
        <div>
            {season[seasonNum].leafSource &&
                <img src={season[seasonNum].leafSource} className="h-[100vh] w-[100vw] z-4 absolute bottom-[0] left-[-2vw]"></img>
            }
            {season[seasonNum].groundSource &&
                <img src={season[seasonNum].groundSource} className="h-[100vh] w-[100vw] z-4 absolute bottom-[0] left-[0vw]"></img>
            }

            <img src={health[healthNum].source} className="h-[100vh] w-[100vw] z-4 absolute bottom-[0] left-[-2vw]"></img>

        </div>

    );
};

export default Tree; 
