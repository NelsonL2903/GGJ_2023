import { useEffect, useState } from "react";
import SunImg from "../assets/sun.png";
import { Sprite } from "@pixi/react";



const Sun = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    return (
        <Sprite image={SunImg} x={coords.x} y={coords.y} anchor={{ x: 0.5, y: 0.5 }} scale={0.4} />
    );
};

export default Sun;