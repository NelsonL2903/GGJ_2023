import { drawCardFunc } from "./cards";
import { updateEventsListFunc, event, totalEventsUpdateFunc, eventFullFunc } from "./EventFunctions";
import { absorbFunc, resourceAndHPFunc } from "./StatFunctions";
import { useSelector, useDispatch } from 'react-redux';


//creating event objects
export const events: Array<event> = [{
    name: "nothing", displayText: "", HPDamage: 0, duration: 1, waterModifier: 0, phosphorusModifier: 0,
    nitrogenModifier: 0, waterConsumptionModifier: 0, phosphorusConsumptionModifier: 0,
    nitrogenConsumptionModifier: 0
},

{
    name: "storm", displayText: "Your tree has been caught in a lightning storm", HPDamage: 20, duration: 1, waterModifier: 0, phosphorusModifier: 0,
    nitrogenModifier: 0, waterConsumptionModifier: 0, phosphorusConsumptionModifier: 0,
    nitrogenConsumptionModifier: 0
},

{
    name: "pests", displayText: "Your tree has been infected by a parasitic fungus. Your tree will require more nutrients for the next 4 turns", HPDamage: 0, duration: 4, waterModifier: 0, phosphorusModifier: 0,
    nitrogenModifier: 0, waterConsumptionModifier: 2, phosphorusConsumptionModifier: 2,
    nitrogenConsumptionModifier: 2
},

{
    name: "forest fire", displayText: "Your tree has been caught in a forest fire. Your health and water supply will decrease over the next three turns", HPDamage: 10, duration: 3, waterModifier: -2, phosphorusModifier: 0,
    nitrogenModifier: 0, waterConsumptionModifier: 0, phosphorusConsumptionModifier: 0,
    nitrogenConsumptionModifier: 0
},

{
    name: "drought", displayText: "Your tree has been caught in a drought. The water supply will be low the next three turns", HPDamage: 0, duration: 3, waterModifier: -4, phosphorusModifier: 0,
    nitrogenModifier: 0, waterConsumptionModifier: 0, phosphorusConsumptionModifier: 0,
    nitrogenConsumptionModifier: 0
},

{
    name: "flood", displayText: "Your tree has been caught in a flood. Water supplies will increase but mineral supplies will be low for the next 3 turns", HPDamage: 0, duration: 3, waterModifier: +5, phosphorusModifier: -4,
    nitrogenModifier: -4, waterConsumptionModifier: 0, phosphorusConsumptionModifier: 0,
    nitrogenConsumptionModifier: 0
},

{
    name: "toxins", displayText: "Your tree has been exposed to toxins. It will lose health over the next 6 turns", HPDamage: 5, duration: 6, waterModifier: 0, phosphorusModifier: 0,
    nitrogenModifier: 0, waterConsumptionModifier: 0, phosphorusConsumptionModifier: 0,
    nitrogenConsumptionModifier: 0
},

{
    name: "blizzard", displayText: "Your tree has been caught in blizzard.", HPDamage: 15, duration: 1, waterModifier: 0, phosphorusModifier: 0,
    nitrogenModifier: 0, waterConsumptionModifier: 0, phosphorusConsumptionModifier: 0,
    nitrogenConsumptionModifier: 0
},

{
    name: "deep freeze", displayText: "Your tree has been caught in a deep freeze. The water supply will be mostly frozen for the next two turns", HPDamage: 0, duration: 2, waterModifier: -10, phosphorusModifier: 0,
    nitrogenModifier: 0, waterConsumptionModifier: 0, phosphorusConsumptionModifier: 0,
    nitrogenConsumptionModifier: 0
},

{
    name: "100n", displayText: "100% N fertilizer", HPDamage: 0, duration: 4 + 1, waterModifier: 0, phosphorusModifier: 0,
    nitrogenModifier: 2, waterConsumptionModifier: 0, phosphorusConsumptionModifier: 0,
    nitrogenConsumptionModifier: 0
},

{
    name: "100p", displayText: "100% P fertilizer", HPDamage: 0, duration: 4 + 1, waterModifier: 0, phosphorusModifier: 2,
    nitrogenModifier: 0, waterConsumptionModifier: 0, phosphorusConsumptionModifier: 0,
    nitrogenConsumptionModifier: 0
},

{
    name: "66n", displayText: "66% N fertilizer", HPDamage: 0, duration: 3 + 1, waterModifier: 0, phosphorusModifier: 1,
    nitrogenModifier: 2, waterConsumptionModifier: 0, phosphorusConsumptionModifier: 0,
    nitrogenConsumptionModifier: 0
},

{
    name: "66p", displayText: "66% P fertilizer", HPDamage: 0, duration: 3 + 1, waterModifier: 0, phosphorusModifier: 2,
    nitrogenModifier: 1, waterConsumptionModifier: 0, phosphorusConsumptionModifier: 0,
    nitrogenConsumptionModifier: 0
},

{
    name: "50/50", displayText: "50/50 fertilizer", HPDamage: 0, duration: 3 + 1, waterModifier: 0, phosphorusModifier: 2,
    nitrogenModifier: 2, waterConsumptionModifier: 0, phosphorusConsumptionModifier: 0,
    nitrogenConsumptionModifier: 0
},

{
    name: "half water", displayText: "half water", HPDamage: 0, duration: 5 + 1, waterModifier: 2, phosphorusModifier: 0,
    nitrogenModifier: 0, waterConsumptionModifier: 0, phosphorusConsumptionModifier: 0,
    nitrogenConsumptionModifier: 0
},

{
    name: "full water", displayText: "full water", HPDamage: 0, duration: 5 + 1, waterModifier: 4, phosphorusModifier: 0,
    nitrogenModifier: 0, waterConsumptionModifier: 0, phosphorusConsumptionModifier: 0,
    nitrogenConsumptionModifier: 0
}];

//total events list
let eventsList: number[] = [];
let eventsListDurations: number[] = [];
//total Event object
let totalEvents: event;
//stats and environment
let stats: number[];
let env: number[];
let hand: number[];

export function takeTurn(turnNumber: number, dispatch: any) {

    // Determine random event 
    //event
    eventFullFunc(turnNumber, eventsList, eventsListDurations, totalEvents, events);
    //absorption and update environment
    absorbFunc();
    //draw
    //drawCardFunc(hand);
    //maybe discard a card
    //play

    //resource and hp update
    resourceAndHPFunc(totalEvents.waterConsumptionModifier, totalEvents.nitrogenConsumptionModifier, totalEvents.phosphorusConsumptionModifier);

    //end turn
}

