
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Stats from '../components/stats/Stats';
import Ground from '../components/Ground';
import Tree from "../components/Tree";
import Cards from '../components/Cards';
import DayCounter from '../components/DayCounter'
import Weather from '../components/Weather';
import { useEffect } from 'react';
import { takeTurn } from "../helpers/turnOrder";
import EndTurnButton from '../components/EndTurnButton';
import SunMoon from '../components/SunMoon';
import { resetGame } from '../store/slice';


const Game = () => {
    const gameState = useSelector((state: RootState) => state.game);
    const dispatch = useDispatch();

    useEffect(() => {
        takeTurn(dispatch, gameState);
    }, [gameState.turnNumber]);

    return (
        <div className='flex-1 flex flex-col justify-center'>
            <DayCounter />
            <Ground />
            <Tree />
            {gameState.season !== 4 ?
                <>
                    <Stats />
                    <Weather />
                    <EndTurnButton />
                    <SunMoon />
                    <Cards />
                </>
                :
                <div className='top-4 justify-center items-center w-full absolute z-20'>
                    <p className='text-9xl font-bold text-black'>Game Over</p>
                    <button className="p-2 cursor-pointer justify-center items-center w-full" onClick={() => dispatch(resetGame())}>
                        <p className="text-white text-5xl">
                            Main menu
                        </p>
                    </button>
                </div> 
            }
        </div>
    );
};

export default Game;