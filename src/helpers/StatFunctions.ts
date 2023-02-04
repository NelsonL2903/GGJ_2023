//variance of normal distribution for resource availability
const functionWidth : number = 150;

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
    return Math.max((3 * waterInterval)  * Math.exp((-1) * turnNumber ** 2/(2 * functionWidth ** 2)) + minWater + modifier, 0);
  }

  function envMineralsFunc(turnNumber : number,  modifier : number) : number {
    return Math.max((3 * mineralInterval) * Math.exp((-1) * turnNumber ** 2/(2 * functionWidth ** 2)) + minMineral + modifier, 0);
  }

  function sunlightFunc(turnNumber : number) : boolean {
    return (turnNumber % 2 == 1); 
  }

  //tree resources absorption functions
  function treeWaterAbsorptionFunc(treeWater : number, envWater : number) : number {
    return Math.min(treeWater + envWater, 3 * waterInterval);
  }

  function treeMineralAbsorptionFunc(treeMinerals : number, envMinerals : number) : number {
    return Math.min(treeMinerals + envMinerals, 3 * mineralInterval);
  }

  //tree resources consumption function
  function treeWaterConsumptionFunc(treeWater : number) : number {
    return Math.max(treeWater - waterUsagePerTurn, 0);
  }

  function treeMineralConsumptionFunc(treeMinerals : number) : number {
    return Math.max(treeMinerals - mineralUsagePerTurn, 0);
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
  
  //absorb nutrients. stats array contains in order : water, nitrogen, phosphorus, HP env array contains the same for the environment
  function absorbFunc(stats : number[], env : number[]) : void {
    stats[0] = treeWaterAbsorptionFunc(stats[0], env[0]);
    stats[1] = treeMineralAbsorptionFunc(stats[1], env[1]);
    stats[2] = treeMineralAbsorptionFunc(stats[2], env[2]);
  }

  //use resources and update HP
  function resourceAndHPFunc(stats : number[], turnNumber : number, modifier : number) : void {
    HPFunc(stats[3], stats[1], stats[2], stats[0], turnNumber, modifier);
    stats[0] = treeWaterConsumptionFunc(stats[0]);
    stats[1] = treeMineralConsumptionFunc(stats[1]);
    stats[2] = treeMineralConsumptionFunc(stats[2]);
  }

  export { envWaterFunc, envMineralsFunc, sunlightFunc, treeWaterAbsorptionFunc, treeMineralAbsorptionFunc, treeWaterConsumptionFunc,
             treeMineralConsumptionFunc, HPFunc, absorbFunc, resourceAndHPFunc };