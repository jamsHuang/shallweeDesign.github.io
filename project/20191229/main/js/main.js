$(function() {

  //
  // $('.layer__scroll').scroll(function(){
  //   $('#main__container').animate({
  //         top: $(".scroll__content").offset().top
  //   }, 10);
  // });
  //
  $('.layer__main').scroll(function(){
    // console.log($('#main__container').offset().top);
  })
  var timer = setInterval(drawWorld, 50);
  var t = 0;

  function drawWorld() {
    //draw kaleidoscope
    window.dispatchEvent(event_kai);
    //draw ripples
    // if (t % 200 == 0) {
    //   var dropX = Math.round(Math.random() * window.innerWidth);
    //   var dropY = Math.round(Math.random() * window.innerHeight);
    //   var dropR = Math.round(Math.random() * 10)+10;
    //   var dropRec = Math.round(Math.random() * 3)+1;
    //
    //   $('.ripple__holder').ripples("drop", dropX, dropY, dropR, dropRec);
    // }
    // //
    // if (t % 5 == 0) {
    //   if (img_ready == true) {
    //     ktx.drawImage(img_cover, 0, 0);
    //     ktx.globalCompositeOperation = 'source-in';
    //     ktx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, 400, 400);
    //   }
    // }
    t++;
    if (t > 50000) {
      t = 0;
    }
  }

  // var ripple_tf = false;
  // var formNum = 1;
  // var passTop = 0;
  // var nowTop = 0;
  // // let domContent = document.querySelector('body');
  // var swipeMode = false;
  // var ss = 0.8;
  //
  // function handleUp() {
  //   if(swipeMode==true){
  //     if(nowTop>4000*ss && nowTop<6200*ss){
  //       skrollr.menu.click($('#a5__ss')[0]);
  //     }else if((nowTop>6200*ss) && nowTop<6800*ss){
  //       skrollr.menu.click($('#a6__s1')[0]);
  //     }else if(nowTop>6800*ss && nowTop<9600*ss){
  //         skrollr.menu.click($('#a6__s2')[0]);
  //     }else if(nowTop>9600*ss && nowTop<11200*ss){
  //       skrollr.menu.click($('#a6__s3')[0]);
  //     }else if(nowTop>11200*ss && nowTop<12000*ss){
  //       skrollr.menu.click($('#a6__s4')[0]);
  //     }else if(nowTop>12000*ss && nowTop<12800*ss){
  //       skrollr.menu.click($('#a6__s5')[0]);
  //     }else if(nowTop>12800*ss && nowTop<13600*ss){
  //       skrollr.menu.click($('#a6__s6')[0]);
  //     }else if(nowTop>13600*ss && nowTop<14400*ss){
  //       skrollr.menu.click($('#a6__s7')[0]);
  //     }else if(nowTop>14400*ss && nowTop<15200*ss){
  //       skrollr.menu.click($('#a6__s8')[0]);
  //     }else if(nowTop>15200*ss && nowTop<16000*ss){
  //       skrollr.menu.click($('#a6__s9')[0]);
  //     }else if(nowTop>16000*ss && nowTop<16800*ss){
  //       skrollr.menu.click($('#a6__s10')[0]);
  //     }else if(nowTop>16800*ss && nowTop<17600*ss){
  //       skrollr.menu.click($('#a6__s11')[0]);
  //     }else if(nowTop>17600*ss && nowTop<18400*ss){
  //       skrollr.menu.click($('#a6__s12')[0]);
  //     }else if(nowTop>18400*ss && nowTop<20000*ss){
  //       skrollr.menu.click($('#a6__s13')[0]);
  //     }else if(nowTop>20000*ss && nowTop<20800*ss){
  //       skrollr.menu.click($('#a6__s14')[0]);
  //     }else if(nowTop>20800*ss){
  //       if(formNum==3){
  //         skrollr.menu.click($('#a6__s15')[0]);
  //       }else{
  //         skrollr.menu.click($('#a6__s14')[0]);
  //       }
  //     }
  //   }else{
  //   }
  // }
  //
  // function handleDown() {
  //   if(swipeMode==true){
  //     if((nowTop>6200*ss) && nowTop<6800*ss){
  //
  //     }else if(nowTop>6800*ss && nowTop<9600*ss){
  //         skrollr.menu.click($('#a6__s1')[0]);
  //     }else if(nowTop>9600*ss && nowTop<11200*ss){
  //       skrollr.menu.click($('#a6__s2')[0]);
  //     }else if(nowTop>11200*ss && nowTop<12000*ss){
  //       skrollr.menu.click($('#a6__s3')[0]);
  //     }else if(nowTop>12000*ss && nowTop<12800*ss){
  //       skrollr.menu.click($('#a6__s4')[0]);
  //     }else if(nowTop>12800*ss && nowTop<13600*ss){
  //       skrollr.menu.click($('#a6__s5')[0]);
  //     }else if(nowTop>13600*ss && nowTop<14400*ss){
  //       skrollr.menu.click($('#a6__s6')[0]);
  //     }else if(nowTop>14400*ss && nowTop<15200*ss){
  //       skrollr.menu.click($('#a6__s7')[0]);
  //     }else if(nowTop>15200*ss && nowTop<16000*ss){
  //       skrollr.menu.click($('#a6__s8')[0]);
  //     }else if(nowTop>16000*ss && nowTop<16800*ss){
  //       skrollr.menu.click($('#a6__s9')[0]);
  //     }else if(nowTop>16800*ss && nowTop<17600*ss){
  //       skrollr.menu.click($('#a6__s10')[0]);
  //     }else if(nowTop>17600*ss && nowTop<18400*ss){
  //       skrollr.menu.click($('#a6__s11')[0]);
  //     }else if(nowTop>18400*ss && nowTop<20000*ss){
  //       skrollr.menu.click($('#a6__s12')[0]);
  //     }else if(nowTop>20000*ss && nowTop<20800*ss){
  //       skrollr.menu.click($('#a6__s13')[0]);
  //     }else if(nowTop>20800*ss && nowTop<21600*ss){
  //       skrollr.menu.click($('#a6__s14')[0]);
  //     }else if(nowTop>21600*ss){
  //
  //           if(formNum==3){
  //             skrollr.menu.click($('#a6__s15')[0]);
  //           }else{
  //             skrollr.menu.click($('#a6__s14')[0]);
  //           }
  //
  //     }
  //
  //   }else{
  //
  //   }
  // }
  // window.addEventListener('touchstart', function() {
  //   passTop = nowTop;
  // })
  // window.addEventListener('touchend', function() {
  //   if ((nowTop - passTop) > 0) {
  //     handleUp();
  //   } else if ((nowTop - passTop) < 0) {
  //     handleDown();
  //   } else {
  //
  //   }
  // })
  // jQuery(window).bind('scrollstart', function() {
  //   //console.log("start");
  //   passTop = nowTop;
  // });
  //
  // jQuery(window).bind('scrollend', function(e) {
  //   //console.log("end");
  //   if ((nowTop - passTop) > 0) {
  //     handleUp();
  //   } else if ((nowTop - passTop) < 0) {
  //     handleDown();
  //   } else {
  //
  //   }
  // });
  // var skrollr_obj = skrollr.init({
  //   easing: {
  //               vibrate: function(p) {
  //                   return Math.sin(p * 10 * Math.PI);
  //               }
  //   },
  //   scale: ss,
  //   smoothScrolling:true,
  //   smoothScrollingDuration:500,
  //   render: function(data) {
  //
  //     nowTop = data.curTop;
  //     if (data.curTop >= 6200) {
  //       swipeMode = true;
  //     }
  //
  //     if (data.curTop >= 16800) {
  //
  //       if (ripple_tf == false) {
  //         ripple_tf = true;
  //         $('.ripple__holder').ripples({
  //           resolution: 256,
  //           dropRadius: 25,
  //           perturbance: 0.04,
  //           interactive: false,
  //           crossOrigin: "Anonymous",
  //           imageUrl: "img/bg_kai_b.jpg"
  //         });
  //       }
  //     }
  //     if (data.curTop >= 19200) {
  //       switch (formNum) {
  //         case 1:
  //           $('.form__step1').show();
  //           $('.form__step2').hide();
  //           $('.form__step3').hide();
  //
  //           break;
  //         case 2:
  //           $('.form__step1').hide();
  //           $('.form__step2').show();
  //           $('.form__step3').hide();
  //           break;
  //         case 3:
  //           $('.form__step1').hide();
  //           $('.form__step2').hide();
  //           $('.form__step3').show();
  //           break;
  //       }
  //     }
  //   }
  // });
  // var skrollr_menu = skrollr.menu.init(skrollr_obj, {
  //   scale: ss,
  //   change: function(hash, top) {
  //     console.log(hash, top);
  //   }
  // });
  // var img_ready = false;
  // var kcp = document.getElementById("kale__copy");
  // var ktx = kcp.getContext("2d");
  //
  // var img_cover = new Image();
  // var img_cover2 = new Image();
  // img_cover.onload = function() {
  //   img_cover2.onload = function() {
  //     img_ready = true;
  //   }
  //   img_cover2.src = "img/tri.png";
  // }
  // img_cover.src = "img/tri_mask.png";
  //
  // var wt = 0;
  // var worldTime = setInterval(drawWorld, 10);
  //
  // function drawWorld() {
  //   if (wt % 5 == 0) {
  //     if (img_ready == true) {
  //       ktx.drawImage(img_cover, 0, 0);
  //       ktx.globalCompositeOperation = 'source-in';
  //       ktx.drawImage(kcp, 0, 0, kcp.width, kcp.height, 0, 0, 400, 400);
  //     }
  //   }
  //   if (wt % 350 == 0) {
  //     if (ripple_tf == true) {
  //       var $el = $('.ripple__holder');
  //       var x = Math.random() * $el.outerWidth();
  //       var y = Math.random() * $el.outerHeight();
  //       var dropRadius = 20;
  //       var strength = 0.04 + Math.random() * 0.04;
  //
  //       $el.ripples('drop', x, y, dropRadius, strength);
  //     }
  //   }
  //   wt++;
  //   if (wt > 7000) {
  //     wt = 0;
  //   }
  // }
  // //form
  // AddressSeleclList.Initialize('select__city', 'select__area', "選擇縣市", "選擇區域");
  //
  // $("#button__addr").on("click", function() {
  //   $('.form__step1').hide();
  //   $('.form__step2').show();
  //   formNum = 2;
  // })
  //
  // $('#select__area').change(function() {
  //   appendStore();
  // })
  //
  // function appendStore() {
  //
  // }
  // $('#button__confirm').on('click', function() {
  //   var ck = $('[name=store]:checked');
  //   addr = $('label[for=' + ck.val() + ']')[0].innerText;
  //   $('#form__addr').val(addr);
  //   $('.form__step1').show();
  //   $('.form__step2').hide();
  //   formNum = 1;
  // })
  // $('#button__reset').on('click', function() {
  //
  // })
  // //submit表單
  // $("#button__submit").on('click', function() {
  //   $('#form__name').val()
  //   //checkForm();
  //   step3();
  // })
  // //補寄簡訊
  // $('#resent__msg').on('click', function() {
  //
  // })
  //
  // $('.ig__btn, .ig__btn2').on('click', function() {
  //   // console.log('ig_bt');
  // })
  //
  // function step3() {
  //   formNum = 3;
  //   $('.form__step1').hide();
  //   $('.form__step2').hide();
  //   $('.form__step3').show();
  //   $('.line_form').show();
  //
  //   // $('.ig').attr('data-10800','top:-100%')
  // }
  //
  // function checkForm() {
  //   if ($('#form__name').val() == "" || $('#form__tel').val() == "" || $('#form__email').val() == "" || $('#form__addr').val() == "") {
  //     // console.log('please check the form again');
  //   } else {
  //     step3();
  //   }
  // }
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
