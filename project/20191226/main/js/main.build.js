$(document).ready(function() {
  $('.loading').hide();
  // $('html,body').animate({scrollTop: 0});
  var nowTop;
  var passTop = 0;
  var qs0;
  var swipeMode = false;
  var isMoving = false;
  var body = $("html, body");
  var buffTime = 1000;
  var formNum = 0;

  switch (formNum) {
    case 1:
      $('.form__step1').show();
      $('.form__step2').hide();
      $('.form__step3').hide();
      break;
    case 2:
      $('.form__step1').hide();
      $('.form__step2').show();
      $('.form__step3').hide();
      break;
    case 3:
      $('.form__step1').hide();
      $('.form__step2').hide();
      $('.form__step3').show();
      break;
  }

  $("#button__addr").on("click", function() {
    $('.form__step1').hide();
    $('.form__step2').show();
    formNum = 2;
  })

  $('#select__area').change(function() {
    appendStore();
  })

  function appendStore() {

  }
  $('#button__confirm').on('click', function() {
    var ck = $('[name=store]:checked');
    addr = $('label[for=' + ck.val() + ']')[0].innerText;
    $('#form__addr').val(addr);
    $('.form__step1').show();
    $('.form__step2').hide();
    formNum = 1;
  })
  $('#button__reset').on('click', function() {

  })
  //submit表單
  $("#button__submit").on('click', function() {
    $('#form__name').val()
    //checkForm();
    step3();
  })
  //補寄簡訊
  $('#resent__msg').on('click', function() {

  })

  $('.ig__btn, .ig__btn2').on('click', function() {
    console.log('ig_bt');
  })

  function step3() {
    formNum = 3;
    $('.form__step1').hide();
    $('.form__step2').hide();
    $('.form__step3').show();
  }

  function checkForm() {
    if ($('#form__name').val() == "" || $('#form__tel').val() == "" || $('#form__email').val() == "" || $('#form__addr').val() == "") {
      console.log('please check the form again');
    } else {
      step3();
    }
  }

  function handleUp() {
    if (swipeMode == true) {
      if (isMoving) {} else {
        body.stop();
        isMoving = true;
        if (nowTop < $('#ss0').offset().top) {
          skrollr.menu.click($('#as0')[0]);
        } else if (nowTop < $('#ss1').offset().top) {
          skrollr.menu.click($('#as1')[0]);
        } else if (nowTop < $('#ss2').offset().top) {
          skrollr.menu.click($('#as2')[0]);
        } else if (nowTop < $('#ss3').offset().top) {
          skrollr.menu.click($('#as3')[0]);
        } else if (nowTop < $('#ss4').offset().top) {
          skrollr.menu.click($('#as4')[0]);
        } else if (nowTop < $('#ss5').offset().top) {
          skrollr.menu.click($('#as5')[0]);
        } else if (nowTop < $('#ss6').offset().top) {
          skrollr.menu.click($('#as6')[0]);
        } else if (nowTop < $('#ss7').offset().top) {
          skrollr.menu.click($('#as7')[0]);
        } else if (nowTop < $('#ss8').offset().top) {
          skrollr.menu.click($('#as8')[0]);
        } else if (nowTop < $('#ss9').offset().top) {
          skrollr.menu.click($('#as9')[0]);
        } else if (nowTop < $('#third-part').offset().top) {
          skrollr.menu.click($('#as10')[0]);
        }
        setTimeout(function() {
          isMoving = false;
        }, buffTime);
      }
      // if(nowTop < 5000){
      //     skrollr.menu.click($('#s1')[0]);
      // }else if(nowTop > 5000 && nowTop<10000 ){
      //     skrollr.menu.click($('#s2')[0]);
      // }else if(nowTop > 10000 && nowTop<15000 ){
      //     skrollr.menu.click($('#s3')[0]);
      // }else if(nowTop > 15000 && nowTop<20000 ){
      //     skrollr.menu.click($('#s4')[0]);
      // }else if(nowTop > 20000 && nowTop<25000 ){
      //     skrollr.menu.click($('#s5')[0]);
      // }else if(nowTop > 25000 && nowTop<30000 ){
      //     skrollr.menu.click($('#s6')[0]);
      // }else if(nowTop > 30000 && nowTop<35000 ){
      //     skrollr.menu.click($('#s7')[0]);
      // }else if(nowTop > 35000 && nowTop<40000 ){
      //     skrollr.menu.click($('#s8')[0]);
      // }else if(nowTop > 40000 && nowTop<45000 ){
      //     skrollr.menu.click($('#s9')[0]);
      // }else if(nowTop > 45000 && nowTop<50000 ){
      //     skrollr.menu.click($('#s10')[0]);
      // }else if(nowTop > 50000 && nowTop<55000 ){
      //     skrollr.menu.click($('#s11')[0]);
      // }
    } else {}
  }

  function handleDown() {
    if (swipeMode == true) {
      if (isMoving) {} else {
        isMoving = true;
        if (nowTop > $('#third-part').offset().top) {
          skrollr.menu.click($('#as10')[0]);
        } else if (nowTop > $('#ss9').offset().top) {
          skrollr.menu.click($('#as9')[0]);
        } else if (nowTop > $('#ss8').offset().top) {
          skrollr.menu.click($('#as8')[0]);
        } else if (nowTop > $('#ss7').offset().top) {
          skrollr.menu.click($('#as7')[0]);
        } else if (nowTop > $('#ss6').offset().top) {
          skrollr.menu.click($('#as6')[0]);
        } else if (nowTop > $('#ss5').offset().top) {
          skrollr.menu.click($('#as5')[0]);
        } else if (nowTop > $('#ss4').offset().top) {
          skrollr.menu.click($('#as4')[0]);
        } else if (nowTop > $('#ss3').offset().top) {
          skrollr.menu.click($('#as3')[0]);
        } else if (nowTop > $('#ss2').offset().top) {
          skrollr.menu.click($('#as2')[0]);
        } else if (nowTop > $('#ss1').offset().top) {
          skrollr.menu.click($('#as1')[0]);
        } else if (nowTop > $('#ss0').offset().top) {
          skrollr.menu.click($('#as0')[0]);
        }
        setTimeout(function() {
          isMoving = false;
        }, buffTime);
      }
      // if(nowTop > 0 && nowTop <5000){
      //   skrollr.menu.click($('#ss0')[0]);
      // }else if(nowTop > 5000 && nowTop<10000){
      //   skrollr.menu.click($('#s1')[0]);
      // }else if(nowTop > 10000 && nowTop<15000 ){
      //     skrollr.menu.click($('#s2')[0]);
      // }else if(nowTop > 15000 && nowTop<20000 ){
      //     skrollr.menu.click($('#s3')[0]);
      // }else if(nowTop > 20000 && nowTop<25000 ){
      //     skrollr.menu.click($('#s4')[0]);
      // }else if(nowTop > 25000 && nowTop<30000 ){
      //     skrollr.menu.click($('#s5')[0]);
      // }else if(nowTop > 30000 && nowTop<35000 ){
      //     skrollr.menu.click($('#s6')[0]);
      // }else if(nowTop > 35000 && nowTop<40000 ){
      //     skrollr.menu.click($('#s7')[0]);
      // }else if(nowTop > 40000 && nowTop<45000 ){
      //     skrollr.menu.click($('#s8')[0]);
      // }else if(nowTop > 45000 && nowTop<50000 ){
      //     skrollr.menu.click($('#s9')[0]);
      // }else if(nowTop > 50000 && nowTop<55000 ){
      //     skrollr.menu.click($('#s10')[0]);
      // }else if(nowTop > 55000 && nowTop<60000 ){
      //     // skrollr.menu.click($('#s11')[0]);
      // }
    } else {

    }
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
    //console.log("start");
    passTop = nowTop;
  });

  jQuery(window).bind('scrollend', function(e) {
    //console.log("end");
    if ((nowTop - passTop) > 0) {
      handleUp();
    } else if ((nowTop - passTop) < 0) {
      handleDown();
    } else {

    }
  });
  var timer = setInterval(drawWorld, 50);
  var t = 0;

  function drawWorld() {
    //draw kaleidoscope
    window.dispatchEvent(event_kai);
    //draw ripples
    if (t % 200 == 0) {
      var dropX = Math.round(Math.random() * window.innerWidth);
      var dropY = Math.round(Math.random() * window.innerHeight);
      var dropR = 25;
      // var dropStr = Math.round(Math.random() * 10);
      $('.ripple__holder').ripples("drop", dropX, dropY, dropR, 5);
    }
    //
    if (t % 5 == 0) {
      if (img_ready == true) {
        ktx.drawImage(img_cover, 0, 0);
        ktx.globalCompositeOperation = 'source-in';
        ktx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, 400, 400);
      }
    }
    t++;
    if (t > 50000) {
      t = 0;
    }
  }
  var s = skrollr.init({
    forceHeight: true,
    // smoothScrolling: true,
    // easing: 'sqrt',
    mobileCheck: function() {},
    mobileDeceleration: 0.004,
    edgeStrategy: 'set',
    constants: {
      sss0: $('#ss0').offset().top,
      sss1: $('#ss1').offset().top,
      sss2: $('#ss2').offset().top,
      sss3: $('#ss3').offset().top,
      sss4: $('#ss4').offset().top,
      sss5: $('#ss5').offset().top,
      sss6: $('#ss6').offset().top,
      sss7: $('#ss7').offset().top,
      sss8: $('#ss8').offset().top,
      sss9: $('#ss9').offset().top,
      sss10: $('#third-part').offset().top,
      sss11: $('#fourth-part').offset().top,
    },
    render: function(data) {
      nowTop = data.curTop;
      qs0 = $('#slogan').offset().top + window.innerHeight * 0.5;
      // console.log('nowtop', nowTop);
      if (nowTop > $('.ss__box').offset().top - window.innerHeight * 0.5 && nowTop < ($('#third-part').offset().top + window.innerHeight * 0.5)) {
        swipeMode = true;
      }
      //qs0 = $('#question').offset().top - stgH / 2;
      // if (nowTop > qs0 && nowTop < 55000) {
      //   swipeMode = true;
      //   // console.log(swipeMode);
      // }
      else {
        swipeMode = false;
        var lastPtIn = $('#b9').offset().top - window.innerHeight * 0.5;
        var lastPtOut = $('#b9').offset().top + window.innerHeight;
        if (nowTop > lastPtIn && nowTop < lastPtOut) {
          // $('#plist').show();
        } else {
          // $('#plist').hide();
        }
      }
    }
  });
  skrollr.menu.init(s, {
    animate: true,
    easing: 'swing',
    duration: function(currentTop, targetTop) {
      // return Math.abs(currentTop - targetTop) * 0.4;
      return 800;
    },
    complexLinks: false,
    change: function(newHash, newTopPosition) {},
    updateUrl: false //defaults to `true`.
  });


  var ripImg = new Image();
  ripImg.onload = function() {
    $('.ripple__holder').ripples({
      resolution: 512,
      dropRadius: 20,
      perturbance: 0.04,
      interactive: true,
      crossOrigin: "Anonymous",
      imageUrl: "img/bg_kai_b.jpg"
    });
  }
  ripImg.src = "img/bg_kai_b.jpg";
  //
  var img_ready = false;
  var kcp = document.getElementById("kale__copy");
  var ktx = kcp.getContext("2d");

  var img_cover = new Image();
  var img_cover2 = new Image();
  img_cover.onload = function() {
    img_cover2.onload = function() {
      img_ready = true;
    }
    img_cover2.src = "img/tri.png";
  }
  img_cover.src = "img/tri_mask.png";

});

(function() {

  if (typeof window.CustomEvent === "function") return false;

  function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: null
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  window.CustomEvent = CustomEvent;
})();
