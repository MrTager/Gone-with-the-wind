var res=[];
var gameStatue = require("../../jsonJS/enemyStatueinfo.js");
    export default class chooseThreeChapter extends Laya.Script {
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
        res.push("res/chapterThree/chapterThreeBG.JPG");
        res.push("res/enemyThree/rightFall/54879-1.png");
        res.push("res/enemyThree/rightFall/54879-2.png");
        res.push("res/enemyThree/rightFall/54879-3.png");
        res.push("res/enemyThree/rightFall/54879-4.png");
        res.push("res/enemyThree/rightFall/54879-5.png");
        res.push("res/enemyThree/rightFall/54879-6.png");
        res.push("res/enemyThree/rightFall/54879-7.png");
        res.push("res/enemyThree/rightFall/54879-8.png");
        res.push("res/enemyThree/rightFall/54879-9.png");
        res.push("res/enemyThree/rightFall/54879-10.png");
        res.push("res/enemyThree/rightFall/54879-11.png");
        res.push("res/enemyThree/rightFall/54879-12.png");
        res.push("res/enemyThree/rightFall/54879-13.png");
        res.push("res/enemyThree/rightFall/54879-14.png");
        res.push("res/enemyThree/rightFall/54879-15.png");
        res.push("res/enemyThree/rightFall/54880-1.png");
        res.push("res/enemyThree/rightHit/54882-1.png");
        res.push("res/enemyThree/rightHit/54882-2.png");
        res.push("res/enemyThree/rightHit/54882-3.png");
        res.push("res/enemyThree/rightHit/54882-4.png");
        res.push("res/enemyThree/rightHit/54883-1.png");
        res.push("res/enemyThree/rightHit/54884-1.png");
        res.push("res/enemyThree/rightHit/54884-2.png");
        res.push("res/enemyThree/rightHit/54884-3.png");
        res.push("res/enemyThree/rightHit/54885-1.png");
        res.push("res/enemyThree/rightHit/54886-1.png");
        res.push("res/enemyThree/rightHit/54886-2.png");
        res.push("res/enemyThree/rightHit/54886-3.png");
        res.push("res/enemyThree/rightRunning/54877-1.png");
        res.push("res/enemyThree/rightRunning/54877-2.png");
        res.push("res/enemyThree/rightRunning/54877-3.png");
        res.push("res/enemyThree/rightRunning/54877-4.png");
        res.push("res/enemyThree/rightRunning/54877-5.png");
        res.push("res/enemyThree/rightRunning/54877-6.png");
        res.push("res/enemyThree/rightRunning/54877-7.png");
        res.push("res/enemyThree/rightRunning/54877-8.png");
        res.push("res/enemyThree/waitRight/54881-1.png");
        res.push("res/enemyThree/waitRight/54881-2.png");
        res.push("res/enemyThree/waitRight/54881-3.png");
        res.push("res/enemyThree/waitRight/54881-4.png");
        res.push("res/enemyThree/waitRight/54881-5.png");
        res.push("res/enemyThree/waitRight/54881-6.png");
        res.push("res/enemyThree/waitRight/54881-7.png");
        res.push("res/enemyThree/waitRight/54881-8.png");
        res.push("res/enemyThree/waitRight/54881-9.png");
        res.push("res/enemyThree/waitRight/54881-10.png");
        res.push("res/enemyThree/waitRight/54881-11.png");
        res.push("res/enemyThree/waitRight/54881-12.png");
        res.push("res/enemyThree/waitRight/54881-13.png");
        res.push("res/enemyThree/waitRight/54881-14.png");
        res.push("res/enemyThree/waitRight/54881-15.png");
        res.push("res/enemyThree/waitRight/54881-16.png");
        res.push("res/enemyThree/waitRight/54881-17.png");
        res.push("res/enemyThree/waitRight/54881-18.png");
        res.push("res/enemyThree/waitRight/54881-19.png");
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
                Laya.Scene.open("chapterThree.scene");
             },100);
         }
     }
     loadProgress(progress) {
         //console.log("当前加载资源：" + progress);
         this.loadingView.getChildByName("loadingBar").value=progress
     }
}