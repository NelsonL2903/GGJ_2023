import HalfWater from "../assets/cards/HalfWaterCard.png";
import AntidoteCard from "../assets/cards/antidote.png";
import CompostCard from "../assets/cards/compost.png";
import FullWater from "../assets/cards/FullWaterCard.png";
import NewHand from "../assets/cards/NewHand.png";
import Pesticide from "../assets/cards/Pesticide.png";
import RemoveCard from "../assets/cards/RemoveCard.png";
import "../styles/Cards.css";
import { useState } from "react";

interface Props {
    cardNumber: number;
    index: number;
}

const Card = (props: Props) => {
    const [image, setImage] = useState<any>(null);

    const CardImages = {
        "0": { image: CompostCard, name: "Full N20" },
        "1": { image: CompostCard, name: "Full N20" },
        "2": { image: CompostCard, name: "Full P205" },
        "3": { image: CompostCard, name: "Full P205" },
        "4": { image: CompostCard, name: "2/3 N20" },
        "5": { image: CompostCard, name: "2/3 N20" },
        "6": { image: CompostCard, name: "2/3 P205" },
        "7": { image: CompostCard, name: "2/3 P205" },
        "8": { image: HalfWater, name: "Half H20" },
        "9": { image: HalfWater, name: "Half H20" },
        "10": { image: RemoveCard, name: "Discard" },
        "11": { image: RemoveCard, name: "Discard" },
        "12": { image: NewHand, name: "Replace Hand" },
        "13": { image: NewHand, name: "Replace Hand" },
        "14": { image: NewHand, name: "50 N20: 50 P205" },
        "15": { image: NewHand, name: "Replace Hand" },
        "16": { image: AntidoteCard, name: "Antidote" },
        "17": { image: Pesticide, name: "Pesticide" },
    };

    const playCard = () => {
        console.log("play card");
        
    };

    return (
        <div className={`overflow-hidden relative hover:font-bold`} onClick={playCard} id={`.card${props.index}`}>
            {/* @ts-ignore */}
            <img src={CardImages[props.cardNumber.toString()].image} className="h-48 card">
            </img>
            {/* @ts-ignore */}
            <p className="text-white absolute bottom-7 left-8 text-small">{CardImages[props.cardNumber.toString()].name}</p>
        </div>

    );
};

export default Card;