import anime from 'animejs';
import "../styles/Weather.css";


const animateRain = (el: HTMLElement) => {
    var tl = anime.timeline({
        targets: el,
        duration: 800,
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

export { animateRain };
