export default class loadingBar extends Laya.Script {
   /** @prop {name:loadingBar, tips:"加载进度条", type:Node,default:null}*/
    constructor() { 
        super(); 
        this.loadingBar=null;
    }
    
    onEnable() {
        this.loadingBar.bg.skin="comp/progress3.png"
        this.loadingBar.bar.skin="comp/progress4.png"
    }

    onDisable() {
    }
}