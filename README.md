主流WebGL渲染引擎2D性能评测
===

# 结论

## Pixi.js
1. 100个256x256的纹理图片，对应了100个纹理（没有Layaair的自动和图集功能）
1. 没有drawcall显示功能

## Layaair
TODO

## Egret
TODO

# 测试方案
## 基准测试

### 1000小图Sprite同屏
1. 1000个来自100张不同纹理（256x256）的Sprite
1. 按纹理序号交错排序：... Tex1 Tex2 ...  Text50 Tex1, Tex2 ...
1. 

## 优化测试

### 网络图片下载测试
TODO

### 随机文字批次测试
TODO