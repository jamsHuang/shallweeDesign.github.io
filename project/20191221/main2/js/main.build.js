$(document).ready(function() {

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

  var xx = 0;
  var yy = 0;
  var spdX = 1;
  var spdY = 1;
  var deg = 0;
  var rad;
  var xlimit = window.innerWidth / 4;
  var ylimit = window.innerHeight / 4;

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
    if(deg>=360){
      deg = 0;
    }

    xx = spdX;
    yy = spdY;
  }, 50);
  var s = skrollr.init({
    forceHeight: false,
    // smoothScrolling: true,
    easing: 'sqrt',
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

(function () {

  if ( typeof window.CustomEvent === "function" ) return false;

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: null };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  window.CustomEvent = CustomEvent;
})();
