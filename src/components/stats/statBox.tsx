import { Typography } from "@material-ui/core";
import StatBar from "../../assets/StatBar.png";
import "./stats.css";
interface Props {
  height: string;
  colour: string;
  type: string;
}

const StatBox = (props: Props) => {

  return (
    <div className="items-center justify-center flex flex-col">
      <div className="relative">
        <img src="StatBar.png" className="w-12"></img>
        <div className={`ml-[23px] w-2 absolute bottom-6 opacity-50 ${props.colour} h-${props.height}`} />
      </div>
      <p className="text-white text-3xl">
        {props.type}
      </p>
    </div >

  );
};


export default StatBox;
