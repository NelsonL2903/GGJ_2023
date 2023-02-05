import anime from "animejs";
import { animateSunMoon, animateBackground } from "../anime/animations";
import { useEffect } from "react";
import Sun from "../assets/Sun.png";
import Moon from "../assets/Moon.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";



const SunMoon = () => {
    const turnNumber = useSelector((state: RootState) => state.game.turnNumber);
    const animateMoon = () => {
        animateSunMoon(document.getElementById("sun-moon")!);
    };

    useEffect(() => {
        animateMoon();
        
    }, [turnNumber]);

    return (
        <div className="absolute top-24 left-0 z-10 ">
            <div id="sun-moon" onClick={animateMoon}>
                {
                    turnNumber % 2 === 0 ?
                    <img src={Moon} className="h-12" /> :
                    <img src={Sun} className="h-12" />
                }
            </div>
        </div>        
    );
};

export default SunMoon;