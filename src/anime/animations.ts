import anime from "animejs";
import * as slice from "../store/slice";

const animatePlayCard = async (
  el: HTMLElement,
  cardIndex: number,
  dispatch: any
) => {
  const tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 750,
  });

  // Add children
  tl.add({
    targets: el,
    translateY: -30,
  });

  setTimeout(() => {
    dispatch(slice.playCard(cardIndex));
  }, 749);
};

const animateRemoveCard = async (
  el: HTMLElement,
  cardIndex: number,
  dispatch: any
) => {
  const tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 750,
  });

  // Add children
  tl.add({
    targets: el,
    scale: 0,
  });

  setTimeout(() => {
    dispatch(slice.removeCard(cardIndex));
  }, 749);
};

const animateSunMoon = (el: HTMLElement) => {
  anime({
    targets: el,
    translateX: 1000,
    duration: 4000,
    loop: true,
    easing: "easeInOutSine",
  });
};

const animateBackground = (el: HTMLElement, color: string) => {
  anime({
    targets: el,
    backgroundColor: 'color',
    duration: 1000,
  });
};

export { animatePlayCard, animateSunMoon, animateBackground, animateRemoveCard };
