var gameJson = require("../../jsonJS/heroinfo.js");
var intensifySuccessTextValueStatue=false;
var intensifyFallTextValueStatue=false;
var noMoneyFallTextValueStatue=false;
var intensifySuccessTextStartY,intensifyFallTextStartY,noMoneyFallTextStartY;
    export default class startViewFightIntensifyAlert extends Laya.Script {
/** @prop {name:attackDamageLable, tips:"战力", type:Node, default:null}*/
/** @prop {name:HP, tips:"HPLable", type:Node, default:null}*/
/** @prop {name:fightGoldPay, tips:"攻金币支付", type:Node, default:null}*/
/** @prop {name:fightGoldPayLable, tips:"攻金币支付数量lable", type:Node, default:null}*/
/** @prop {name:fightGoldPayNumber, tips:"攻金币支付数量", type:Number, default:0}*/
/** @prop {name:fightCrystalPay, tips:"攻宝石支付", type:Node, default:null}*/
/** @prop {name:fightCrystalPayLable, tips:"攻宝石支付数量lable", type:Node, default:null}*/
/** @prop {name:fightCrystalPayNumber, tips:"攻宝石支付数量", type:Number, default:0}*/
/** @prop {name:HPGoldPay, tips:"命金币支付", type:Node, default:null}*/
/** @prop {name:HPGoldPayLable, tips:"命金币支付数量lable", type:Node, default:null}*/
/** @prop {name:HPGoldPayNumber, tips:"命金币支付数量", type:Number, default:0}*/
/** @prop {name:HPCrystalPay, tips:"命宝石支付", type:Node, default:null}*/
/** @prop {name:HPCrystalPayLable, tips:"命宝石支付数量lable", type:Node, default:null}*/
/** @prop {name:HPCrystalPayNumber, tips:"命宝石支付数量", type:Number, default:0}*/
/** @prop {name:intensifySuccessText, tips:"强化成功text", type:Node, default:null}*/
/** @prop {name:intensifyFallText, tips:"强化失败text", type:Node, default:null}*/
/** @prop {name:noMoneyFallText, tips:"没有钱text", type:Node, default:null}*/
/** @prop {name:intensifyImg, tips:"八卦圆", type:Node, default:null}*/
    constructor() { 
        super(); 
        
        this.attackDamageLable=null;
        this.HP=null;
        this.fightGoldPay=null;
        this.fightCrystalPay=null;
        this.HPGoldPay=null;
        this.HPCrystalPay=null;
        this.fightGoldPayNumber=0;
        this.fightGoldPayLable=null;
        this.fightCrystalPayNumber=0;
        this.fightCrystalPayLable=null;
        this.HPGoldPayNumber=0;
        this.HPGoldPayLable=null;
        this.HPCrystalPayNumber=0;
        this.HPCrystalPayLable=null;
        this.intensifySuccessText=null;
        this.intensifyFallText=null;
        this.noMoneyFallText=null;
        this.intensifyImg=null;
        
    }
    
    onEnable() {
        this.fightGoldPayLable.text=this.fightGoldPayNumber;
        this.fightCrystalPayLable.text=this.fightCrystalPayNumber;
        this.HPGoldPayLable.text=this.HPGoldPayNumber;
        this.HPCrystalPayLable.text=this.HPCrystalPayNumber;
        intensifySuccessTextStartY=this.intensifySuccessText.y;
        intensifyFallTextStartY=this.intensifyFallText.y;
        noMoneyFallTextStartY=this.noMoneyFallText.y;
        this.fightGoldPay.on(Laya.Event.CLICK,this,this.funcFightGoldPay)
        this.fightCrystalPay.on(Laya.Event.CLICK,this,this.funcFightCrystalPay)
        this.HPGoldPay.on(Laya.Event.CLICK,this,this.funcHPGoldPay)
        this.HPCrystalPay.on(Laya.Event.CLICK,this,this.funcHPCrystalPay)

    }
//初始化text

    beginToUse(){
        intensifySuccessTextValueStatue=false;
        this.intensifySuccessText.visible=false;
        intensifyFallTextValueStatue=false;
        this.intensifyFallText.visible=false;
        noMoneyFallTextValueStatue=false;
        this.noMoneyFallText.visible=false;
        this.intensifySuccessText.y=intensifySuccessTextStartY;
        this.intensifySuccessText.alpha=1;
        this.intensifyFallText.y=intensifyFallTextStartY;
        this.intensifyFallText.alpha=1;
        this.noMoneyFallText.y=noMoneyFallTextStartY;
        this.noMoneyFallText.alpha=1;
    }
    
    funcFightGoldPay(){
        
        this.beginToUse();
        if(gameJson.goldNumber>= this.fightGoldPayNumber){
            intensifySuccessTextValueStatue=true;
            gameJson.goldNumber-=this.fightGoldPayNumber;
            var attackRandom=Math.floor(Math.random()*(1500-500+1)+500);
            gameJson.attackDamage+=attackRandom;

        }else{
            //失败
            //金币不足
            intensifyFallTextValueStatue=true;
            noMoneyFallTextValueStatue=true;

             
        }
    }
    funcFightCrystalPay(){
        this.beginToUse();
        if(gameJson.crystalNumber>=this.fightCrystalPayNumber){
            intensifySuccessTextValueStatue=true;
            gameJson.crystalNumber-=this.fightCrystalPayNumber;
            var attackRandom=Math.floor(Math.random()*(1500-500+1)+500);
            gameJson.attackDamage+=attackRandom;
        }else{
            //失败
            //金币不足
            intensifyFallTextValueStatue=true;
            noMoneyFallTextValueStatue=true;
        }
    }
    funcHPGoldPay(){
        this.beginToUse();

        if(gameJson.goldNumber>= this.HPGoldPayNumber){
            intensifySuccessTextValueStatue=true;
            gameJson.goldNumber-=this.HPGoldPayNumber;
            var HPRandom=Math.floor(Math.random()*(2000-1000+1)+1000);
            gameJson.heroHPInAll+=HPRandom;
            gameJson.heroHP+=HPRandom;
        }else{
            //失败
            //金币不足
            intensifyFallTextValueStatue=true;
            noMoneyFallTextValueStatue=true;
        }
    }
    funcHPCrystalPay(){
        this.beginToUse();
        if(gameJson.crystalNumber>=this.HPCrystalPayNumber){
            intensifySuccessTextValueStatue=true;
            gameJson.crystalNumber-=this.HPCrystalPayNumber;
            var HPRandom=Math.floor(Math.random()*(2000-1000+1)+1000);
            gameJson.heroHPInAll+=HPRandom;
            gameJson.heroHP+=HPRandom;
        }else{
            //失败
            //金币不足
            intensifyFallTextValueStatue=true;
            noMoneyFallTextValueStatue=true;
        }
    }
    onDisable() {
    }
    onUpdate(){
        this.attackDamageLable.text=gameJson.attackDamage;
        this.HP.text=gameJson.heroHPInAll;
        this.intensifyImg.rotation-=1;
        if(this.intensifyImg.rotation<=-360){
            this.intensifyImg.rotation=-1;
        }
        if(intensifySuccessTextValueStatue==true){
            this.intensifySuccessText.visible=true;
            this.intensifySuccessText.alpha-=0.01;
            this.intensifySuccessText.y-=3;
            if(this.intensifySuccessText.alpha<=0){
                intensifySuccessTextValueStatue=false;
                this.intensifySuccessText.alpha=0;
            }
        }
        if(intensifyFallTextValueStatue==true&&noMoneyFallTextValueStatue==true){
            this.intensifyFallText.visible=true;
            this.noMoneyFallText.visible=true;
            this.intensifyFallText.alpha-=0.01;
            this.noMoneyFallText.alpha-=0.01;
            this.intensifyFallText.y-=3;
            this.noMoneyFallText.y-=3;
            if(this.intensifyFallText.alpha<=0){
                intensifyFallTextValueStatue=false;
                noMoneyFallTextValueStatue=false;
                this.intensifyFallText.alpha=0;
                this.noMoneyFallText.alpha=0;
            }
        }
    }
}