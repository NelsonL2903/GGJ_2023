import { useState, useEffect } from 'react';
import './App.css';
import {app} from './pixi/main';


function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    app.start();
  });
  return (
    <div className="App">

    </div>
  );
}

export default App;
