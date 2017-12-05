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
        Laya.Stat.show();

        let sprites: Laya.Sprite[] = []
        for (let i = 0; i < SPRITE_COUNT; ++i) {
            let sprite = new Laya.Sprite();
            sprite.scale(0.125, 0.125);
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