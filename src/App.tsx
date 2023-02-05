import "./index.css";
import Background from "./components/Background";
import Homescreen from "./pages/Homescreen";
import Game from "./pages/TreeGame";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import StatBox from "./components/stats/statBox";
import VolumeToggle from "./components/VolumeToggle";

function App() {
  const gameState = useSelector((state: RootState) => state.game.gameState)

  return (
    <div className="App">
      {gameState === "home" && <Homescreen />}
      {gameState === "start" && <Background><Game /></Background>}
      <div className="absolute right-4 top-4 z-1">
        <VolumeToggle />
      </div>
    </div>
  );
}

export default App;
