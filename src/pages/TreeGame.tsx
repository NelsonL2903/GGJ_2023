
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import * as slice from '../store/slice';
import Stats from '../components/stats/Stats';
import Ground from '../components/Ground';
import Tree from "../components/Tree";

const Game = () => {
    const state = useSelector((state: RootState) => state.game);
    const dispatch = useDispatch();

    return (
        <div className='flex-1'>
            <Stats />
            <Ground />
            <Tree />
        </div>
    );
};

export default Game;