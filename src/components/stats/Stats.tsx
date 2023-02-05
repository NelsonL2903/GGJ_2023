import StatBox from "./statBox";
import { useEffect } from "react";
import { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { setLife } from "../../store/slice";

const StatIcons = () => {
  // health, water, nitrgoen, phosophorus
  const health = useSelector((state: RootState) => state.game.life);
  const water = useSelector((state: RootState) => state.game.tWater);
  const nitrogen = useSelector((state: RootState) => state.game.tN);
  const phosophorus = useSelector((state: RootState) => state.game.tP);
  const dispatch = useDispatch()

  const convertToPercent = (value: number) => {
    const val = (value / 100) * 80;
    return val
  };

  useEffect(() => {
    console.log(health);
    dispatch(setLife(health-12))
    console.log(health);

  }, []);

  return (
    <div className="flex absolute right-8 bottom-8 w-56 justify-between">
      <StatBox height={convertToPercent(health)} colour="bg-red-500" type="HP"></StatBox>
      <StatBox height={convertToPercent(water)} colour="bg-blue-500" type="H20"></StatBox>
      <StatBox height={convertToPercent(nitrogen)} colour="bg-white" type="N20"></StatBox>
      <StatBox height={convertToPercent(phosophorus)} colour="bg-green-500" type="P205"></StatBox>
    </div>



  );
};

export default StatIcons;
