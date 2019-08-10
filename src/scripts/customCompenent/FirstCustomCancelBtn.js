export default class FirstCustomCancelBtn extends Laya.Script {
/** @prop {name:Modal, tips:"模态框", type:Node,default:null}*/
    constructor() { 
        super(); 
        this.Modal=null;
    }
    
    onEnable() {
    }

    onDisable() {
    }
    onClick(){
        this.Modal._visible=false;
        this.Modal.getChildByName("verifyAlert")._visible=false;
        Laya.stage.renderingEnabled=true;
    }
}