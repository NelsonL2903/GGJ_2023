import anime from 'animejs';
import "../styles/Weather.css";


const animateLightning = (el: HTMLElement) => {
    var tl = anime.timeline({
        targets: el,
        duration: 1000
      });
      
      // Add children
      tl
      .add({
        opacity: 0,
        easing: 'easeInOutQuad'
      })
      .add({
        opacity: 100,
        easing: 'easeInOutQuad'
      });
};

export { animateLightning };
