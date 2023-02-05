import Card from './Card';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';


const Cards = () => {
    const cards = useSelector((state: RootState) => state.game.cards);
    const n = useSelector((state: RootState) => state.game.tN);
    const p = useSelector((state: RootState) => state.game.tP);
    const water = useSelector((state: RootState) => state.game.tWater);
    return (
        <div className="absolute bottom-8 left-4 w-full ">
            <div className='flex text-white relative w-[36vw] h-52 z-50'>
                {cards.map((card, index) => (
                    <Card key={index} index={index} cardNumber={card} n={n} p={p} water={water} />
                ))}
            </div>
        </div>
    );
};

export default Cards;