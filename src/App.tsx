import "./index.css";
import Background from "./components/Background";
import Homescreen from "./pages/Homescreen";
import Game from "./pages/TreeGame";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import StatBox from "./components/stats/statBox";
import VolumeToggle from "./components/VolumeToggle";

function App() {
  const gameState = useSelector((state: RootState) => state.game.gameState);

  return (
    <div className="flex">
      <div className="w-1/4 h-[100vh] bg-black"></div>
      <div className="flex-grow-0 w-full relative">
        {gameState === "home" && <Homescreen />}
        {gameState === "start" &&
          <Background>
            <Game />
          </Background>
        }
        <div className="absolute right-4 top-4 z-1">
          <VolumeToggle />
        </div>
      </div>
      <div className="h-[100vh] w-1/4 bg-black"></div>
    </div>
  );
}

export default App;


//Q: How do I make 3 colums with the middle column having proiotry in tailwind
//A: https://stackoverflow.com/questions/65011277/tailwind-css-3-columns-with-middle-column-having-priority