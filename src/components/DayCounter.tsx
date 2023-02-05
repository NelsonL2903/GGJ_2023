import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const DayCounter = () => {
    const day = useSelector((state: RootState) => state.game.day);

    return (
        <div className='left-4 top-4  absolute'>
                <p className='text-2xl font-bold text-white'>Day: {day}</p>
        </div>
    );
};

export default DayCounter;
