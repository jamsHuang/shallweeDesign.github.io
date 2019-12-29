$(function() {
  var stgH = $(window).innerHeight();
  $('.bg__1').show();
  $('.bg__2').hide();
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
    anc[7] = $(".main__a7")[0].offsetTop;
    anc[8] = $(".main__a8")[0].offsetTop;
    anc[9] = $(".main__a9")[0].offsetTop;
    anc[10] = $(".main__a10")[0].offsetTop;
    anc[11] = $(".main__a11")[0].offsetTop;
    anc[12] = $(".main__a12")[0].offsetTop;
    anc[13] = $(".main__a13")[0].offsetTop;
    anc[14] = $(".main__a14")[0].offsetTop;
    anc[15] = $(".main__a15")[0].offsetTop;
    anc[16] = $(".main__a16")[0].offsetTop;
    anc[17] = $(".main__a17")[0].offsetTop;
  }
  console.log(anc);

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

  var isA1, isA3, isA5, isA7;
  isA1 = true;
  isA3 = isA5 = isA7 = false;

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
          // console.log('leave')
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
          console.log('leave')
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
      $(".fixed__a3 .bg2").css('top', anc[3] - nowTop);
    })
    .on("enter leave", function(e) {
      switch (e.type) {
        case "enter":
          if (isA5) {

          } else {
            $('.fixed__a5').show();
            isA5 = true;
          }
          break;
        case "leave":
          // console.log('out');
      }
    })
    .addTo(controller)
  //s5inout
  var isSkinMoving=false;
  function changeState(){
    isSkinMoving = false;
  }
  var sc = new ScrollMagic.Scene({
      triggerElement: "#trigger5",
      triggerHook: "onEnter",
      duration: 5000, // the scene should last for a scroll distance of 100px
      offset: 0, // start this scene after scrolling for 50px
    })
    .on("progress", function(e) {
      // $(".fixed__a3 .bg2").css('top', anc[3] - nowTop);
      console.log(e.progress);
      if(e.progress < 0.5){

      }
    })
    .on("enter leave", function(e) {
      switch (e.type) {
        case "enter":
          //console.log('start');
          if(isSkinMoving){

          }else{
            var skinTw = gsap.fromTo($('.a5__skin'),2,{css:{width:"50",height:"50",left:"58%"}},{css:{width:"200",height:"200",left:"40%",onComplete:changeState}})
            isSkinMoving = true;
          }
          if($('.a5__model, .a5__skin, .a5__title, .a5__text').hasClass('fadeOut')){
            $('.a5__model, .a5__skin, .a5__title, .a5__text').removeClass('fadeOut');
            $('.a5__model, .a5__skin, .a5__title, .a5__text').addClass('fadeInUp');
          }else{

          }
          break;
        case "leave":
          //console.log('end');
          if($('.a5__model, .a5__skin, .a5__title, .a5__text').hasClass('fadeInUp')){
            $('.a5__model, .a5__skin, .a5__title, .a5__text').removeClass('fadeInUp');
            $('.a5__model, .a5__skin, .a5__title, .a5__text').addClass('fadeOut');
          }
          else{

          }
      }
    })
    .addTo(controller)
  $('#main__scroll').scroll(function() {
    nowTop = $(this).scrollTop();
    // $('#bg__scroll').scrollTop(nowTop);
    // console.log(nowTop);
    // console.log(anc);
    // if (nowTop < (anc[1] + diff)) {
    //   getIn($('.a0__title__text'), 'fadeInDown', 'fadeOut');
    //   getIn($('.a0__title__logo'), 'flipInY', 'fadeOut');
    //   //
    //   getOut($('.a2__text1'), "fadeInUp", "fadeOutUp");
    //   getOut($('.a2__text2'), "fadeInUp", "fadeOutUp");
    //   getOut($('.a2__text3'), "fadeInUp", "fadeOutUp");
    //   getOut($('.a2__production'), "fadeInUp", "fadeOutUp");
    //
    // } else if (nowTop > (anc[1] + diff) && nowTop < (anc[2] + diff)) {
    //   getOut($('.a0__title__text'), 'fadeInDown', 'fadeOut');
    //   getOut($('.a0__title__logo'), 'flipInY', 'fadeOut');
    //   //
    //   getIn($('.a2__text1'), "fadeInUp", "fadeOutUp");
    //   getIn($('.a2__text2'), "fadeInUp", "fadeOutUp");
    //   getIn($('.a2__text3'), "fadeInUp", "fadeOutUp");
    //   getIn($('.a2__production'), "fadeInUp", "fadeOutUp");
    //   //
    //   getOut($('.a3__text2'), "fadeInUp", "fadeOutUp");
    //   getOut($('.a3__text1'), "fadeInUp", "fadeOutUp");
    //   if (nowTop >= anc[2]) {
    //     $(".fixed__a3").show();
    //     getOut($('.a3__text2'), "fadeInUp", "fadeOutUp");
    //     getOut($('.a3__text1'), "fadeInUp", "fadeOutUp");
    //
    //     $(".fixed__a1").hide();
    //     $('.fixed__a5').hide();
    //   } else {
    //     $('.fixed__a5').hide();
    //     $(".fixed__a3").hide();
    //     $(".fixed__a1").show();
    //   }
    // } else if (nowTop > (anc[2] + diff) && nowTop < (anc[3] + diff)) {
    //
    //   getOut($('.a2__text1'), "fadeInUp", "fadeOutUp");
    //   getOut($('.a2__text2'), "fadeInUp", "fadeOutUp");
    //   getOut($('.a2__text3'), "fadeInUp", "fadeOutUp");
    //   getOut($('.a2__production'), "fadeInUp", "fadeOutUp");
    //   //
    //   getIn($('.a3__text2'), "fadeInUp", "fadeOutUp");
    //   getIn($('.a3__text1'), "fadeInUp", "fadeOutUp");
    //
    // } else if (nowTop > (anc[3] + diff) && nowTop < (anc[4] + diff)) {
    //   $(".fixed__a3 .bg2").css('top',anc[3]-nowTop);
    //         $('.fixed__a5').show();
    //   getOut($('.a3__text2'), "fadeInUp", "fadeOutUp");
    //   getOut($('.a3__text1'), "fadeInUp", "fadeOutUp");
    //
    //   // getOut($('.a5__model'), "fadeIn", "fadeOut");
    //   // getOut($('.a5__text'), "fadeIn", "fadeOut");
    //   // getOut($('.a5__title'), "fadeIn", "fadeOut");
    //   // getOut($('.a5__skin'), "zoomIn", "fadeOut");
    //
    // } else if (nowTop > (anc[4] + diff) && nowTop < (anc[5] + diff)) {
    //   $(".fixed__a3 .bg2").css('top',anc[3]-nowTop);
    //
    //   if (nowTop >= anc[5]) {
    //     $('.fixed__a3').hide();
    //     $('.main__a5 .bg4').hide();
    //   }else{
    //     // $('.fixed__a5').hide();
    //     $('.fixed__a3').show();
    //     $('.main__a5 .bg4').show();
    //   }
    //   //
    //   // getIn($('.a5__model'), "fadeIn", "fadeOut");
    //   // getIn($('.a5__text'), "fadeIn", "fadeOut");
    //   // getIn($('.a5__title'), "fadeIn", "fadeOut");
    //   // getIn($('.a5__skin'), "zoomIn", "fadeOut");
    //   // if ($('.a5__skin').hasClass('blackOut')) {
    //   //   $('.a5__skin').removeClass('blackOut');
    //
    //   // }
    //   // if ($('.a5__black').hasClass('blackOut')) {
    //   //   $('.a5__black').removeClass('blackOut');
    //   //   var tween = gsap.to($(".a5__title, .a5__text"), {
    //   //     duration: 1,
    //   //     color: "rgba(0,0,0,1)",
    //   //     delay: 1
    //   //   })
    //   //   if ($(".a5__title, .a5__text").hasClass('fadeIn')) {} else {
    //   //     $(".a5__title, .a5__text").addClass('fadeIn');
    //   //   }
    //   // }
    //
    // } else if (nowTop > (anc[5] + diff) && nowTop < (anc[6] + diff)) {
    //   // if ($('.a5__skin').hasClass('zoomIn')) {
    //   //   $('.a5__skin').removeClass('zoomIn');
    //   // }
    //   // if ($('.a5__skin').hasClass('blackOut')) {} else {
    //   //   $('.a5__skin').addClass('blackOut');
    //   // }
    //   // if ($('.a5__black').hasClass('blackOut')) {} else {
    //   //   $('.a5__black').addClass('blackOut');
    //   // }
    //   // if ($(".a5__title, .a5__text").hasClass('fadeIn')) {
    //   //   $(".a5__title, .a5__text").removeClass('fadeIn')
    //   //   var tween = gsap.to($(".a5__title, .a5__text"), {
    //   //     duration: 1,
    //   //     color: "rgba(255,255,255,1)",
    //   //     delay: 1
    //   //   })
    //   //
    //   // } else {}
    //   // getOut($('.a6__bg'), "fadeIn", "fadeOut");
    // } else if (nowTop > (anc[6] + diff) && nowTop < (anc[7] + diff)) {
    //   // getIn($('.a6__bg'), "fadeIn", "fadeOut");
    //   // if(nowTop>=anc[7]){
    //   //   $('.fixed__a7').show();
    //   //   $('.fixed__a5').hide();
    //   //
    //   // }else{
    //   //   $('.fixed__a7').hide();
    //   //   $('.fixed__a5').show();
    //   //
    //   // }
    //
    // }

  })




  $('.layer__scroll').scroll(function() {
    nTop = $('.layer__scroll').scrollTop();
    console.log(nTop);
  })

  function handleUp() {
    console.log('up');
    nowPage++;
    console.log(nowPage);
  }

  function handleDown() {
    console.log('down');
    if (nowPage == 0) {
      if ($('.layer__scroll').hasClass('active')) {
        $('.layer__scroll').removeClass('active');
        $('#main__scroll').stop().animate({
          scrollTop: anc[4]
        }, 10);
      } else {

      }
    }
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

})
