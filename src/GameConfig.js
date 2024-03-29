/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import heroHPBar from "./scripts/hero/heroHPBar"
import FirstCustomBackBtn from "./scripts/customCompenent/FirstCustomBackBtn"
import enemy from "./scripts/ememy/enemy"
import enemyTwo from "./scripts/ememy/enemyTwo"
import enemyThree from "./scripts/ememy/enemyThree"
import hero from "./scripts/hero/hero"
import enemyFour from "./scripts/ememy/enemyFour"
import enemyFive from "./scripts/ememy/enemyFive"
import firstCustomFallAlertBackStartViewBtn from "./scripts/customCompenent/firstCustomFallAlertBackStartViewBtn"
import firstCustomWinAlertBackStartViewBtn from "./scripts/customCompenent/firstCustomWinAlertBackStartViewBtn"
import FirstCustomAffirmBtn from "./scripts/customCompenent/FirstCustomAffirmBtn"
import FirstCustomCancelBtn from "./scripts/customCompenent/FirstCustomCancelBtn"
import chapterFive from "./scripts/chapterFive/chapterFive"
import chapterFour from "./scripts/chapterFour/chapterFour"
import chapterOne from "./scripts/chapterOne"
import chooseTwoChapter from "./scripts/customsJS/chooseTwoChapter"
import loading from "./scripts/loading/loading"
import enemySix from "./scripts/ememy/enemySix"
import enemySeven from "./scripts/ememy/enemySeven"
import chapterSeven from "./scripts/chapterSeven/chapterSeven"
import chapterSix from "./scripts/chapterSix/chapterSix"
import chapterThree from "./scripts/chapterThree/chapterThree"
import chapterTwo from "./scripts/chapterTwo/chapterTwo"
import customOne_First from "./scripts/customsJS/customOne_First"
import chooseThreeChapter from "./scripts/customsJS/chooseThreeChapter"
import chooseFourChapter from "./scripts/customsJS/chooseFourChapter"
import chooseFiveChapter from "./scripts/customsJS/chooseFiveChapter"
import chooseSixChapter from "./scripts/customsJS/chooseSixChapter"
import chooseSevenChapter from "./scripts/customsJS/chooseSevenChapter"
import sceneChooseCustomBackBtn from "./scripts/sceneChooseCustomBackBtn"
import chooseCustoms from "./scripts/chooseCustoms"
import progressBar from "./scripts/progressBar"
import firstView from "./scripts/firstView/firstView"
import StartView from "./scripts/StartView"
import startBtn from "./scripts/startBtn"
import startViewGoldAddBtn from "./scripts/startViewCompenent/startViewGoldAddBtn"
import startViewCrystalAddBtn from "./scripts/startViewCompenent/startViewCrystalAddBtn"
import startViewGiftsMarket from "./scripts/startViewCompenent/startViewGiftsMarket"
import startViewHeroInfomation from "./scripts/startViewCompenent/startViewHeroInfomation"
import startViewFightingIntensify from "./scripts/startViewCompenent/startViewFightingIntensify"
import startViewHeroInfomationAlertClose from "./scripts/startViewCompenent/startViewHeroInfomationAlertClose"
import startViewHeroInformationAlert from "./scripts/startViewCompenent/startViewHeroInformationAlert"
import startViewGoldPayAlertClose from "./scripts/startViewCompenent/startViewGoldPayAlertClose"
import startViewGoldPayTenBtn from "./scripts/startViewCompenent/startViewGoldPayTenBtn"
import startViewGoldPayHunBtn from "./scripts/startViewCompenent/startViewGoldPayHunBtn"
import startViewGoldPayThuBtn from "./scripts/startViewCompenent/startViewGoldPayThuBtn"
import startViewCrystalPayAlertClose from "./scripts/startViewCompenent/startViewCrystalPayAlertClose"
import startViewGiftsMarketClose from "./scripts/startViewCompenent/startViewGiftsMarketClose"
import startViewFightingIntensifyClose from "./scripts/startViewCompenent/startViewFightingIntensifyClose"
import startViewFightIntensifyAlert from "./scripts/startViewCompenent/startViewFightIntensifyAlert"

export default class GameConfig {
    static init() {
        //注册Script或者Runtime引用
        let reg = Laya.ClassUtils.regClass;
		reg("scripts/hero/heroHPBar.js",heroHPBar);
		reg("scripts/customCompenent/FirstCustomBackBtn.js",FirstCustomBackBtn);
		reg("scripts/ememy/enemy.js",enemy);
		reg("scripts/ememy/enemyTwo.js",enemyTwo);
		reg("scripts/ememy/enemyThree.js",enemyThree);
		reg("scripts/hero/hero.js",hero);
		reg("scripts/ememy/enemyFour.js",enemyFour);
		reg("scripts/ememy/enemyFive.js",enemyFive);
		reg("scripts/customCompenent/firstCustomFallAlertBackStartViewBtn.js",firstCustomFallAlertBackStartViewBtn);
		reg("scripts/customCompenent/firstCustomWinAlertBackStartViewBtn.js",firstCustomWinAlertBackStartViewBtn);
		reg("scripts/customCompenent/FirstCustomAffirmBtn.js",FirstCustomAffirmBtn);
		reg("scripts/customCompenent/FirstCustomCancelBtn.js",FirstCustomCancelBtn);
		reg("scripts/chapterFive/chapterFive.js",chapterFive);
		reg("scripts/chapterFour/chapterFour.js",chapterFour);
		reg("scripts/chapterOne.js",chapterOne);
		reg("scripts/customsJS/chooseTwoChapter.js",chooseTwoChapter);
		reg("scripts/loading/loading.js",loading);
		reg("scripts/ememy/enemySix.js",enemySix);
		reg("scripts/ememy/enemySeven.js",enemySeven);
		reg("scripts/chapterSeven/chapterSeven.js",chapterSeven);
		reg("scripts/chapterSix/chapterSix.js",chapterSix);
		reg("scripts/chapterThree/chapterThree.js",chapterThree);
		reg("scripts/chapterTwo/chapterTwo.js",chapterTwo);
		reg("scripts/customsJS/customOne_First.js",customOne_First);
		reg("scripts/customsJS/chooseThreeChapter.js",chooseThreeChapter);
		reg("scripts/customsJS/chooseFourChapter.js",chooseFourChapter);
		reg("scripts/customsJS/chooseFiveChapter.js",chooseFiveChapter);
		reg("scripts/customsJS/chooseSixChapter.js",chooseSixChapter);
		reg("scripts/customsJS/chooseSevenChapter.js",chooseSevenChapter);
		reg("scripts/sceneChooseCustomBackBtn.js",sceneChooseCustomBackBtn);
		reg("scripts/chooseCustoms.js",chooseCustoms);
		reg("scripts/progressBar.js",progressBar);
		reg("scripts/firstView/firstView.js",firstView);
		reg("scripts/StartView.js",StartView);
		reg("scripts/startBtn.js",startBtn);
		reg("scripts/startViewCompenent/startViewGoldAddBtn.js",startViewGoldAddBtn);
		reg("scripts/startViewCompenent/startViewCrystalAddBtn.js",startViewCrystalAddBtn);
		reg("scripts/startViewCompenent/startViewGiftsMarket.js",startViewGiftsMarket);
		reg("scripts/startViewCompenent/startViewHeroInfomation.js",startViewHeroInfomation);
		reg("scripts/startViewCompenent/startViewFightingIntensify.js",startViewFightingIntensify);
		reg("scripts/startViewCompenent/startViewHeroInfomationAlertClose.js",startViewHeroInfomationAlertClose);
		reg("scripts/startViewCompenent/startViewHeroInformationAlert.js",startViewHeroInformationAlert);
		reg("scripts/startViewCompenent/startViewGoldPayAlertClose.js",startViewGoldPayAlertClose);
		reg("scripts/startViewCompenent/startViewGoldPayTenBtn.js",startViewGoldPayTenBtn);
		reg("scripts/startViewCompenent/startViewGoldPayHunBtn.js",startViewGoldPayHunBtn);
		reg("scripts/startViewCompenent/startViewGoldPayThuBtn.js",startViewGoldPayThuBtn);
		reg("scripts/startViewCompenent/startViewCrystalPayAlertClose.js",startViewCrystalPayAlertClose);
		reg("scripts/startViewCompenent/startViewGiftsMarketClose.js",startViewGiftsMarketClose);
		reg("scripts/startViewCompenent/startViewFightingIntensifyClose.js",startViewFightingIntensifyClose);
		reg("scripts/startViewCompenent/startViewFightIntensifyAlert.js",startViewFightIntensifyAlert);
    }
}
GameConfig.width = 1920;
GameConfig.height = 1080;
GameConfig.scaleMode ="exactfit";
GameConfig.screenMode = "none";
GameConfig.alignV = "top";
GameConfig.alignH = "left";
GameConfig.startScene = "startGame.scene";
GameConfig.sceneRoot = "";
GameConfig.debug = false;
GameConfig.stat = false;
GameConfig.physicsDebug = false;
GameConfig.exportSceneToJson = true;

GameConfig.init();
