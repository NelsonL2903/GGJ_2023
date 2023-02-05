import anime from 'animejs';

const playCard = (el: HTMLElement) => {
    anime({
        targets: el,
        translateX: 250,
        delay: 1000
    });
};
