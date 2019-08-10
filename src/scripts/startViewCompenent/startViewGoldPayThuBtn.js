var gameJson = require("../../jsonJS/heroinfo.js");
var alphaFlag=false;
var alphaFlagTwo=false;
    export default class startViewGoldPayThuBtn extends Laya.Script {
/** @prop {name:paySuccessText, tips:"兑换成功Text", type:Node, default:null}*/
/** @prop {name:payFallText, tips:"兑换失败Text", type:Node, default:null}*/
    constructor() { 
        super(); 
        this.paySuccessText=null;
        this.payFallText=null;
    }
    
    onEnable() {
        alphaFlag=false;
        alphaFlagTwo=false;
    }
    onClick(){
        alphaFlag=false;
        alphaFlagTwo=false;
        this.paySuccessText.y=210;
        this.payFallText.y=210;
        this.paySuccessText.alpha=1;
        this.payFallText.alpha=1;
        if(gameJson.crystalNumber>=750){
            gameJson.crystalNumber-=750;
            gameJson.goldNumber+=100000;
            this.paySuccessText.visible=true;
            this.payFallText.visible=false;
            alphaFlag=true;
            alphaFlagTwo=false;
        }else{
            //宝石不足
            this.paySuccessText.visible=false;
            this.payFallText.visible=true;
            alphaFlag=false;
            alphaFlagTwo=true;
        }
        
    }
    onDisable() {
    }
    onUpdate(){

        if(alphaFlag==true){
            this.paySuccessText.y-=3
            this.paySuccessText.alpha-=0.05;
            if(this.paySuccessText.alpha<=0){
                this.paySuccessText.alpha==0;
                alphaFlag=false;
            }
        }
        if(alphaFlagTwo==true){
            this.payFallText.y-=3
            this.payFallText.alpha-=0.05;
            if(this.payFallText.alpha<=0){
                this.payFallText.alpha==0;
                alphaFlagTwo=false;
            }
        }
    }
}