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

const animateSunMoon = (el: HTMLElement, path: any) => {
    anime({
        targets: el,
        translateX: path('x'),
        translateY: path('y'),
        rotate: path('angle'),
        easing: 'linear',
    });
};

export { animatePlayCard, animateSunMoon };
