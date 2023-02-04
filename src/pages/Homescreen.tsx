import "../index.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VolumeToggle from "../components/LeftMenu";
import { useDispatch } from "react-redux";
import { setGameState } from "../store/slice";

const HomeScreen = () => {
    const dispatch = useDispatch()
    return (

        <div className="h-[100vh] flex flex-col justify-center items-center relative bg-blue-400">
            <div className="absolute flex right-4 top-4">
                <VolumeToggle />
            </div>
            <h1 className="font-bold text-9xl text-orange-900">Old Oak</h1>
            <div className="flex justify-center items-center text-green-900 bg-orange-900 p-4 rounded-lg cursor-pointer"
                onClick={() => dispatch(setGameState('start'))}>
                <p className="text-4xl text-green-900">Start</p>
                <PlayArrowIcon className="text-4xl" />
            </div>
        </div>
    );
};

export default HomeScreen;