import { useState, useEffect } from 'react';
import './App.css';
import { Stage, Container, Sprite, Text } from '@pixi/react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Stage>
      <Sprite
        image="https://pixijs.io/pixi-react/img/bunny.png"
        x={400}
        y={270}
        anchor={{ x: 0.5, y: 0.5 }}
      />
    </Stage>
  );
}

export default App;
