
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import * as slice from '../store/slice';
import Stats from '../components/stats/Stats';
import Ground from '../components/Ground';
import Tree from "../components/Tree";
import Cards from '../components/Cards';

const Game = () => {
    const state = useSelector((state: RootState) => state.game);
    
    console.log(state);


    return (
        <div className='flex-1 flex flex-col justify-center'>
            <Stats />
            <Ground />
            <Tree />
            <Cards />
        </div>
    );
};

export default Game;