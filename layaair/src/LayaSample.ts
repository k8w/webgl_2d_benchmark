const TEXTURE_COUNT = 100;
const SPRITE_COUNT = 2000;
const W_COUNT = 40;
const H_COUNT = 50;
const W_WIDTH = 640;
const H_HEIGHT = 1136;

// 程序入口
class GameMain {
    constructor() {
        Laya.init(640, 1136, Laya.WebGL);
        Laya.stage.bgColor = "#232628";
        Laya.stage.scaleMode = 'showall';

        let sprites: Laya.Sprite[] = []
        for (let i = 0; i < SPRITE_COUNT; ++i) {
            let sprite = new Laya.Sprite();
            sprite.scale(0.25, 0.25);
            sprite.loadImage('/assets/' + (i % TEXTURE_COUNT) + '.png');
            sprite.pivot(128, 128);
            sprite.x = W_WIDTH / W_COUNT * (i % W_COUNT);
            sprite.y = H_HEIGHT / H_COUNT * (i / W_COUNT | 0);
            Laya.stage.addChild(sprite);
            sprites.push(sprite);
        }

        Laya.timer.frameLoop(1, this, e => {
            for (let sprite of sprites) {
                sprite.rotation += 3;
            }
        })
    }
}
new GameMain();

//显示FPS
let fpsCon = document.createElement('div');
Object.assign(fpsCon.style, {
    position: 'fixed',
    background: '#000',
    color: '#fff',
    top: 0,
    left: 0
})
document.body.appendChild(fpsCon);
let arrFps = new Float64Array(10);
let lastTime = Date.now();
let pos = 0;
function updateFps() {
    let now = Date.now();
    let delta = now - lastTime;
    let fps = 1000 / delta;
    arrFps[pos++] = fps;
    if (pos >= arrFps.length) {
        pos = 0;
    }
    fpsCon.innerHTML = 'FPS: ' + (arrFps.reduce((prev, next) => prev + next) / arrFps.length | 0);
    lastTime = now;
    requestAnimationFrame(updateFps);
}
requestAnimationFrame(updateFps);