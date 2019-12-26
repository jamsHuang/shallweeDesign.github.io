$(document).ready(function() {
  $('.loading').hide();
  //
  var nowTop;
  var passTop = 0;
  var qs0;
  var swipeMode = false;
  var isMoving = false;
  var body = $("html, body");
  var buffTime = 1200;
  var formNum = 0;

  // $('.fixed__bar').scroll(function(){
  //   console.log('aa',$('.fixed__bar__item').offset().top);
  // })

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
      vh: '100p'
    },
    render: function(data) {
      nowTop = data.curTop;
      qs0 = $('#slogan').offset().top + window.innerHeight * 0.5;

      if (nowTop > $('.ss__box').offset().top - window.innerHeight * 0.5 && nowTop < ($('#third-part').offset().top + window.innerHeight * 0.5)) {
        swipeMode = true;
      }
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

  $(window).resize(function() {
      s.refresh();
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
