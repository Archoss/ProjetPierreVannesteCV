window.onload = function () {
    // ##############################################################################
    // ##################### ---        MES VARIABLES       --- #####################
    // ##############################################################################
    // ####      SCORE           ####################################################
    var score = document.getElementById("score");
    score.style.fontSize = "2.6rem";
    score.style.height = "155px";

    // ####      CONTROLES           ################################################
    var controles = document.getElementById("controles");
    controles.style.display = "block";

    // ####      HERO           #####################################################
    var heroBoite = document.getElementById("heroBoite");
    var heroMasque = document.getElementById("heroMasque");
    var heroSprite = document.getElementById("heroSprite");
    var heroBoiteLeft = heroBoite.style.left;
    var heroBoiteWidth = heroBoite.style.width;

    heroBoite.style.position = "absolute";
    heroBoite.style.left = "130px";
    heroBoite.style.top = "0px";
    heroBoite.style.height = "85px";
    heroBoite.style.width = "100px";

    // ####      IMP            #####################################################
    var impBoite = document.getElementById("impBoite");
    var impMasque = document.getElementById("impMasque");
    var impSprite = document.getElementById("impSprite");
    var impBoiteLeft = impBoite.style.left;
    var impBoiteWidth = impBoite.style.width;

    impBoite.style.position = "absolute";
    impBoite.style.left = "500px";
    impBoite.style.top = "0px";
    impBoite.style.height = "93px";
    impBoite.style.width = "110px";

    // ####      ETTIN          #####################################################
    var ettinBoite = document.getElementById("ettinBoite");
    var ettinSprite = document.getElementById("ettinSprite");
    var ettinMasque = document.getElementById("ettinMasque");
    var ettinBoiteLeft = ettinBoite.style.left;
    var ettinBoiteWidth = ettinBoite.style.width;

    ettinBoite.style.position = "absolute";
    ettinBoite.style.left = "290px";
    ettinBoite.style.top = "0px";
    ettinBoite.style.height = "140px";
    ettinBoite.style.width = "175px";

    // ####      HERESIARCH     #####################################################
    var heresiarchBoite = document.getElementById("heresiarchBoite");
    var heresiarchSprite = document.getElementById("heresiarchSprite");
    var heresiarchMasque = document.getElementById("heresiarchMasque");
    var heresiarchBoiteLeft = heresiarchBoite.style.left;
    var heresiarchBoiteWidth = heresiarchBoite.style.width;

    heresiarchBoite.style.position = "absolute";
    heresiarchBoite.style.left = "800px";
    heresiarchBoite.style.top = "0px";
    heresiarchBoite.style.height = "120px";
    heresiarchBoite.style.width = "140px";

    // ####      GARGOYLE       #####################################################
    var gargoyleBoite = document.getElementById("gargoyleBoite");
    var gargoyleSprite = document.getElementById("gargoyleSprite");
    var gargoyleMasque = document.getElementById("gargoyleMasque");
    var gargoyleBoiteLeft = gargoyleBoite.style.left;
    var gargoyleBoiteWidth = gargoyleBoite.style.width;

    gargoyleBoite.style.position = "absolute";
    gargoyleBoite.style.left = "650px";
    gargoyleBoite.style.top = "0px";
    gargoyleBoite.style.height = "85px";
    gargoyleBoite.style.width = "100px";

    // ####      ARME           #####################################################
    var armeTerrain = document.getElementById("armeTerrain");
    // var armeTerrainWidth = getComputedStyle(armeTerrain).getPropertyValue("width");
    // console.log(armeTerrainWidth);
    var armeBoite = document.getElementById("armeBoite");
    var armeMasque = document.getElementById("armeMasque");
    var armeSprite = document.getElementById("armeSprite");
    var armeBoiteLeft = armeBoite.style.left;
    var armeBoiteWidth = armeBoite.style.width;

    armeTerrain.style.width = "1092px";
    armeTerrain.style.height = "106px";

    armeBoite.style.position = "absolute";
    armeBoite.style.left = "495px";
    armeBoite.style.top = "15px";
    armeBoite.style.width = "107px";
    armeBoite.style.height = "80px";

    // ####      PORTE START    #####################################################
    var porteStart = document.getElementById("porte");

    // ####      TERRAIN        #####################################################
    var terrain = document.getElementById("terrain");

    // ####      HUD            #####################################################
    var marineMasque = document.getElementById("marineMasque");
    var marineSprite = document.getElementById("marineSprite");

    // ####      TORCHE        #####################################################
    var torcheBoite = document.getElementById("torcheBoite");
    var torcheMasque = document.getElementById("torcheMasque");
    var torcheSprite = document.getElementById("torcheSprite");

    // ####      GAME OVER        ##################################################
    var gameOver = document.getElementById('gameOver');
    gameOver.style.display = "none";

    // ####      END GAME        ###################################################
    var endGame = document.getElementById('endGame');
    endGame.style.display = "none";

    // ##############################################################################
    // #####################        --- OBJETS      ---     #########################
    // ##############################################################################
    var gargoyle = {
        walkingDown: [{
            largeurMasque: "48px",
            hauteurMasque: "38px",
            topMasque: "-16px",
            leftMasque: "-9px"
        }, {
            largeurMasque: "54px",
            hauteurMasque: "35px",
            topMasque: "-17px",
            leftMasque: "-79px"
        }, {
            largeurMasque: "56px",
            hauteurMasque: "46px",
            topMasque: "-12px",
            leftMasque: "-156px"
        }],
        attack: [{
            largeurMasque: "37px",
            hauteurMasque: "52px",
            topMasque: "-11px",
            leftMasque: "-316px"
        }, {
            largeurMasque: "50px",
            hauteurMasque: "47px",
            topMasque: "-13px",
            leftMasque: "-376px"
        }, {
            largeurMasque: "58px",
            hauteurMasque: "35px",
            topMasque: "-19px",
            leftMasque: "-449px"
        }],
        death: [{
            largeurMasque: "56px",
            hauteurMasque: "49px",
            topMasque: "-773px",
            leftMasque: "-8px"
        }, {
            largeurMasque: "68px",
            hauteurMasque: "54px",
            topMasque: "-768px",
            leftMasque: "-88px"
        }, {
            largeurMasque: "76px",
            hauteurMasque: "67px",
            topMasque: "-756px",
            leftMasque: "-176px"
        }, {
            largeurMasque: "78px",
            hauteurMasque: "62px",
            topMasque: "-760px",
            leftMasque: "-278px"
        }, {
            largeurMasque: "61px",
            hauteurMasque: "53px",
            topMasque: "-770px",
            leftMasque: "-379px"
        }, {
            largeurMasque: "64px",
            hauteurMasque: "45px",
            topMasque: "-778px",
            leftMasque: "-464px"
        }, {
            largeurMasque: "63px",
            hauteurMasque: "28px",
            topMasque: "-795px",
            leftMasque: "-551px"
        }, {
            largeurMasque: "63px",
            hauteurMasque: "14px",
            topMasque: "-809px",
            leftMasque: "-638px"
        }],
    }
    // ------------------------------------------------------------------------------
    var heresiarch = {
        attack: [{
            largeurMasque: "62px",
            hauteurMasque: "89px",
            topMasque: "-409px",
            leftMasque: "-7px"
        }, {
            largeurMasque: "91px",
            hauteurMasque: "109px",
            topMasque: "-506px",
            leftMasque: "-3px"
        }],
        walkingDown: [{
            largeurMasque: "58px",
            hauteurMasque: "100px",
            topMasque: "-4px",
            leftMasque: "-8px"
        }, {
            largeurMasque: "67px",
            hauteurMasque: "95px",
            topMasque: "-106px",
            leftMasque: "-6px"
        }, {
            largeurMasque: "59px",
            hauteurMasque: "96px",
            topMasque: "-206px",
            leftMasque: "-14px"
        }, {
            largeurMasque: "67px",
            hauteurMasque: "94px",
            topMasque: "-310px",
            leftMasque: "-7px"
        }],
        walkingLeft: [{
            largeurMasque: "98px",
            hauteurMasque: "94px",
            topMasque: "-6px",
            leftMasque: "-341px"
        }, {
            largeurMasque: "76px",
            hauteurMasque: "93px",
            topMasque: "-109px",
            leftMasque: "-356px"
        }, {
            largeurMasque: "93px",
            hauteurMasque: "96px",
            topMasque: "-205px",
            leftMasque: "-343px"
        }, {
            largeurMasque: "75px",
            hauteurMasque: "93px",
            topMasque: "-311px",
            leftMasque: "-355px"
        }],
        walkingRight: [{
            largeurMasque: "91px",
            hauteurMasque: "95px",
            topMasque: "-6px",
            leftMasque: "-1048px"
        }, {
            largeurMasque: "74px",
            hauteurMasque: "91px",
            topMasque: "-110px",
            leftMasque: "-1061px"
        }, {
            largeurMasque: "96px",
            hauteurMasque: "93px",
            topMasque: "-208px",
            leftMasque: "-1046px"
        }, {
            largeurMasque: "74px",
            hauteurMasque: "91px",
            topMasque: "-313px",
            leftMasque: "-1056px"
        }],
        death: [{ // 19 frames
            largeurMasque: "59px",
            hauteurMasque: "97px",
            topMasque: "-728px",
            leftMasque: "-13px"
        }, {
            largeurMasque: "67px",
            hauteurMasque: "101px",
            topMasque: "-726px",
            leftMasque: "-185px"
        }, {
            largeurMasque: "72px",
            hauteurMasque: "101px",
            topMasque: "-726px",
            leftMasque: "-358px" // 
        }, {
            largeurMasque: "82px",
            hauteurMasque: "103px",
            topMasque: "-726px",
            leftMasque: "-529px" //
        }, {
            largeurMasque: "96px",
            hauteurMasque: "99px",
            topMasque: "-727px",
            leftMasque: "-698px" //
        }, {
            largeurMasque: "104px",
            hauteurMasque: "101px",
            topMasque: "-726px",
            leftMasque: "-870px" //
        }, {
            largeurMasque: "103px",
            hauteurMasque: "101px",
            topMasque: "-726px",
            leftMasque: "-1047px" //
        }, {
            largeurMasque: "100px",
            hauteurMasque: "103px",
            topMasque: "-730px",
            leftMasque: "-1208px" //
        }, {
            largeurMasque: "99px",
            hauteurMasque: "100px",
            topMasque: "-844px",
            leftMasque: "-3px" //
        }, {
            largeurMasque: "78px",
            hauteurMasque: "99px",
            topMasque: "-844px",
            leftMasque: "-189px" //
        }, {
            largeurMasque: "78px",
            hauteurMasque: "91px",
            topMasque: "-848px",
            leftMasque: "-365px" //
        }, {
            largeurMasque: "78px",
            hauteurMasque: "76px",
            topMasque: "-855px",
            leftMasque: "-541px" //
        }, {
            largeurMasque: "78px",
            hauteurMasque: "55px",
            topMasque: "-866px",
            leftMasque: "-717px" //
        }, {
            largeurMasque: "78px",
            hauteurMasque: "34px",
            topMasque: "-877px",
            leftMasque: "-893px" //
        }, {
            largeurMasque: "84px",
            hauteurMasque: "34px",
            topMasque: "-877px",
            leftMasque: "-1066px" //
        }, {
            largeurMasque: "111px",
            hauteurMasque: "45px",
            topMasque: "-872px",
            leftMasque: "-1229px" //
        }, {
            largeurMasque: "106px",
            hauteurMasque: "50px",
            topMasque: "-966px",
            leftMasque: "-6px" //
        }, {
            largeurMasque: "98px",
            hauteurMasque: "37px",
            topMasque: "-973px",
            leftMasque: "-186px" //
        }, {
            largeurMasque: "76px",
            hauteurMasque: "16px",
            topMasque: "-983px",
            leftMasque: "-373px"
        }]
    }
    // ------------------------------------------------------------------------------
    var weapon = {
        fire: false,
        moveX: function (side, vitesse) {
            var value = parseFloat(armeBoite.style.left);
            if (side === "left") {
                value -= vitesse;
                // console.log("armeBoite left " + value);
                return armeBoite.style.left = parseFloat(value) + "px";
            } else if (side === "right") {
                value += vitesse;
                // console.log("armeBoite right " + value);
                return armeBoite.style.left = parseFloat(value) + "px";
            }
            // console.log(value);
        },
        fireOff: [{
            largeurMasque: "105px",
            hauteurMasque: "83px",
            topMasque: "-90px",
            leftMasque: "0px"
        }, {
            largeurMasque: "105px",
            hauteurMasque: "83px",
            topMasque: "-90px",
            leftMasque: "-107px"
        }],
        fireOn: [{
            largeurMasque: "105px",
            hauteurMasque: "83px",
            topMasque: "0px",
            leftMasque: "0px"
        }, {
            largeurMasque: "105px",
            hauteurMasque: "83px",
            topMasque: "0px",
            leftMasque: "-107px"
        }]
    }
    // ------------------------------------------------------------------------------
    var hud = {
        life1: [{
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque: "0px",
            leftMasque: "0px"
        }, {
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque: "0px",
            leftMasque: "-90px"
        }, {
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque: "-0px",
            leftMasque: "-180px"
        }],
        life2: [{
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque: "-58px",
            leftMasque: "0px"
        }, {
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque: "-58px",
            leftMasque: "-90px"
        }, {
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque: "-58px",
            leftMasque: "-180px"
        }],
        life3: [{
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque: "-116px",
            leftMasque: "0px"
        }, {
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque: "-116px",
            leftMasque: "-90px"
        }, {
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque: "-116px",
            leftMasque: "-180px"
        }],
        life4: [{
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque: "-107px",
            leftMasque: "0px"
        }, {
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque: "-107px",
            leftMasque: "-90px"
        }, {
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque: "-107px",
            leftMasque: "-180px"
        }],
        life5: [{
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque: "-140px",
            leftMasque: "0px"
        }, {
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque: "-140px",
            leftMasque: "-90px"
        }, {
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque: "-140px",
            leftMasque: "-180px"
        }]
    }
    // ------------------------------------------------------------------------------
    var hero = {
        death1: [{
            largeurMasque: "57px",
            hauteurMasque: "70px",
            topMasque: "-569px",
            leftMasque: "0px"
        }, {
            largeurMasque: "49px",
            hauteurMasque: "65px",
            topMasque: "-574px",
            leftMasque: "-80px"
        }, {
            largeurMasque: "52px",
            hauteurMasque: "65px",
            topMasque: "-571px",
            leftMasque: "-155px"
        }, {
            largeurMasque: "52px",
            hauteurMasque: "63px",
            topMasque: "-573px",
            leftMasque: "-231px"
        }, {
            largeurMasque: "57px",
            hauteurMasque: "54px",
            topMasque: "-580px",
            leftMasque: "-298px"
        }, {
            largeurMasque: "74px",
            hauteurMasque: "26px",
            topMasque: "-591px",
            leftMasque: "-366px"
        }, {
            largeurMasque: "79px",
            hauteurMasque: "23px",
            topMasque: "-593px",
            leftMasque: "-444px"
        }, {
            largeurMasque: "77px",
            hauteurMasque: "23px",
            topMasque: "-593px",
            leftMasque: "-526px"
        }],
        walkingUp: [{
            largeurMasque: "39px",
            hauteurMasque: "78px",
            topMasque: "0px",
            leftMasque: "-311px"
        }, {
            largeurMasque: "42px",
            hauteurMasque: "78px",
            topMasque: "-90px",
            leftMasque: "-311px"
        }, {
            largeurMasque: "39px",
            hauteurMasque: "78px",
            topMasque: "-189px",
            leftMasque: "-309px"
        }, {
            largeurMasque: "39px",
            hauteurMasque: "78px",
            topMasque: "-278px",
            leftMasque: "-304px"
        }],
        walkingDown: [{
            largeurMasque: "39px",
            hauteurMasque: "77px",
            topMasque: "0px",
            leftMasque: "-5px"
        }, {
            largeurMasque: "41px",
            hauteurMasque: "78px",
            topMasque: "-91px",
            leftMasque: "-5px"
        }, {
            largeurMasque: "41px",
            hauteurMasque: "78px",
            topMasque: "-189px",
            leftMasque: "-3px"
        }, {
            largeurMasque: "38px",
            hauteurMasque: "79px",
            topMasque: "-278px",
            leftMasque: "0px"
        }],
        walkingLeft: [{
            largeurMasque: "32px",
            hauteurMasque: "77px",
            topMasque: "0px",
            leftMasque: "-161px"
        }, {
            largeurMasque: "46px",
            hauteurMasque: "75px",
            topMasque: "-92px",
            leftMasque: "-156px"
        }, {
            largeurMasque: "33px",
            hauteurMasque: "75px",
            topMasque: "-192px",
            leftMasque: "-157px"
        }, {
            largeurMasque: "45px",
            hauteurMasque: "75px",
            topMasque: "-280px",
            leftMasque: "-148px"
        }],
        walkingRight: [{
            largeurMasque: "37px",
            hauteurMasque: "77px",
            topMasque: "0px",
            leftMasque: "-465px"
        }, {
            largeurMasque: "47px",
            hauteurMasque: "77px",
            topMasque: "-91px",
            leftMasque: "-461px"
        }, {
            largeurMasque: "34px",
            hauteurMasque: "79px",
            topMasque: "-189px",
            leftMasque: "-463px"
        }, {
            largeurMasque: "47px",
            hauteurMasque: "78px",
            topMasque: "-278px",
            leftMasque: "-453px"
        }],
        attack: [{
            largeurMasque: "43px",
            hauteurMasque: "78px",
            topMasque: "-374px",
            leftMasque: "0px"
        }, {
            largeurMasque: "30px",
            hauteurMasque: "76px",
            topMasque: "-470px",
            leftMasque: "-13px"
        }],
        death: [{
            largeurMasque: "55px",
            hauteurMasque: "77px",
            topMasque: "-748px",
            leftMasque: "0px"
        }, {
            largeurMasque: "68px",
            hauteurMasque: "82px",
            topMasque: "-745px",
            leftMasque: "-58px"
        }, {
            largeurMasque: "68px",
            hauteurMasque: "84px",
            topMasque: "-743px",
            leftMasque: "-128px"
        }, {
            largeurMasque: "78px",
            hauteurMasque: "78px",
            topMasque: "-751px",
            leftMasque: "-199px"
        }, {
            largeurMasque: "78px",
            hauteurMasque: "62px",
            topMasque: "-767px",
            leftMasque: "-280px"
        }, {
            largeurMasque: "80px",
            hauteurMasque: "44px",
            topMasque: "-785px",
            leftMasque: "-363px"
        }, {
            largeurMasque: "80px",
            hauteurMasque: "31px",
            topMasque: "-830px",
            leftMasque: "-362px" //
        }, {
            largeurMasque: "80px",
            hauteurMasque: "19px",
            topMasque: "-862px",
            leftMasque: "-362px" //
        }, {
            largeurMasque: "80px",
            hauteurMasque: "16px",
            topMasque: "-884px",
            leftMasque: "-362px" //
        }, {
            largeurMasque: "80px",
            hauteurMasque: "13px",
            topMasque: "-903px",
            leftMasque: "-362px"
        }]
    }
    // ------------------------------------------------------------------------------
    var ettin = {
        walkingDown: [{
            largeurMasque: "98px",
            hauteurMasque: "111px",
            topMasque: "0px",
            leftMasque: "-23px"
        }, {
            largeurMasque: "117px",
            hauteurMasque: "115px",
            topMasque: "-119px",
            leftMasque: "-18px"
        }, {
            largeurMasque: "120px",
            hauteurMasque: "110px",
            topMasque: "-246px",
            leftMasque: "-10px"
        }, {
            largeurMasque: "111px",
            hauteurMasque: "115px",
            topMasque: "-376px",
            leftMasque: "-24px"
        }],
        attack: [{
            largeurMasque: "125px",
            hauteurMasque: "139px",
            topMasque: "-504px",
            leftMasque: "-19px"
        }, {
            largeurMasque: "152px",
            hauteurMasque: "132px",
            topMasque: "-655px",
            leftMasque: "0px"
        }, {
            largeurMasque: "113px",
            hauteurMasque: "109px",
            topMasque: "-798px",
            leftMasque: "-19px"
        }],
        death: [{
            largeurMasque: "124px",
            hauteurMasque: "117px",
            topMasque: "-1211px",
            leftMasque: "-6px"
        }, {
            largeurMasque: "119px",
            hauteurMasque: "119px",
            topMasque: "-1211px",
            leftMasque: "-148px"
        }, {
            largeurMasque: "125px",
            hauteurMasque: "129px",
            topMasque: "-1201px",
            leftMasque: "-283px"
        }, {
            largeurMasque: "147px",
            hauteurMasque: "141px",
            topMasque: "-1189px",
            leftMasque: "-423px"
        }, {
            largeurMasque: "153px",
            hauteurMasque: "136px",
            topMasque: "-1197px",
            leftMasque: "-583px" //
        }, {
            largeurMasque: "158px",
            hauteurMasque: "120px",
            topMasque: "-1204px",
            leftMasque: "-750px" //
        }, {
            largeurMasque: "148px",
            hauteurMasque: "118px",
            topMasque: "-1207px",
            leftMasque: "-928px" //
        }, {
            largeurMasque: "153px",
            hauteurMasque: "108px",
            topMasque: "-1210px",
            leftMasque: "-1096px" //
        }, {
            largeurMasque: "155px",
            hauteurMasque: "87px",
            topMasque: "-1369px",
            leftMasque: "-15px" //
        }, {
            largeurMasque: "155px",
            hauteurMasque: "54px",
            topMasque: "-1402px",
            leftMasque: "-193px" //
        }, {
            largeurMasque: "154px",
            hauteurMasque: "42px",
            topMasque: "-1413px",
            leftMasque: "-372px" //
        }, {
            largeurMasque: "154px",
            hauteurMasque: "44px",
            topMasque: "-1412px",
            leftMasque: "-549px"
        }]
    }
    // ------------------------------------------------------------------------------
    var imp = {
        attack: [{
            largeurMasque: "70px",
            hauteurMasque: "86px",
            topMasque: "-100px",
            leftMasque: "-456px"
        }, {
            largeurMasque: "63px",
            hauteurMasque: "78px",
            topMasque: "-175px",
            leftMasque: "-62px"
        }, {
            largeurMasque: "47px",
            hauteurMasque: "79px",
            topMasque: "-186px",
            leftMasque: "-404px"
        }],
        walkingUp: [{
            largeurMasque: "52px",
            hauteurMasque: "72px",
            topMasque: "0px",
            leftMasque: "-235px"
        }, {
            largeurMasque: "49px",
            hauteurMasque: "67px",
            topMasque: "0px",
            leftMasque: "-528px"
        }, {
            largeurMasque: "50px",
            hauteurMasque: "70px",
            topMasque: "-91px",
            leftMasque: "-100px"
        }, {
            largeurMasque: "49px",
            hauteurMasque: "67px",
            topMasque: "-100px",
            leftMasque: "-402px"
        }],
        walkingDown: [{
            largeurMasque: "57px",
            hauteurMasque: "82px",
            topMasque: "0px",
            leftMasque: "0px"
        }, {
            largeurMasque: "54px",
            hauteurMasque: "81px",
            topMasque: "0px",
            leftMasque: "-296px"
        }, {
            largeurMasque: "56px",
            hauteurMasque: "86px",
            topMasque: "0px",
            leftMasque: "-580px"
        }, {
            largeurMasque: "54px",
            hauteurMasque: "82px",
            topMasque: "-85px",
            leftMasque: "-160px"
        }],
        walkingLeft: [{
            largeurMasque: "52px",
            hauteurMasque: "72px",
            topMasque: "0px",
            leftMasque: "-123px"
        }, {
            largeurMasque: "54px",
            hauteurMasque: "74px",
            topMasque: "0px",
            leftMasque: "-368px"
        }, {
            largeurMasque: "43px",
            hauteurMasque: "79px",
            topMasque: "-76px",
            leftMasque: "0px"
        }, {
            largeurMasque: "57px",
            hauteurMasque: "70px",
            topMasque: "-100px",
            leftMasque: "-294px"
        }],
        walkingRight: [{
            largeurMasque: "54px",
            hauteurMasque: "71px",
            topMasque: "-466px",
            leftMasque: "0px"
        }, {
            largeurMasque: "56px",
            hauteurMasque: "73px",
            topMasque: "-464px",
            leftMasque: "-357px"
        }, {
            largeurMasque: "44px",
            hauteurMasque: "77px",
            topMasque: "-460px",
            leftMasque: "-118px"
        }, {
            largeurMasque: "57px",
            hauteurMasque: "70px",
            topMasque: "-467px",
            leftMasque: "-167px"
        }],
        // -- ANIMATION DE MORT GORE --
        death: [{
            largeurMasque: "65px",
            hauteurMasque: "86px",
            topMasque: "-358px",
            leftMasque: "0px"
        }, {
            largeurMasque: "72px",
            hauteurMasque: "88px",
            topMasque: "-356px",
            leftMasque: "-70px"
        }, {
            largeurMasque: "77px",
            hauteurMasque: "88px",
            topMasque: "-356px",
            leftMasque: "-152px"
        }, {
            largeurMasque: "81px",
            hauteurMasque: "88px",
            topMasque: "-356px",
            leftMasque: "-239px"
        }, {
            largeurMasque: "81px",
            hauteurMasque: "65px",
            topMasque: "-379px",
            leftMasque: "-325px"
        }, {
            largeurMasque: "81px",
            hauteurMasque: "52px",
            topMasque: "-392px",
            leftMasque: "-410px"
        }, {
            largeurMasque: "80px",
            hauteurMasque: "45px",
            topMasque: "-399px",
            leftMasque: "-495px"
        }, {
            largeurMasque: "80px",
            hauteurMasque: "26px",
            topMasque: "-419px",
            leftMasque: "-580px"
        }]
    }
    // ------------------------------------------------------------------------------
    var torche = {
        flamme: [{
            largeurMasque: "43px",
            hauteurMasque: "85px",
            topMasque: "-2px",
            leftMasque: "-4px"
        }, {
            largeurMasque: "43px",
            hauteurMasque: "85px",
            topMasque: "-2px",
            leftMasque: "-70px"
        }, {
            largeurMasque: "43px",
            hauteurMasque: "85px",
            topMasque: "-2px",
            leftMasque: "-136px"
        }, {
            largeurMasque: "43px",
            hauteurMasque: "85px",
            topMasque: "-2px",
            leftMasque: "-202px"
        }, {
            largeurMasque: "43px",
            hauteurMasque: "85px",
            topMasque: "-2px",
            leftMasque: "-268px"
        }, {
            largeurMasque: "43px",
            hauteurMasque: "85px",
            topMasque: "-2px",
            leftMasque: "-334px"
        }, {
            largeurMasque: "43px",
            hauteurMasque: "85px",
            topMasque: "-2px",
            leftMasque: "-400px"
        }, {
            largeurMasque: "43px",
            hauteurMasque: "85px",
            topMasque: "-2px",
            leftMasque: "-466px"
        }]
    }

    // ##############################################################################
    // #####################  ---       FONCTIONS      ---  #########################
    // ##############################################################################
    var fire = false;
    var collisionHud = false;
    // #------------------------------------------------------#
    //      #------#      PREMIERE ANIMATION      #------#
    // #------------------------------------------------------#
    function getFirstAnimationFrame(idSprite, idMasque, objet, frame) {
        var i = 0;
        var animationID = window.setInterval(function () {
            if (!collisionHud) {
                // console.log(i);
                idSprite.style.top = objet[i].topMasque;
                idSprite.style.left = objet[i].leftMasque;
                idMasque.style.width = objet[i].largeurMasque;
                idMasque.style.height = objet[i].hauteurMasque;
                i++;
                if (i == objet.length) {
                    i = 0;
                    if ((objet == gargoyle.death) ||
                        (objet == imp.death) ||
                        (objet == hero.death) ||
                        (objet == heresiarch.death) ||
                        (objet == ettin.death)) {

                        heresiarchBoite.style.top = "0px";
                        heroBoite.style.top = "0px";
                        impBoite.style.top = "0px";
                        gargoyleBoite.style.top = "0px";
                        ettinBoite.style.top = "0px";
                        // clearInterval(animationID);
                    }
                }
            } else {
                clearInterval(animationID);
                // console.log("animation collisionHud");
                getAnimationFrameCollisionWithHud(heresiarchSprite, heresiarchMasque, heresiarch.attack, 230);
                getAnimationFrameCollisionWithHud(impSprite, impMasque, imp.attack, 230);
                getAnimationFrameCollisionWithHud(heroSprite, heroMasque, hero.attack, 230);
                getAnimationFrameCollisionWithHud(ettinSprite, ettinMasque, ettin.attack, 250);
                getAnimationFrameCollisionWithHud(gargoyleSprite, gargoyleMasque, gargoyle.attack, 250);
            }
        }, frame);
    }
    // #----------------------------------------------------#
    //      #------#       APRES COLLISIONS     #------#
    // #----------------------------------------------------#
    function getAnimationFrameCollisionWithHud(idSprite, idMasque, objet, frame) {
        var i = 0;
        var collisionAnimationID = window.setInterval(function () {
            idSprite.style.top = objet[i].topMasque;
            idSprite.style.left = objet[i].leftMasque;
            idMasque.style.width = objet[i].largeurMasque;
            idMasque.style.height = objet[i].hauteurMasque;
            i++;
            if (i == objet.length) {
                i = 0;
                if ((objet == gargoyle.death) ||
                    (objet == imp.death) ||
                    (objet == hero.death) ||
                    (objet == heresiarch.death) ||
                    (objet == ettin.death)) {
                    clearInterval(collisionAnimationID);
                }
            }
        }, frame);
    }
    function getAnimationArme() {

    }
    // #----------------------------------------------------#
    //     #------#    DEPLACEMENT Y DES MOBS    #------#
    // #----------------------------------------------------#
    function getMove(mobBoite, vitesse) {
        var deplacementID = window.setInterval(function () {
            var value = parseFloat(mobBoite.style.top);
            var tailleMobBoite = mobBoite.style.height;
            // console.log(vitesse);
            value += vitesse;
            mobBoite.style.top = parseFloat(value) + "px";
            // console.log("mobBoite.style.top " + value);
            if (value >= 535 - parseFloat(mobBoite.style.height)) {
                clearInterval(deplacementID);
                collisionHud = true;
                gameOver.style.display = "block";
                // console.log(value);
                // console.log("PAF --COLLISION");
            }
        }, 30);
    }

    // #########################################################################################
    // #####################  ---       APPELS DE FONCTIONS       ---  #########################
    // #########################################################################################
    // #-----------------------------------------#
    //     #------#    PORTE START    #------#
    // #-----------------------------------------#
    porteStart.addEventListener("click", function () {
        var vitesseOuverturePorte = 1000;
        porteStart.style.transform = "translateY(-780px)";
        porteStart.style.transition = vitesseOuverturePorte / 1000 + "s ease-in all";
        setTimeout(function () {
            porteStart.style.zIndex = "0";
        }, vitesseOuverturePorte)
    })

    getAnimationFrameCollisionWithHud(marineSprite, marineMasque, hud.life1, 500);
    getAnimationFrameCollisionWithHud(torcheSprite, torcheMasque, torche.flamme, 100);
    getAnimationFrameCollisionWithHud(torche2Sprite, torche2Masque, torche.flamme, 90);

    heresiarchMasque.addEventListener("click", function () {
        getAnimationFrameCollisionWithHud(heresiarchSprite, heresiarchMasque, heresiarch.death, 80);
    })
    impMasque.addEventListener("click", function () {
        getAnimationFrameCollisionWithHud(impSprite, impMasque, imp.death, 80);
    })
    heroMasque.addEventListener("click", function () {
        getAnimationFrameCollisionWithHud(heroSprite, heroMasque, hero.death, 80);
    })
    ettinMasque.addEventListener("click", function () {
        getAnimationFrameCollisionWithHud(ettinSprite, ettinMasque, ettin.death, 80);
    })
    gargoyleMasque.addEventListener("click", function () {
        getAnimationFrameCollisionWithHud(gargoyleSprite, gargoyleMasque, gargoyle.death, 80);
    })
    marineMasque.addEventListener("click", function () {
        getMove(heroBoite, 3);
        getFirstAnimationFrame(heroSprite, heroMasque, hero.walkingDown, 250);
        // console.log("heroBoite.style.top " + heroBoite.style.top);
        // --- ---
        getMove(heresiarchBoite, 3);
        getFirstAnimationFrame(heresiarchSprite, heresiarchMasque, heresiarch.walkingDown, 250);
        // console.log("heresiarchBoite.style.top " + heresiarchBoite.style.top);
        // --- ---
        getMove(impBoite, 3);
        getFirstAnimationFrame(impSprite, impMasque, imp.walkingDown, 250);
        // console.log("impBoite.style.top " + impBoite.style.top);
        // --- ---
        getMove(ettinBoite, 3);
        getFirstAnimationFrame(ettinSprite, ettinMasque, ettin.walkingDown, 250);
        // console.log("ettinBoite.style.top " + ettinBoite.style.top);
        // --- ---
        getMove(gargoyleBoite, 3);
        getFirstAnimationFrame(gargoyleSprite, gargoyleMasque, gargoyle.walkingDown, 120);
        // console.log("gargoyleBoite.style.top " + gargoyleBoite.style.top);
    })

    var direction = "";
    var score = 0;

    // #-----------------------------------------#
    //     #------#    CONTROLES     #------#
    // #-----------------------------------------#
    window.onkeydown = function (event) {
        var code = event.keyCode;
        if (event.defaultPrevented) {
            return; // Should do nothing if the default action has been cancelled
        }
        switch (code) {
            case 39: // A DROITE 
                // console.log(direction);
                // console.log(armeMasque);
                direction = "right";
                direction != "left";
                controles.style.display = "none";
                break;

            case 37: // A GAUCHE 
                // console.log(armeMasque);
                direction = "left";
                direction != "right";
                controles.style.display = "none";
                break;

            case 38: // EN HAUT 
                // console.log(armeMasque);
                direction != "left";
                direction != "right";
                break;

            case 82: // R -- Reset des positions 
                // console.log(direction);
                // console.log(armeMasque);
                impBoite.style.top = "0px";
                heresiarchBoite.style.top = "0px";
                heroBoite.style.top = "0px";
                gargoyleBoite.style.top = "0px";
                ettinBoite.style.top = "0px";
                break;

            case 32: // ESPACE 
                direction != "left";
                direction != "right";
                getAnimationFrameCollisionWithHud(armeSprite, armeBoite, weapon.fireOn, 150);
                controles.style.display = "none";
                weapon.fire = true;
                console.log(weapon.fire);
                console.log("armeBoite.style.left + armeBoite.style.width " + parseFloat(armeBoite.style.left + armeBoite.style.width));
                break;

            case 75: // Touche - K - (pour tester la vie du hud) 
                // if (getFirstAnimationFrame(marineSprite, marineMasque, hud.life1, 500)) {
                //     if (getFirstAnimationFrame(marineSprite, marineMasque, hud.life2, 500)) {
                //         if (getFirstAnimationFrame(marineSprite, marineMasque, hud.life3, 500)) {
                //             if (getFirstAnimationFrame(marineSprite, marineMasque, hud.life4, 500)) {
                //                 getFirstAnimationFrame(marineSprite, marineMasque, hud.life5, 500);
                //             }else{
                //                 getFirstAnimationFrame(marineSprite, marineMasque, hud.life4, 500);
                //             }   
                //         }else{
                //             getFirstAnimationFrame(marineSprite, marineMasque, hud.life3, 500);
                //         }   
                //     }else{
                //         getFirstAnimationFrame(marineSprite, marineMasque, hud.life2, 500);
                //     }   
                // }else{
                //     getFirstAnimationFrame(marineSprite, marineMasque, hud.life1, 500);
                // }   
                break;

            default:
                // console.log("Error du switch");
                break;
        }

        if (direction === "right") {
            weapon.moveX("right", 15);
            // console.log(" armeBoite left " + parseFloat(armeBoite.style.left) + " heroBoite left " + parseFloat(heroBoite.style.left));
            console.log("déplacement à droite");
            // #--------------------------------------------------------------------#
            //        #------#        COLLISIONS ARME A DROITE         #------#
            // #--------------------------------------------------------------------#
            if ((parseFloat(armeBoite.style.left) +
                parseFloat(armeBoite.style.width) >= parseFloat(armeTerrain.style.width))) {
                armeBoite.style.left = parseFloat(armeTerrain.style.width) - parseFloat(armeBoite.style.width) + "px";
                console.log("collisionHud de l'arme à droite :  armeBoite.style.left : " + armeBoite.style.left);
            }
        } else if (direction === "left") {
            weapon.moveX("left", 15);
            // console.log(" armeBoite left " + parseFloat(armeBoite.style.left) + " heroBoite left " + parseFloat(heroBoite.style.left));
            console.log("déplacement à gauche");
            // #-------------------------------------------------------------------------#
            //        #------#        COLLISIONS ARME BORD A GAUCHE         #------#
            // #-------------------------------------------------------------------------#
            if (armeBoite.style.left <= 0 + "px") {
                armeBoite.style.left = 0 + "px";
                console.log("collisionHud de l'arme à gauche :  armeBoite.style.left : " + armeBoite.style.left);
            }
        }

        // ########################################################################################################
        // ##########################  ---       COLLISIONS TIRS ENNEMIS        ---  ##############################
        // ########################################################################################################
        // function collisionEffet(boiteLeftEnnemy, boiteWidthEnnemy, styleCss, effetOn, effetOff) {
        //     if (((parseFloat(armeBoiteLeft) + parseFloat(armeBoiteWidth)) > parseFloat(boiteLeftEnnemy) && weapon.fire) &&
        //         (parseFloat(armeBoiteLeft) < (parseFloat(boiteLeftEnnemy) + parseFloat(boiteWidthEnnemy)) && weapon.fire)) {
        //         console.log("---- PAAAAAAAAFFF collisions de tirs ---- ");
        //         heroBoite.style.top = "0px";
        //         // heroBoite.style.backgroundColor = "red";
        //         styleCss = effetOn;
        //         heroBoite.style.transition = "all 0.25s";
        //         // getAnimationFrameCollisionWithHud(heroSprite, heroMasque, hero.death1, 300);
        //     } else if ((parseFloat(armeBoiteLeft) > (parseFloat(boiteLeftEnnemy) + parseFloat(boiteWidthEnnemy) && (!weapon.fire))) ||
        //         ((parseFloat(armeBoiteLeft) + parseFloat(armeBoiteWidth) < parseFloat(boiteWidthEnnemy) && (!weapon.fire)))) {
        //         // console.log("pas de collisions de tirs");
        //         // heroBoite.style.backgroundColor = "rgba(242, 245, 169, 0)";
        //         styleCss = effetOff;
        //     }
        // }
        // collisionEffet(heroBoiteLeft, heroBoiteWidth, heroBoite.style.backgroundColor, 'red', 'white');
        // /--------------------------------------------------------------------------------/
        //            ///////////////            HERO             ///////////////
        // /--------------------------------------------------------------------------------/
        console.log(weapon.fire);
        console.log(" armeBoite left " + parseFloat(armeBoite.style.left) + " heroBoite left " + parseFloat(heroBoite.style.left));
        if (((parseFloat(armeBoite.style.left) + parseFloat(armeBoite.style.width)) > parseFloat(heroBoite.style.left) && weapon.fire) &&
            (parseFloat(armeBoite.style.left) < (parseFloat(heroBoite.style.left) + parseFloat(heroBoite.style.width)) && weapon.fire)) {
            console.log("---- PAAAAAAAAFFF collisions de tirs ---- ");
            heroBoite.style.top = "0px";
            // heroBoite.style.backgroundColor = "red";
            heroBoite.style.filter = "brightness(1.75)";
            heroBoite.style.transition = "top 0.25s";

            heroSprite.style.top = "-562px";  // frame ennemi blessé
            heroSprite.style.left = "-6px"; // frame ennemi blessé

            // getAnimationFrameCollisionWithHud(heroSprite, heroMasque, hero.death1, 300);
        } else if ((parseFloat(armeBoite.style.left) > (parseFloat(heroBoite.style.left) + parseFloat(heroBoite.style.width) && (!weapon.fire))) ||
            ((parseFloat(armeBoite.style.left) + parseFloat(armeBoite.style.width) < parseFloat(heroBoite.style.width) && (!weapon.fire)))) {
            // console.log("pas de collisions de tirs");
            // heroBoite.style.backgroundColor = "rgba(242, 245, 169, 0)";
            heroBoite.style.filter = "none";
        }

        // /--------------------------------------------------------------------------------/
        //            ///////////////            ETTIN             ///////////////
        // /--------------------------------------------------------------------------------/
        if (((parseFloat(armeBoite.style.left) + parseFloat(armeBoite.style.width)) > parseFloat(ettinBoite.style.left) && weapon.fire) &&
            (parseFloat(armeBoite.style.left) < (parseFloat(ettinBoite.style.left) + parseFloat(ettinBoite.style.width)) && weapon.fire)) {
            // console.log("---- PAAAAAAAAFFF collisions Tirs ---- ");
            ettinBoite.style.top = "0px";
            // ettinBoite.style.backgroundColor = "red";
            ettinBoite.style.filter = "brightness(1.75)";
            ettinBoite.style.transition = "top 0.25s";

            ettinSprite.style.top = "-1213px";  // frame ennemi blessé
            ettinSprite.style.left = "-7px";  // frame ennemi blessé

            // getAnimationFrameCollisionWithHud(ettinSprite, ettinMasque, ettin.death1, 300);
        } else if ((parseFloat(armeBoite.style.left) > (parseFloat(ettinBoite.style.left) + parseFloat(ettinBoite.style.width) && (!weapon.fire))) ||
            ((parseFloat(armeBoite.style.left) + parseFloat(armeBoite.style.width) < parseFloat(ettinBoite.style.width) && (!weapon.fire)))) {
            // console.log("pas de collisions de tirs");
            // ettinBoite.style.backgroundColor = "rgba(242, 245, 169, 0)";
            ettinBoite.style.filter = "none";
        }

        // /--------------------------------------------------------------------------------/
        //            ///////////////            IMP             ///////////////
        // /--------------------------------------------------------------------------------/
        if (((parseFloat(armeBoite.style.left) + parseFloat(armeBoite.style.width)) > parseFloat(impBoite.style.left) && weapon.fire) &&
            (parseFloat(armeBoite.style.left) < (parseFloat(impBoite.style.left) + parseFloat(impBoite.style.width)) && weapon.fire)) {
            // console.log("---- PAAAAAAAAFFF collisions Tirs ---- ");
            impBoite.style.top = "0px";
            // impBoite.style.backgroundColor = "red";
            impBoite.style.filter = "brightness(1.75)";
            impBoite.style.transition = "top 0.25s";

            impSprite.style.top = "-275px";  // frame ennemi blessé
            impSprite.style.left = "-440px";  // frame ennemi blessé

            // getAnimationFrameCollisionWithHud(impSprite, impMasque, imp.death1, 300);
        } else if ((parseFloat(armeBoite.style.left) > (parseFloat(impBoite.style.left) + parseFloat(impBoite.style.width) && (!weapon.fire))) ||
            ((parseFloat(armeBoite.style.left) + parseFloat(armeBoite.style.width) < parseFloat(impBoite.style.width) && (!weapon.fire)))) {
            // console.log("pas de collisions de tirs");
            // impBoite.style.backgroundColor = "rgba(242, 245, 169, 0)";
            impBoite.style.filter = "none";
        }

        // /--------------------------------------------------------------------------------/
        //         ///////////////            GARGOYLE             ///////////////
        // /--------------------------------------------------------------------------------/
        if (((parseFloat(armeBoite.style.left) + parseFloat(armeBoite.style.width)) > parseFloat(gargoyleBoite.style.left) && weapon.fire) &&
            (parseFloat(armeBoite.style.left) < (parseFloat(gargoyleBoite.style.left) + parseFloat(gargoyleBoite.style.width)) && weapon.fire)) {
            // console.log("---- PAAAAAAAAFFF collisions Tirs ---- ");
            gargoyleBoite.style.top = "0px";
            // gargoyleBoite.style.backgroundColor = "red";
            gargoyleBoite.style.filter = "brightness(1.75)";
            gargoyleBoite.style.transition = "top 0.25s";

            gargoyleSprite.style.top = "-619px";  // frame ennemi blessé
            // getAnimationFrameCollisionWithHud(impSprite, impMasque, imp.death1, 300);
        } else if ((parseFloat(armeBoite.style.left) > (parseFloat(gargoyleBoite.style.left) + parseFloat(gargoyleBoite.style.width) && (!weapon.fire))) ||
            ((parseFloat(armeBoite.style.left) + parseFloat(armeBoite.style.width) < parseFloat(gargoyleBoite.style.width) && (!weapon.fire)))) {
            // console.log("pas de collisions de tirs");
            // gargoyleBoite.style.backgroundColor = "rgba(242, 245, 169, 0)";
            gargoyleBoite.style.filter = "none";
        }

        // /--------------------------------------------------------------------------------/
        //         ///////////////            HERESIARCH             ///////////////
        // /--------------------------------------------------------------------------------/
        if (((parseFloat(armeBoite.style.left) + parseFloat(armeBoite.style.width)) > parseFloat(heresiarchBoite.style.left) && weapon.fire) &&
            (parseFloat(armeBoite.style.left) < (parseFloat(heresiarchBoite.style.left) + parseFloat(heresiarchBoite.style.width)) && weapon.fire)) {
            // console.log("---- PAAAAAAAAFFF collisions Tirs ---- ");
            heresiarchBoite.style.top = "0px";
            // heresiarchBoite.style.backgroundColor = "red";
            heresiarchBoite.style.filter = "brightness(1.75)";
            heresiarchBoite.style.transition = "top 0.25s";

            heresiarchSprite.style.top = "-624px"; // frame ennemi blessé
            heresiarchSprite.style.left = "-6px"; // frame ennemi blessé

            // getFirstAnimationFrame(heresiarchSprite, heresiarchMasque, heresiarch.death, 200);
        } else if ((parseFloat(armeBoite.style.left) > (parseFloat(heresiarchBoite.style.left) + parseFloat(heresiarchBoite.style.width) && (!weapon.fire))) ||
            ((parseFloat(armeBoite.style.left) + parseFloat(armeBoite.style.width) < parseFloat(heresiarchBoite.style.width) && (!weapon.fire)))) {
            // console.log("pas de collisions de tirs");
            // heresiarchBoite.style.backgroundColor = "rgba(242, 245, 169, 0)";
            heresiarchBoite.style.filter = "none";
        }

        // ########################################################################################################
        // ##########################  ---                   SCORE              ---  ##############################
        // ########################################################################################################
        var scoreId = document.getElementById("score");
        if (((parseFloat(armeBoite.style.left) + parseFloat(armeBoite.style.width)) > parseFloat(heresiarchBoite.style.left) && weapon.fire) &&
            (parseFloat(armeBoite.style.left) < (parseFloat(heresiarchBoite.style.left) + parseFloat(heresiarchBoite.style.width)) && weapon.fire) ||
            ((parseFloat(armeBoite.style.left) + parseFloat(armeBoite.style.width)) > parseFloat(gargoyleBoite.style.left) && weapon.fire) &&
            (parseFloat(armeBoite.style.left) < (parseFloat(gargoyleBoite.style.left) + parseFloat(gargoyleBoite.style.width)) && weapon.fire) ||
            ((parseFloat(armeBoite.style.left) + parseFloat(armeBoite.style.width)) > parseFloat(impBoite.style.left) && weapon.fire) &&
            (parseFloat(armeBoite.style.left) < (parseFloat(impBoite.style.left) + parseFloat(impBoite.style.width)) && weapon.fire) ||
            ((parseFloat(armeBoite.style.left) + parseFloat(armeBoite.style.width)) > parseFloat(ettinBoite.style.left) && weapon.fire) &&
            (parseFloat(armeBoite.style.left) < (parseFloat(ettinBoite.style.left) + parseFloat(ettinBoite.style.width)) && weapon.fire) ||
            ((parseFloat(armeBoite.style.left) + parseFloat(armeBoite.style.width)) > parseFloat(heroBoite.style.left) && weapon.fire) &&
            (parseFloat(armeBoite.style.left) < (parseFloat(heroBoite.style.left) + parseFloat(heroBoite.style.width)) && weapon.fire)) {
            console.log('SCORE !!! !!!');
            score++;
            scoreId.innerHTML = "Score : " + score;
            console.log(score);
        }
        if (score >= 500) {
            console.log("VICTORY !!!")
            scoreId.innerHTML = "- VICTORY -";
            endGame.style.display = "block";


        }
    };

    // document.location.reload(false)



    //     var div = document.createElement("div");
    //     var contenu = document.createTextNode("Je suis un texte magique et super génial");
    //     div.appendChild(contenu);
    //     console.log("fonction creerBalise");
    //     var currentDiv = document.getElementsByTagName("div")[0];
    //     document.body.insertBefore(div, currentDiv);
    //     var att = document.createAttribute("id");
    //     att.value = "superText";

}    
