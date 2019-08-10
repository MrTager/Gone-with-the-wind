
var modal;
var payAlert;
    export default class StartViewAlertClose extends Laya.Script {

    constructor() { 
        super(); 
        
    }
    
    onEnable() {
        modal=this.owner.parent.parent.getChildByName("modal");
        payAlert=this.owner.parent;
    }

    onDisable() {
    }
    onClick(){
        modal.visible=false;
        payAlert.visible=false;
    }
}