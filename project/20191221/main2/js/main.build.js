$(document).ready(function() {
  // 萬花筒
  var stgW = window.innerWidth;
  var stgH = window.innerHeight;
  var kalW, kalH, kalML, kalMT;
  var rate = 3 / 5;
  if (stgW > stgH) {
    kalW = kalH = stgW;
    kalMT = ((stgH * rate) - kalH / 2);
    kalML = 0;
    console.log('kalML' + kalML);
  } else {
    kalW = kalH = stgH * 2 * rate;
    kalML = (stgW - kalW) / 2;
    kalMT = 0;
  }
  $("#kal").css({
    "height": kalH + "px",
    "width": kalW + "px",
    "margin-top": kalMT + "px",
    "margin-left": kalML + "px"
  });
  $("#kal2").css({
    "height": kalH + "px",
    "width": kalW + "px",
    "margin-top": kalMT + "px",
    "margin-left": kalML + "px"
  });
  var xx = 0;
  var yy = 0;
  var spdX = 1;
  var spdY = 1;
  var deg = 0;
  var rad;
  var xlimit = window.innerWidth / 4;
  var ylimit = window.innerHeight / 4;
  // 萬花筒
  var timer = setInterval(function() {
    $(".kal_cont").each(function(i) {

      $(this).find(".ksc").each(function(i) {
        $(this).css({
          backgroundPosition: xx + "px " + yy + "px"
        });
      });
    });
    rad = Math.PI / 180 * deg;
    spdY = Math.round(Math.sin(rad) * ylimit / 2);
    spdX = Math.round(Math.cos(rad) * xlimit / 2);
    deg++;
    if (deg >= 360) {
      deg = 0;
    }
    xx = spdX;
    yy = spdY;
  }, 50);
  //

  var nowTop;
  var passTop =0;
  var qs0;
  var swipeMode = false;


  function handleUp() {
    if (swipeMode == true) {
      console.log('pass',passTop);
      console.log('now',nowTop);
      console.log('mark',$('#question2').offset().top );
      console.log('mark2',$('#question3').offset().top );
      console.log('----------------')
      passTop = passTop+  130;
      if(passTop<$('#question2').offset().top){
        console.log('gos1');
          skrollr.menu.click($('#s1')[0]);
      }else if(passTop>$('#question2').offset().top && passTop<$('#question3').offset().top){
          skrollr.menu.click($('#s2')[0]);
          console.log('gos2');
      }else if(passTop>$('#question3').offset().top && passTop<$('#sa61').offset().top){
          skrollr.menu.click($('#s3')[0]);
          console.log('gos3');
      }else if(passTop>$('#sa61').offset().top && passTop<$('#sa62').offset().top){
          skrollr.menu.click($('#s4')[0]);
          console.log('gos4');
      }else{

      }

    } else {}
  }

  function handleDown() {
    if (swipeMode == true) {

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

  var s = skrollr.init({
    forceHeight: false,
    // smoothScrolling: true,
    easing: 'sqrt',
    mobileCheck:function(){},
    mobileDeceleration:0.004,
    edgeStrategy:'set',
    render: function(data) {
      nowTop = data.curTop;

      qs0 = $('#question').offset().top - stgH / 2;
      if (nowTop > qs0) {
        swipeMode = true;
      }else{
        swipeMode = false;
      }
    }
  });
  skrollr.menu.init(s, {
    animate: true,
    easing: 'sqrt',
    duration: function(currentTop, targetTop) {

      return Math.abs(currentTop - targetTop) * 0.5;
    },
    // handleLink: function(link) {
    //   return 400;
    // },

    complexLinks: false,

    change: function(newHash, newTopPosition) {

    },

    updateUrl: false //defaults to `true`.
  });
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
