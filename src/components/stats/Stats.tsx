import StatBox from "./statBox";

const StatIcons = () => {
  // health, water, nitrgoen, phosophorus
  return (
    <div className="flex absolute right-8 bottom-8 w-96 justify-between">
      <StatBox height={"16"} colour="bg-red-500" type="health"></StatBox>
      <StatBox height={"24"} colour="bg-blue-500" type="water"></StatBox>
      <StatBox height={"12"} colour="bg-white" type="nitrgoen"></StatBox>
      <StatBox height={"16"} colour="bg-green-500" type="phosophorus"></StatBox>
    </div>



  );
};

export default StatIcons;
