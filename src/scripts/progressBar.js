
    export default class progressBar extends Laya.Script {

    constructor() { 
        super(); 
       this.bar=this.owner
    }
    
    onEnable() {
        console.log(this.bar);
    }

    onDisable() {
    }
    

}