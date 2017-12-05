"use strict";
var TEXTURE_COUNT = 100;
var SPRITE_COUNT = 1000;
var app = new PIXI.Application();
document.body.appendChild(app.view);
//Create Textures
var textures = [];
for (var i = 0; i < TEXTURE_COUNT; ++i) {
    textures[i] = PIXI.Texture.fromImage('/assets/' + i + '.png');
}
//Create Sprites
var sprites = [];
for (var i = 0; i < SPRITE_COUNT; ++i) {
    var sprite = new PIXI.Sprite(textures[i % TEXTURE_COUNT]);
    sprite.anchor.set(0.5, 0.5);
    sprite.width = sprite.height = 256;
    sprite.x = Math.random() * app.renderer.width;
    sprite.y = Math.random() * app.renderer.height;
    sprites.push(sprite);
    app.stage.addChild(sprite);
}
app.ticker.add(function (delta) {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent tranformation
    for (var i = 0; i < SPRITE_COUNT; ++i) {
        sprites[i].rotation += 0.1 * delta;
    }
});
