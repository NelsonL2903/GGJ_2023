import HalfWater from "/HalfWaterCard.png";
import AntidoteCard from "/antidote.png";
import CompostCard from "/compost.png";
import NewHand from "/newhand.png";
import Pesticide from "/pesticide.png";
import RemoveCard from "/removeCard.png";
import { animatePlayCard, animateRemoveCard } from "../anime/animations";
import { useDispatch } from "react-redux";
import { setTN, setTP, setTWater } from "../store/slice";

interface Props {
  cardNumber: number;
  index: number;
  n: number;
  p: number;
  water: number;
}

const Card = (props: Props) => {
  const dispatch = useDispatch();

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

  const cardSelected = () => {
    playCard(props.index);
    removeCard(props.index);
  };

  const playCard = (index: number) => {
    animatePlayCard(document.getElementById(`.card${index}`)!, index, dispatch);
    console.log(props.cardNumber)
    switch (props.cardNumber) {
      case 0:
      case 1:
        dispatch(setTN(12))
        break;
      case 2:
      case 3:
        dispatch(setTP(12))
        break;
      case 4:
      case 5:
        dispatch(setTN(props.n + 8))
        break;
      case 6:
      case 7:
        dispatch(setTP(props.p + 8))
        break;
      case 8:
      case 9:
        dispatch(setTWater(props.water + 9))
    }
  };

  const removeCard = (index: number) => {
    for (var i = 1; i < 4; ++i) {
      animateRemoveCard(
        document.getElementById(`.card${(index + i) % 4}`)!,
        (index + i) % 4,
        dispatch
      );
    }
  };

  return (
    <div
      className={` relative hover:font-bold`}
      onClick={cardSelected}
      id={`.card${props.index}`}
    >
      {/* @ts-ignore */}
      <img
        src={CardImages[props.cardNumber.toString()].image}
        alt="card"
        className="h-48 card"
      ></img>
      {/* @ts-ignore */}
      <p className="text-white absolute bottom-16 left-10 text-small">
        {CardImages[props.cardNumber.toString()].name}
      </p>
    </div>
  );
};

export default Card;
