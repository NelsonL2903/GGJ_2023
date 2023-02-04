import { useState } from 'react';
import { Stage, Container, Sprite, Text, } from '@pixi/react';
import Sun from './Sun';

const Game = () => {
    const [count, setCount] = useState(0);
    return (
        <Stage>
            <Sun/>
        </Stage>
    );

};

export default Game;