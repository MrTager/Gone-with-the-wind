


var startBtn;
var goldNumberLable;
var crystalNumberLable;
var gameJson = require("../jsonJS/heroinfo.js");
    export default class StartView extends Laya.Script {
/** @prop {name:empiricalValue, tips:"经验值", type:Number,default:0}*/
/** @prop {name:fightingCapacity, tips:"战斗力", type:Number,default:100}*/
/** @prop {name:level, tips:"等级", type:Number,default:0}*/
/** @prop {name:heroName, tips:"游戏ID", type:String,default:""}*/
/** @prop {name:healthPoint, tips:"生命值", type:Number,default:1000}*/
/** @prop {name:goldNumber, tips:"金币数量", type:Number,default:1000}*/
/** @prop {name:crystalNumber, tips:"钻石数量", type:Number,default:100}*/
/** @prop {name:thisBackBtn, tips:"当前页返回按钮", type:Node,default:null}*/

    constructor() { 
        super(); 

        this.empiricalValue=0;
        this.fightingCapacity=100;
        this.level=0;
        this.heroName="";
        this.healthPoint=0;
        this.goldNumber=0;
        this.crystalNumber=100;
        this.thisBackBtn=null;


    }
    onAwake(){
        
    }
    onEnable() {
        startBtn=this.owner.getChildByName("startBtn");
        goldNumberLable=this.owner.getChildByName("goldNumberBG").getChildByName("goldNumber");
        crystalNumberLable=this.owner.getChildByName("crystalNumberBG").getChildByName("crystalNumber");
        this.goldNumber=gameJson.goldNumber;
        this.crystalNumber=gameJson.crystalNumber;
        this.thisBackBtn.on(Laya.Event.CLICK,this,function(){Laya.Scene.open("startGame.scene")});
        
    }

    onDisable() {
    }
    onUpdate(){

        this.goldNumber=gameJson.goldNumber;
        this.crystalNumber=gameJson.crystalNumber;

        goldNumberLable.text=this.goldNumber;
        crystalNumberLable.text=this.crystalNumber;
    }
   
        
    
}