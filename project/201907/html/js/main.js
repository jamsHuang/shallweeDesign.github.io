$(function() {
  $('footer').hide();
  //setup SLIDER
  $('.view-slick').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  //

  //
  $(".page").hide();
  $('.page__pick-view').show();
  //
  var viewNum;
  //
  $('.view__btn').click(function(e) {
    switch (e.target.id) {
      case "view0":
        viewNum = 0;
        break;
      case "view1":
        viewNum = 1;
        break;
      case "view2":
        viewNum = 2;
        break;
      case "view3":
        viewNum = 3;
        break;
      default:
        viewNum = 3;
    }
    $('.page').hide();
    $('.page__upload').show();

    $('.item__slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 2
    });
  })
  //

  //
  $("#btn_upload").change(function(e) {
    var file = document.getElementById("btn_upload").files[0];
    ImageHelper.resizeAndRotateImage(file, 500, function(resizeImageObj) {});
  });

  var ImageHelper = {
    resizeAndRotateImage: function(inImageSource, inMaxLength, inSuccessCallback) {
      var reader = new FileReader();
      reader.readAsDataURL(inImageSource);
      reader.onload = function(e) {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.onload = function() {
          //設定長邊上限值
          var max_Length = inMaxLength;

          var imgWidth = img.width;
          var imgHeight = img.height;

          if (imgWidth > imgHeight) {
            if (imgWidth > max_Length) {
              imgHeight = Math.round(imgHeight *= max_Length / imgWidth);
              imgWidth = max_Length;
            }
          } else {
            if (imgHeight > max_Length) {
              imgWidth = Math.round(imgWidth *= max_Length / imgHeight);
              imgHeight = max_Length;
            }
          }

          canvas.width = imgWidth;
          canvas.height = imgHeight;

          var that = this;
          EXIF.getData(img, function() {
            var orientation = EXIF.getTag(that, 'Orientation');
            //alert(orientation);

            console.log(orientation);
            if (orientation == 6 || orientation == 8 || orientation == 3) {
              var rotateAngle = 0;
              switch (orientation) {
                case 3:
                  rotateAngle = 180;
                  break;
                case 6:
                  rotateAngle = 90;
                  canvas.width = imgHeight;
                  canvas.height = imgWidth;
                  break;
                case 8:
                  rotateAngle = 0;
                  canvas.width = imgHeight;
                  canvas.height = imgWidth;
                  break;
              }

              var x = canvas.width / 2;
              var y = canvas.height / 2;

              ctx.translate(x, y);
              ctx.rotate(rotateAngle * Math.PI / 180);

              ctx.drawImage(img, (-imgWidth / 2), (-imgHeight / 2), imgWidth, imgHeight);
            } else {
              ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
            }
          });
          fd = canvas.toDataURL("image/png", 1.0);
          inSuccessCallback(fd);
          //fd = fd.replace("data:image/png;base64,", "");
          // console.log(fd);

          // $(".photo").css('background-image','url('+fd+')');
          $('#photo__head').attr("src", fd);
          cropper.destroy();
          cropper = new Cropper(image, {
            dragMode: 'move',
            aspectRatio: 12 / 16,
            autoCropArea: .6,
            restore: false,
            guides: false,
            center: false,
            highlight: false,
            cropBoxMovable: false,
            cropBoxResizable: false,
            toggleDragModeOnDblclick: false,
            zoomable: true,
            zoomOnWheel: true,
            minContainerWidth: 300,
            minContainerHeight: 340,
            maxContainerWidth: 300,
            maxContainerHeight: 340,
            minCropBoxWidth: 170,
            minCropBoxHeight: 250,
            maxCropBoxWidth: 170,
            maxCropBoxHeight: 250,
            background: false,
            guides: false,
          });
        };
        img.src = e.target.result;
      };
    }
  };
  //
  var gen = "f";
  $('.feature__gender-m').click(function(e) {
    gen = 'm';
    if ($('.feature__gender-f').hasClass('feature__gender-active')) {
      $('.feature__gender-f').removeClass('feature__gender-active');
    }
    if ($('.feature__gender-m').hasClass('feature__gender-active')) {

    } else {
      $('.feature__gender-m').addClass('feature__gender-active');
    }
  })
  $('.feature__gender-f').click(function(e) {
    gen = 'f';
    if ($('.feature__gender-m').hasClass('feature__gender-active')) {
      $('.feature__gender-m').removeClass('feature__gender-active');
    }
    if ($('.feature__gender-f').hasClass('feature__gender-active')) {

    } else {
      $('.feature__gender-f').addClass('feature__gender-active');
    }
  })
  var hat = -1;
  var glasses = -1;
  var carry = -1;
  $('.feature__item').click(function(e) {
    if ($('#' + e.target.id).hasClass('feature__item-active')) {
      $('#' + e.target.id).removeClass('feature__item-active')
    } else {
      $('#' + e.target.id).addClass('feature__item-active');
    }
    switch (e.target.id) {
      case "item0":
        glasses = 0;
        if ($('#item1').hasClass('feature__item-active')) {
          $('#item1').removeClass('feature__item-active')
        }
        break;
      case "item1":
        glasses = 1;
        if ($('#item0').hasClass('feature__item-active')) {
          $('#item0').removeClass('feature__item-active')
        }
        break;
      case "item2":
        hat = 0;
        if ($('#item3').hasClass('feature__item-active')) {
          $('#item3').removeClass('feature__item-active')
        } else if ($('#item4').hasClass('feature__item-active')) {
          $('#item4').removeClass('feature__item-active')
        }
        break;
      case "item3":
        hat = 1;
        if ($('#item2').hasClass('feature__item-active')) {
          $('#item2').removeClass('feature__item-active')
        } else if ($('#item4').hasClass('feature__item-active')) {
          $('#item4').removeClass('feature__item-active')
        }
        break;
      case "item4":
        hat = 2;
        if ($('#item3').hasClass('feature__item-active')) {
          $('#item3').removeClass('feature__item-active')
        } else if ($('#item2').hasClass('feature__item-active')) {
          $('#item2').removeClass('feature__item-active')
        }
        break;
      case "item5":
        carry = 0;
        if ($('#item6').hasClass('feature__item-active')) {
          $('#item6').removeClass('feature__item-active')
        } else if ($('#item7').hasClass('feature__item-active')) {
          $('#item7').removeClass('feature__item-active')
        }
        break;
      case "item6":
        carry = 1;
        if ($('#item5').hasClass('feature__item-active')) {
          $('#item5').removeClass('feature__item-active')
        } else if ($('#item7').hasClass('feature__item-active')) {
          $('#item7').removeClass('feature__item-active')
        }
        break;
      case "item7":
        carry = 2;
        if ($('#item6').hasClass('feature__item-active')) {
          $('#item6').removeClass('feature__item-active')
        } else if ($('#item5').hasClass('feature__item-active')) {
          $('#item5').removeClass('feature__item-active')
        }
        break;
    }
  })
  $('#btn__go').click(function() {
    // console.log(hat,glasses,carry,gen,viewNum);
    $('footer').show();
    if(window.innerWidth>768){
       $('header').hide();
    }
    //
    var canvas = cropper.getCroppedCanvas({
      width: 170,
      height: 250
    });
    var dataURL = canvas.toDataURL();

    $('.page').hide();
    $('.page__result').show();
    $('.content').click(function(){
      window.open('http://www.heavyduty.com.tw/GoWeb2/include/index.php');
    })
    //
    var resultImg = new Image(1200, 675);
    var headImg = new Image(170, 250);

    // resultImg.crossOrigin = '';
    // console.log("img/view_"+gen+"_"+viewNum+".png");

    // $('.content').append(resultImg);
    var cvs = document.createElement('canvas');
    cvs.width = 1200;
    cvs.height = 675;
    var ctx = cvs.getContext("2d");
    var xx, yy, sw, sh, deg;
    xx = 840;
    yy = 170;
    sw = 170;
    sh = 250;
    switch (gen) {
      case "f":
        if (viewNum == 0) {
          xx = 255;
          yy = 75;
          deg = 18;
          sw = 176.8;
          sh = 260;
        } else if (viewNum == 1) {
          xx = 150;
          yy = 120;
          deg = 10;
          sw = 176.8;
          sh = 260;
        } else if (viewNum == 2) {
          xx = 825;
          yy = 370;
          deg = -10;
          sw = 166;
          sh = 245;

        } else if (viewNum == 3) {
          xx = 768;
          yy = 300;
          deg = -10;
          sw = 180.2;
          sh = 265;

        } else {

        }
        break;
      case "m":
        if (viewNum == 0) {
          xx = 130;
          yy = 160;
          sw = 230;
          sh = 340;
        } else if (viewNum == 1) {
          xx = 90;
          yy = 140;
          sw = 210.8;
          sh = 310;
        } else if (viewNum == 2) {
          xx = 900;
          yy = 270;
        } else if (viewNum == 3) {
          xx = 830;
          yy = 170;
          sw = 210;
          sh = 310;
        } else {

        }
        break;

      default:
        "f"
    }


    headImg.src = dataURL;
    headImg.onload = function() {
      ctx.rotate(deg * Math.PI / 180);
      ctx.drawImage(headImg, 0, 0, 170, 250, xx, yy, sw, sh);
      ctx.restore();

      resultImg.src = "img/view_" + gen + "_" + viewNum + ".png";
      resultImg.onload = function() {
        ctx.rotate(-deg * Math.PI / 180);
        ctx.drawImage(resultImg, 0, 0, 1200, 675, 0, 0, 1200, 675);
        ctx.restore();
        if (hat != -1 && glasses != -1 && carry != -1) {

        }
        // $('.content').append(cvs);
        //
        var finalImg = new Image();
        finalData = cvs.toDataURL("image/jpeg", 1.0);
        //
        finalImg.src = finalData;
        finalImg.onload = function() {
          $('.content').append(finalImg);
          connectServer();
        }
      }
    }

    // resultImg.src = "img/view_" + gen + "_" + viewNum + ".png";
    // resultImg.onload = function() {
    //   ctx.drawImage(resultImg, 0, 0, 1200, 675, 0, 0, 1200, 675);
    //   headImg.src = dataURL;
    //   headImg.onload = function() {
    //     ctx.rotate(deg*Math.PI/180);
    //     ctx.drawImage(headImg, 0, 0, 170, 250, xx, yy, sw, sh);
    //     ctx.restore();
    //
    //     if(hat!=-1 && glasses!=-1&&carry!=-1){
    //
    //     }
    //     // $('.content').append(cvs);
    //     //
    //     var finalImg = new Image();
    //     finalData = cvs.toDataURL();
    //     //
    //     finalImg.src = finalData;
    //     finalImg.onload = function() {
    //       $('.content').append(finalImg);
    //       connectServer();
    //     }
    //   }
    // }
    // ctx.drawImage(headImg,0,0,170,250);
    // console.log(headImg);
    // $('.content').append(finalImg);
  })
  var finalData;
  var fbshare = "https://www.facebook.com/sharer/sharer.php?u="
  var shareLink;
  function connectServer() {
    // finalData = finalData.replace("data:image/png;base64,", "");
    // finalData = "222";
    // console.log(finalData);
    let api = 'https://sylvan-plane-243506.appspot.com/api/upload';
    // api = "http://localhost:3001/api/upload"
    $.ajax({
      type: "POST",
      url: api,
      data: {
        id: viewNum,
        photo: finalData
      },
      success: function(response) {
        console.info("# success: ", response.url);
        shareLink = encodeURIComponent(response.url);
        console.log("shareLink",shareLink);
      },
      error: function(err) {
        console.info("# upload faild, error: ", err);
      }
    })
  }
  var image = document.querySelector('#photo__head');
  var cropper = new Cropper(image, {
    dragMode: 'move',
    aspectRatio: 12 / 16,
    autoCropArea: .6,
    restore: false,
    guides: false,
    center: false,
    highlight: false,
    cropBoxMovable: false,
    cropBoxResizable: false,
    toggleDragModeOnDblclick: false,
    zoomable: true,
    zoomOnWheel: true,
    minContainerWidth: 300,
    minContainerHeight: 340,
    maxContainerWidth: 300,
    maxContainerHeight: 340,

    minCropBoxWidth: 170,
    minCropBoxHeight: 250,
    maxCropBoxWidth: 170,
    maxCropBoxHeight: 250,
    background: false,
    guides: false,
  });

  $('.icon__rotate').click(function() {
    cropper.rotate(10);
  })
  $('.icon__zoom-in').click(function() {
    cropper.zoom(0.1);
  })
  $('.icon__zoom-out').click(function() {
    cropper.zoom(-0.1);
  });

  $('.btn__playagain').click(function(){
    window.location.reload();
  });
  $('.btn__share').click(function(){
    window.open(""+fbshare+shareLink);
  });
});
