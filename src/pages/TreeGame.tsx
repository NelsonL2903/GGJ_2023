
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


const Game = () => {
    const gameState = useSelector((state: RootState) => state.game);
    const dispatch = useDispatch();

    useEffect(() => {
        takeTurn(dispatch, gameState);
    }, [gameState.turnNumber]);

    return (
        <div className='flex-1 flex flex-col justify-center'>
            <DayCounter />
            <Stats />
            <Ground />
            <Tree />
            <Weather />
            <EndTurnButton />
            <SunMoon />
            <Cards />

            
        </div>
    );
};

export default Game;