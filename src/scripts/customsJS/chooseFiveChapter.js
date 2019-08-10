var res=[];
var gameStatue = require("../../jsonJS/enemyStatueinfo.js");
    export default class chooseFiveChapter extends Laya.Script {
/** @prop {name:loadingView, tips:"加载预制体", type:Node, default:null}*/
    constructor() { 
        super(); 
        this.loadingView=null;
    }
    
    onEnable() {
        this.loadingView._visible=false;
        this.loadingView.getChildByName("loadingBar").value=0;
    }

    onDisable() {
    }
    onClick(){
        if(gameStatue.chooseChapterClockTwo==true){
        this.loadingView._visible=true;
        //这里缓存数据
        res.push("res/enemyThree/waitRight/54881-20.png");
        res.push("res/enemyThree/waitRight/54881-21.png");
        res.push("res/enemyThree/waitRight/54881-22.png");
        
        


        Laya.loader.retryNum = 2;//加载出错后的重试次数，默认重试一次
        Laya.loader.load(res,
            Laya.Handler.create(this, this.loadComplete),
            Laya.Handler.create(this, this.loadProgress, [], false));
        }
       
    }
    loadComplete(isSuccess) {
        // console.log("资源加载完成...", isSuccess);
         if(isSuccess){
             setTimeout(function(){
                // this.loadingView._visible=false;
                Laya.Scene.open("chapterFive.scene");
             },100);
         }
     }
     loadProgress(progress) {
         //console.log("当前加载资源：" + progress);
         this.loadingView.getChildByName("loadingBar").value=progress
     }
}