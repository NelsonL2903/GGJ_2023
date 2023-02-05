import HalfWaterCard from "../assets/HalfWaterCard.png";

const Card = (props: any) => {
    return (
        <div className="">
            {props.type === "HalfWater" &&
                <img src={HalfWaterCard} className="h-[100vh] -rotate-[2deg]"></img>}
        </div>

    );
};

export default Card;