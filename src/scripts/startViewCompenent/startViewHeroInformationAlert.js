var gameJson = require("../../jsonJS/heroinfo.js");
    export default class startViewHeroInformationAlert extends Laya.Script {

/** @prop {name:gameID, tips:"游戏ID", type:Node, default:null}*/
/** @prop {name:attackDamage, tips:"攻击力", type:Node, default:null}*/
/** @prop {name:heroHPInAll, tips:"生命值", type:Node, default:null}*/
/** @prop {name:gradeText, tips:"等级Text", type:Node, default:null}*/
/** @prop {name:nowEmpirical, tips:"当前经验", type:Node, default:null}*/
/** @prop {name:nowAllEmpirical, tips:"当前所需经验", type:Node, default:null}*/
/** @prop {name:empiricalProgressBar, tips:"经验进度条实例", type:Node, default:null}*/
    constructor() { 
        super(); 
        
        this.gameID=null;
        this.attackDamage=null;
        this.heroHPInAll=null;
        this.gradeText=null;
        this.nowEmpirical=null;
        this.nowAllEmpirical=null;
        this.empiricalProgressBar=null;
    }
    
    onEnable() {
        var empiricalArr=[100,300,700,1200,2000,3000,4100,5300,6500,7800,9200,10700];
        var empirical=gameJson.empiricalValue;
        for(var i=0;i<empiricalArr.length;i++){
            if(gameJson.empiricalValue>=10700){
                gameJson.empiricalValue=10700;
            }
            if(empirical>=empiricalArr[i]){
                empirical-=empiricalArr[i];

            }else{
                gameJson.grade=i;
                this.gradeText.text=i;
               // gameJson.empiricalAllValue=empiricalArr[i];
                this.nowEmpirical.text=empirical;
               // gameJson.empiricalThisValue=empirical;
                this.nowAllEmpirical.text=empiricalArr[i]
                break;
            }
        }
        this.empiricalProgressBar.bg.skin="comp/progress2.png"
        this.empiricalProgressBar.bar.skin="comp/progress$bar3.png"
        this.empiricalProgressBar.value=empirical/empiricalArr[i];
        
    }

    onDisable() {
    }
    onUpdate(){
       this.gameID.text=gameJson.ID;
       this.attackDamage.text=gameJson.attackDamage;
       this.heroHPInAll.text=gameJson.heroHPInAll;
    }

}