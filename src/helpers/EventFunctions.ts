import { events } from "./turnOrder";

//slope of linear even probability function
const eventCoefficient : number = 0.005;
//maximum probability of an event on a given day
const maxEventProbability : number = 0.65;

//number of types of events per season
const eventsPerSeason : number = 2;
//indices of seasons
const spring : number = 1;
const summer : number = 2;
const winter : number = 3;
const fall : number = 4;

//returns probability of an event on a given day
function eventProbabilityFunc(turnNumber : number) : number {
    return Math.min(eventCoefficient * turnNumber, maxEventProbability);
  }

//returns whehter a non - trivial event occurs on that turn
function eventFunc(turnNumber : number) : boolean {
    return (Math.random() < eventProbabilityFunc(turnNumber));
}

//determines which season it is
function seasonFunc(turnNumber : number) : number {
    return Math.round(turnNumber / 10) + 1;
}

//determines which event will occur
function eventNumberFunc(turnNumber : number) : number {
    return (2 * ((eventFunc(turnNumber))? 0 : 1) * seasonFunc(turnNumber)) - ((eventFunc(turnNumber))? 0 : 1) * ((Math.random() < 0.5)? 0 : 1);
}



//event object
export interface event {
    name : string;
    displayText : string;
    HPDamage : number;
    duration : number;
    waterModifier : number;
    nitrogenModifier : number;
    phosphorusModifier : number;
    waterConsumptionModifier : number;
    phosphorusConsumptionModifier : number;
    nitrogenConsumptionModifier : number;
}



//update the events list
function updateEventsListFunc(eventNumber: number, eventsList: number[], eventsListDurations : number[]) : void {
    for (let num : number = 1; num<=eventsListDurations.length; num++)  {  
        if (eventsListDurations[num] <= 1){
            eventsListDurations[num] = eventsListDurations[eventsListDurations.length];
            eventsList[num] = eventsList[eventsList.length];
            eventsListDurations.pop;
            eventsList.pop;
        } 
        }
    eventsList.push(eventNumber);
    eventsListDurations.push(events[eventNumber].duration);
}

//update total events
function totalEventsUpdateFunc(eventsList: number[], totalEvents : event, events : event[]) : void {
    totalEvents.HPDamage = 0;
    totalEvents.nitrogenModifier = 0;
    totalEvents.phosphorusModifier = 0;
    totalEvents.waterModifier = 0;
    totalEvents.nitrogenConsumptionModifier = 0;
    totalEvents.phosphorusConsumptionModifier = 0;
    totalEvents.waterConsumptionModifier = 0;
    for (let num : number = 1; num<=eventsList.length; num++)  {  
        totalEvents.HPDamage += events[eventsList[num]].HPDamage;
        totalEvents.nitrogenModifier += events[eventsList[num]].nitrogenModifier;
        totalEvents.phosphorusModifier += events[eventsList[num]].phosphorusModifier;
        totalEvents.waterModifier += events[eventsList[num]].waterModifier;
        totalEvents.nitrogenConsumptionModifier += events[eventsList[num]].nitrogenConsumptionModifier;
        totalEvents.phosphorusConsumptionModifier += events[eventsList[num]].phosphorusConsumptionModifier;
        totalEvents.waterConsumptionModifier += events[eventsList[num]].waterConsumptionModifier;
        } 
}

//does all of events
function eventFullFunc(turnNumber : number, eventsList : number[], eventsListDurations : number[], totalEvents : event, events : event[]){
    updateEventsListFunc(eventNumberFunc, eventsList, eventsListDurations);
    totalEventsUpdateFunc(eventsList, totalEvents, events)
}

export { eventProbabilityFunc, eventFunc, seasonFunc, eventNumberFunc, updateEventsListFunc, totalEventsUpdateFunc, eventFullFunc };