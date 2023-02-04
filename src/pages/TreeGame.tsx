
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import * as slice from '../store/slice';
import Stats from '../components/stats/Stats';

const Game = () => {
    const state = useSelector((state: RootState) => state.game);
    const dispatch = useDispatch();

    return (
        <div >
            <Stats />
        </div>
    );
};

export default Game;