$(function() {
  var ripple_tf = false;
  var formNum = 1;
  var passTop = 0;
  var nowTop = 0;
  // let domContent = document.querySelector('body');
  var swipeMode = false;

  function handleUp() {
  // console.log('up',nowTop);
    if(swipeMode==true){
      if((nowTop>3100) && nowTop<3400){
        skrollr.menu.click($('#a6__s1')[0]);
      }else if(nowTop>3400 && nowTop<4800){
          skrollr.menu.click($('#a6__s2')[0]);
      }else if(nowTop>4800 && nowTop<5600){
        skrollr.menu.click($('#a6__s3')[0]);
      }else if(nowTop>5600 && nowTop<5800){
        skrollr.menu.click($('#a6__s4')[0]);
      }else if(nowTop>5800 && nowTop<6000){
        skrollr.menu.click($('#a6__s5')[0]);
      }else if(nowTop>6000 && nowTop<6600){
        skrollr.menu.click($('#a6__s6')[0]);
      }else if(nowTop>6600 && nowTop<7200){
        skrollr.menu.click($('#a6__s7')[0]);
      }else if(nowTop>7200 && nowTop<7600){
        skrollr.menu.click($('#a6__s8')[0]);
      }else if(nowTop>7600 && nowTop<8000){
        skrollr.menu.click($('#a6__s9')[0]);
      }else if(nowTop>8000 && nowTop<8400){
        skrollr.menu.click($('#a6__s10')[0]);
      }else if(nowTop>8400 && nowTop<8800){
        skrollr.menu.click($('#a6__s11')[0]);
      }


    }else{

    }
  }

  function handleDown() {
  console.log('down',nowTop);
    if(swipeMode==true){
      if((nowTop>3100) && nowTop<3400){

      }else if(nowTop>3400 && nowTop<4800){
        skrollr.menu.click($('#a6__s1')[0]);
      }else if(nowTop>4800 && nowTop<5600){
          skrollr.menu.click($('#a6__s2')[0]);
      }else if(nowTop>5600 && nowTop<5800){
      skrollr.menu.click($('#a6__s3')[0]);
      }else if(nowTop>5800 && nowTop<6000){
          skrollr.menu.click($('#a6__s4')[0]);
      }else if(nowTop>6000 && nowTop<6600){
        skrollr.menu.click($('#a6__s5')[0]);
      }else if(nowTop>6600 && nowTop<7200){
        skrollr.menu.click($('#a6__s6')[0]);
      }

    }else{

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
  var skrollr_obj = skrollr.init({
    render: function(data) {
      //Log the current scroll position.
      // console.log(data.curTop);

      nowTop = data.curTop;
      if (data.curTop >= 3100) {
        swipeMode = true;
      }

      if (data.curTop >= 9700) {

        if (ripple_tf == false) {
          ripple_tf = true;
          $('.ripple__holder').ripples({
            resolution: 256,
            dropRadius: 25,
            perturbance: 0.04,
            interactive: false,
            crossOrigin: "Anonymous",
            imageUrl: "img/bg_kai.jpg"
          });
        }
      }
      if (data.curTop >= 11200) {

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
      }
    }
  });
  var skrollr_menu = skrollr.menu.init(skrollr_obj, {
    change: function(hash, top) {
      console.log(hash, top);
    }
  });
  //ml = (window.innerWidth - $("#kale").width()) / 2;
  //$("#kale").css("margin-left", ml);
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

  var wt = 0;
  var worldTime = setInterval(drawWorld, 10);

  function drawWorld() {
    if (wt % 5 == 0) {
      if (img_ready == true) {
        ktx.drawImage(img_cover, 0, 0);
        ktx.globalCompositeOperation = 'source-in';
        ktx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, 400, 400);
      }
    }
    if (wt % 350 == 0) {
      if (ripple_tf == true) {
        var $el = $('.ripple__holder');
        var x = Math.random() * $el.outerWidth();
        var y = Math.random() * $el.outerHeight();
        var dropRadius = 20;
        var strength = 0.04 + Math.random() * 0.04;

        $el.ripples('drop', x, y, dropRadius, strength);
      }
    }
    wt++;
    if (wt > 7000) {
      wt = 0;
    }
  }
  //form
  AddressSeleclList.Initialize('select__city', 'select__area', "選擇縣市", "選擇區域");

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
});
