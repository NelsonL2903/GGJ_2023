import { Typography } from "@material-ui/core";
import Water from "../../assets/water.jpg";
interface Props {
  value: number;
  max: number;
  x: number;
  colour: string;
}

const StatBox = (props: any) => {
  let percent: number = (props.value / props.max) * 200;

  return (
    <div className="absolute right-0 bottom-0">
      STAT BOX
    </div>
  );
};

export default StatBox;
