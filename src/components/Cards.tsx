import { useState } from 'react';
import Card from './Card';

const Cards = () => {
    const [cards, setCards] = useState([{ type: "HalfWater" }, { type: "HalfWater" }, { type: "HalfWater" }, { type: "HalfWater" }]);

    return (
        <div className="absolute bottom-16 left-4 w-full">
            <div className='flex text-white relative w-[40vw] h-52 z-10'>
                <Card  type={'HalfWater'} />
                <Card  type={'HalfWater'} />
                <Card  type={'HalfWater'} />
                <Card  type={'HalfWater'} />

                
                {/* {cards.map(card => (
                    <Card key={card} type={card.type} />
                ))} */}
            </div>

        </div>
    );
};

export default Cards;