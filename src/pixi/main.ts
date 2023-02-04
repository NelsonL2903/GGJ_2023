import * as PIXI from 'pixi.js';

const Application = PIXI.Application;

const app = new Application({
    width: 256,
    height: 256,
    antialias: true,
    resolution: 1
});


export default app;
