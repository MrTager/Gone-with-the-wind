export default class startViewCrystalPayAlertClose extends Laya.Script {
/** @prop {name:Modal, tips:"模态框", type:Node, default:null}*/
/** @prop {name:crystalPayAlert, tips:"宝石兑换页面", type:Node, default:null}*/
    constructor() { 
        super(); 
        this.Modal=null;
        this.crystalPayAlert=null;
    }
    
    onEnable() {
    }

    onDisable() {
    }
    onClick(){
        this.Modal.visible=false;
        this.crystalPayAlert.visible=false;
    }
}