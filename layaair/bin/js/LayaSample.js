var TEXTURE_COUNT = 100;
var SPRITE_COUNT = 2000;
var W_COUNT = 40;
var H_COUNT = 50;
var W_WIDTH = 640;
var H_HEIGHT = 1136;
// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.init(640, 1136, Laya.WebGL);
        Laya.stage.bgColor = "#232628";
        Laya.stage.scaleMode = 'showall';
        var sprites = [];
        for (var i = 0; i < SPRITE_COUNT; ++i) {
            var sprite = new Laya.Sprite();
            sprite.scale(0.25, 0.25);
            sprite.loadImage('/assets/' + (i % TEXTURE_COUNT) + '.png');
            sprite.pivot(128, 128);
            sprite.x = W_WIDTH / W_COUNT * (i % W_COUNT);
            sprite.y = H_HEIGHT / H_COUNT * (i / W_COUNT | 0);
            Laya.stage.addChild(sprite);
            sprites.push(sprite);
        }
        Laya.timer.frameLoop(1, this, function (e) {
            for (var _i = 0, sprites_1 = sprites; _i < sprites_1.length; _i++) {
                var sprite = sprites_1[_i];
                sprite.rotation += 3;
            }
        });
    }
    return GameMain;
}());
new GameMain();
//显示FPS
var fpsCon = document.createElement('div');
Object.assign(fpsCon.style, {
    position: 'fixed',
    background: '#000',
    color: '#fff',
    top: 0,
    left: 0
});
document.body.appendChild(fpsCon);
var arrFps = new Float64Array(10);
var lastTime = Date.now();
var pos = 0;
function updateFps() {
    var now = Date.now();
    var delta = now - lastTime;
    var fps = 1000 / delta;
    arrFps[pos++] = fps;
    if (pos >= arrFps.length) {
        pos = 0;
    }
    fpsCon.innerHTML = 'FPS: ' + (arrFps.reduce(function (prev, next) { return prev + next; }) / arrFps.length | 0);
    lastTime = now;
    requestAnimationFrame(updateFps);
}
requestAnimationFrame(updateFps);
//# sourceMappingURL=LayaSample.js.map