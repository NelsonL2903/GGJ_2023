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

//creating event objects
let events: Array<event> = [{name : "nothing", displayText : "", HPDamage: 0, duration: 1, waterModifier: 0, phosphorusModifier : 0, 
                            nitrogenModifier : 0, waterConsumptionModifier : 0, phosphorusConsumptionModifier : 0, 
                            nitrogenConsumptionModifier : 0},

                            {name : "storm", displayText : "Your tree has been caught in a lightning storm", HPDamage: 20, duration: 1, waterModifier: 0, phosphorusModifier : 0, 
                            nitrogenModifier : 0, waterConsumptionModifier : 0, phosphorusConsumptionModifier : 0, 
                            nitrogenConsumptionModifier : 0},

                            {name : "pests", displayText : "Your tree has been infected by a parasitic fungus. Your tree will require more nutrients for the next 4 turns", HPDamage: 0, duration: 4, waterModifier: 0, phosphorusModifier : 0, 
                            nitrogenModifier : 0, waterConsumptionModifier : 2, phosphorusConsumptionModifier : 2, 
                            nitrogenConsumptionModifier : 2},

                            {name : "forest fire", displayText : "Your tree has been caught in a forest fire. Your health and water supply will decrease over the next two turns", HPDamage: 10, duration: 3, waterModifier: -2, phosphorusModifier : 0, 
                            nitrogenModifier : 0, waterConsumptionModifier : 0, phosphorusConsumptionModifier : 0, 
                            nitrogenConsumptionModifier : 0},

                            {name : "drought", displayText : "Your tree has been caught in a drought. The water supply will be low the next three turns", HPDamage: 0, duration: 3, waterModifier: -4, phosphorusModifier : 0, 
                            nitrogenModifier : 0, waterConsumptionModifier : 0, phosphorusConsumptionModifier : 0, 
                            nitrogenConsumptionModifier : 0},

                            {name : "flood", displayText : "Your tree has been caught in a flood. Water supplies will increase but mineral supplies will be low for the next 3 turns", HPDamage: 0, duration: 3, waterModifier: +5, phosphorusModifier : -4, 
                            nitrogenModifier : -4, waterConsumptionModifier : 0, phosphorusConsumptionModifier : 0, 
                            nitrogenConsumptionModifier : 0},

                            {name : "toxins", displayText : "Your tree has been exposed to toxins. It will lose health over the next 6 turns", HPDamage: 5, duration: 6, waterModifier: 0, phosphorusModifier : 0, 
                            nitrogenModifier : 0, waterConsumptionModifier : 0, phosphorusConsumptionModifier : 0, 
                            nitrogenConsumptionModifier : 0},

                            {name : "blizzard", displayText : "Your tree has been caught in blizzard.", HPDamage: 15, duration: 1, waterModifier: 0, phosphorusModifier : 0, 
                            nitrogenModifier : 0, waterConsumptionModifier : 0, phosphorusConsumptionModifier : 0, 
                            nitrogenConsumptionModifier : 0},

                            {name : "deep freeze", displayText : "Your tree has been caught in a deep freeze. The water supply will be mostly frozen for the next two turns", HPDamage: 0, duration: 2, waterModifier: -10, phosphorusModifier : 0, 
                            nitrogenModifier : 0, waterConsumptionModifier : 0, phosphorusConsumptionModifier : 0, 
                            nitrogenConsumptionModifier : 0}]

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

//total events list
let eventsList: number[] = [];
let eventsListDurations : number[] = [];
//total Event object
let totalEvents : event;

export { eventProbabilityFunc, eventFunc, seasonFunc, eventNumberFunc, updateEventsListFunc, totalEventsUpdateFunc };