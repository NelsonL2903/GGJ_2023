import { useState } from 'react';
import { Stage, Container, Sprite, Text,  } from '@pixi/react';
import Sun from './Sun';
import Background from './Background';
const Game = () => {
    const [count, setCount] = useState(0);
    return (
        <Stage >
            <Background />
            <Sun />
        </Stage>
    );

};

export default Game;