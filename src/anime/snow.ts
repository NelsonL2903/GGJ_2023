import anime from 'animejs';
import "../styles/Weather.css";


const animateSnow = (el: HTMLElement) => {
    var tl = anime.timeline({
        targets: el,
        duration: 3600,
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

export { animateSnow };
