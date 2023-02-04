import StatBox from "./statBox";

const StatIcons = () => {
  // health, water, nitrgoen, phosophorus
  return (
    <div className="flex absolute right-8 bottom-8 w-96 justify-between">
      <StatBox value={100} max={100} x={1300} colour="#ff0000" type="health"></StatBox>
      <StatBox value={100} max={100} x={1300} colour="#ff0000" type="water"></StatBox>
      <StatBox value={100} max={100} x={1300} colour="#ff0000" type="nitrgoen"></StatBox>
      <StatBox value={100} max={100} x={1300} colour="#ff0000" type="phosophorus"></StatBox>
    </div>



  );
};

export default StatIcons;
