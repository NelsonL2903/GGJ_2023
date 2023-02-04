import "./index.css";
import Background from "./components/Background";
import Homescreen from "./pages/Homescreen";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import Game from "./components/treeGame";
import StatBox from "./components/stats/statBox";

function App() {
  const gameState = useSelector((state: RootState) => state.game.gameState)
  
  if(gameState === "home") {
    return (
      <Homescreen/>
    );
  } else if(gameState === "start") {
    return (
      <Background>
        <Game/>
      </Background>
    );
  }
}

export default App;
