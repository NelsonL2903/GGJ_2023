import { useEffect } from "react";
import { Container, Sprite, useApp } from "@pixi/react";
import Hill from "../assets/hill.png";
import sprites from "../pixis/sprites";

const Background = () => {
    const app = useApp();
    app.stage.addChild(sprites.background.graphics);
    app.stage.addChild(sprites.hill);
    useEffect(() => {
        sprites.background.animate();
    }, []);

    return null 
};

export default Background;