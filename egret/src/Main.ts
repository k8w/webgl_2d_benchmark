const TEXTURE_COUNT = 50;
const SPRITE_COUNT = 1000

class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private async onAddToStage(event: egret.Event) {
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }

    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);

        /*** 本示例关键代码段开始 ***/
        //加载已经配置过的组
        RES.loadGroup("preload");
        /*** 本示例关键代码段结束 ***/
    }

    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);

        let textures: any[] = [];
        for (let i = 0; i < TEXTURE_COUNT; ++i) {
            textures[i] = RES.getRes(i + '_png');
        }

        let bmps: egret.Bitmap[] = []
        for (let i = 0; i < SPRITE_COUNT; ++i) {
            let bmp = new egret.Bitmap(textures[i % 100]);
            bmp.width = bmp.height = 128;
            bmp.anchorOffsetX = bmp.width * 0.5;
            bmp.anchorOffsetY = bmp.height * 0.5;
            bmp.x = 640 / 20 * (i % 20);
            bmp.y = 1136 / 50 * (i / 20 | 0);
            this.addChild(bmp);
            bmps.push(bmp);
        }

        this.addEventListener(egret.Event.ENTER_FRAME, e=>{
            for(let bmp of bmps){
                bmp.rotation += 3;
            }
        }, this);
    }
}