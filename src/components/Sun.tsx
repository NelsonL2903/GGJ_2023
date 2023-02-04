import { useEffect, useState } from "react";
import SunImg from "../assets/sun.png";
import { Sprite, useTick } from "@pixi/react";





const Sun = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [anchor, setAnchor] = useState({ x: 100, y: 100 });

    const angle = 1 * (Math.PI / 180);
    useTick(() => {
        setCoords((coords) => {
            return {
                x: Math.cos(angle) * (coords.x - anchor.x) - Math.sin(angle) * (coords.y - anchor.y) + anchor.x,
                y: Math.sin(angle) * (coords.x - anchor.x) + Math.cos(angle) * (coords.y - anchor.y) + anchor.y
            };
        });
    });

    return (
        <Sprite image={SunImg} x={coords.x} y={coords.y} anchor={{ x: 0.5, y: 0.5 }} scale={0.4} />
    );
};

export default Sun;