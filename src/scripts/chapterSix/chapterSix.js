var gameJson = require("../../jsonJS/heroinfo.js");
var gameStatue = require("../../jsonJS/enemyStatueinfo.js");
var addOnec=false;
    export default class chapterSix extends Laya.Script {
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

        //TG
        this.fallplayAgainBtn.on(Laya.Event.CLICK,this,function(){
            Laya.stage.renderingEnabled=true;
        Laya.Scene.open("chapterSix.scene");
        })
        this.winPayAgainBtn.on(Laya.Event.CLICK,this,function(){
            Laya.stage.renderingEnabled=true;
        Laya.Scene.open("chapterSix.scene");
        })
        this.nextChapterBtn.on(Laya.Event.CLICK,this,function(){
            Laya.stage.renderingEnabled=true;
        Laya.Scene.open("chapterSeven.scene");
        })
    }

    onDisable() {
    }
    onUpdate(){
        //TG
        if(gameStatue.chapterTwoEnemyOneDel==true&&gameStatue.chapterTwoEnemyTwoDel==true&&gameStatue.chapterTwoEnemyThreeDel==true&&gameStatue.chapterTwoEnemyFourDel==true&&gameStatue.chapterTwoEnemyFiveDel==true&&gameStatue.chapterTwoEnemySixDel==true){   
            if(addOnec==false){
                this.modal._visible=true;
                this.modal.getChildByName("winAlert")._visible=true;
                addOnec=true;
                 setTimeout(function(){
                 //敌人一的存活状态初始为false 
                gameStatue.chapterTwoEnemyOneDel=false;
                //敌人二的存活初始状态为false
                gameStatue.chapterTwoEnemyTwoDel=false;
                gameStatue.chapterTwoEnemyThreeDel=false;//TG
                gameStatue.chapterTwoEnemyFourDel=false;
                gameStatue.chapterTwoEnemyFiveDel=false;
                gameStatue.chapterTwoEnemySixDel=false;
                gameStatue.chooseChapterClockSeven=true;
                gameJson.goldNumber+=1246;
                gameJson.crystalNumber+=23;
                gameJson.empiricalValue+=310;
                Laya.stage.renderingEnabled=false;
            },100);
            }
           
        }
    }
}