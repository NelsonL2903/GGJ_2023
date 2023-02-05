import "../index.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useDispatch } from "react-redux";
import { setGameState } from "../store/slice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center relative">
      <h1 className="font-bold text-9xl text-orange-900">Old Oak</h1>
      <div
        className="flex justify-center items-center text-green-600 bg-orange-900 p-4 rounded-lg cursor-pointer"
        onClick={() => dispatch(setGameState("start"))}
      >
        <p className="text-4xl text-green-600">Start</p>
        <PlayArrowIcon className="text-4xl" />
      </div>
      <div className="flex flex-col justify-center items-center text-orange-900 p-4 rounded-lg cursor-default">
        <p className="text-orange-900 text-3xl">Created by</p>
        <p className="text-orange-900 text-3xl">Ryan Eggens, Nelson Loop,</p>
        <p className="text-orange-900 text-3xl">Hayden Parsons,</p>
        <p className="text-orange-900 text-3xl">Alexander Tsarapkine, Benjamin Zhao</p>
      </div>
    </div>
  );
};

export default HomeScreen;
