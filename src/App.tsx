import { useState, useEffect } from 'react';
import { Stage, Container, Sprite, Text, } from '@pixi/react';
import { TextStyle } from '@pixi/text';
import Game from './components/Game';

function App() {
  return (
    <div >
      <Game />
    </div>
  );
}

export default App;
