export default class firstCustomWinAlertBackStartViewBtn extends Laya.Script {

    constructor() { 
        super(); 

    }
    
    onEnable() {

        
    }

    onDisable() {
    }
    onClick(){
        Laya.stage.renderingEnabled=true;
        Laya.Scene.open("StartView.scene")
    }
}