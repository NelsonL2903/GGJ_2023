
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Stats from '../components/stats/Stats';
import Ground from '../components/Ground';
import Tree from "../components/Tree";
import Cards from '../components/Cards';
import DayCounter from '../components/DayCounter';
import { useEffect } from 'react';
import { takeTurn } from "../helpers/turnOrder";
import EndTurnButton from '../components/EndTurnButton';


const Game = () => {
    const gameState = useSelector((state: RootState) => state.game);
    const dispatch = useDispatch();

    useEffect(() => {
        takeTurn(dispatch, gameState);
    }, [gameState]);

    return (
        <div className='flex-1 flex flex-col justify-center'>
            <DayCounter />
            <Stats />
            <Ground />
            <Tree />
            <EndTurnButton />
            <Cards />
        </div>
    );
};

export default Game;