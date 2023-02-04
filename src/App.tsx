import { useState, useEffect } from 'react';
import { Stage, Container, Sprite, Text, } from '@pixi/react';
import { TextStyle } from '@pixi/text';

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
      <Text text={`You clicked ${count} times`} x={400} y={50} anchor={{ x: 0.5, y: 0.5 }}  />
    </Stage>
  );
}

export default App;
