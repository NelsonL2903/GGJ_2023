import anime from 'animejs';
import * as slice from "../store/slice";


const animatePlayCard = async (el: HTMLElement, cardIndex: number, dispatch: any) => {

    const tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });

    // Add children
    tl.add({
        targets: el,
        translateY: -10,
        delay: 100,
    })
        .add({
            targets: el,
            translateY: 600,

        });

    setTimeout(() => {
        dispatch(slice.playCard(cardIndex));
    }, 749);
};

const animateSunMoon  = (el: HTMLElement, dayCycle: boolean) => {
    const tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });

    // Add children
    tl.add({
        targets: el,
        translateY: -10,
        delay: 100,
        rotate: 180,
    })

}


export { animatePlayCard };
