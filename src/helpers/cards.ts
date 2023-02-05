import { updateEventsListFunc, event } from "./EventFunctions";
import { treeMineralAbsorptionFunc } from "./StatFunctions";

//simulates drawing a card, number of cards is 11 with 7 commons (twice as likely)
function drawCardFunc(hand : number[]) : void {
    hand.push(Math.floor(17 * Math.random()) + 1);
}

//check for too many cards
function tooManyCardsFunc(hand : number[]) : boolean {
    return Number.length > 4;
}

//discard a card
function discardFunc(hand : number[], discard : number) : void {
    hand.splice(discard);
}

//play a card
function playCardFunc(hand : number[], play : number, eventsList : number[], eventsListDurations : number[], events : event[]) : void {
    discardFunc(hand, play);
    switch (play) {
        //100n
        case (0 || 1):
            eventsList.push(9);
            eventsListDurations.push(events[9].duration);
            break;
        //100p
        case (2 || 3):
            eventsList.push(10);
            eventsListDurations.push(events[10].duration);
            break;
        //66n
        case (4 || 5):
            eventsList.push(11);
            eventsListDurations.push(events[11].duration);
            break;
        //66p
        case (6 || 7):
            eventsList.push(12);
            eventsListDurations.push(events[12].duration);
            break;
        //half water
        case (8 || 9):
            eventsList.push(14);
            eventsListDurations.push(events[14].duration);
            break;
        //discard
        case (10 || 11):
            //NEEDS USER INTERACTION -----------------------------------------------------********************************
            break;
        //replace hand
        case (12 || 13):
            let x = hand.length;
            while (hand.length > 0) {
                hand.pop;
            }
            for(let num = 1; num <= x; num++){
                drawCardFunc;
            }
            break;
        //50/50
        case 14:
            eventsList.push(13);
            eventsListDurations.push(events[13].duration);
            break;
        //large water
        case 15:
            eventsList.push(15);
            eventsListDurations.push(events[15].duration);
            break;
        //antidote
        case 16:
            for(let num = 1; num <= eventsList.length; num++){
                if(eventsList[num] == 6){  
                    eventsList.splice(num)
                    eventsListDurations.splice(num);
                }
            }
            break;
        //pesticide
        case 17:
            for(let num = 1; num <= eventsList.length; num++){
                if(eventsList[num] == 8){  
                    eventsList.splice(num);
                    eventsListDurations.splice(num);
                }
            }
            break;
    }
}


export {drawCardFunc, tooManyCardsFunc, discardFunc, playCardFunc}