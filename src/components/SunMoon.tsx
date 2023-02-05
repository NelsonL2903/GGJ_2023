import anime from "animejs";
import { animateSunMoon, animateBackground } from "../anime/animations";
import { useEffect } from "react";
import Sun from "/Sun.png";
import Moon from "/Moon.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";



const SunMoon = () => {
    const turnNumber = useSelector((state: RootState) => state.game.turnNumber);
    const animateMoon = () => {
        animateSunMoon(document.getElementById("sun-moon")!);
    };

    useEffect(() => {
        animateMoon();

    }, []);

    return (
        <div className="absolute top-24 -left-20 z-10 ">
            <div id="sun-moon" >
                {
                    turnNumber % 2 === 0 ?
                        <img src={Sun} className="h-12" /> :
                        <img src={Moon} className="h-12" />
                }
            </div>
        </div>
    );
};

export default SunMoon;