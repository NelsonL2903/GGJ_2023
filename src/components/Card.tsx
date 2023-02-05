import HalfWaterCard from "../assets/cards/HalfWaterCard.png";
import AntidoteCard from "../assets/cards/antidote.png";
import CompostCard from "../assets/cards/compost.png";
import FullWaterCard from "../assets/cards/FullWaterCard.png";
import NewHand from "../assets/cards/NewHand.png";
import Pesticide from "../assets/cards/Pesticide.png";
import RemoveCard from "../assets/cards/RemoveCard.png";
import "../styles/Cards.css";

const Card = (props: any) => {
    const cardNumber = props.cardNumber;
    switch (cardNumber) {
        //100n
        case (0 || 1):
            
            break;
        //100p
        case (2 || 3):

            break;
        //66n
        case (4 || 5):

            break;
        //66p
        case (6 || 7):

            break;
        //half water
        case (8 || 9):

            break;
        //discard
        case (10 || 11):
            //NEEDS USER INTERACTION -----------------------------------------------------********************************
            break;
        //replace hand
        case (12 || 13):

            break;
        //50/50
        case 14:

            break;
        //large water
        case 15:

            break;
        //antidote
        case 16:

            break;
        //pesticide
        case 17:

            break;
    }

    return (

        <div className={`mx-2 overflow-hidden `}>
            {props.type === "HalfWater" &&
                <img src={HalfWaterCard} className="h-48 card"></img>}
        </div>

    );
};

export default Card;