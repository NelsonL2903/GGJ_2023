import { useSelector, useDispatch } from "react-redux";
import * as slice from "../store/slice";
import { RootState } from "../store/store";

//variance of normal distribution for resource availability
const functionWidth: number = 150;

//resource status bin widths
//one times this number gives the upper limit on low status of a resource and two times gives upper limit of mid status
const waterInterval: number = 6;
const mineralInterval: number = 4;

//asymmptotic limit for minimum basic resource availability
const minWater: number = 4;
const minMineral: number = 2;

//usage of resource per turn
const waterUsagePerTurn: number = 4;
const mineralUsagePerTurn: number = 3;

//HP gain per turn, loss per low resource
const HPgain: number = 15;
const HPloss: number = 4;

//environmental resources functions
function envWaterFunc(turnNumber: number, modifier: number): number {
  return Math.max((3 * waterInterval) * Math.exp((-1) * turnNumber ** 2 / (2 * functionWidth ** 2)) + minWater + modifier, 0);
}

function envMineralsFunc(turnNumber: number, modifier: number): number {
  return Math.max((3 * mineralInterval) * Math.exp((-1) * turnNumber ** 2 / (2 * functionWidth ** 2)) + minMineral + modifier, 0);
}

//tree resources absorption functions
function treeWaterAbsorptionFunc(treeWater: number, envWater: number): number {
  return Math.min(treeWater + envWater, 3 * waterInterval);
}

function treeMineralAbsorptionFunc(treeMinerals: number, envMinerals: number): number {
  return Math.min(treeMinerals + envMinerals, 3 * mineralInterval);
}

//tree resources consumption function
function treeWaterConsumptionFunc(treeWater: number, modifier: number): number {
  return Math.max(treeWater - waterUsagePerTurn - modifier, 0);
}

function treeMineralConsumptionFunc(treeMinerals: number, modifier: number): number {
  return Math.max(treeMinerals - mineralUsagePerTurn - modifier, 0);
}

const HPFunc = () => {
  const currentHp = useSelector((state: RootState) => state.game.life);
  const treeNitrogen = useSelector((state: RootState) => state.game.tN);
  const treePhosphorus = useSelector((state: RootState) => state.game.tP);
  const treeWater = useSelector((state: RootState) => state.game.tWater);
  const turnNumber = useSelector((state: RootState) => state.game.turnNumber);
  const dispatch = useDispatch();

  let multiplier = 0;
  treeNitrogen < mineralInterval && multiplier++;
  treePhosphorus < mineralInterval && multiplier++;
  treeWater < waterInterval && multiplier++;

  const hpLoss = multiplier * HPloss

  multiplier = 0;
  treeNitrogen > mineralInterval * 2 && treePhosphorus > mineralInterval * 2 && treeWater > waterInterval * 2 && multiplier++;

  const hpGain = multiplier * HPgain * (turnNumber % 2)

  dispatch(slice.setLife(currentHp - hpLoss + hpGain))
}

const updateEnv = (): void => {
  const turnNumber = useSelector((state: RootState) => state.game.turnNumber);
  const envNitrogen = useSelector((state: RootState) => state.game.aN);
  const envPhosphorus = useSelector((state: RootState) => state.game.aP);
  const envWater = useSelector((state: RootState) => state.game.aWater);
  const dispatch = useDispatch();

  dispatch(slice.setAWater(envWaterFunc(turnNumber, 1)));
  dispatch(slice.setAN(envMineralsFunc(turnNumber, 1)));
  dispatch(slice.setAP(envMineralsFunc(turnNumber, 1)));
}

//absorb nutrients. stats array contains in order : water, nitrogen, phosphorus, HP env array contains the same for the environment
const absorbFunc = (): void => {
  const treeNitrogen = useSelector((state: RootState) => state.game.tN);
  const treePhosphorus = useSelector((state: RootState) => state.game.tP);
  const treeWater = useSelector((state: RootState) => state.game.tWater);
  const envNitrogen = useSelector((state: RootState) => state.game.aN);
  const envPhosphorus = useSelector((state: RootState) => state.game.aP);
  const envWater = useSelector((state: RootState) => state.game.aWater);
  const dispatch = useDispatch();

  dispatch(slice.setTWater(treeWaterAbsorptionFunc(treeWater, envWater)));
  dispatch(slice.setTN(treeMineralAbsorptionFunc(treeNitrogen, envNitrogen)));
  dispatch(slice.setTP(treeMineralAbsorptionFunc(treePhosphorus, envPhosphorus)));
}

//use resources and update HP
const resourceAndHPFunc = (waterConsumptionModifier: number, nitrogenConsumptionModifier: number, phosphorusConsumptionModifier: number): void => {
  const treeNitrogen = useSelector((state: RootState) => state.game.tN);
  const treePhosphorus = useSelector((state: RootState) => state.game.tP);
  const treeWater = useSelector((state: RootState) => state.game.tWater);
  const dispatch = useDispatch();

  HPFunc();
  dispatch(slice.setTWater(treeWaterConsumptionFunc(treeWater, waterConsumptionModifier)));
  dispatch(slice.setTN(treeMineralConsumptionFunc(treeNitrogen, nitrogenConsumptionModifier)));
  dispatch(slice.setTP(treeMineralConsumptionFunc(treePhosphorus, phosphorusConsumptionModifier)));
}

export { updateEnv, absorbFunc, resourceAndHPFunc };