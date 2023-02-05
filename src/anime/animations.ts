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

const animateSunMoon = (el: HTMLElement, path: any) => {
  anime({
    targets: el,
    translateX: path("x"),
    translateY: path("y"),
    rotate: path("angle"),
    easing: "linear",
  });
};

export { animatePlayCard, animateRemoveCard, animateSunMoon };
