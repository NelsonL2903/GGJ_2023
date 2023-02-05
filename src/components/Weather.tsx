import RainEffect from "../assets/RainEffect.png";
import RainGround from "../assets/rain_ground.png";

import SnowEffect from "../assets/SnowEffect.png";

import { RootState } from "../store/store";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';


const Weather = () => {
    const events = useSelector((state: RootState) => state.game.event);

    var isRaining = false;

    var isSnowing = false;
    var isBlizzarding = false;

    if(events.includes(3)){
        isRaining = true;
        isSnowing = false;
        isBlizzarding = false;
    }
    if(events.includes(4)){
        isSnowing = true;
        isRaining = false;
        isBlizzarding = false;
    }
    if(events.includes(5)){
        isBlizzarding = true;
        isRaining = false;
        isSnowing = false;
    }

    return (
        <div>
            
        </div>

    );
};

export default Weather; 
