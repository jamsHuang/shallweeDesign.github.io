$(function() {
  var stgH = $(window).innerHeight();
  $('.bg__1').show();
  $('.bg__2').hide();
  var mtri = $('.main__a4').offset().top;
  var triEvent = false;
  var swipeMode = false;
  var nowTop, passTop, isMoving;
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
  $('#main__scroll').scroll(function() {
    nowTop = $(this).scrollTop();
    $('#bg__scroll').scrollTop(nowTop);
    // console.log(nowTop);
    // console.log(anc);
    if (nowTop < (anc[1] + diff)) {
      getIn($('.a0__title__text'), 'fadeInDown', 'fadeOut');
      getIn($('.a0__title__logo'), 'flipInY', 'fadeOut');
      //

      getOut($('.a2__text1'), "fadeInUp", "fadeOutUp");
      getOut($('.a2__text2'), "fadeInUp", "fadeOutUp");
      getOut($('.a2__text3'), "fadeInUp", "fadeOutUp");
      getOut($('.a2__production'), "fadeInUp", "fadeOutUp");
    } else if (nowTop > (anc[1] + diff) && nowTop < (anc[2] + diff)) {
      getOut($('.a0__title__text'), 'fadeInDown', 'fadeOut');
      getOut($('.a0__title__logo'), 'flipInY', 'fadeOut');
      //
      getIn($('.a2__text1'), "fadeInUp", "fadeOutUp");
      getIn($('.a2__text2'), "fadeInUp", "fadeOutUp");
      getIn($('.a2__text3'), "fadeInUp", "fadeOutUp");
      getIn($('.a2__production'), "fadeInUp", "fadeOutUp");
      //
      getOut($('.a3__text2'), "fadeInUp", "fadeOutUp");
      getOut($('.a3__text1'), "fadeInUp", "fadeOutUp");
    } else if (nowTop > (anc[2] + diff) && nowTop < (anc[3] + diff)) {

      getOut($('.a2__text1'), "fadeInUp", "fadeOutUp");
      getOut($('.a2__text2'), "fadeInUp", "fadeOutUp");
      getOut($('.a2__text3'), "fadeInUp", "fadeOutUp");
      getOut($('.a2__production'), "fadeInUp", "fadeOutUp");
      //
      getIn($('.a3__text2'), "fadeInUp", "fadeOutUp");
      getIn($('.a3__text1'), "fadeInUp", "fadeOutUp");
    } else if (nowTop > (anc[3] + diff) && nowTop < (anc[4] + diff)) {

      getOut($('.a3__text2'), "fadeInUp", "fadeOutUp");
      getOut($('.a3__text1'), "fadeInUp", "fadeOutUp");
    
      //
      getIn($('.a3__text2'), "fadeInUp", "fadeOutUp");
      getIn($('.a3__text1'), "fadeInUp", "fadeOutUp");
    }
  })

  function handleUp() {
    switch (nowPage) {
      case 1:
        removeScroll();
        $('.layer__main').stop().animate({
          scrollTop: $('.main__a4')[0].offsetTop
        }, 50)
        break;
    }
  }

  function handleDown() {

  }

  window.addEventListener('touchstart', function() {
    passTop = nowTop;
  })
  window.addEventListener('touchend', function() {


    if ((nowTop - passTop) > 0) {
      handleUp();
    } else if ((nowTop - passTop) < 0) {
      handleDown();
    } else {


    }


  })
  jQuery(window).bind('scrollstart', function() {
    passTop = nowTop;
  });

  jQuery(window).bind('scrollend', function(e) {

    if ((nowTop - passTop) > 0) {
      handleUp();
    } else if ((nowTop - passTop) < 0) {
      handleDown();
    } else {


    }

  });

})
