import { createSlice } from "@reduxjs/toolkit";

export interface Game {
  gameState: string;
  life: number;
  tWater: number;
  tN: number;
  tP: number;
  aWater: number;
  aN: number;
  aP: number;
  turnNumber: number;
  dayCycle: boolean;
  event: number[];
  day: number;
  // 3 = spring, 0 = summer, 1 = fall, 2 = winter, 4 = dead
  season: number;
  eventsList: number[];
  eventsListDurations: number[];
  //W,N and P stand for water, nitrogen phosphorus, C stands for consumption
  Wmod: number;
  Nmod: number;
  Pmod: number;
  WCmod: number;
  NCmod: number;
  PCmod: number;
  HPDamage: number;
  cards: number[];
}

const initialState: Game = {
  gameState: "home",
  life: 100,
  tWater: 18,
  tN: 12,
  tP: 12,
  aWater: 0,
  aN: 0,
  aP: 0,
  turnNumber: 0,
  dayCycle: true,
  event: [],
  day: 1,
  season: 0,
  cards: [1, 2, 3, 4],
  eventsList: [],
  eventsListDurations: [],
  Wmod: 0,
  Nmod: 0,
  Pmod: 0,
  WCmod: 0,
  NCmod: 0,
  PCmod: 0,
  HPDamage: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameState(state, action) {
      state.gameState = action.payload;
    },
    setLife(state, action) {
      state.life = action.payload;
    },
    setTWater(state, action) {
      state.tWater = action.payload;
    },
    setTP(state, action) {
      state.tP = action.payload;
    },
    setTN(state, action) {
      state.tN = action.payload;
    },
    setAWater(state, action) {
      state.aWater = action.payload;
    },
    setAP(state, action) {
      state.aP = action.payload;
    },
    setAN(state, action) {
      state.aN = action.payload;
    },
    incrementTurnNumber(state) {
      state.turnNumber += 1;
      if (state.turnNumber % 2 === 0) {
        state.day = state.turnNumber / 2 + 1;
      }
      if (state.day % 10 === 0) {
        state.season = (state.day / 10) % 4;
      }
    },
    toggleDayCycle(state) {
      state.dayCycle = !state.dayCycle;
    },
    setEvent(state, action) {
      state.event = action.payload;
    },
    resetGame(state) {
      state = initialState;
    },
    setDay(state, action) {
      state.day = action.payload;
    },
    incrementDay(state) {
      state.day += 1;
    },
    setSeason(state, action) {
      state.season = action.payload;
    },
    setEventsList(state, action) {
      state.eventsList = action.payload;
    },
    spliceEventsList(state, action) {
      state.eventsList.splice[parseInt(action.payload, 10)];
    },
    setEventsListDurations(state, action) {
      state.eventsList = action.payload;
    },
    spliceEventsListDurations(state, action) {
      state.eventsListDurations.splice[parseInt(action.payload, 10)];
    },
    setNmod(state, action) {
      state.Nmod = action.payload;
    },
    setWmod(state, action) {
      state.Wmod = action.payload;
    },
    setPmod(state, action) {
      state.Pmod = action.payload;
    },
    setNCmod(state, action) {
      state.NCmod = action.payload;
    },
    setPCmod(state, action) {
      state.PCmod = action.payload;
    },
    setWCmod(state, action) {
      state.WCmod = action.payload;
    },
    setHPDamage(state, action) {
      state.HPDamage = action.payload;
    },
    decrementDuration(state) {
      for (
        let num: number = 1;
        num <= state.eventsListDurations.length;
        num++
      ) {
        state.eventsListDurations[num]--;
      }
    },
    pushEventsList(state, action) {
      state.eventsList.push[action.payload];
    },
    pushEventsListDurations(state, action) {
      state.eventsListDurations.push[action.payload];
    },
    playCard(state, action) {
      state.cards.splice(action.payload, 1);
    },
    removeCard(state, action) {
      state.cards.splice(action.payload, 1);
    },
  },
});

export const {
  setGameState,
  setLife,
  setTWater,
  setTN,
  setTP,
  setAWater,
  setAN,
  setAP,
  incrementTurnNumber,
  toggleDayCycle,
  setEvent,
  resetGame,
  incrementDay,
  setDay,
  setSeason,
  setEventsList,
  spliceEventsList,
  setEventsListDurations,
  spliceEventsListDurations,
  setNmod,
  setPmod,
  setWmod,
  setNCmod,
  setPCmod,
  setWCmod,
  setHPDamage,
  decrementDuration,
  pushEventsList,
  pushEventsListDurations,
  playCard,
  removeCard,
} = gameSlice.actions;
export default gameSlice.reducer;
