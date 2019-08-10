var res=[];
    export default class firstView extends Laya.Script {
        /** @prop {name:startGameBtn, tips:"开始按钮", type:Node, default:null}*/
        /** @prop {name:exitGameBtn, tips:"退出按钮", type:Node, default:null}*/
        /** @prop {name:loadingView, tips:"加载预制体", type:Node, default:null}*/
    constructor() { 
        super(); 
        this.startGameBtn=null;
        this.exitGameBtn=null;
        this.loadingView=null;
    }
    
    onEnable() {
        this.loadingView._visible=false;
        this.loadingView.getChildByName("loadingBar").value=0;
        
        
         this.startGameBtn.on(Laya.Event.CLICK,this,
            this.loadresource
            );
         this.exitGameBtn.on(Laya.Event.CLICK,this,function(){
           // if (confirm("您确定要退出游戏吗？")){
            window.opener=null;
            window.open(' ','_self');
            window.location.href="about:blank";
            window.close();
          //  }
          //  else{}
         })
    }

    onDisable() {
    }
    onClick(){
      //  Laya.SoundManager.playSound("res/sounds/11744.wav",1)
    }
    loadresource(){

        this.loadingView._visible=true;
        console.log(this.loadingView.getChildByName("loadingBar"))
        
        res.push("res/backBtn.png");
        res.push("res/addBtn.png"); 
        res.push("res/heroHead.png"); 
        res.push("res/gold.png");
        res.push("res/pay.png");
        res.push("res/crystal.png"); 
        res.push("res/indexBackGround.jpg"); 
        res.push("res/startBtn.png");
        res.push("res/rightStan/54066-1.png");
        res.push("res/rightStan/54066-2.png");
        res.push("res/rightStan/54066-3.png");
        res.push("res/rightStan/54066-4.png");
        res.push("res/StartViewFill/heroHead.png");
        res.push("res/StartViewFill/intensify.png");


      

        Laya.loader.retryNum = 2;//加载出错后的重试次数，默认重试一次
        Laya.loader.load(res,
            Laya.Handler.create(this, this.loadComplete),
            Laya.Handler.create(this, this.loadProgress, [], false));

    }
  
    loadComplete(isSuccess) {
        console.log("资源加载完成...", isSuccess);
        if(isSuccess){
            setTimeout(function(){
                Laya.Scene.open("StartView.scene")
            },100);
        }
    }
    loadProgress(progress) {
        console.log("当前加载资源：" + progress);
        this.loadingView.getChildByName("loadingBar").value=progress
    }

}