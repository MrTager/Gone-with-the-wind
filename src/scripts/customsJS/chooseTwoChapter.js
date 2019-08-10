var res=[];
var gameStatue = require("../../jsonJS/enemyStatueinfo.js");
    export default class chooseTwoChapter extends Laya.Script {
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
        res.push("res/enemyTwo/rightFall/51749-1.png");
        res.push("res/enemyTwo/rightFall/51750-1.png");
        res.push("res/enemyTwo/rightFall/51750-2.png");
        res.push("res/enemyTwo/rightFall/51750-3.png");
        res.push("res/enemyTwo/rightFall/51750-4.png");
        res.push("res/enemyTwo/rightFall/51750-5.png");
        res.push("res/enemyTwo/rightFall/51750-6.png");
        res.push("res/enemyTwo/rightFall/51750-7.png");
        res.push("res/enemyTwo/rightFall/51751-1.png");
        res.push("res/enemyTwo/rightHit/51753-1.png");
        res.push("res/enemyTwo/rightHit/51754-1.png");
        res.push("res/enemyTwo/rightHit/51755-1.png");
        res.push("res/enemyTwo/rightHit/51755-2.png");
        res.push("res/enemyTwo/rightHit/51755-3.png");
        res.push("res/enemyTwo/rightHit/51755-4.png");
        res.push("res/enemyTwo/rightHit/51756-1.png");
        res.push("res/enemyTwo/rightHit/51757-1.png");
        res.push("res/enemyTwo/rightRunning/51752-1.png");
        res.push("res/enemyTwo/rightRunning/51752-2.png");
        res.push("res/enemyTwo/rightRunning/51752-3.png");
        res.push("res/enemyTwo/rightRunning/51752-4.png");
        res.push("res/enemyTwo/rightRunning/51752-5.png");
        res.push("res/enemyTwo/rightRunning/51752-6.png");
        res.push("res/enemyTwo/rightRunning/51752-7.png");
        res.push("res/enemyTwo/rightRunning/51752-8.png");
        res.push("res/enemyTwo/rightRunning/51752-9.png");
        res.push("res/enemyTwo/rightRunning/51752-10.png");
        res.push("res/enemyTwo/rightRunning/51752-11.png");
        res.push("res/enemyTwo/rightRunning/51752-12.png");
        res.push("res/enemyTwo/rightRunning/51752-13.png");
        res.push("res/enemyTwo/waitRight/51746-1.png");
        res.push("res/enemyTwo/waitRight/51746-2.png");
        res.push("res/enemyTwo/waitRight/51746-3.png");
        res.push("res/enemyTwo/waitRight/51746-4.png");
        res.push("res/chapterTwo/火山4.jpg");


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
                Laya.Scene.open("chapterTwo.scene");
             },100);
         }
     }
     loadProgress(progress) {
         //console.log("当前加载资源：" + progress);
         this.loadingView.getChildByName("loadingBar").value=progress
     }
}