//variance of normal distribution for resource availability
const functionWidth : number = 150;

//slope of linear even probability function
const eventCoefficient : number = 0.5;

//resource status bin widths
//one times this number gives the upper limit on low status of a resource and two times gives upper limit of mid status
const waterInterval : number = 6;
const mineralInterval : number = 4;

//asymmptotic limit for minimum basic resource availability
const minWater : number = 4;
const minMineral : number = 2;

//usage of resource per turn
const waterUsagePerTurn : number = 4;
const mineralUsagePerTurn : number = 3;

//HP gain per turn, loss per low resource
const HPgain : number = 15;
const HPloss : number = 4;

//environmental resources functions
function envWaterFunc(turnNumber : number, modifier : number) : number {
    return (3 * waterInterval) * (1 / (functionWidth * (2 * Math.PI) ** 0.5)) * Math.exp((-1) * turnNumber ** 2/(2 * functionWidth ** 2)) + minWater + modifier;
  }

  function envMineralsFunc(turnNumber : number,  modifier : number) : number {
    return (3 * mineralInterval) * (1 / (functionWidth * (2 * Math.PI) ** 0.5)) * Math.exp((-1) * turnNumber ** 2/(2 * functionWidth ** 2)) + minMineral + modifier;
  }

  function sunlightFunc(turnNumber : number) : boolean {
    return turnNumber % 2 == 1; 
  }

  //tree resources functions
  function treeWaterFunc(treeWater : number, envWater : number) : number {
    return treeWater + envWater;
  }

  function mineralWaterFunc(treeMinerals : number, envMinerals : number) : number {
    return treeMinerals + envMinerals;
  }
  
  //updating HP
  function HPFunc(currentHP : number, treeNitrogen : number, treePhosphorus : number, treeWater : number, turnNumber : number, modifier : number) : number {
    //current hp + (negative effect of individual resources) + (positive effect of resources if sunlight) + modifier
    let x : number = currentHP 
                    - ( ((treeNitrogen < mineralInterval)? 1 : 0) + ((treeNitrogen < mineralInterval)? 1 : 0) + ((treeWater < waterInterval)? 1 : 0) ) * HPloss
                    + ( ((treeNitrogen > mineralInterval)? 1 : 0) * ((treeNitrogen > mineralInterval)? 1 : 0) * ((treeWater > waterInterval)? 1 : 0) ) * HPgain
                    + modifier;
    return Math.max(0 , Math.min(100, x));
  }
  


  export { envWaterFunc, envMineralsFunc, sunlightFunc, treeWaterFunc, mineralWaterFunc, HPFunc };