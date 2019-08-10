
    export default class customBackBtn extends Laya.Script {
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
        this.Modal._visible=true;
        this.Modal.getChildByName("verifyAlert")._visible=true;
        setTimeout(function(){
            Laya.stage.renderingEnabled=false;
        },100);
        
        
    }
}