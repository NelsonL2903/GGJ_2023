
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store'
import * as slice from '../store/slice';

const Game = () => {
    const state = useSelector((state: RootState) => state.game)
    const dispatch = useDispatch()
    
    return (
        <div>
            <h1>Game</h1>
        </div>
    )
}

export default Game