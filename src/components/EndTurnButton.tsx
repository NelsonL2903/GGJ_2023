import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { useDispatch } from 'react-redux';
import { incrementTurnNumber } from '../store/slice';

const EndTurnButton = () => {
    const dispatch = useDispatch();

    const endTurn = () => {
        dispatch(incrementTurnNumber());
    }

    return (
        <div className='absolute bottom-64 right-8 z-1'>
            <button className="p-2 cursor-pointer" onClick={endTurn}>
                <p className="text-white text-lg">
                    End Turn <DoubleArrowIcon />
                </p>
            </button>
        </div>
    );
};

export default EndTurnButton;