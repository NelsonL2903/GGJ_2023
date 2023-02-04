import { Typography } from "@material-ui/core";
import Water from "../../assets/water.jpg";
interface Props {
  value: number;
  max: number;
  x: number;
  colour: string;
}

const StatBox = (props: Props) => {
  let percent: number = (props.value / props.max) * 200;

  return (
    <div
      className="absolute bottom-0 right-0"
      style={{
        width: 20,
        height: percent,
        backgroundColor: props.colour,
      }}
    >
      HP
    </div>
  );
};

export default StatBox;
