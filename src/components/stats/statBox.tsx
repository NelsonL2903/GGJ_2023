import { Typography } from "@material-ui/core";
import StatBar from "../../assets/StatBar.png";
interface Props {
  height: string;
  colour: string;
  type: string;
}

const StatBox = (props: Props) => {

  return (
    <div className="items-center justify-center flex flex-col">
      <div className="relative">
        <img src="StatBar2.png"></img>
        <div className={`ml-2 w-2 absolute bottom-0 ${props.colour} h-${props.height}`} />
      </div>
      <p className="text-white">
        {props.type}
      </p>
    </div >

  );
};


export default StatBox;
