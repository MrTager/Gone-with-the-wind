var gameJson = require("../jsonJS/heroinfo.js");
var gameStatue = require("../jsonJS/enemyStatueinfo.js");
var addOnec=false;
    export default class abx extends Laya.Script {
     /** @prop {name:fallplayAgainBtn, tips:"再战一次按钮", type:Node,default:null}*/
     /** @prop {name:winPayAgainBtn, tips:"win再战一次按钮", type:Node,default:null}*/
     /** @prop {name:nextChapterBtn, tips:"下一关按钮", type:Node,default:null}*/
     /** @prop {name:modal, tips:"模态框", type:Node,default:null}*/
    constructor() { 
        super(); 
        this.fallplayAgainBtn=null;
        this.winPayAgainBtn=null;
        this.modal=null;
        this.nextChapterBtn=null;
    }
     
    onEnable() {

        addOnec=false;
        gameJson.heroHP=gameJson.heroHPInAll;
        this.fallplayAgainBtn.on(Laya.Event.CLICK,this,function(){
            Laya.stage.renderingEnabled=true;
        Laya.Scene.open("chapterOne.scene");
        })
        this.winPayAgainBtn.on(Laya.Event.CLICK,this,function(){
            Laya.stage.renderingEnabled=true;
        Laya.Scene.open("chapterOne.scene");
        })
        this.nextChapterBtn.on(Laya.Event.CLICK,this,function(){
            Laya.stage.renderingEnabled=true;
        Laya.Scene.open("chapterTwo.scene");
        })
        
    }
    onDisable() {
    }
    onKeyDown(e){

    }

    onKeyUp(e)
	{
     
        


    }
    onUpdate(){ 
       
        if(gameStatue.chapterTwoEnemyOneDel==true){
            if(addOnec==false){
                this.modal._visible=true;
            this.modal.getChildByName("winAlert")._visible=true;
                addOnec=true;
                setTimeout(function(){
                    //怪物初始状态设置为存活
                    gameStatue.chapterTwoEnemyOneDel=false;
                    gameStatue.chooseChapterClockTwo=true;
                    gameJson.goldNumber+=1246;
                    gameJson.crystalNumber+=23;
                    gameJson.empiricalValue+=310;
                    Laya.stage.renderingEnabled=false;
                },100);
            }
           
        }
    }
       

}