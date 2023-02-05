import anime from "animejs";
import { animateSunMoon } from "../anime/animations";
import { useEffect } from "react";

const SunMoon = () => {
    const path = anime.path("#sun-moon-path");

    const animateMoon = () => {
        animateSunMoon(document.getElementById("sun-moon-path")!, path);
    };

    useEffect(() => {
        animateMoon();
    }, []);


    return (
        <div>
            <svg id="sun-moon-path" width="800" height="600">
                <path id="sun-moon-path" d="M 50 300 C 50 100 300 50 400 50 C 550 50 750 100 750 300 " />
            </svg>
            <div className="sun-moon" onClick={animateMoon} >Test</div>
        </div>
    );
};

export default SunMoon;