import { Game, setAN, setAP, setAWater, setLife, setTN, setTP, setTWater } from "../store/slice";

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
  return Math.max(
    3 *
      waterInterval *
      Math.exp((-1 * turnNumber ** 2) / (2 * functionWidth ** 2)) +
      minWater +
      modifier,
    0
  );
}

function envMineralsFunc(turnNumber: number, modifier: number): number {
  return Math.max(
    3 *
      mineralInterval *
      Math.exp((-1 * turnNumber ** 2) / (2 * functionWidth ** 2)) +
      minMineral +
      modifier,
    0
  );
}

//tree resources absorption functions
function treeWaterAbsorptionFunc(treeWater: number, envWater: number): number {
  return Math.min(treeWater + envWater, 3 * waterInterval);
}

function treeMineralAbsorptionFunc(
  treeMinerals: number,
  envMinerals: number
): number {
  return Math.min(treeMinerals + envMinerals, 3 * mineralInterval);
}

//tree resources consumption function
function treeWaterConsumptionFunc(treeWater: number, modifier: number): number {
  return Math.max(treeWater - waterUsagePerTurn - modifier, 0);
}

function treeMineralConsumptionFunc(
  treeMinerals: number,
  modifier: number
): number {
  return Math.max(treeMinerals - mineralUsagePerTurn - modifier, 0);
}

const HPFunc = (dispatch: (payload: any) => void, state: Game) => {
  let multiplier = 0;
  if(state.tN < mineralInterval) multiplier++;
  if(state.tP < mineralInterval) multiplier++;
  if(state.tWater < waterInterval) multiplier++;
  const hpLoss = multiplier * HPloss;

  multiplier = 0;
  if(state.tN > mineralInterval * 2 && state.tP > mineralInterval * 2 && state.tWater > waterInterval * 2) multiplier++;
  const hpGain = multiplier * HPgain * (state.turnNumber % 2);

  dispatch(setLife(state.life - hpLoss + hpGain))
}

const updateEnv = (dispatch: (payload: any) => void, state: Game): void => {
  dispatch(setAWater(envWaterFunc(state.turnNumber, 1)));
  dispatch(setAN(envMineralsFunc(state.turnNumber, 1)));
  dispatch(setAP(envMineralsFunc(state.turnNumber, 1)));
}

//absorb nutrients. stats array contains in order : water, nitrogen, phosphorus, HP env array contains the same for the environment
const absorbFunc = (dispatch: (payload: any) => void, state: Game): void => {
  dispatch(setTWater(treeWaterAbsorptionFunc(state.tWater, state.aWater)));
  dispatch(setTN(treeMineralAbsorptionFunc(state.tN, state.aN)));
  dispatch(setTP(treeMineralAbsorptionFunc(state.tP, state.aP)));
}

//use resources and update HP
const resourceAndHPFunc = (
  waterConsumptionModifier: number,
  nitrogenConsumptionModifier: number,
  phosphorusConsumptionModifier: number,
  dispatch: (payload: any) => void, 
  state: Game
): void => {
  HPFunc(dispatch, state);
  dispatch(setTWater(treeWaterConsumptionFunc(state.tWater, waterConsumptionModifier)));
  dispatch(setTN(treeMineralConsumptionFunc(state.tN, nitrogenConsumptionModifier)));
  dispatch(setTP(treeMineralConsumptionFunc(state.tP, phosphorusConsumptionModifier)));
}

export { updateEnv, absorbFunc, resourceAndHPFunc };
