



//play a card
function playCardFunc(state: any, dispatch : any, play : number) : void {
    //simulates drawing a card, number of cards is 11 with 7 commons (twice as likely)
    function drawCardFunc() : void {
        dispatch(state.hand.push(Math.floor(17 * Math.random()) + 1));
    }

    //discard a card
    function discardFunc(discard : number) : void {
        dispatch(state.hand.splice(discard));
    }
    
    discardFunc(play);
    switch (play) {
        //100n
        case (0 || 1):
            dispatch(state.eventsList.push(9));
            dispatch(state.eventsListDurations.push(state.events[9].duration));
            break;
        //100p
        case (2 || 3):
            dispatch(state.eventsList.push(10));
            dispatch(state.eventsListDurations.push(state.events[10].duration));
            break;
        //66n
        case (4 || 5):
            dispatch(state.eventsList.push(11));
            dispatch(state.eventsListDurations.push(state.events[11].duration));
            break;
        //66p
        case (6 || 7):
            dispatch(state.eventsList.push(12));
            dispatch(state.eventsListDurations.push(state.events[12].duration));
            break;
        //half water
        case (8 || 9):
            dispatch(state.eventsList.push(14));
            dispatch(state.eventsListDurations.push(state.events[14].duration));
            break;
        //50/50
        case 10:
            dispatch(state.eventsList.push(13));
            dispatch(state.eventsListDurations.push(state.events[13].duration));
            break;
        //large water
        case 11:
            dispatch(state.eventsList.push(15));
            dispatch(state.eventsListDurations.push(state.events[15].duration));
            break;
        //antidote
        case 12:
            for(let num = 1; num <= state.eventsList.length; num++){
                if(state.eventsList[num] == 6){  
                    dispatch(state.eventsList.splice(num));
                    dispatch(state.eventsListDurations.splice(num));
                }
            }
            break;
        //pesticide
        case 13:
            for(let num = 1; num <= state.eventsList.length; num++){
                if(state.eventsList[num] == 8){  
                    dispatch(state.eventsList.splice(num));
                    dispatch(state.eventsListDurations.splice(num));
                }
            }
            break;
    }
}


export {playCardFunc}