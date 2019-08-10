
    export default class startBtn extends Laya.Script {

    constructor() { 
        super(); 
        
    }
    
    onEnable() {
        
    }

    onDisable() {
    }
    onClick(){
        Laya.Scene.open("chooseCustoms.scene")
    }
  

}