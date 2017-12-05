const TEXTURE_COUNT = 100;
const SPRITE_COUNT = 2000;
const W_COUNT = 40;
const H_COUNT = 50;
const W_WIDTH = 640;
const H_HEIGHT = 1136;

let app = new PIXI.Application(W_WIDTH, H_HEIGHT);
document.body.appendChild(app.view);

//Create Textures
let textures = [];
for (let i = 0; i < TEXTURE_COUNT; ++i) {
    textures[i] = PIXI.Texture.fromImage('/assets/' + i + '.png');
}

//Create Sprites
let sprites = [];
for (let i = 0; i < SPRITE_COUNT; ++i) {
    let sprite = new PIXI.Sprite(textures[i % TEXTURE_COUNT]);
    sprite.anchor.set(0.5, 0.5);
    sprite.width = sprite.height = 32;
    sprite.x = W_WIDTH / W_COUNT * (i % W_COUNT);
    sprite.y = H_HEIGHT / H_COUNT * (i / W_COUNT | 0);
    sprites.push(sprite);
    app.stage.addChild(sprite);
}

let fpsCon = document.getElementById('fps');
let fpsCount = 0;
let fps = 0;

let rotateDelta = Math.PI / 360 * 3;
app.ticker.add(() => {
    fps = (fps * fpsCount + app.ticker.FPS) / (++fpsCount);
    for (let i = 0; i < SPRITE_COUNT; ++i) {
        sprites[i].rotation += rotateDelta;
    }
    fpsCon.innerHTML = 'FPS: ' + (fps | 0);
});
