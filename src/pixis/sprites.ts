import { Sprite} from 'pixi.js';
import Hill from '../assets/Hill.png';
import * as PIXI from 'pixi.js';

const hill = Sprite.from(Hill);
hill.scale.set(0.5);
hill.x = -120;
hill.y = 200;

//Create a gradient background
const background = new PIXI.Graphics();
background.beginFill(0x000000);
background.drawRect(0, 0, 800, 600);
background.endFill();


const animate = () => {
    requestAnimationFrame(animate);
    background.clear();
    background.beginFill(0x678987, 1);
    background.drawRect(0, 0, window.innerWidth, window.innerHeight);
    background.endFill();
    // background.({
    //     type: "linear",
    //     colorStops: [
    //         { offset: 0, color: "red" },
    //         { offset: 1, color: "blue" }
    //     ]
    // });
    background.drawRect(0, 0, window.innerWidth, window.innerHeight);
    background.endFill();
    background.scale.x += 0.01;
    background.scale.y += 0.01;
};

export default { background: { graphics: background, animate }, hill };