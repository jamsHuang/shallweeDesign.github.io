$(function() {
  var stgH = $(window).innerHeight();
  var mtri = $('.main__a4').offset().top;
  var triEvent = false;
  var swipeMode = false;
  var nowTop, passTop, isMoving;
  var nTop, pTop;
  var nowPage = -1;
  var anc = [];
  var diff = stgH / 3;
  //
  // var skrollr_obj = skrollr.init({
  //   smoothScrolling:true,
  //   smoothScrollingDuration:500,
  //   render: function(data) {
  //
  //   }
  // });
  //
  setAnchor();

  function setAnchor() {
    anc[0] = 0;
    anc[1] = $(".main__a1")[0].offsetTop;
    anc[2] = $(".main__a2")[0].offsetTop;
    anc[3] = $(".main__a3")[0].offsetTop;
    anc[4] = $(".main__a4")[0].offsetTop;
    anc[5] = $(".main__a5")[0].offsetTop;
    anc[6] = $(".main__a6")[0].offsetTop;
    // anc[7] = $(".main__a7")[0].offsetTop;
    // anc[8] = $(".main__a8")[0].offsetTop;
    // anc[9] = $(".main__a9")[0].offsetTop;
    // anc[10] = $(".main__a10")[0].offsetTop;
    // anc[11] = $(".main__a11")[0].offsetTop;
    // anc[12] = $(".main__a12")[0].offsetTop;
    // anc[13] = $(".main__a13")[0].offsetTop;
    anc[14] = $(".main__a14")[0].offsetTop;
    anc[15] = $(".main__a15")[0].offsetTop;
    // anc[16] = $(".main__a16")[0].offsetTop;
    anc[17] = $(".main__a17")[0].offsetTop;
  }
  //console.log(anc);

  function getIn(target, effectIn, effectOut) {
    if (target.hasClass(effectIn)) {

    } else {
      if (target.hasClass(effectOut)) {
        target.removeClass(effectOut);
        target.addClass(effectIn)
      } else {}
    }
  }

  function getOut(target, effectIn, effectOut) {
    if (target.hasClass(effectIn)) {
      target.removeClass(effectIn);
      if (target.hasClass(effectOut)) {} else {
        target.addClass(effectOut);
      }
    } else {}
  }

  $(".fixed__a3").hide();
  $(".fixed__a1").show();
  $('.fixed__a5').hide();
  $('.fixed__a7').hide();
  $('.fixed__a8').hide();
  var isA1, isA3, isA5, isA7, isA8;
  isA1 = true;
  isA3 = isA5 = isA7 = isA8 = false;

  var controller = new ScrollMagic.Controller({
    container: "#main__scroll"
  });
  //sc1inOut
  var sc = new ScrollMagic.Scene({
      triggerElement: "#trigger1",
      triggerHook: "onLeave",
      duration: (stgH / 4), // the scene should last for a scroll distance of 100px
      offset: 0, // start this scene after scrolling for 50px
    })
    .on("enter leave", function(e) {
      switch (e.type) {
        case "enter":

          if ($(".a0__title__text").hasClass("fadeInUp")) {} else {
            $(".a0__title__text").addClass("fadeInUp")
            $('.a0__title__text').removeClass('fadeOutUp');
          }
          if ($('.a0__title__logo').hasClass("flipInY")) {} else {
            $('.a0__title__logo').addClass("flipInY");
            $('.a0__title__logo').removeClass('fadeOutUp');
          }
          break;
        case "leave":
          // //console.log('leave')
          if ($(".a0__title__text").hasClass("fadeInUp")) {
            $(".a0__title__text").removeClass("fadeInUp");
            $(".a0__title__text").addClass("fadeOutUp");
          } else {}
          if ($('.a0__title__logo').hasClass("flipInY")) {
            $('.a0__title__logo').removeClass("flipInY");
            $('.a0__title__logo').addClass("fadeOutUp");
          } else {}
          break;
      }
    })
    .addTo(controller) // assign the scene to the controller
  //sc2inOut
  var sc = new ScrollMagic.Scene({
      triggerElement: "#trigger2",
      triggerHook: "onEnter",
      duration: (stgH * 5 / 4), // the scene should last for a scroll distance of 100px
      offset: stgH / 4, // start this scene after scrolling for 50px
    })
    .on("enter leave", function(e) {
      switch (e.type) {
        case "enter":
          if ($(".a2__text1, .a2__text2").hasClass("fadeInUp")) {} else {
            $(".a2__text1, .a2__text2").addClass("fadeInUp")
            $('.a2__text1, .a2__text2').removeClass('fadeOutUp');
          }
          if ($(".a2__text3").hasClass("fadeInUp")) {} else {
            $(".a2__text3").addClass("fadeInUp")
            $('.a2__text3').removeClass('fadeOutUp');
          }
          if ($(".a2__production").hasClass("fadeInUp")) {} else {
            $(".a2__production").addClass("fadeInUp")
            $('.a2__production').removeClass('fadeOutUp');
          }
          break;
        case "leave":
          if ($(".a2__text1, .a2__text2").hasClass("fadeInUp")) {
            $(".a2__text1, .a2__text2").removeClass("fadeInUp");
            $(".a2__text1, .a2__text2").addClass("fadeOutUp");
          } else {}
          if ($(".a2__text3").hasClass("fadeInUp")) {
            $(".a2__text3").removeClass("fadeInUp");
            $(".a2__text3").addClass("fadeOutUp");
          } else {}
          if ($(".a2__production").hasClass("fadeInUp")) {
            $(".a2__production").removeClass("fadeInUp");
            $(".a2__production").addClass("fadeOutUp");
          } else {}
      }
    })
    .on("start end", function(e) {
      switch (e.type) {
        case "start":

          break;
        case "end":

          break;

      }
    })
    .addTo(controller)
  //sc3inOut
  var sc = new ScrollMagic.Scene({
      triggerElement: "#trigger3",
      triggerHook: "onEnter",
      duration: (stgH * 5 / 4), // the scene should last for a scroll distance of 100px
      offset: 0, // start this scene after scrolling for 50px
    })
    .on("progress", function(e) {
      if (e.progress <= 0) {
        if (isA1) {

        } else {
          $('.fixed__a1').show();
          isA1 = true;
        }
        if (isA3) {
          $('.fixed__a3').hide();
          isA3 = false;
        } else {

        }
        if (isA5) {
          $('.fixed__a5').hide();
          isA5 = false;
        } else {

        }

      } else {
        if (isA1) {
          $('.fixed__a1').hide();
          isA1 = false;
        } else {

        }
        if (isA3) {

        } else {
          $('.fixed__a3').show();
          isA3 = true;
        }
      }
      // $(".fixed__a3 .bg2").css('top',anc[3]-nowTop);
    })
    .on("enter leave", function(e) {
      switch (e.type) {
        case "enter":

          if ($(".a3__text2").hasClass("fadeInUp")) {} else {
            $(".a3__text2").addClass("fadeInUp")
            $('.a3__text2').removeClass('fadeOutUp');
          }
          if ($(".a3__text1").hasClass("fadeInUp")) {} else {
            $(".a3__text1").addClass("fadeInUp")
            $('.a3__text1').removeClass('fadeOutUp');
          }
          break;
        case "leave":
          //console.log('leave')
          if ($(".a3__text2").hasClass("fadeInUp")) {
            $(".a3__text2").removeClass("fadeInUp");
            $(".a3__text2").addClass("fadeOutUp");
          } else {}
          if ($(".a3__text1").hasClass("fadeInUp")) {
            $(".a3__text1").removeClass("fadeInUp");
            $(".a3__text1").addClass("fadeOutUp");
          } else {}
      }
    })
    .addTo(controller)
  //s4inout
  var sc = new ScrollMagic.Scene({
      triggerElement: "#trigger4",
      triggerHook: "onEnter",
      duration: 2 * stgH, // the scene should last for a scroll distance of 100px
      offset: 0, // start this scene after scrolling for 50px
    })
    .on("progress", function(e) {
      if(e.progress < 0.6 && e.progress > 0.2){
        if(isA3){

        }else{
          $(".fixed__a3").show();
          isA3 = true;
        }

      }
      $(".fixed__a3 .bg2").css('top', anc[3] - nowTop);

    })
    .on("enter leave", function(e) {
      switch (e.type) {
        case "enter":

        sen = 0;
        $(".fixed__a1").hide();
        $('.fixed__a7').hide();
        $('.fixed__a8').hide();
        isA1 = false;
        isA7 = false;
        isA8 = false;

          if (isA5) {

          } else {
            $('.fixed__a5').show();
            isA5 = true;
          }
          break;
        case "leave":
          // ////console.log('out');
      }
    })
    .addTo(controller)
  //s5inout

  var ppTop = 0;
  var nnTop;
  var isDrawing = false;
  var tTimer;
  var counting = false;
  var sen = 0;
  var isAc = false;
  //
  function stopCounting() {
    clearInterval(tTimer);
    counting = false;
  }

  function s5goPre() {
    sen = 0;
    isAc = true;
    TweenMax.set($(".fixed__a3"),{y:-stgH});
    $(".fixed__a3").show();
    TweenMax.to($(".fixed__a3"),0.5,{y:0,onComplete:function(){
      $('#main__scroll').animate({scrollTop:(anc[4])},50,function(){
        isAc = false;
      });
    }});
    // $(".fixed__a3").show();
    // isDrawing = true;
    // $('#main__scroll').stop().animate({
    //   scrollTop: (anc[4])
    // }, 200, function() {
    //   ppTop = 0;
    //   isDrawing = false;
    //   isAc = false;
    // });
  }

  function s5goNext() {
    sen = 9;
    // $('#main__scroll').scrollTop(anc[14]);
    isAc = true;
    $('#main__scroll').animate({scrollTop:(anc[14])},50,function(){ isAc = false;});
    console.log(anc[14]);
    console.log($('#main__scroll').scrollTop());
    isAc = true;
    TweenMax.set($(".fixed__a7"),{y:stgH});
    TweenMax.set($('.fixed__a8'),{y:stgH});
    $(".fixed__a7").show();
    $(".fixed__a8").show();
    TweenMax.to($(".fixed__a7"),1,{y:0,onComplete:function(){
      isAc = false;
    }});
    // $('#main__scroll').stop().animate({
    //   scrollTop: (anc[14]-stgH/2)
    // }, 100, function() {
    //   ppTop = 1;
    //   isDrawing = false;
    //   isAc = false;
    // });
  }

  function goUp() {
    dir="up";
    sen--;
    //console.log('goup', sen);
    if (sen <= 0) {
      sen = 0;
      stopCounting();
      s5goPre();
    }else{
      //$('#main__scroll').scrollTop(anc[6]);
      isAc = true;
      $('#main__scroll').animate({scrollTop:(anc[6])},50,function(){isAc = false;});
      ////console.log($('#main__scroll').scrollTop());
      drawSc();
      setTimeout(function(){
        isAc = false;
      },1500);
    }
  }

  function goDown() {
    dir="down";
    sen++;
    //console.log('godown', sen);
    if (sen >= 9) {
      sen = 9;
      stopCounting();
      s5goNext();
    }else{
      // $('#main__scroll').scrollTop(anc[6]);
      isAc = true;
      $('#main__scroll').animate({scrollTop:(anc[6])},50,function(){isAc = false;});
      drawSc();
      setTimeout(function(){
        // isDrawing = false;
        isAc = false;
      },1500);
    }
  }
  var $a5_bg = $('.a5 .bg4');
  var $a5_model = $('.a5__model');
  var $a5__skin =$('.a5__skin');
  var $a5__blackIn = $(".a5__black-in");
  var $a5__black = $(".a5__black");
  var $a5__title = $(".a5__title");
  var $a5__text = $(".a5__text");
  var $a6__bg1 = $(".a6__bg1");
  var $a6__bg = $(".a6__bg");
  var $bg1 = $(".bg1");
  var $a6__title = $(".a6__title");
  var $a6__text = $(".a6__text");
  var $a6__title2 = $(".a6__title2");
  var $a6__text2 = $(".a6__text2");
  var $bg3 = $('.bg3');
  var $b1__title = $(".b1__title");
  var $b1__text = $(".b1__text");
  var $b3__title = $(".b3__title");
  var $b3__text = $(".b3__text");
  var $b2__title = $(".b2__title");
  var $b2__text = $(".b2__text");
  var $b4__title = $(".b4__title");
  var $b4__text = $(".b4__text");
  var $bg5 = $(".bg5");
  var $b5__title1 = $(".b5__title1");
  var $b5__text1 = $(".b5__text1");
  var $b5__text2 = $(".b5__text2");
  var $b5__title = $(".b5__title");
  var $b5__text = $(".b5__text");
  var $b5__title = $(".b5__title");
  var $b5__text = $(".b5__text");
  var $a6__bgMid = $(".a6__bg--mid");
  var $production_s = $(".production_s");
  var $model = $(".model");
  var $tri = $(".tri");
  var $wordcloud = $(".wordcloud");

  function setAll(){
     $bg3.hide();
     $a5_bg.hide();
     $a5_model.hide();
     $a5__skin.hide();
     $a5__blackIn.hide();
     $a5__black.hide();
     $a5__title.hide();
     $a5__text.hide();
     $a6__bg1.hide();
     $a6__bg.hide();
     $bg1.hide();
     $a6__title.hide();
     $a6__text.hide();
     $a6__title2.hide();
     $a6__text2.hide();
     $b1__title.hide();
     $b1__text.hide();
     $b3__title.hide();
     $b3__text.hide();
     $b2__title.hide();
     $b2__text.hide();
     $b4__title.hide();
     $b4__text.hide();
     $bg5.hide();
     $b5__title1.hide();
     $b5__text1.hide();
     $b5__text2.hide();
     $b5__title.hide();
     $b5__text.hide();
     $b5__title.hide();
     $b5__text.hide();
     $a6__bgMid.hide();
     $production_s.hide();
     $model.hide();
     $tri.hide();
     $wordcloud.hide();
  }
  setAll();
  function drawSc(){
    switch(sen){
      case 0:
        break;
      case 1:
       ss1();
       break;
     case 2:
      ss2();
      break;
    case 3:
     ss3();
     break;
     case 4:
      ss4();
      break;
      case 5:
      ss5();
      break;
      case 6:
      ss6();
      break;
      case 7:
      ss7();
      break;
      case 8:
      ss8();
      break;
    }
  }
  function ss1(){

    setAll();
    TweenMax.set($a5_bg,{opacity:0});
    TweenMax.to($a5_bg,0.5,{opacity:1});

    TweenMax.set($a5_model,{opacity:0,y:50});
    TweenMax.to($a5_model,0.8,{opacity:1,y:0});

    TweenMax.set($a5__skin,{opacity:0,scale:0,x:200});
    TweenMax.to($a5__skin,1,{opacity:1,scale:1.4,x:-80});

    // TweenMax.set($a5__blackIn,{opacity:0});
    // TweenMax.to($a5__blackIn,0.5,{opacity:1});

    TweenMax.set($a5__title,{opacity:0,y:50,css:{"color":"rgb(0,0,0)"}});
    TweenMax.to($a5__title,1,{opacity:1,y:0,css:{"color":"rgb(0,0,0)"}});
    TweenMax.set($a5__blackIn,{opacity:0,scale:1});
    TweenMax.set($a5__text,{opacity:0,y:50,css:{"color":"rgb(0,0,0)"}});
    TweenMax.to($a5__text,0.6,{opacity:1,y:0,css:{"color":"rgb(0,0,0)"}});
    TweenMax.set($a5__black,{scale:0,opacity:0,x:-80});
    TweenMax.set($a6__bg,{css:{"left":"50%"}});
    $a5_bg.show();
    $a5_model.show();
    $a5__skin.show();
    $a5__blackIn.show();
    $a5__black.show();
    $a5__title.show();
    $a5__text.show();
  }
  function ss2(){

    TweenMax.set($a5__blackIn,{opacity:0});
    TweenMax.to($a5__blackIn,0.5,{opacity:1,onComplete:ss22});

  }
  function ss22(){
    TweenMax.set($a5__text,{css:{"color":"rgb(0,0,0)"}});
    TweenMax.to($a5__text,0.6,{css:{"color":"rgb(255,255,255)"},onComplete:ss23});
    TweenMax.set($a5__title,{css:{"color":"rgb(0,0,0)"}});
    TweenMax.to($a5__title,0.8,{css:{"color":"rgb(255,255,255)"}});
    TweenMax.set($a5__black,{scale:0,opacity:1,x:-40,y:-80});
    TweenMax.to($a5__black,0.8,{scale:100,opacity:1,x:-40,y:-80});
  }
  function ss23(){
  // setAll();

    TweenMax.set($bg1,{opacity:0})
    TweenMax.set($a6__title,{opacity:0,y:80})
    TweenMax.set($a6__text,{opacity:0,y:70})
    TweenMax.set($production_s,{opacity:0,y:50})

    TweenMax.to($bg1,1,{opacity:1})
    TweenMax.to($a6__title,1,{opacity:1})
    TweenMax.to($a6__text,1,{opacity:1})
    TweenMax.to($production_s,1,{opacity:1})

    TweenMax.set($a6__bg1,{y:stgH})
    TweenMax.to($a6__bg1,0.5,{ease: Quad.easeOut,y:0});

    $a6__bg1.show();
    TweenMax.set($a6__bg,{y:0,x:-50,opacity:0});
    $a6__bg.show();
    TweenMax.to($a6__bg,0.4,{y:0,x:0,opacity:0.5});
    $bg1.show();
    TweenMax.set($a6__title,{y:50,opacity:0});
    TweenMax.set($a6__text,{y:50,opacity:0});
    $a6__title.show();
    $a6__text.show();
    TweenMax.to($a6__title,0.4,{y:0,opacity:1});
    TweenMax.to($a6__text,0.4,{y:0,opacity:1});
    //
    $production_s.show();
    $a5__skin.fadeOut();
    $a5__blackIn.fadeOut();
    $a5__black.fadeOut();
    $a5__title.fadeOut();
    $a5__text.fadeOut();
     $a5_bg.fadeOut();
      $a5_model.fadeOut();
      $a6__title2.fadeOut();
      $a6__text2.fadeOut();
  }
  function ss3(){


    TweenMax.to($a6__title,0.5,{opacity:0,y:-20})
    TweenMax.to($a6__text,0.5,{opacity:0,y:-20})
    TweenMax.set($a6__text2,{opacity:0,y:60})
    TweenMax.set($a6__title2,{opacity:0,y:30})
    $production_s.show();
    $a6__bg1.show();
    $a6__bg.show();
    TweenMax.set($a6__bg,{opacity:0.5,x:-50,y:0});
    TweenMax.to($a6__bg,0.5,{opacity:1,x:0,y:0,ease: Quad.easeOut})

    TweenMax.to($a6__title2,1,{opacity:1,y:0,delay:0.3})
    TweenMax.to($a6__text2,0.6,{opacity:1,y:0,delay:0.5})
    $a6__title2.fadeIn();
    $a6__text2.fadeIn();
    $b1__title.fadeOut();
    $b1__text.fadeOut();


    if(dir=="up"){

      TweenMax.set($tri,{y:0});
      TweenMax.to($tri,0.5,{ease: Quad.easeOut,y:stgH});
      TweenMax.set($model,{y:0});
      TweenMax.to($model,0.5,{ease: Quad.easeOut,y:stgH,onComplete:function(){
      $tri.fadeOut();
      $model.fadeOut();
      }});

    }

  }
  function ss4(){
    setAll();
    $a6__title2.fadeOut();
    $a6__text2.fadeOut();
    $a6__bg.fadeOut();
    TweenMax.set($a6__bg,{opacity:1,y:0});
    TweenMax.to($a6__bg,0.6,{opacity:1,y:-stgH});
    //
    $production_s.fadeOut();
    //
    $b1__title.fadeIn();
    $b1__text.fadeIn();
    //
    $tri.fadeIn();
    TweenMax.set($tri,{y:stgH});
    TweenMax.to($tri,1,{y:0});
    $model.fadeIn();
    TweenMax.set($model,{y:stgH});
    TweenMax.to($model,0.8,{y:0});


    if($tri.hasClass("tri-m")){
      $tri.removeClass("tri-m")
    }
  }
  function ss5(){

    if(dir == "down"){

      TweenMax.set($bg3,{opacity:1,y:stgH});
      $bg3.show();
      TweenMax.to($bg3,0.5,{ease: Sine.easeOut,opacity:1,y:0});

    }

    //
    if($tri.hasClass("tri-m")){}else{
      $tri.addClass("tri-m")
    }
        $b2__text.fadeOut();
        $b2__title.fadeOut();
    $b1__title.fadeOut();
    $b1__text.fadeOut();
    $wordcloud.fadeIn();
    $model.fadeOut();
    TweenMax.to($tri,0.5,{css:{"rotate":"-45deg","scale":"0.8"},onComplete:ss51})
    TweenMax.to($('.wordcloud_text'),0.2,{scale:1,opacity:1,delay:0.2})
  }
  function ss51(){

    $b3__title.fadeIn();
    TweenMax.set($b3__title,{css:{"scale":"1"},opacity:0})
    TweenMax.to($b3__title,0.5,{css:{"scale":"1.02"},opacity:1,onComplete:ss52})
    TweenMax.set($b3__text,{opacity:0})
    TweenMax.to($b3__text,0.7,{opacity:1})
    TweenMax.to($tri,0.5,{css:{"rotate":"-90deg"}})

  }
  function ss52(){
    TweenMax.to($b3__title,0.3,{css:{"scale":"1"},opacity:1})
    TweenMax.to($('.wordcloud_text'),0.2,{scale:1,opacity:0.5,delay:0.2})
  }
  function ss6(){

    $bg3.show();
    $b3__title.fadeOut();
    $b3__text.fadeOut();
    $b2__title.show();
    $b2__text.show();

    $b4__title.fadeOut();
    $b4__text.fadeOut();
    TweenMax.set($b2__text,{opacity:0,y:20})
    TweenMax.to($b2__text,0.7,{opacity:1,y:0})
    TweenMax.set($b2__title,{opacity:0,y:20})
    TweenMax.to($b2__title,0.7,{opacity:1,y:0})
    TweenMax.to($('.wordcloud_text'),0.2,{scale:0.5,opacity:0.5,delay:0.8})
  }
  function ss7(){
    $b5__title1.hide();
    $b5__text1.hide();
    $b5__text2.hide();
    $b5__title.hide();
    $b5__text.hide();
    $b5__title.hide();
    $b5__text.hide();
    $a6__bgMid.hide();
    $model.hide();
    $tri.show();
    $bg3.show();
    if(dir=="up"){
      TweenMax.set($bg3,{opacity:1,y:-stgH});
      TweenMax.to($bg3,0.5,{opacity:1,y:0});
    }
    $b4__title.show();
    $b4__text.show();
    TweenMax.set($b4__title,{opacity:0,y:20})
    TweenMax.to($b4__title,0.7,{opacity:1,y:0})
    TweenMax.set($b4__text,{opacity:0,y:20})
    TweenMax.to($b4__text,0.7,{opacity:1,y:0})
    $b2__text.fadeOut();
    $b2__title.fadeOut();

        if($tri.hasClass("tri-m")){

        }else{
          $tri.addClass("tri-m")
        }
    TweenMax.to($('.wordcloud_text'),0.2,{scale:0,opacity:0,delay:0.8})
  }
  function ss8(){
    setAll();
    $b4__title.fadeOut();
    $b4__text.fadeOut();
    $tri.hide();
    $b5__title1.show();
    $b5__text1.show();
    $b5__text2.show();
    $b5__title.show();
    $b5__text.show();
    $b5__title.show();
    $b5__text.show();
    $a6__bgMid.show();
    $model.show();
  }
  var dir;
  var sc = new ScrollMagic.Scene({
      triggerElement: "#trigger5",
      triggerHook: "onEnter",
      duration: 10000, // the scene should last for a scroll distance of 100px
      offset: 100, // start this scene after scrolling for 50px
    })
    .on("progress", function(e) {
      nnTop = e.progress;
      if (isDrawing == false) {
        if (counting == false) {
          ppTop =  e.progress;
          counting = true;
          tTimer = setInterval(function() {
            var mv = (nnTop - ppTop);

            if (mv > 0.005) {
              if (isAc == false) {
                isAc = true;
                goDown();
              }
              ////console.log("down");
            } else if (mv < -0.005) {
              ////console.log("up");
              if (isAc == false) {
                isAc = true;
                goUp();
              }
            } else {
              ////console.log("stay");
            }
            ppTop = nnTop;
          }, 150);
        }
      }
    })
    .on("enter leave", function(e) {
      switch (e.type) {

        case "enter":
        console.log('i');
          isDrawing = true;
          $('#main__scroll').stop().animate({
            scrollTop: anc[6]
          }, 10, function() {
            if (sen == 0) {
              sen = 1;
            } else if (sen == 9) {
              sen = 8;
            }
            drawSc();
            if(sen == 1){
                isAc = true;
                TweenMax.set($(".fixed__a3"),{y:0});
                TweenMax.to($(".fixed__a3"),1,{y:-stgH,onComplete:function(){
                  // $(".fixed__a3").hide();
                  isAc = false;
                }});
            }else if(sen==8){
                isAc = true;
                TweenMax.set($(".fixed__a7"),{y:0});
                TweenMax.to($(".fixed__a7"),1,{y:stgH,onComplete:function(){
                  // $(".fixed__a7").hide();
                  isAc = false;
                }});
            }

            setTimeout(function(){
              // $('#main__scroll').scrollTop(anc[6]);
              isDrawing = false;

            },1000);
            ////console.log("in",$('#main__scroll').scrollTop());
          });
          break;
        case "leave":
          stopCounting();
          if(nowTop > anc[6]){
            sen = 9;

          }else{
            sen = 0;
            isAc = true;
            TweenMax.set($(".fixed__a3"),{y:-stgH});
            $(".fixed__a3").show();
            TweenMax.to($(".fixed__a3"),1,{y:0,onComplete:function(){
              isAc = false;
            }});
          }
          break;
      }
    })
    .addTo(controller)

  //s6inout

  //sc3inOut
  var sc = new ScrollMagic.Scene({
      triggerElement: "#trigger7",
      triggerHook: "onEnter",
      duration: stgH*1.2, // the scene should last for a scroll distance of 100px
      offset:0, // start this scene after scrolling for 50px
    })
    .on("progress", function(e) {

    })
    .on("enter leave", function(e) {
      switch (e.type) {
        case "enter":
          sen= 9;
          $(".b9__title__1, .b9__title__2, .b9__text__1, .b9__text__2").fadeOut();
          $('.production_ss').hide();
          // TweenMax.fromTo($(".b9__title__1, .b9__title__2, .b9__text__1, .b9__text__2"),0,{y:50,opacity:0});
          // TweenMax.fromTo($(".b8__txt__title, .b8__txt__text"),0.5,{y:50,opacity:0},{y:0,opacity:1});
          // console.log('im 8');
          // $(".b9__title__1, .b9__title__2, .b9__text__1, .b9__text__2").hide();
          $(".b8__txt__title, .b8__txt__text").fadeIn();

          // $(".b9__title__1, .b9__title__2, .b9__text__1, .b9__text__2").hide();
          // $(".b8__txt__title, .b8__txt__text").fadeIn();
          // //
          // $('.fixed__a7').show();
          // $('.fixed__a8').show();
          //
          // if ($(".b8__txt__title, .b8__txt__text").hasClass("fadeInUp")) {} else {
          //   $(".b8__txt__title, .b8__txt__text").addClass("fadeInUp")
          //   $('.b8__txt__title, .b8__txt__text').removeClass('fadeOutUp');
          // }
          break;
        case "leave":
          isAc = true;
        if(nowTop<anc[14]){
          // TweenMax.set($('.fixed__a7'),{y:0});
          // TweenMax.to($(".fixed__a7"),0.5,{y:stgH,onComplete:function(){
            // $('#main__scroll').scrollTop(anc[6]);
            $('#main__scroll').animate({scrollTop:(anc[6])});
            // isAc = false;
            // sen =8;
            // drawSc();

            // console.log('im 8 leave up ');
          // }})

        }else{
          $(".b8__txt__title, .b8__txt__text").fadeOut();
          $(".b9__title__1, .b9__title__2, .b9__text__1, .b9__text__2").fadeIn();
          $('.production_ss').fadeIn();
        }


          // //console.log('leave')
          // if ($(".b8__txt__title, .b8__txt__text").hasClass("fadeInUp")) {
          //   $(".b8__txt__title, .b8__txt__text").removeClass("fadeInUp");
          //   $(".b8__txt__title, .b8__txt__text").addClass("fadeOutUp");
          // }else{}
          break;
      }
    })
    .addTo(controller)


    var sc = new ScrollMagic.Scene({
        triggerElement: "#trigger8",
        triggerHook: "onEnter",
        duration: stgH, // the scene should last for a scroll distance of 100px
        offset: stgH/2, // start this scene after scrolling for 50px
      })
      .on("progress", function(e) {

      })
      .on("enter leave", function(e) {
        switch (e.type) {
          case "enter":
            // console.log('im 9');
            TweenMax.fromTo($(".b8__txt__title, .b8__txt__text"),0.5,{opacity:1,y:0},{opacity:0,y:-50})
            TweenMax.fromTo($(".b9__title__1, .b9__title__2, .b9__text__1, .b9__text__2"),0.5,{opacity:0,y:50},{opacity:1,y:0})
            // // $('.fixed__a8').show();
            // $(".b9__title__1, .b9__title__2, .b9__text__1, .b9__text__2").fadeIn();
            // $(".b8__txt__text, .b8__txt__title").fadeOut();
            // if ($(".b9__title , .b9__text, .production_ss").hasClass("fadeInUp")) {} else {
            //   $(".b9__title , .b9__text, .production_ss").addClass("fadeInUp")
            //   $('.b9__title, .production_ss, .b9__text').removeClass('fadeOut');
            // }
            break;
          case "leave":
            // console.log('im 9 leave');
            // //console.log('leave')
            // if ($('.b9__title , .production_ss, .b9__text').hasClass("fadeInUp")) {
            //   $('.b9__title , .production_ss, .b9__text').removeClass("fadeInUp");
            //   $('.b9__title , .production_ss, .b9__text').addClass("fadeOut");
            // }else{}
            break;
        }
      })
      .addTo(controller)

          var sc = new ScrollMagic.Scene({
              triggerElement: "#trigger9",
              triggerHook: "onEnter",
              duration: stgH, // the scene should last for a scroll distance of 100px
              offset: 0, // start this scene after scrolling for 50px
            })
            .on("progress", function(e) {
              // $('.fixed__a8').css({"top": (100-e.progress*100)+"%"});

              if(e.progress>0.9){

              }else{
                // TweenMax.set($('.fixed__a8'),{y: -e.progress*stgH});
              }
            })
            .on("enter leave", function(e) {
              switch (e.type) {
                case "enter":
                  TweenMax.fromTo($('.fixed__a8'),0.5,{y:stgH},{y:0});

                  break;
                case "leave":
                    TweenMax.fromTo($('.fixed__a8'),0.5,{y:0},{y:stgH});
                  break;
              }
            })
            .addTo(controller)

  $('#main__scroll').scroll(function() {
    nowTop = $(this).scrollTop();
  })

  $('.layer__scroll').scroll(function() {
    // nTop = $('.layer__scroll').scrollTop();
    //console.log(nTop);
  })

  function handleUp() {
    //console.log('up');
    // nowPage++;
    //console.log(nowPage);
  }

  function handleDown() {
    //console.log('down');
    // if (nowPage == 0) {
    //   if ($('.layer__scroll').hasClass('active')) {
    //     $('.layer__scroll').removeClass('active');
    //     $('#main__scroll').stop().animate({
    //       scrollTop: anc[4]
    //     }, 10);
    //   } else {
    //
    //   }
    // }
  }

  window.addEventListener('touchstart', function() {
    pTop = nTop;
  })
  window.addEventListener('touchend', function() {


    if ((nTop - pTop) > 0) {
      handleUp();
    } else if ((nTop - pTop) < 0) {
      handleDown();
    } else {

    }
  })
  jQuery(window).bind('scrollstart', function() {
    pTop = nTop;
  });

  jQuery(window).bind('scrollend', function(e) {

    if ((nTop - pTop) > 0) {
      handleUp();
    } else if ((nTop - pTop) < 0) {
      handleDown();
    } else {

    }

  });
 $('a#btn_index').on('click',function(){
   // $('#main__scroll').scrollTop(0);
   isAc=true;
   $('#main__scroll').animate({scrollTop:0},50,function(){isAc=false});
 })
 $('a#btn_commercial').on('click',function(){

   isAc=true;
   $('#main__scroll').animate({scrollTop:anc[4]},50,function(){isAc=false});
   // $('#main__scroll').scrollTop(anc[4]);
 })
 $('a#btn_about').on('click',function(){
   sen = 1;
   ss1();
   isAc=true;
   $('#main__scroll').animate({scrollTop:anc[6]},50,function(){isAc=false});
 })
 $('a#btn_info').on('click',function(){

   sen = 4;
   ss4();
   isAc=true;
   $('#main__scroll').animate({scrollTop:anc[6]},50,function(){isAc=false});
 })
 $('a#btn_form').on('click',function(){
   isAc=true;
   $('#main__scroll').animate({scrollTop:anc[17]},50,function(){isAc=false});

 })
 $('.a6 .a6__title2, .a6__text2, .main__a6').on('click',function(){
   isAc=true;
   $('#main__scroll').animate({scrollTop:anc[17]},50,function(){isAc=false});
 })
})
