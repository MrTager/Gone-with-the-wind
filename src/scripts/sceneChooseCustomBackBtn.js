export default class sceneChooseCustomBackBtn extends Laya.Script {

    constructor() { 
        super(); 

    }
    
    onEnable() {
    }

    onDisable() {
    }
    onClick(){
        Laya.Scene.open("StartView.scene")
    }
}