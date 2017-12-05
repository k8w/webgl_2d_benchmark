主流WebGL渲染引擎2D性能评测
===

# 结论

## Pixi.js
1. 100个256x256的纹理图片，对应了100个纹理（没有Layaair的自动和图集功能）
1. 电脑上卡的几乎动不了
1. 没有drawcall显示功能
1. 优化一般，不测了，直接出局

## Layaair
TODO

## Egret
1. WebGL Inspector 上也显示出100个纹理
1. PC上跑出60帧，显示1000个Draw Call
1. iPhone 6上22FPS，显示1000个Draw Call
1. iPhone 6上，同样1000个Sprite，降低至50个256x256的纹理交错时，跑出60FPS，显示500个Draw Call
1. iPhone 6上，即便使用63、64、65个纹理，也能跑出接近60fps
1. iPhone 6上，随着纹理增加，FPS是渐进下降的，而不是某一个阈值突然下降（排除图集+1）
1. 80个纹理，Draw Call=800

### 猜测
1. 白鹭自动将不重叠的图形，合并成了一个DrawCall（所以80个纹理是800DrawCall）

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