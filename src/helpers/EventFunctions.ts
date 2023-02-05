import { useSelector, useDispatch } from "react-redux";
import { setEventsList, spliceEventsList, setEventsListDurations, spliceEventsListDurations, setHPDamage, setNmod, setPmod, setWmod, setNCmod, setPCmod, setWCmod, decrementDuration, pushEventsList, pushEventsListDurations } from "../store/slice";
import { RootState } from "../store/store";

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

//does all of events
function eventFullFunc(){


const turnNumber = useSelector((state: RootState) => state.game.turnNumber);
const eventsList = useSelector((state: RootState) => state.game.eventsList);
const eventsListDurations = useSelector((state: RootState) => state.game.eventsListDurations);
const HPDamage = useSelector((state: RootState) => state.game.HPDamage);
const Nmod = useSelector((state: RootState) => state.game.Nmod);
const Pmod = useSelector((state: RootState) => state.game.Pmod);
const Wmod = useSelector((state: RootState) => state.game.Wmod);
const NCmod = useSelector((state: RootState) => state.game.NCmod);
const PCmod = useSelector((state: RootState) => state.game.PCmod);
const WCmod = useSelector((state: RootState) => state.game.WCmod);
const dispatch = useDispatch();


//slope of linear even probability function
const eventCoefficient : number = 0.005;
//maximum probability of an event on a given day
const maxEventProbability : number = 0.65;

//number of types of events per season
const eventsPerSeason : number = 2;
//indices of seasons
const spring: number = 1;
const summer: number = 2;
const winter: number = 3;
const fall: number = 4;

//returns probability of an event on a given day
function eventProbabilityFunc() : number {
    return Math.min(eventCoefficient * turnNumber, maxEventProbability);
  }

//returns whehter a non - trivial event occurs on that turn
function eventFunc() : boolean {
    return (Math.random() < eventProbabilityFunc());
}

//determines which season it is
function seasonFunc() : number{
    return Math.round(turnNumber / 10) + 1;
}

//determines which event will occur
function eventNumberFunc() : number {
    return (2 * ((eventFunc())? 0 : 1) * seasonFunc()) - ((eventFunc())? 0 : 1) * ((Math.random() < 0.5)? 0 : 1);
}




//update the events list
function updateEventsListFunc() : void {
    
    for (let num : number = 1; num<=eventsListDurations.length; num++)  {  
        if (eventsListDurations[num] <= 1){
            dispatch(spliceEventsList(num));
            dispatch(spliceEventsListDurations(num));
        } 
        dispatch(decrementDuration());
    const index = eventNumberFunc();
    let removalList : number[] = [];
    if(Math.floor(turnNumber/10) % 4 == 0){
        removalList.push(7);
        removalList.push(8);
    };
    if(index == 5){
        removalList.push(3);
        removalList.push(4);
    }
    if (index == 4) removalList.push(5);
    for(let num : number = 1; num<=eventsList.length; num++){
        for(let num2 : number = 1; num2 <= removalList.length; num2++){
            if(eventsList[num] == removalList[num2]){
                dispatch(spliceEventsList(num));
                dispatch(spliceEventsListDurations(num));
            }
        }
    }
    dispatch(pushEventsList(index));
    dispatch(pushEventsListDurations(events[index].duration));
}

//update total events
function totalEventsUpdateFunc() : void {
    dispatch(setHPDamage(0));
    dispatch(setNmod(0));
    dispatch(setPmod(0));
    dispatch(setWmod(0));
    dispatch(setNCmod(0));
    dispatch(setPCmod(0));
    dispatch(setWCmod(0));
    for (let num : number = 1; num<=eventsList.length; num++)  {  
        dispatch(setHPDamage(HPDamage + events[eventsList[num]].HPDamage));
        dispatch(setNmod(Nmod + events[eventsList[num]].nitrogenModifier));
        dispatch(setWmod(Wmod + events[eventsList[num]].waterModifier));
        dispatch(setPmod(Pmod + events[eventsList[num]].phosphorusModifier));
        dispatch(setNCmod(NCmod + events[eventsList[num]].nitrogenConsumptionModifier));
        dispatch(setWCmod(WCmod + events[eventsList[num]].waterConsumptionModifier));
        dispatch(setPCmod(PCmod + events[eventsList[num]].phosphorusConsumptionModifier));
        } 
}

    //@ts-ignore
    function eventFullInnerFunc() : void{
        updateEventsListFunc();
        totalEventsUpdateFunc();
    }

    eventFullInnerFunc();
}
}

export { eventFullFunc };