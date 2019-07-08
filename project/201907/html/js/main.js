$(function() {
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
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
  })
  //

  //
  $("#btn_upload").change(function(e) {
    var file = document.getElementById("btn_upload").files[0];
    ImageHelper.resizeAndRotateImage(file, 540, function(resizeImageObj) {});
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

          $(".photo").css('background-image','url('+fd+')');
        };
        img.src = e.target.result;
      };
    }
  };
  $('.photo').resizable().rotatable().draggable();
  // var $image = $('.photo');
  // 		$(document).ready(function() {
  // 			space.initCorpper();
  // 		});
  //
  // 		var space = {
  // 			curRotationPrev: 0,
  // 			curRotationFlag: false,
  // 			initCorpper: function() {
  // 				$image.cropper({
  // 					aspectRatio: 1 / 1,
  // 					viewMode: 0, // 视点模式：【0：无限制；1:不能超出裁剪区域；】
  // 					dragMode: 'move', // 拖曳模式:'crop'*创建一个新的麦田盒,'move'*移动画布,'none'*无所事事
  // 					modal: true, // 是否显示黑色遮罩
  // 					guides: true, // 显示麦田盒上方的虚线。
  // 					center: true, // 显示位于“作物”框上方的中心指示器。
  // 					highlight: true, // 在“作物”框上方显示白色模式(突出显示“作物”框)。
  // 					background: true, // 是否显示透明背景
  // 					movable: true, // 是否可以移动图像
  // 					rotatable: true, // 可旋转
  // 					scalable: true, // 可伸缩
  // 					zoomable: true, // 可缩放
  // 					responsive: true, // 调整窗口大小时，重新渲染裁剪器
  // 					zoomOnWheel: false, // 通过移动鼠标使图像能够缩放
  // 					wheelZoomRatio: 0.1, // 定义缩放比率时，通过鼠标旋转放大图像。（滚动时放大或缩小的比例）
  // 					cropBoxMovable: false, // 通过拖动启用移动“裁剪”框。
  // 					CropBoxResizable: true, // 可以通过拖动调整裁剪框的大小
  // 					ready: function() {
  // 						space.initRorate();
  // 					}
  // 				});
  // 			},
  // 			// 初始化旋转度数
  // 			initRorate: function() {
  //
  // 				touch.on('#target', 'touchstart', function(ev) {
  // 					ev.startRotate();
  // 					ev.preventDefault();
  // 				});
  // 				touch.on('#content', 'rotate', function(ev) {
  //
  // 					var r = ev.rotation; // 当前度数
  //
  // 					var pr = r - space.curRotationPrev;
  //
  // 					if(ev.rotation >= -20 && ev.rotation <= 20 && !space.curRotationFlag) {
  // 						// ±20°的范围内 不操作
  // 					} else {
  // 						var imgData = $image.data('cropper').getImageData();
  // 						$image.cropper("rotateTo", imgData.rotate + pr);
  // 						space.curRotationFlag = true;
  // 					}
  //
  // 					space.curRotationPrev = r;
  //
  // 					if(ev.fingerStatus === 'end') { // 手指离开时
  // 						space.curRotationFlag = false;
  // 						space.curRotationPrev = 0;
  // 					}
  //
  // 				});
  // 			}
  // 		}

});
