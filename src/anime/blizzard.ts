import anime from 'animejs';
import "../styles/Weather.css";


const animateBlizzard = (el: HTMLElement) => {
    var tl = anime.timeline({
        targets: el,
        duration: 1000,
        loop: true,
        easing: 'linear'
      });
      
      // Add children
      tl
      .add({
        targets: el,
        translateY: 800,
        loop: true  
      });
};

export { animateBlizzard };
