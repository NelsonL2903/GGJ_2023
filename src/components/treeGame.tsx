
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import * as slice from '../store/slice';
import StatBox from './stats/statBox';

const Game = () => {
    const state = useSelector((state: RootState) => state.game);
    const dispatch = useDispatch();

    return (
        <div className='relative'>

        </div>
    );
};

export default Game;