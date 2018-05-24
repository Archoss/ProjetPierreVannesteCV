window.onload = function() {
    // ##############################################################################
    // #####################        --- MES VARIABLES      --- #####################
    // ##############################################################################
    // var heroBoite         = document.getElementById("heroBoite");
    // var heroMasque        = document.getElementById("heroMasque");
    // var heroSprite        = document.getElementById("heroSprite");

    // heroBoite.style.position        = "absolute";
    // heroBoite.style.top             = "0px";
    // // ------------------------------------------------------------------------------
    // var lostSoulBoite     = document.getElementById("lostSoulBoite");
    // var lostSoulMasque    = document.getElementById("lostSoulMasque");
    // var lostSoulSprite    = document.getElementById("lostSoulSprite");

    // lostSoulBoite.style.position    = "absolute";
    // lostSoulBoite.style.top         = "0px";
    // // ------------------------------------------------------------------------------
    // var impBoite          = document.getElementById("impBoite");
    // var impMasque         = document.getElementById("impMasque");
    // var impSprite         = document.getElementById("impSprite");

    // impBoite.style.position         = "absolute";
    // impBoite.style.top              = "0px";
    // // ------------------------------------------------------------------------------
    // var ettinBoite        = document.getElementById("ettinBoite");
    // var ettinSprite       = document.getElementById("ettinSprite");
    // var ettinMasque       = document.getElementById("ettinMasque");

    // ettinBoite.style.position       = "absolute";
    // ettinBoite.style.top            = "0px";
    // ------------------------------------------------------------------------------
    var heresiarchBoite   = document.getElementById("heresiarchBoite");
    var heresiarchSprite  = document.getElementById("heresiarchSprite");
    var heresiarchMasque  = document.getElementById("heresiarchMasque");

    heresiarchBoite.style.position  = "absolute";
    heresiarchBoite.style.top       = "0px";
    // ------------------------------------------------------------------------------
    var armeMasque        = document.getElementById("armeMasque");
    var armeSprite        = document.getElementById("armeSprite");
    // ------------------------------------------------------------------------------
    var marineMasque      = document.getElementById("marineMasque");
    var marineSprite      = document.getElementById("marineSprite");
    // ------------------------------------------------------------------------------
    var torcheMasque      = document.getElementById("torcheMasque");
    var torcheSprite      = document.getElementById("torcheSprite");
    
    
    // ##############################################################################
    // #####################        --- OBJETS      ---     #########################
    // ##############################################################################
    var heresiarch = {
        // move: function() {
        //     var animationID = window.setInterval(function() {
        //         var value = parseFloat(heresiarchMasque.style.top);
        //         value += 1;
        //         return heresiarchMasque.style.top = parseFloat(value) + "px";
        //         console.log(value);
        //     }, 100);
        // },
        walkingDown: [{
            largeurMasque: "58px",
            hauteurMasque: "100px",
            topMasque:     "-4px",
            leftMasque:    "-8px"
        },{
            largeurMasque: "67px",
            hauteurMasque: "95px",
            topMasque:     "-106px",
            leftMasque:    "-6px"
        },{
            largeurMasque: "59px",
            hauteurMasque: "96px",
            topMasque:     "-206px",
            leftMasque:    "-14px"
        },{
            largeurMasque: "67px",
            hauteurMasque: "94px",
            topMasque:     "-310px",
            leftMasque:    "-7px"
        }],
        walkingLeft: [{
            largeurMasque: "98px",
            hauteurMasque: "94px",
            topMasque:     "-6px",
            leftMasque:    "-341px"
        },{
            largeurMasque: "76px",
            hauteurMasque: "93px",
            topMasque:     "-109px",
            leftMasque:    "-356px"
        },{
            largeurMasque: "93px",
            hauteurMasque: "96px",
            topMasque:     "-205px",
            leftMasque:    "-343px"
        },{
            largeurMasque: "75px",
            hauteurMasque: "93px",
            topMasque:     "-311px",
            leftMasque:    "-355px"
        }],
        walkingRight: [{
            largeurMasque: "91px",
            hauteurMasque: "95px",
            topMasque:     "-6px",
            leftMasque:    "-1048px"
        },{
            largeurMasque: "74px",
            hauteurMasque: "91px",
            topMasque:     "-110px",
            leftMasque:    "-1061px"
        },{
            largeurMasque: "96px",
            hauteurMasque: "93px",
            topMasque:     "-208px",
            leftMasque:    "-1046px"
        },{
            largeurMasque: "74px",
            hauteurMasque: "91px",
            topMasque:     "-313px",
            leftMasque:    "-1056px"
        }],
        death: [{ // 19 frames
            largeurMasque: "59px",
            hauteurMasque: "97px",
            topMasque:     "-728px",
            leftMasque:    "-13px"
        },{
            largeurMasque: "67px",
            hauteurMasque: "101px",
            topMasque:     "-726px",
            leftMasque:    "-185px"
        },{
            largeurMasque: "72px",
            hauteurMasque: "101px",
            topMasque:     "-726px",
            leftMasque:    "-358px" // 
        },{
            largeurMasque: "82px",
            hauteurMasque: "103px",
            topMasque:     "-726px",
            leftMasque:    "-529px" //
        },{
            largeurMasque: "96px",
            hauteurMasque: "99px",
            topMasque:     "-727px",
            leftMasque:    "-698px" //
        },{
            largeurMasque: "104px",
            hauteurMasque: "101px",
            topMasque:     "-726px",
            leftMasque:    "-870px" //
        },{
            largeurMasque: "103px",
            hauteurMasque: "101px",
            topMasque:     "-726px",
            leftMasque:    "-1047px" //
        },{
            largeurMasque: "100px",
            hauteurMasque: "103px",
            topMasque:     "-730px",
            leftMasque:    "-1208px" //
        },{
            largeurMasque: "99px",
            hauteurMasque: "100px",
            topMasque:     "-844px",
            leftMasque:    "-3px" //
        },{
            largeurMasque: "78px",
            hauteurMasque: "99px",
            topMasque:     "-844px",
            leftMasque:    "-189px" //
        },{
            largeurMasque: "78px",
            hauteurMasque: "91px",
            topMasque:     "-848px",
            leftMasque:    "-365px" //
        },{
            largeurMasque: "78px",
            hauteurMasque: "76px",
            topMasque:     "-855px",
            leftMasque:    "-541px" //
        },{
            largeurMasque: "78px",
            hauteurMasque: "55px",
            topMasque:     "-866px",
            leftMasque:    "-717px" //
        },{
            largeurMasque: "78px",
            hauteurMasque: "34px",
            topMasque:     "-877px",
            leftMasque:    "-893px" //
        },{
            largeurMasque: "84px",
            hauteurMasque: "34px",
            topMasque:     "-877px",
            leftMasque:    "-1066px" //
        },{
            largeurMasque: "111px",
            hauteurMasque: "45px",
            topMasque:     "-872px",
            leftMasque:    "-1229px" //
        },{
            largeurMasque: "106px",
            hauteurMasque: "50px",
            topMasque:     "-966px",
            leftMasque:    "-6px" //
        },{
            largeurMasque: "98px",
            hauteurMasque: "37px",
            topMasque:     "-973px",
            leftMasque:    "-186px" //
        },{
            largeurMasque: "76px",
            hauteurMasque: "16px",
            topMasque:     "-983px",
            leftMasque:    "-373px"
        }]
    }
    // ------------------------------------------------------------------------------
    var weapon = {   
        moveX: function(side) {
            var value = parseFloat(armeMasque.style.left);
            if(side === "left") {
                value -= 10;
                return armeMasque.style.left = parseFloat(value) + "px";
            }else if(side === "right"){
                value += 10;
                console.log(value);
                return armeMasque.style.left = parseFloat(value) + "px";
            }
                console.log(value);
        },
        fireOff: [{
            largeurMasque: "105px",
            hauteurMasque: "83px",
            topMasque:     "-90px",
            leftMasque:    "0px"
        },{
            largeurMasque: "105px",
            hauteurMasque: "83px",
            topMasque:     "-90px",
            leftMasque:    "-107px"
        }],
        fireOn: [{
            largeurMasque: "105px",
            hauteurMasque: "83px",
            topMasque:     "0px",
            leftMasque:    "0px"
        },{
            largeurMasque: "105px",
            hauteurMasque: "83px",
            topMasque:     "0px",
            leftMasque:    "-107px"
        }]
    }
    // ------------------------------------------------------------------------------
    var hud = {
        life1: [{
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque:     "0px",
            leftMasque:    "0px"
        },{
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque:     "0px",
            leftMasque:    "-90px"
        },{
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque:     "-0px",
            leftMasque:    "-180px"
        }],            
        life2: [{
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque:     "-58px",
            leftMasque:    "0px"
        },{
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque:     "-58px",
            leftMasque:    "-90px"
        },{
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque:     "-58px",
            leftMasque:    "-180px"
        }],
        life3: [{
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque:     "-116px",
            leftMasque:    "0px"
        },{
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque:     "-116px",
            leftMasque:    "-90px"
        },{
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque:     "-116px",
            leftMasque:    "-180px"
        }],
        life4: [{
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque:     "-107px",
            leftMasque:    "0px"
        },{
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque:     "-107px",
            leftMasque:    "-90px"
        },{
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque:     "-107px",
            leftMasque:    "-180px"
        }],
        life5: [{
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque:     "-140px",
            leftMasque:    "0px"
        },{
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque:     "-140px",
            leftMasque:    "-90px"
        },{
            largeurMasque: "83px",
            hauteurMasque: "97px",
            topMasque:     "-140px",
            leftMasque:    "-180px"
        }]
    }    
    // ------------------------------------------------------------------------------
    var hero = {
        walkingUp: [{
            largeurMasque: "39px",
            hauteurMasque: "78px",
            topMasque:     "0px",
            leftMasque:    "-311px"
        },{
            largeurMasque: "42px",
            hauteurMasque: "78px",
            topMasque:     "-90px",
            leftMasque:    "-311px"
        },{
            largeurMasque: "39px",
            hauteurMasque: "78px",
            topMasque:     "-189px",
            leftMasque:    "-309px"
        },{
            largeurMasque: "39px",
            hauteurMasque: "78px",
            topMasque:     "-278px",
            leftMasque:    "-304px"
        }],
        walkingDown: [{
            largeurMasque: "39px",
            hauteurMasque: "77px",
            topMasque:     "0px",
            leftMasque:    "-5px"
        },{
            largeurMasque: "41px",
            hauteurMasque: "78px",
            topMasque:     "-91px",
            leftMasque:    "-5px"
        },{
            largeurMasque: "41px",
            hauteurMasque: "78px",
            topMasque:     "-189px",
            leftMasque:    "-3px"
        },{
            largeurMasque: "38px",
            hauteurMasque: "79px",
            topMasque:     "-278px",
            leftMasque:    "0px"
        }],
        walkingLeft: [{
            largeurMasque: "32px",
            hauteurMasque: "77px",
            topMasque:     "0px",
            leftMasque:    "-161px"
        },{
            largeurMasque: "46px",
            hauteurMasque: "75px",
            topMasque:     "-92px",
            leftMasque:    "-156px"
        },{
            largeurMasque: "33px",
            hauteurMasque: "75px",
            topMasque:     "-192px",
            leftMasque:    "-157px"
        },{
            largeurMasque: "45px",
            hauteurMasque: "75px",
            topMasque:     "-280px",
            leftMasque:    "-148px"
        }],
        walkingRight: [{
            largeurMasque: "37px",
            hauteurMasque: "77px",
            topMasque:     "0px",
            leftMasque:    "-465px"
        },{
            largeurMasque: "47px",
            hauteurMasque: "77px",
            topMasque:     "-91px",
            leftMasque:    "-461px"
        },{
            largeurMasque: "34px",
            hauteurMasque: "79px",
            topMasque:     "-189px",
            leftMasque:    "-463px"
        },{
            largeurMasque: "47px",
            hauteurMasque: "78px",
            topMasque:     "-278px",
            leftMasque:    "-453px"
        }],
        death: [{
            largeurMasque: "55px",
            hauteurMasque: "77px",
            topMasque:     "-748px",
            leftMasque:    "0px"
        },{
            largeurMasque: "68px",
            hauteurMasque: "82px",
            topMasque:     "-745px",
            leftMasque:    "-58px"
        },{
            largeurMasque: "68px",
            hauteurMasque: "84px",
            topMasque:     "-743px",
            leftMasque:    "-128px"
        },{
            largeurMasque: "78px",
            hauteurMasque: "78px",
            topMasque:     "-751px",
            leftMasque:    "-199px"
        },{
            largeurMasque: "78px",
            hauteurMasque: "62px",
            topMasque:     "-767px",
            leftMasque:    "-280px"
        },{
            largeurMasque: "80px",
            hauteurMasque: "44px",
            topMasque:     "-785px",
            leftMasque:    "-363px"
        },{
            largeurMasque: "80px",
            hauteurMasque: "31px",
            topMasque:     "-830px",
            leftMasque:    "-362px" //
        },{
            largeurMasque: "80px",
            hauteurMasque: "19px",
            topMasque:     "-862px",
            leftMasque:    "-362px" //
        },{
            largeurMasque: "80px",
            hauteurMasque: "16px",
            topMasque:     "-884px",
            leftMasque:    "-362px" //
        },{
            largeurMasque: "80px",
            hauteurMasque: "13px",
            topMasque:     "-903px",
            leftMasque:    "-362px"
        }]
    };
    // ------------------------------------------------------------------------------
    var lostSoul  = {
        walkingDown: [{
            largeurMasque: "72px",
            hauteurMasque: "75px",
            topMasque:     "0px",
            leftMasque:    "0px"
        },{
            largeurMasque: "72px",
            hauteurMasque: "75px",
            topMasque:     "-11px",
            leftMasque:    "-413px"
        },{
            largeurMasque: "72px",
            hauteurMasque: "75px",
            topMasque:     "-96px",
            leftMasque:    "-56px"
        },{
            largeurMasque: "72px",
            hauteurMasque: "75px",
            topMasque:     "-103px",
            leftMasque:    "-568px"
        }],
        walkingUp: [{
            largeurMasque: "72px",
            hauteurMasque: "75px",
            topMasque:     "0px",
            leftMasque:    "-84px"
        },{
            largeurMasque: "72px",
            hauteurMasque: "75px",
            topMasque:     "-11px",
            leftMasque:    "-499px"
        },{
            largeurMasque: "72px",
            hauteurMasque: "75px",
            topMasque:     "-104px",
            leftMasque:    "-141px"
        },{
            largeurMasque: "72px",
            hauteurMasque: "75px",
            topMasque:     "-104px",
            leftMasque:    "-654px"
        }],
        walkingSide: [{
            largeurMasque: "55px",
            hauteurMasque: "87px",
            topMasque:     "0px",
            leftMasque:    "-253px"
        },{
            largeurMasque: "55px",
            hauteurMasque: "87px",
            topMasque:     "0px",
            leftMasque:    "-681px"
        },{
            largeurMasque: "110px",
            hauteurMasque: "81px",
            topMasque:     "-97px",
            leftMasque:    "-340px"
        },{
            largeurMasque: "110px",
            hauteurMasque: "81px",
            topMasque:     "-183px",
            leftMasque:    "-92px"
        }],
        death: [{
            largeurMasque: "59px",
            hauteurMasque: "91px",
            topMasque:     "-279px",
            leftMasque:    "0px"
        },{
            largeurMasque: "73px",
            hauteurMasque: "91px",
            topMasque:     "-279px",
            leftMasque:    "-86px"
        },{
            largeurMasque: "113px",
            hauteurMasque: "99px",
            topMasque:     "-271px",
            leftMasque:    "-169px"
        },{
            largeurMasque: "142px",
            hauteurMasque: "118px",
            topMasque:     "-281px",
            leftMasque:    "-287px"
        },{
            largeurMasque: "165px",
            hauteurMasque: "145px",
            topMasque:     "-281px",
            leftMasque:    "-455px"
        }]
    }
    // ------------------------------------------------------------------------------
    var ettin = {
        walkingDown: [{
            largeurMasque: "98px",
            hauteurMasque: "111px",
            topMasque:     "0px",
            leftMasque:    "-23px"
        },{
            largeurMasque: "117px",
            hauteurMasque: "115px",
            topMasque:     "-119px",
            leftMasque:    "-18px"
        },{
            largeurMasque: "120px",
            hauteurMasque: "110px",
            topMasque:     "-246px",
            leftMasque:    "-10px"
        },{
            largeurMasque: "111px",
            hauteurMasque: "115px",
            topMasque:     "-376px",
            leftMasque:    "-24px"
        }],
        attack: [{
            largeurMasque: "125px",
            hauteurMasque: "139px",
            topMasque:     "-504px",
            leftMasque:    "-19px"
        },{
            largeurMasque: "152px",
            hauteurMasque: "132px",
            topMasque:     "-655px",
            leftMasque:    "0px"
        },{
            largeurMasque: "113px",
            hauteurMasque: "109px",
            topMasque:     "-798px",
            leftMasque:    "-19px"
        }],
        death: [{
            largeurMasque: "124px",
            hauteurMasque: "117px",
            topMasque:     "-1211px",
            leftMasque:    "-6px"
        },{
            largeurMasque: "119px",
            hauteurMasque: "119px",
            topMasque:     "-1211px",
            leftMasque:    "-148px"
        },{
            largeurMasque: "125px",
            hauteurMasque: "129px",
            topMasque:     "-1201px",
            leftMasque:    "-283px"
        },{
            largeurMasque: "147px",
            hauteurMasque: "141px",
            topMasque:     "-1189px",
            leftMasque:    "-423px"
        },{
            largeurMasque: "153px",
            hauteurMasque: "136px",
            topMasque:     "-1197px",
            leftMasque:    "-583px" //
        },{
            largeurMasque: "158px",
            hauteurMasque: "120px",
            topMasque:     "-1204px",
            leftMasque:    "-750px" //
        },{
            largeurMasque: "148px",
            hauteurMasque: "118px",
            topMasque:     "-1207px",
            leftMasque:    "-928px" //
        },{
            largeurMasque: "153px",
            hauteurMasque: "108px",
            topMasque:     "-1210px",
            leftMasque:    "-1096px" //
        },{
            largeurMasque: "155px",
            hauteurMasque: "87px",
            topMasque:     "-1369px",
            leftMasque:    "-15px" //
        },{
            largeurMasque: "155px",
            hauteurMasque: "54px",
            topMasque:     "-1402px",
            leftMasque:    "-193px" //
        },{
            largeurMasque: "154px",
            hauteurMasque: "42px",
            topMasque:     "-1413px",
            leftMasque:    "-372px" //
        },{
            largeurMasque: "154px",
            hauteurMasque: "44px",
            topMasque:     "-1412px",
            leftMasque:    "-549px"
        }]
    }    
    // ------------------------------------------------------------------------------
    var imp  = {
        walkingUp: [{
            largeurMasque: "52px",
            hauteurMasque: "72px",
            topMasque:     "0px",
            leftMasque:    "-235px"
        },{
            largeurMasque: "49px",
            hauteurMasque: "67px",
            topMasque:     "0px",
            leftMasque:    "-528px"
        },{
            largeurMasque: "50px",
            hauteurMasque: "70px",
            topMasque:     "-91px",
            leftMasque:    "-100px"
        },{
            largeurMasque: "49px",
            hauteurMasque: "67px",
            topMasque:     "-100px",
            leftMasque:    "-402px"
        }],
        walkingDown: [{
            largeurMasque: "57px",
            hauteurMasque: "82px",
            topMasque:     "0px",
            leftMasque:    "0px"
        },{
            largeurMasque: "54px",
            hauteurMasque: "81px",
            topMasque:     "0px",
            leftMasque:    "-296px"
        },{
            largeurMasque: "56px",
            hauteurMasque: "86px",
            topMasque:     "0px",
            leftMasque:    "-580px"
        },{
            largeurMasque: "54px",
            hauteurMasque: "82px",
            topMasque:     "-85px",
            leftMasque:    "-160px"
        }],
        walkingLeft: [{
            largeurMasque: "52px",
            hauteurMasque: "72px",
            topMasque:     "0px",
            leftMasque:    "-123px"
        },{
            largeurMasque: "54px",
            hauteurMasque: "74px",
            topMasque:     "0px",
            leftMasque:    "-368px"
        },{
            largeurMasque: "43px",
            hauteurMasque: "79px",
            topMasque:     "-76px",
            leftMasque:    "0px"
        },{
            largeurMasque: "57px",
            hauteurMasque: "70px",
            topMasque:     "-100px",
            leftMasque:    "-294px"
        }],
        walkingRight: [{
            largeurMasque: "54px",
            hauteurMasque: "71px",
            topMasque:     "-466px",
            leftMasque:    "0px"
        },{
            largeurMasque: "56px",
            hauteurMasque: "73px",
            topMasque:     "-464px",
            leftMasque:    "-357px"
        },{
            largeurMasque: "44px",
            hauteurMasque: "77px",
            topMasque:     "-460px",
            leftMasque:    "-118px"
        },{
            largeurMasque: "57px",
            hauteurMasque: "70px",
            topMasque:     "-467px",
            leftMasque:    "-167px"
        }],
        // -- ANIMATION DE MORT GORE --
        death: [{
            largeurMasque: "65px",
            hauteurMasque: "86px",
            topMasque:     "-358px",
            leftMasque:    "0px"
        },{
            largeurMasque: "72px",
            hauteurMasque: "88px",
            topMasque:     "-356px",
            leftMasque:    "-70px"
        },{
            largeurMasque: "77px",
            hauteurMasque: "88px",
            topMasque:     "-356px",
            leftMasque:    "-152px"
        },{
            largeurMasque: "81px",
            hauteurMasque: "88px",
            topMasque:     "-356px",
            leftMasque:    "-239px"
        },{
            largeurMasque: "81px",
            hauteurMasque: "65px",
            topMasque:     "-379px",
            leftMasque:    "-325px"
        },{
            largeurMasque: "81px",
            hauteurMasque: "52px",
            topMasque:     "-392px",
            leftMasque:    "-410px"
        },{
            largeurMasque: "80px",
            hauteurMasque: "45px",
            topMasque:     "-399px",
            leftMasque:    "-495px"
        },{
            largeurMasque: "80px",
            hauteurMasque: "26px",
            topMasque:     "-419px",
            leftMasque:    "-580px"
        }]
    };
    // ------------------------------------------------------------------------------
    var torche  = {
        flamme: [{
            largeurMasque: "43px",
            hauteurMasque: "85px",
            topMasque:     "-2px",
            leftMasque:    "-4px"
        },{
            largeurMasque: "43px",
            hauteurMasque: "85px",
            topMasque:     "-2px",
            leftMasque:    "-70px"
        },{
            largeurMasque: "43px",
            hauteurMasque: "85px",
            topMasque:     "-2px",
            leftMasque:    "-136px"
        },{
            largeurMasque: "43px",
            hauteurMasque: "85px",
            topMasque:     "-2px",
            leftMasque:    "-202px"
        },{
            largeurMasque: "43px",
            hauteurMasque: "85px",
            topMasque:     "-2px",
            leftMasque:    "-268px"
        },{
            largeurMasque: "43px",
            hauteurMasque: "85px",
            topMasque:     "-2px",
            leftMasque:    "-334px"
        },{
            largeurMasque: "43px",
            hauteurMasque: "85px",
            topMasque:     "-2px",
            leftMasque:    "-400px"
        },{
            largeurMasque: "43px",
            hauteurMasque: "85px",
            topMasque:     "-2px",
            leftMasque:    "-466px"
        }]
    }    
    
    // ##############################################################################
    // #####################        --- FONCTIONS      ---  #########################
    // ##############################################################################
    function getAnimationFrame(idSprite, idMasque, objet, frame) {
        var i = 0;
        var animationID = window.setInterval(function() {
            console.log(i);
            idSprite.style.top    = objet[i].topMasque;
            idSprite.style.left   = objet[i].leftMasque;
            idMasque.style.width  = objet[i].largeurMasque;
            idMasque.style.height = objet[i].hauteurMasque;
            i++;    
            if (i == objet.length) {
                i = 0;
                if((objet == imp.death) || (objet == hero.death) || (objet == lostSoul.death) || (objet == heresiarch.death) || (objet == ettin.death)) {
                    clearInterval(animationID);
                }
            }
        },frame);
    }
    function getMove(mobBoite) {
        var deplacementID = window.setInterval(function() {
            var value = parseFloat(mobBoite.style.top);
            value += 3; 
            mobBoite.style.top = parseFloat(value) + "px";
            console.log(deplacementID);
        },100);
    }
    function collisionAttaque() {
        if((armeMasque.style.left == heresiarchMasque.style.left)) {
            if(weapon.fireOn) {
                console.log("collision")
                getAnimationFrame(heresiarchSprite, heresiarchMasque, heresiarch.death, 80);
                
            }
        }
    }
    // ########################################################################################
    // #####################        --- APPELS DE FONCTIONS      ---  #########################
    // ########################################################################################
    collisionAttaque();
    getAnimationFrame(marineSprite, marineMasque, hud.life1, 500);
    getAnimationFrame(torcheSprite, torcheMasque, torche.flamme, 100);
    getAnimationFrame(torche2Sprite, torche2Masque, torche.flamme, 90);

    heresiarchMasque.addEventListener("click", function() {
        getAnimationFrame(heresiarchSprite, heresiarchMasque, heresiarch.death, 80);
    })

    marineMasque.addEventListener("click",function() {
        getMove(heresiarchBoite);
        getAnimationFrame(heresiarchSprite, heresiarchMasque,   heresiarch.walkingDown, 200);
    })

    var direction = "";
    window.onkeydown = function(event){
        var code      = event.keyCode;
        
        switch (code) {
            case 39: // A DROITE 
            console.log(direction);
            console.log(armeMasque);
                direction = "right";
                direction != "left";
            break;
            case 37: // A GAUCHE 
            console.log(armeMasque);
                direction = "left";
                direction != "right";
            break;
            case 32: // ESPACE 
            direction != "left";
            direction != "right";
            console.log('Feuu');
                getAnimationFrame(armeSprite,armeMasque,weapon.fireOn, 150);
            break;
            case 75: // Touche - K - (pour tester la vie du hud) 

            break;
            default:
                console.log("Error")
                break;
            }
        // window.onkeydown = function(event){
        //     clearInterval(animationID);
        // }
        if(direction === "right") {
            console.log(direction);
            weapon.moveX("right");
        }else if(direction === "left"){
            console.log(direction);
            weapon.moveX("left");

        }
    }    
}    
