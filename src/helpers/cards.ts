import { updateEventsListFunc, event } from "./EventFunctions";
import { treeMineralAbsorptionFunc } from "./StatFunctions";

//simulates drawing a card, number of cards is 11 with 7 commons (twice as likely)
function drawCardFunc(hand : number[]) : void {
    hand.push(Math.floor(18 * Math.random()) + 1);
}

//check for too many cards
function tooManyCardsFunc(hand : number[]) : boolean {
    return Number.length > 4;
}

//discard a card
function discardFunc(hand : number[], discard : number) : void {
    hand[discard] = hand[hand.length];
    hand.pop;
}

//play a card
function playCardFunc(hand : number[], play : number, eventsList : event[]) : void {
    discardFunc(hand, play);
    switch (play) {
        //only nitrogen
        case (0 || 1):
            break;
        case (2 || 3):
            break;
        case (4 || 5):
            break;
        case (6 || 7):
            break;
        case (8 || 9):
            break;
        case (10 || 11):
            break;
        case (12 || 13):
            break;
        case 14:
            break;
        case 15:
            break;
        case 16:
            break;
        case 17:
            break;
        case 18:
            break;
    }
}


export {drawCardFunc, tooManyCardsFunc, discardFunc}