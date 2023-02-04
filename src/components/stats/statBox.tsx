import { Typography } from "@material-ui/core";
import StatBar from "../../assets/StatBar.png";
interface Props {
  value: number;
  max: number;
  x: number;
  colour: string;
  type: string;
}

const StatBox = (props: Props) => {
  let percent: number = (props.value / props.max) * 200;

  return (
    <div className="items-center justify-center flex flex-col">
      <img src={StatBar} className="w-6"></img>
      <p className="text-white">
        {props.type}
      </p>
    </div >

  );
};

export default StatBox;
