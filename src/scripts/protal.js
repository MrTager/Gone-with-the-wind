
var hero;
export default class protal extends Laya.Script {

    constructor() { 
        super(); 
        
    }
    
    onEnable() {
        hero=this.owner.parent.getChildByName("hero");
    }

    onDisable() {
    }
    onUpdate(){
        if(hero.x>=300){
            this.owner.play(0,true,"remove")
        }
    }
}