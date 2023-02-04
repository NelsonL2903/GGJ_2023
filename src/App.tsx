import { Stage } from '@pixi/react';
import Background from './components/Background';
import Sun from './components/Sun';

function App() {
  return (
    <Stage>
      <Background />
      <Sun />
    </Stage>
  );
}

export default App;
