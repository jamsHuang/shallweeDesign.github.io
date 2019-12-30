$(function() {
  var ripple_tf = false;
  var formNum = 1;
  var skrollr_obj = skrollr.init({
    render: function(data) {
      //Log the current scroll position.
      // console.log(data.curTop);
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
      //console.log(hash, top);
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
  $('#resent__msg').on('click',function(){

  })

  $('.ig__btn, .ig__btn2').on('click',function(){
    console.log('ig_bt');
  })

  function step3(){
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
