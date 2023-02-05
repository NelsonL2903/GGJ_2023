import anime from "animejs";
import * as slice from "../store/slice";

const animatePlayCard = async (
  el: HTMLElement,
  cardIndex: number,
  dispatch: any
) => {
  console.log(el);
  const tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 750,
  });

  // Add children
  tl.add({
    targets: el,
    translateY: -1000,
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
  console.log(el);
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

const animateSunMoon = (el: HTMLElement, dayCycle: boolean) => {
  const tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 750,
  });

  // Add children
  tl.add({
    targets: el,
    translateY: -10,
    delay: 100,
    rotate: 180,
  });
};

export { animatePlayCard, animateRemoveCard };
