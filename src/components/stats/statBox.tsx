import { Typography } from "@material-ui/core";
import StatBar from "../../assets/StatBar.png";
import "./stats.css";
import { useEffect } from "react";
interface Props {
  height: number;
  colour: string;
  type: string;
}

const StatBox = (props: Props) => {
  const { height, colour, type } = props;

  useEffect(() => {
    const element = document.getElementById(type);
    if (element) {
      element.style.height = `${height}%`;
    }
  }, [height, type]);

  return (
    <div className="items-center justify-center flex flex-col">
      <div className="relative">
        <img src="StatBar.png" className="w-12"></img>
        <div className={`ml-[23px] w-2 absolute bottom-6 opacity-50 ${props.colour}`} id={type} />
      </div>
      <p className="text-white text-3xl">
        {props.type}
      </p>
    </div >

  );
};


export default StatBox;
