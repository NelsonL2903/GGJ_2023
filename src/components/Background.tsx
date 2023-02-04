import { useEffect, useState } from 'react';
import "../styles/DayNight.css";
import VolumeToggle from "./LeftMenu";

const Background = (props: any) => {
    useEffect(() => {        
        for (var i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.style.top = (Math.random() * window.innerHeight) + 'px';
            star.style.left = (Math.random() * window.innerWidth) + 'px';
            star.className = 'star';
            document.getElementById("stars")?.appendChild(star);
        }
    }, []);

    return (
        <div id='container'>
            <div className="">
                <VolumeToggle />
            </div>
            <div>
                {props.children}
            </div>
            <div id="stars"></div>
            <div id="asters">
                <div className='sun'></div>
                <div className="moon"></div>
            </div>
        </div>
    );
};

export default Background;
