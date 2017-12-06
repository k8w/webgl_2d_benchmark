const TEXTURE_COUNT = 100;
const SPRITE_COUNT = 2000;
const W_COUNT = 40;
const H_COUNT = 50;
const W_WIDTH = 640;
const H_HEIGHT = 1136;

let app = new PIXI.Application({
    width: W_WIDTH,
    height: H_HEIGHT
});
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.LINEAR;
document.body.appendChild(app.view);

//Create Textures
let textures = [];
for (let i = 0; i < TEXTURE_COUNT; ++i) {
    textures[i] = PIXI.Texture.fromImage('../assets/' + i + '.png');
}

//Create Sprites
let sprites = [];
for (let i = 0; i < SPRITE_COUNT; ++i) {
    let sprite = new PIXI.Sprite(textures[i % TEXTURE_COUNT]);
    sprite.anchor.set(0.5, 0.5);
    sprite.width = sprite.height = 64;
    sprite.x = W_WIDTH / W_COUNT * (i % W_COUNT);
    sprite.y = H_HEIGHT / H_COUNT * (i / W_COUNT | 0);
    sprites.push(sprite);
    app.stage.addChild(sprite);
}

let rotateDelta = Math.PI / 360 * 3;
app.ticker.add(() => {
    for (let i = 0; i < SPRITE_COUNT; ++i) {
        sprites[i].rotation += rotateDelta;
    }
});

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