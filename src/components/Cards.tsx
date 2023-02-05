import { useState } from 'react';
import Card from './Card';

const Cards = () => {
    const [cards, setCards] = useState([{ type: "HalfWater" }, { type: "HalfWater" }, { type: "HalfWater" }, { type: "HalfWater" }]);

    return (
        <div className="absolute bottom-4 left-4 w-full">
            <div className='flex '>
                {cards.map(card => (
                    <Card key={card} type={card.type} />
                ))}
            </div>

        </div>
    );
};

export default Cards;