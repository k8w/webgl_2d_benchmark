主流WebGL渲染引擎2D性能评测
===

# 结论
- 对于本测试用例，Pixi.js > Layaair > Egret
- Pixi.js和Layaair在优化上各有优势
- Pixi.js支持单批次多纹理
- Layaair支持运行时动态合并图集
- 以上优化均未见于Egret

| 引擎 | PC fps/drawcall | iPhone6 fps/drawcall | 运行时动态合并图集 | 单批次多纹理 |
| --- | --- | --- | --- | --- |
| Pixi.js | 60/125 | 33/250 | 无 | 有 |
| Layaair | 33/70 | 25/70 | 有 | 无
| Egret | 30/2000 | 15/2000 | 无 | 无

# 测试方案

## 100纹理交错测试
1. 准备100张不同的纹理图片（256x256），不合图集
1. 用以上纹理生成2000个Sprite，依次循环设置交错的纹理（纹理1，纹理2……纹理100，纹理1……）
1. 在没有任何优化的情况下，应该有2000个Draw Call

# 几点猜测
即便Egret在没有合并图集又没有使用多纹理寄存器的情况下，500 Draw Call在iPhone6上依旧可以跑到60fps。
所以猜测可能WebGL在底层做了类似动态纹理合并的优化。