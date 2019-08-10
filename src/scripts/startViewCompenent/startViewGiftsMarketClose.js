export default class startViewGiftsMarketClose extends Laya.Script {
/** @prop {name:Modal, tips:"模态框", type:Node, default:null}*/
/** @prop {name:giftsPayAlert, tips:"礼包兑换页面", type:Node, default:null}*/
    constructor() { 
        super(); 
        this.Modal=null;
        this.giftsPayAlert=null;
    }
    
    onEnable() {
    }

    onDisable() {
    }
    onClick(){
        this.Modal.visible=false;
        this.giftsPayAlert.visible=false;
    }
}