import { useEffect, useState } from 'react';
import "../styles/DayNight.css";

const Background = (props: any) => {
    useEffect(() => {
        let res = [];
        for (let i = 0; i < 100; i++) {
            res.push({
                top: Math.random() * window.innerHeight,
                left: Math.random() * window.innerWidth
            });
        }
        for (var i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.style.top = (Math.random() * window.innerHeight) + 'px';
            star.style.left = (Math.random() * window.innerWidth) + 'px';
            star.className = 'star';
            document.getElementById("stars")?.appendChild(star);
        }
    }, []);

    return (
        <div id='container'>
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
