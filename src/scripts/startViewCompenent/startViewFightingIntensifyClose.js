export default class startViewFightingIntensifyClose extends Laya.Script {
/** @prop {name:Modal, tips:"模态框", type:Node, default:null}*/
/** @prop {name:fightIntensifyAlert, tips:"战力页面", type:Node, default:null}*/
    constructor() { 
        super(); 
        this.Modal=null;
        this.fightIntensifyAlert=null;
    }
    
    onEnable() {
    }

    onDisable() {
    }
    onClick(){
        this.Modal.visible=false;
        this.fightIntensifyAlert.visible=false;
    }
}