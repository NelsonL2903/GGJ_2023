import { spliceEventsList, spliceEventsListDurations, setHPDamage, setNmod, setPmod, setWmod, setNCmod, setPCmod, setWCmod, decrementDuration, pushEventsList, pushEventsListDurations, Game } from "../store/slice";

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
function eventFullFunc(dispatch: (payload: any) => void, state: Game){     
    //slope of linear even probability function
    const eventCoefficient : number = 0.005;
    //maximum probability of an event on a given day
    const maxEventProbability : number = 0.65;

    //determines which event will occur
    function eventNumberFunc() : number {
        const eventNum = Math.random() < Math.min(eventCoefficient * state.turnNumber, maxEventProbability)
        return  (2 * (eventNum? 1 : 0) * (state.season + 1)) - (eventNum? 1 : 0) * ((Math.random() < 0.5)? 1 : 0);
    }

    //update the events list
    function updateEventsListFunc() : void {
        for (let num : number = 1; num <= state.eventsListDurations.length; num++)  {  
            if (state.eventsListDurations[num] <= 1){
                dispatch(spliceEventsList(num));
                dispatch(spliceEventsListDurations(num));
            } 
        }
        dispatch(decrementDuration());
        const index = eventNumberFunc();
        let removalList : number[] = [];
        if(Math.floor(state.turnNumber / 10) % 4 == 0){
            removalList.push(7);
            removalList.push(8);
        };
        if(index == 5){
            removalList.push(3);
            removalList.push(4);
        }
        if (index == 4) removalList.push(5);
        for(let num : number = 1; num <= state.eventsList.length; num++){
            for(let num2 : number = 1; num2 <= removalList.length; num2++){
                if(state.eventsList[num] == removalList[num2]){
                    dispatch(spliceEventsList(num));
                    dispatch(spliceEventsListDurations(num));
                }
            }
        }
        dispatch(pushEventsList(index));
        dispatch(pushEventsListDurations(events[index]?.duration));
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
        for (let num : number = 1; num<= state.eventsList.length; num++)  {  
            dispatch(setHPDamage(state.HPDamage + events[state.eventsList[num]].HPDamage));
            dispatch(setNmod(state.Nmod + events[state.eventsList[num]].nitrogenModifier));
            dispatch(setWmod(state.Wmod + events[state.eventsList[num]].waterModifier));
            dispatch(setPmod(state.Pmod + events[state.eventsList[num]].phosphorusModifier));
            dispatch(setNCmod(state.NCmod + events[state.eventsList[num]].nitrogenConsumptionModifier));
            dispatch(setWCmod(state.WCmod + events[state.eventsList[num]].waterConsumptionModifier));
            dispatch(setPCmod(state.PCmod + events[state.eventsList[num]].phosphorusConsumptionModifier));
        } 
    }

        //@ts-ignore
    function eventFullInnerFunc() : void{
        updateEventsListFunc();
        totalEventsUpdateFunc();
    }

    eventFullInnerFunc();
}

export { eventFullFunc };