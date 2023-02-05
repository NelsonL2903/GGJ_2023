import anime from 'animejs';

const animatePlayCard = (el: HTMLElement) => {
    var tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
      });
      
      // Add children
      tl
      .add({
        targets: el,
        translateY: -10,
        delay: 100,
      })
      .add({
        targets: el,
        translateY: 600,
        
      })
};

export { animatePlayCard };
