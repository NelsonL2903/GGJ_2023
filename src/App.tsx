import "./index.css";
import Background from "./components/Background";
import Homescreen from "./pages/Homescreen";
import Game from "./pages/TreeGame";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import VolumeToggle from "./components/VolumeToggle";
import { useEffect } from "react";

function App() {
  const gameState = useSelector((state: RootState) => state.game.gameState);

  useEffect(() => {
    document.body.classList.add("no-scroll");
  }, []);

  return (
    <div className="flex">

      <div className="bg-black w-1/4 height-[100vh] z-50"></div>
      <div className="flex-grow-0 w-[900px] relative">
        {gameState === "home" &&
          <div>
            <Background >
              <Homescreen />
            </Background>
          </div>

        }
        {gameState === "start" &&
          <Background>
            <Game />
          </Background>
        }

        <div className="absolute right-4 top-4 z-1">
          <VolumeToggle />
        </div>
      </div>
      <div className="bg-black w-1/4 height-[100vh] z-50"></div>
    </div>
  );
}

export default App;


//Q: How do I make 3 colums with the middle column having proiotry in tailwind
//A: https://stackoverflow.com/questions/65011277/tailwind-css-3-columns-with-middle-column-having-priority