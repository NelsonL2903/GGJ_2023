
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import * as slice from '../store/slice';
import Stats from '../components/stats/Stats';
import Ground from '../components/Ground';
import Tree from "../components/Tree";
import Cards from '../components/Cards';
import DayCounter from '../components/DayCounter';
import { useEffect } from 'react';
import { takeTurn } from "../helpers/turnOrder";

const Game = () => {
    const game = useSelector((state: RootState) => state.game);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log(game);
    // }, [game]);

    useEffect(() => {
        console.log("STARTING GAME 🏁");

        // Main Game loop
        setInterval(() => {
            dispatch(slice.incrementDay());
            takeTurn(game.day, dispatch);
        }, 2000);





    }, []);



    return (
        <div className='flex-1 flex flex-col justify-center'>
            <DayCounter />
            <Stats />
            <Ground />
            <Tree />
            <Cards />
        </div>
    );
};

export default Game;