import { createSlice } from '@reduxjs/toolkit'

interface Game {
    gameState: string,
    life: number,
    tWater: number,
    tN: number,
    tP: number,
    aWater: number,
    aN: number,
    aP: number,
    turnNumber: number,
    dayCycle: boolean,
    event: string
}

const initialState: Game = {
    gameState: 'home',
    life: 100,
    tWater: 0,
    tN: 0,
    tP: 0,
    aWater: 0,
    aN: 0,
    aP: 0,
    turnNumber: 0,
    dayCycle: true,
    event: ''
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setGameState(state, action) {
            state.gameState = action.payload
        },
        setLife(state, action) {
            state.life = action.payload
        },
        setTWater(state, action) {
            state.tWater = action.payload
        },    
        setTP(state, action) {
            state.tP = action.payload
        },
        setTN(state, action) {
            state.tN = action.payload
        },
        setAWater(state, action) {
            state.aWater = action.payload
        },    
        setAP(state, action) {
            state.aP = action.payload
        },
        setAN(state, action) {
            state.aN = action.payload
        },
        incrementTurnNumber(state) {
            state.turnNumber += 1
        },
        toggleDayCycle(state) {
            state.dayCycle = !state.dayCycle
        },
        setEvent(state, action) {
            state.event = action.payload
        },
        resetGame(state) {
            state = initialState
        }
    }
})

export const { setGameState, setLife, setTWater, setTN, setTP, setAWater, setAN, setAP, 
    incrementTurnNumber, toggleDayCycle, setEvent, resetGame } = gameSlice.actions
export default gameSlice.reducer