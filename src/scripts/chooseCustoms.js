var gameStatue = require("../jsonJS/enemyStatueinfo.js");
    export default class chooseCustoms extends Laya.Script {
        /** @prop {name:clockTwo, tips:"clock2", type:Node,default:null}*/
        /** @prop {name:Two, tips:"2", type:Node,default:null}*/
        /** @prop {name:clockThree, tips:"clock3", type:Node,default:null}*/
        /** @prop {name:Three, tips:"3", type:Node,default:null}*/
        /** @prop {name:clockFour, tips:"clock4", type:Node,default:null}*/
        /** @prop {name:Four, tips:"4", type:Node,default:null}*/
        /** @prop {name:clockFive, tips:"clock5", type:Node,default:null}*/
        /** @prop {name:Five, tips:"5", type:Node,default:null}*/
        /** @prop {name:clockSix, tips:"clock6", type:Node,default:null}*/
        /** @prop {name:Six, tips:"6", type:Node,default:null}*/
        /** @prop {name:clockSeven, tips:"clock7", type:Node,default:null}*/
        /** @prop {name:Seven, tips:"7", type:Node,default:null}*/


    constructor() { 
        super(); 
        this.clockTwo=null;
        this.Two=null;
        this.clockThree=null;
        this.Three=null;
        this.clockFour=null;
        this.Four=null;
        this.clockFive=null;
        this.Five=null;
        this.clockSix=null;
        this.Six=null;
        this.clockSeven=null;
        this.Seven=null;


    }
    
    onEnable() {
    }

    onDisable() {
    }
    onUpdate(){
       this.openClock(gameStatue.chooseChapterClockTwo,this.clockTwo,this.Two);
       this.openClock(gameStatue.chooseChapterClockThree,this.clockThree,this.Three);
       this.openClock(gameStatue.chooseChapterClockFour,this.clockFour,this.Four);
       this.openClock(gameStatue.chooseChapterClockFive,this.clockFive,this.Five);
       this.openClock(gameStatue.chooseChapterClockSix,this.clockSix,this.Six);
       this.openClock(gameStatue.chooseChapterClockSeven,this.clockSeven,this.Seven);
        
    }
    openClock(n,m,i){
        if(n==true){
            m.visible=false;
            i.visible=true;
        }else{
            m.visible=true;
            i.visible=false;
        }
    }
}