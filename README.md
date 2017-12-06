主流WebGL 2D渲染引擎性能评测
===

[在线测试](http://k8w.github.io/webgl_2d_benchmark)

# 测试方案

## 100纹理交错测试
1. 准备100张不同的纹理图片（256x256），不合图集
1. 用以上纹理生成2000个Sprite，依次循环设置交错的纹理（纹理1，纹理2……纹理100，纹理1……）
1. 在没有任何优化的情况下，应该有2000个Draw Call

## 目标引擎

- Pixi.js 4.6.0
- Layaair 1.7.13 beta
- Egret 5.1.0

# 结论
- 对于本测试用例，Pixi.js > Layaair > Egret
- Pixi.js和Layaair在优化上各有优势
- Pixi.js支持单批次多纹理
- Layaair支持运行时动态合并图集
- 以上优化均未见于Egret

| 引擎 | PC fps/drawcall | iPhone6 fps/drawcall | 运行时动态合并图集 | 单批次多纹理 |
| --- | --- | --- | --- | --- |
| Pixi.js | 60fps/125dc | 33fps/250dc | 无 | 有 |
| Layaair | 33fps/70dc | 25fps/70dc | 有 | 无
| Egret | 30fps/2000dc | 15fps/2000dc | 无 | 无

# 几点猜测
即便Egret在没有合并图集又没有使用多纹理寄存器的情况下，当降低到500 Draw Call时，在iPhone6上依旧可以跑到60fps。

猜测是否WebGL在已经底层做了一些优化？还是说500 Draw Call确实不是事儿。