import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const EndGameButton = () => {

    return (
        <div className='absolute bottom-64 right-8 '>
            <button className="p-2 cursor-pointer">
                <p className="text-white text-lg">
                    End Turn <DoubleArrowIcon />
                </p>
            </button>
        </div>
    );
};

export default EndGameButton;