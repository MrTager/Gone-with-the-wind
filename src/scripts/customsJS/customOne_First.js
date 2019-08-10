var res=[];
    export default class customOne_First extends Laya.Script {
/** @prop {name:loadingView, tips:"加载预制体", type:Node, default:null}*/
    constructor() { 
        super(); 
        this.loadingView=null;
    }
    
    onEnable() {
        //console.log(this.loadingView)
        this.loadingView._visible=false;
        this.loadingView.getChildByName("loadingBar").value=0;
    }

    onDisable() {
    }
    onClick(){
        this.loadingView._visible=true;
        res.push("res/heroHead.png");
        res.push("res/HPFrame.png");
        res.push("res/customOneBG.png");
        res.push("res/Alert/fall.png");
        res.push("res/Alert/win.png");
        res.push("res/button/affirm.png");
        res.push("res/button/backStartView.png");
        res.push("res/button/cancal.png");
        res.push("res/button/nextCustom.png");
        res.push("res/button/playAgain.png");
        res.push("res/enemy2/rightFall/56492-1.png");
        res.push("res/enemy2/rightFall/56493-1.png");
        res.push("res/enemy2/rightFall/56493-2.png");
        res.push("res/enemy2/rightFall/56493-3.png");
        res.push("res/enemy2/rightFall/56493-4.png");
        res.push("res/enemy2/rightFall/56493-5.png");
        res.push("res/enemy2/rightFall/56493-6.png");
        res.push("res/enemy2/rightFall/56493-7.png");
        res.push("res/enemy2/rightFall/56493-8.png");
        res.push("res/enemy2/rightFall/56493-9.png");
        res.push("res/enemy2/rightFall/56493-10.png");
        res.push("res/enemy2/rightFall/56493-11.png");
        res.push("res/enemy2/rightFall/56494-1.png");
        res.push("res/enemy2/rightHit/56496-1.png");
        res.push("res/enemy2/rightHit/56497-1.png");
        res.push("res/enemy2/rightHit/56498-1.png");
        res.push("res/enemy2/rightHit/56498-2.png");
        res.push("res/enemy2/rightHit/56498-3.png");
        res.push("res/enemy2/rightHit/56498-4.png");
        res.push("res/enemy2/rightHit/56498-5.png");
        res.push("res/enemy2/rightHit/56498-6.png");
        res.push("res/enemy2/rightHit/56498-7.png");
        res.push("res/enemy2/rightHit/56498-8.png");
        res.push("res/enemy2/rightHit/56498-9.png");
        res.push("res/enemy2/rightHit/56498-10.png");
        res.push("res/enemy2/rightHit/56498-11.png");
        res.push("res/enemy2/rightHit/56499-1.png");
        res.push("res/enemy2/rightHit/56500-1.png");
        res.push("res/enemy2/rightRuning/56491-1.png");
        res.push("res/enemy2/rightRuning/56491-2.png");
        res.push("res/enemy2/rightRuning/56491-3.png");
        res.push("res/enemy2/rightRuning/56491-4.png");
        res.push("res/enemy2/rightRuning/56491-5.png");
        res.push("res/enemy2/rightRuning/56491-6.png");
        res.push("res/enemy2/rightRuning/56491-7.png");
        res.push("res/enemy2/rightRuning/56491-8.png");
        res.push("res/enemy2/rightStand/56495-1.png");
        res.push("res/enemy2/rightStand/56495-2.png");
        res.push("res/enemy2/rightStand/56495-3.png");
        res.push("res/enemy2/rightStand/56495-4.png");
        res.push("res/enemy2/rightStand/56495-5.png");
        res.push("res/enemy2/rightStand/56495-6.png");
        res.push("res/enemy2/rightStand/56495-7.png");
        res.push("res/enemy2/rightStand/56495-8.png");
        res.push("res/enemy2/rightStand/56495-9.png");
        res.push("res/enemy2/rightStand/56495-10.png");
        res.push("res/enemy2/rightStand/56495-11.png");
        res.push("res/enemy2/rightStand/56495-12.png");
        res.push("res/enemy2/rightStand/56495-13.png");
        res.push("res/enemy2/rightStand/56495-14.png");
        res.push("res/enemy2/rightStand/56495-15.png");
        res.push("res/enemy2/rightStand/56495-16.png");
        res.push("res/leftStan/54066-1.png");
        res.push("res/leftStan/54066-2.png");
        res.push("res/leftStan/54066-3.png");
        res.push("res/leftStan/54066-4.png");
        res.push("res/littleKill/54070-1.png");
        res.push("res/littleKill/54071-1.png");
        res.push("res/littleKill/54071-2.png");
        res.push("res/littleKill/54071-3.png");
        res.push("res/littleKill/54072-1.png");
        res.push("res/littleKill/54073-1.png");
        res.push("res/littleKill/54073-2.png");
        res.push("res/rightStan/54066-1.png");
        res.push("res/rightStan/54066-2.png");
        res.push("res/rightStan/54066-3.png");
        res.push("res/rightStan/54066-4.png");
        res.push("res/rightWalk/54068-1.png");
        res.push("res/rightWalk/54068-2.png");
        res.push("res/rightWalk/54068-3.png");
        res.push("res/rightWalk/54068-4.png");
        res.push("res/rightWalk/54068-5.png");
        res.push("res/rightWalk/54068-6.png");
        res.push("res/rightWalk/54068-7.png");
        res.push("res/rightWalk/54068-8.png");
        res.push("res/alertBG.png");
        res.push("res/backBtn.png");
        res.push("res/close.png");
        res.push("res/close2.png");
        res.push("res/crystal.png");
        res.push("res/exp.png");
        res.push("res/gold.png");
        res.push("res/pay.png");
        res.push("res/startBtn.png");

        Laya.loader.retryNum = 2;//加载出错后的重试次数，默认重试一次
        Laya.loader.load(res,
            Laya.Handler.create(this, this.loadComplete),
            Laya.Handler.create(this, this.loadProgress, [], false));
        
    }
    loadComplete(isSuccess) {
       // console.log("资源加载完成...", isSuccess);
        if(isSuccess){
            setTimeout(function(){
               // this.loadingView._visible=false;
               Laya.Scene.open("chapterOne.scene");
            },100);
        }
    }
    loadProgress(progress) {
        //console.log("当前加载资源：" + progress);
        this.loadingView.getChildByName("loadingBar").value=progress
    }
}