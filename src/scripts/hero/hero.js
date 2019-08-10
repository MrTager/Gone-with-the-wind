var heroX,heroY;
var keyCodeList=[];
var heroDirection=1;//主角朝向
var runLeftStatue=false;
var runRightStatue=false;
var standLeftStatue=false;
var standRightStatue=false;
var jumpLeftStatue=false;
var jumpRightStatue=false;
var jumpCount=0;
var running=false;
var littleKillRight=false;
var littleKillLeft=false;
var littleKilling=false;
var time_line=new Laya.TimeLine;
var enemy,enemyHPNumber,enemyHPInAllNumber;
var judgeHitLeft=false;
var judgeHitRight=false;
var heroFallStatue=false;


var gameJson = require("../../jsonJS/heroinfo.js");
    export default class hero extends Laya.Script {
        
        /** @prop {name:enemyMargin, tips:"敌人锚点到敌人边界宽度", type:Number, default:60}*/
        /** @prop {name:attackDamage, tips:"攻击伤害", type:Number,default:10000}*/
        /** @prop {name:jumpHeight, tips:"跳跃高度", type:Number,default:200}*/
        /** @prop {name:heroHPInAll, tips:"主角总血量", type:Number,default:10000}*/
        /** @prop {name:Modal, tips:"模态框", type:Node,default:null}*/
        /** @prop {name:heroHitLable, tips:"英雄伤害Lable", type:Node,default:null}*/
    constructor() { 
        super(); 
       
        this.enemyMargin=60;
        this.attackDamage=10000;
        this.jumpHeight=200;
        this.heroHPInAll=10000;
        this.Modal=null;
        this.heroHitLable=null;
    }
    
    onEnable() {
        heroY=this.owner.y;
        enemy=this.owner.parent.getChildByName("enemy");
        heroFallStatue=false;
        this.attackDamage=gameJson.attackDamage;
        this.heroHPInAll=gameJson.heroHPInAll;
        gameJson.heroHP=gameJson.heroHPInAll;

    }

    onDisable() {
    }
    onKeyDown(e){
        if( keyCodeList.indexOf(e.keyCode)==-1){
            keyCodeList.push(e.keyCode);
        }
            
    }
    onKeyUp(e){
        keyCodeList.splice(keyCodeList.indexOf(e.keyCode),1)

        runLeftStatue=false;
        runRightStatue=false;
        if(e.keyCode==87||e.keyCode==38){
           jumpCount=0;
            
        }
    }
    onUpdate(){
        //这里让英雄的方向实时传入共享对象里面
        gameJson.heroDeriction=heroDirection;

        if( gameJson.heroHP<=0){
            gameJson.heroHP=0;
            //游戏失败
            if(heroFallStatue==false){
                heroFallStatue=true;
                if(heroDirection==1){
                    this.heroFallDirction();
                }
                if(heroDirection==2){
                    this.heroFallDirction();
                }
            }
        }
          //人物左右边界值的判定
            if(this.owner.x<=50){
                this.owner.x=50;
            }else if(this.owner.x>=1850){
                this.owner.x=1850;
            }
            //leftRunning
            if(keyCodeList[0]==65||keyCodeList[0]==37||keyCodeList[1]==65||keyCodeList[1]==37){
                running=true;
                this.owner.x-=10;
                if(runLeftStatue==false){
                   this.runDirction(-1);
                   runLeftStatue=true;
                   heroDirection=1;
                }
                standLeftStatue=false;
                standRightStatue=false; 
                
               
                if(keyCodeList[1]==87||keyCodeList[1]==38){
                    if(jumpLeftStatue==false&&jumpCount==0){  
                        this.jumpDirction(-1)
                        jumpCount=1;
                        jumpLeftStatue=true;
                        time_line.on(Laya.Event.COMPLETE,this,function(){
                        jumpLeftStatue=false;
                        runLeftStatue=false;
                        }) 
                    }

                 }

            }
            //rightRunning
            if(keyCodeList[0]==68||keyCodeList[0]==39||keyCodeList[1]==68||keyCodeList[1]==39){
                running=true;
                this.owner.x+=10;
                if(runRightStatue==false){
                    this.runDirction(1);
                    runRightStatue=true;
                    heroDirection=2;
                 }
                 standLeftStatue=false;
                 standRightStatue=false;
                 

                      if(keyCodeList[1]==87||keyCodeList[1]==38){
                      if(jumpRightStatue==false&&jumpCount==0){  
                          this.jumpDirction(1)
                          jumpCount=1;
                          jumpRightStatue=true;
                          time_line.on(Laya.Event.COMPLETE,this,function(){
                          jumpRightStatue=false;
                          runRightStatue=false;
                          }) 
                      }

                   }     
            }


            if(keyCodeList[0]==87||keyCodeList[0]==38){
                
                if(heroDirection==1){
                    if(jumpLeftStatue==false&&jumpCount==0){  
                        this.jumpDirction(-1)
                        jumpLeftStatue=true;
                        jumpCount=1;
                        
                            time_line.on(Laya.Event.COMPLETE,this,function(){
                            jumpLeftStatue=false;
                            standLeftStatue=false;
                            standRightStatue=false;
                            if(running==true){

                            }else{
                                if(standLeftStatue==false){
                                this.standDirction(-1);
                                standLeftStatue=true;
                            }
                            }

                        }) 
                        
                        
                    }        
                }else if(heroDirection==2){
                    if(jumpRightStatue==false&&jumpCount==0){
                        this.jumpDirction(1)
                        jumpRightStatue=true;
                        jumpCount=1;
                        
                            time_line.on(Laya.Event.COMPLETE,this,function(){
                            jumpRightStatue=false;
                            standLeftStatue=false;
                            standRightStatue=false;
                            if(running==true){

                            }else{
                                 if(standRightStatue==false){
                                this.standDirction(1);
                                standRightStatue=true;
                            }
                            }  
                        })   
                    }
                }
            }
            if(runLeftStatue==false&&runRightStatue==false){
                if(heroDirection==1){
                    if(standLeftStatue==false){
                        this.standDirction(-1);
                        standLeftStatue=true;
                    }  
                }else if(heroDirection==2){
                    if(standRightStatue==false){
                        this.standDirction(1);
                        standRightStatue=true;
                    }  
                }
            }else{};

            //j技能
            if(keyCodeList[0]==74||keyCodeList[1]==74||keyCodeList[2]==74){ 
            if(heroDirection==1){
                judgeHitLeft=false
                if(littleKillRight==false){
                    
                    this.littleKillDirction(-1);
                    littleKillRight=true;
                    //传一个攻击信号给敌人
                    gameJson.heroIsHit=true;
    
                    this.owner.on(Laya.Event.COMPLETE,this,function(){
                        littleKillRight=false;
                        gameJson.heroIsHit=false;
                    if(judgeHitLeft==false){

                      judgeHitLeft=true;
                    }

                    })
                }
            }else if(heroDirection==2){
                judgeHitRight=false
                if(littleKillLeft==false){
                    this.littleKillDirction(1);
                    littleKillLeft=true;
                    //传一个攻击信号给敌人
                    gameJson.heroIsHit=true;


                    this.owner.on(Laya.Event.COMPLETE,this,function(){
                        littleKillLeft=false;
                        gameJson.heroIsHit=false;
                        if(judgeHitRight==false){
      
                            judgeHitRight=true;
                          }
                    })

                }
            }
            }
           
       
    }
    standDirction(n){
        this.owner.scaleX=n;
        this.heroHitLable.scaleX=n;
        this.owner.play(0,true,"standRight")
    }
    runDirction(n){
        this.owner.scaleX=n;
        this.heroHitLable.scaleX=n;
        this.owner.play(0,true,"runRight");
    }
    jumpDirction(n){
        this.owner.scaleX=n;
        this.heroHitLable.scaleX=n;
        this.owner.play(0,false,"rightJump");
        time_line.addLabel("up",0)
        .to(this.owner,{y:heroY-this.jumpHeight},300)
        .to(this.owner,{y:heroY},300)
        time_line.play("up");
    }
    littleKillDirction(n){
        this.owner.scaleX=n;
        this.heroHitLable.scaleX=n;
        this.owner.play(0,false,"littleKill");
    }
    heroFallDirction(){
        this.Modal._visible=true;
        this.Modal.getChildByName("fallAlert")._visible=true;
        gameJson.goldNumber+=122;
        gameJson.crystalNumber+=3;
        gameJson.empiricalValue+=98;
        setTimeout(function(){
            Laya.stage.renderingEnabled=false;
        },100);
    }
    
}