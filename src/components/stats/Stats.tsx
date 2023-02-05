import StatBox from "./statBox";
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

const StatIcons = () => {
  // health, water, nitrgoen, phosophorus
  const health = useSelector((state: RootState) => state.game.life);
  const water = useSelector((state: RootState) => state.game.tWater);
  const nitrogen = useSelector((state: RootState) => state.game.tN);
  const phosophorus = useSelector((state: RootState) => state.game.tP);

  const convertToPercent = (value: number) => {
    return (value / 100) * 80;
  };

  return (
    <div className="flex absolute right-8 bottom-8 w-56 justify-between z-50">
      <StatBox height={convertToPercent(health)} colour="bg-red-500" type="HP"></StatBox>
      <StatBox height={convertToPercent(water / 18 * 100)} colour="bg-blue-500" type="H20"></StatBox>
      <StatBox height={convertToPercent(nitrogen / 12 * 100)} colour="bg-white" type="N20"></StatBox>
      <StatBox height={convertToPercent(phosophorus / 12 * 100)} colour="bg-green-500" type="P205"></StatBox>
    </div>
  );
};

export default StatIcons;
