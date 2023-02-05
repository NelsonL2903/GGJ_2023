import RainEffect from "../assets/RainEffect.png";
import RainGround from "../assets/rain_ground.png";

import SnowEffect from "../assets/SnowEffect.png";
import { animateRain } from "../anime/rain";
import { animateSnow } from "../anime/snow";
import { animateBlizzard } from "../anime/blizzard";



import { RootState } from "../store/store";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';


const Weather = () => {
    const events = useSelector((state: RootState) => state.game.event);

    var isRaining = false;

    var isSnowing = false;
    var isBlizzarding = true;

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

    const rain = () => {
        console.log("raining");
        animateRain(document.getElementById(`.rain`)!);
    };
    const snow = () => {
        console.log("snowing");
        animateSnow(document.getElementById(`.snow`)!);
    };
    const blizzard = () => {
        console.log("blizzarding");
        animateBlizzard(document.getElementById(`.blizzard`)!);
    };

    return ( //ground and trees on z20
        <div className='z-10'>
            <div id={`.rain`} onLoad={rain} className='z-10 h-[200vh] top-[-100vh] absolute overflow-hidden '>
                {/* @ts-ignore */}
                {isRaining &&
                    <div>
                        <img src={RainEffect} className='h-[100vh]'></img>
                        <img src={RainEffect} className='h-[100vh] top-[100vh]'></img>
                    </div>
                }    
                {/* @ts-ignore */}
            </div>
            <div id={`.snow`} onLoad={snow} className='z-10 h-[200vh] top-[-100vh] absolute overflow-hidden '>
                {/* @ts-ignore */}
                {isSnowing &&
                    <div>
                        <img src={SnowEffect} className='h-[100vh]'></img>
                        <img src={SnowEffect} className='h-[100vh] top-[100vh]'></img>
                    </div>
                }
                {/* @ts-ignore */}
            </div>
            <div id={`.blizzard`} onLoad={blizzard} className='z-10 h-[200vh] top-[-100vh] absolute overflow-hidden '>
                {/* @ts-ignore */}
                {isBlizzarding &&
                <div>
                    <img src={SnowEffect} className='h-[100vh]'></img>
                    <img src={SnowEffect} className='h-[100vh] top-[100vh]'></img>
                </div>
                }
                {/* @ts-ignore */}
            </div>
        </div>
        






    );
};

export default Weather; 
