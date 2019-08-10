var heroHP,heroHPInAll;
var gameJson = require("../../jsonJS/heroinfo.js");
    export default class heroHPBar extends Laya.Script {
/** @prop {name:heroHPDecimal, tips:"heroHP", type:double, default:0}*/

    constructor() { 
        super(); 
        this.heroHPDecimal=0;
     
    }
    
    onEnable() {
        this.owner.bg.skin="comp/progress3.png"
        this.owner.bar.skin="comp/progress$bar2.png"
      
    }

    onDisable() {
    }
    onUpdate(){
     
        
          this.owner.value=gameJson.heroHP/gameJson.heroHPInAll;
    }
}