export default class startViewGoldAddBtn extends Laya.Script {
/** @prop {name:Modal, tips:"模态框", type:Node, default:null}*/
/** @prop {name:goldPayAlert, tips:"模态框", type:Node, default:null}*/
    constructor() { 
        super(); 

        this.Modal=null;
        this.goldPayAlert=null;
    }
    
    onEnable() {
    }

    onDisable() {
    }
    onClick(){

        this.Modal.visible=true;
        this.goldPayAlert.visible=true;
        
    }
}