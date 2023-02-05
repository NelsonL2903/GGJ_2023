import HalfWaterCard from "../../public/HalfWaterCard.png";
import "../styles/Cards.css"

const Card = (props: any) => {
    return (
        <div className={`mx-2 overflow-hidden `}>
            {props.type === "HalfWater" &&
                <img src={HalfWaterCard} className="h-48 card"></img>}
        </div>

    );
};

export default Card;