import { drawCardFunc } from "./cards";
import { updateEventsListFunc, event, totalEventsUpdateFunc, eventFullFunc } from "./EventFunctions";
import { absorbFunc, resourceAndHPFunc } from "./StatFunctions";
import { useSelector, useDispatch } from 'react-redux';




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
    //absorption
    //absorbFunc(stats, env);
    //draw
    //drawCardFunc(hand);
    //play

    //resource and hp update
    // stats = resourceAndHPFunc(stats, turnNumber, totalEvents.HPDamage, totalEvents.waterConsumptionModifier, totalEvents.nitrogenConsumptionModifier, totalEvents.phosphorusConsumptionModifier);

    //update environment
}

