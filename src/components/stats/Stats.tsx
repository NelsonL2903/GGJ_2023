import StatBox from "./statBox";

const StatIcons = () => {
  // health, water, nitrgoen, phosophorus
  return (
    <div className="flex absolute right-8 bottom-8 w-56 justify-between">
      <StatBox height={"16"} colour="bg-red-500" type="HP"></StatBox>
      <StatBox height={"24"} colour="bg-blue-500" type="H20"></StatBox>
      <StatBox height={"16"} colour="bg-white" type="N20"></StatBox>
      <StatBox height={"16"} colour="bg-green-500" type="P205"></StatBox>
    </div>



  );
};

export default StatIcons;
