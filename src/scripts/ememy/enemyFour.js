var hero;
var heroX;
var heroY;
var distance;
var runstatue=false;
var runstatueTwo=false;
var waitRightOne=true;
var waitRightTwo=true;
var hitStatue=true;//播放一次标识符
var hitStatueTwo=true;//播放一次标识符
var fallStatue=false;
var enemyDirection=1;
var enemyHPBar;
var heroHP,heroHPInAll;
var heroJumpTop;
var hitAniIndexStatu=false;//监听伤害动画执行到第几帧
var heroStartY;//主角一开始的y坐标
var heroJumpLaterY;//判断主角是否跳起的y坐标
var heroHitLableAnimation=false;
var heroHitLableStartY;
var enemyHitLableAnimation=false;//lable隐退标识符
var enemyHitLableStartY;//敌人lable初始值
var isHitStatue=false;//英雄伤害执行一次标识符
var clearHPBarStutue=false;//死亡之后延迟消失HPBar标识符
var gameJson = require("../../jsonJS/heroinfo.js");
var gameStatue = require("../../jsonJS/enemyStatueinfo.js");
    export default class enemyFour extends Laya.Script {
    /** @prop {name:enemyHP, tips:"敌人血量", type:Number, default:40000}*/
    /** @prop {name:enemyHPInAll, tips:"敌人总血量", type:Number, default:40000}*/
    /** @prop {name:ownerSpeed, tips:"敌人移动速度", type:Number, default:1}*/
    /** @prop {name:enemyLeftMargin, tips:"主角锚点到敌人左边界宽度", type:Number, default:1}*/
    /** @prop {name:enemyAttackDamage, tips:"敌人伤害值", type:Number, default:100}*/
    /** @prop {name:Modal, tips:"模态框", type:Node,default:null}*/
    /** @prop {name:die, tips:"是否死亡", type:Boolen,default:false}*/
    /** @prop {name:hero, tips:"英雄实例", type:Node,default:null}*/
    /** @prop {name:hitLable, tips:"伤害Lable", type:Node,default:null}*/
    /** @prop {name:heroHitLable, tips:"英雄伤害Lable", type:Node,default:null}*/
    /** @prop {name:hitMargin, tips:"主角攻击距离", type:Number, default:250}*/
    /** @prop {name:enemyHPBar, tips:"敌人HPBar", type:Node,default:null}*/
    constructor() { 
        super(); 
        this.enemyHP=40000; 
        this.enemyHPInAll=40000;
        this.ownerSpeed=5;
        this.enemyLeftMargin=111;
        this.enemyRightMargin=127;
        this.enemyAttackDamage=100;
        this.Modal=null;
        this.die=false;
        this.hero=null;
        this.hitLable=null;
        this.heroHitLable=null;
        this.hitMargin=250;
        this.enemyHPBar=null;
    }
    
    onEnable() {
        hero=this.hero; 
        enemyHPBar=this.owner._children[0];
        heroJumpTop=this.hero._components[0].jumpHeight;
        heroHP=this.hero._components[0].heroHP;
        heroHPInAll=this.hero._components[0].heroHPInAll;  
        fallStatue=false; 
        //保存hero一开始的y坐标
        heroStartY=hero.y;
        heroJumpLaterY=heroStartY-100;
        //保存heroHitLable初始y值
        heroHitLableStartY=this.heroHitLable.y;
        runstatue=false
        runstatueTwo=false
       //保存初始enemyhitlableY轴位置
        enemyHitLableStartY=this.hitLable.y;  
        clearHPBarStutue=false; 
    }

    onDisable() {
    }
    onUpdate(){
      
        //敌人血条的一系列设置
        this.enemyHPBar.bg.skin = "comp/progress2.png"
        this.enemyHPBar.bar.skin = "comp/progress$bar2.png"
        this.enemyHPBar.value=(this.enemyHP/this.enemyHPInAll);

        if(gameJson.heroIsHit==true){  
              //在这里判断自己有没有进入英雄的攻击距离，如果true则扣血
             //这里判断英雄的方向
             if(gameJson.heroDeriction==enemyDirection){

                if(isHitStatue==false){
                this.toJudgeDistanse();
                isHitStatue=true;
                
          }   
          }
        }else{
            isHitStatue=false;
        }
        
        //血量最低值
        if(this.enemyHP<=0){
            this.enemyHP=0;
            this.die=true;
            if(fallStatue==false){
                fallStatue=true;
                if(enemyDirection==1){
                    this.fallAnimation(1);
                }
                if(enemyDirection==2){
                    this.fallAnimation(-1);
                }
            }
        }
        if(this.die==false){
                //敌人跟踪攻击
            heroX=hero.x;
            heroY=hero.y;
            if(heroX<this.owner.x-this.enemyLeftMargin){
              
                hitStatue=true;
                hitStatueTwo=true;
                this.owner.x-=this.ownerSpeed;
                if( runstatue==false){
                    enemyDirection=2;
                    this.owner.scaleX=-1;
                    this.enemyHPBar.scaleX=-1;
                    this.hitLable.scaleX=-1;
                    this.owner.play(0,true,"rightRunning")
                    runstatue=true;
                }            
            }
            if((heroX>=this.owner.x-this.enemyLeftMargin)&&(heroX<=this.owner.x+this.enemyRightMargin)){
                runstatue=false
                runstatueTwo=false
                if(enemyDirection==2&&hitStatue==true){
                    this.owner.scaleX=-1;
                    this.enemyHPBar.scaleX=-1;
                    this.hitLable.scaleX=-1;
                    this.owner.play(0,true,"rightHit");
                    hitStatue=false;
                }
                if(enemyDirection==1&&hitStatueTwo==true){
                    this.owner.scaleX=1;
                    this.enemyHPBar.scaleX=1;
                    this.hitLable.scaleX=1;
                    this.owner.play(0,true,"rightHit");
                    hitStatueTwo=false;
                }

                //在第六帧的时候扣血(判断第六帧的时候主角有没有跳起来)
                if(this.owner.index==6){
                    if(hitAniIndexStatu==false){
                        if(hero.y>=heroJumpLaterY){
                            //扣血
                            this.hit();
                            hitAniIndexStatu=true;
                        }
                    }
                }else{
                    hitAniIndexStatu=false;
                }
                

            }

            if(heroX>this.owner.x+this.enemyRightMargin){
                hitStatue=true;
                hitStatueTwo=true;
                this.owner.x+=this.ownerSpeed;
                if( runstatueTwo==false){
                    enemyDirection=1;
                    this.owner.scaleX=1;
                    this.enemyHPBar.scaleX=1;
                    this.hitLable.scaleX=1;
                    this.owner.play(0,true,"rightRunning")
                    runstatueTwo=true;
                }            
            }
        }

       // 英雄扣血的lable动画
        if(heroHitLableAnimation==true){
            this.heroHitLable.y-=2;
            this.heroHitLable.alpha-=0.01;
            if(this.heroHitLable.alpha<=0){
                heroHitLableAnimation=false;
            }

        }
         //怪物受到伤害，lable隐退
            if(enemyHitLableAnimation==true){
                this.hitLable.y-=2;
                this.hitLable.alpha-=0.01;
                if( this.hitLable.alpha<=0){
                    enemyHitLableAnimation=false;
                }
            }

    }
    hit(){   
        this.heroHitLable.y=heroHitLableStartY;
        this.heroHitLable.alpha=1;
        gameJson.heroHP-=this.enemyAttackDamage;
        this.heroHitLable.text="-"+this.enemyAttackDamage;
        this.heroHitLable._visible=true;
        heroHitLableAnimation=true;

    }

    //判断自己与英雄的距离

    toJudgeDistanse(){                                                                           
        if(Math.abs(this.hero.x-this.owner.x)<=this.hitMargin){

            //这里自己扣血
            this.hitLable.y=enemyHitLableStartY;
            this.hitLable.alpha=1;
            this.enemyHP-=gameJson.attackDamage;
            this.hitLable.text="-"+gameJson.attackDamage;
            if(clearHPBarStutue==false){
                this.hitLable._visible=true;
            }
            enemyHitLableAnimation=true;

        }else{}
    }


    fallAnimation(n){
        this.owner.scaleX=n;
        this.owner.play(0,false,"rightFall");
        this.owner.on(Laya.Event.COMPLETE,this,function(){
            clearHPBarStutue=true;
            this.hitLable._visible=false;
            this.enemyHPBar._visible=false;       
            //敌人死亡标识符(TY)
            gameStatue.chapterTwoEnemyFourDel=true;
        })
    }
}