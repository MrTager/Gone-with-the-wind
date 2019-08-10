export default class startViewHeroInfomation extends Laya.Script {
/** @prop {name:Modal, tips:"模态框", type:Node, default:null}*/
/** @prop {name:heroInformationAlert, tips:"个人信息框", type:Node, default:null}*/


    constructor() { 
        super(); 
        this.Modal=null;
        this.heroInformationAlert=null;
    }
    
    onEnable() {
    }

    onDisable() {
    }
    onClick(){

        this.Modal.visible=true;
        this.heroInformationAlert.visible=true;
    }
}