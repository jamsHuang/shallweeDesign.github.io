$(function() {

  var skrollr_obj = skrollr.init();
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

  var worldTime = setInterval(drawWorld, 50);

  function drawWorld() {
    if (img_ready == true) {
      ktx.drawImage(img_cover, 0, 0);
      ktx.globalCompositeOperation = 'source-in';
      ktx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, 400, 400);
    }
  }
  $('.ripple__holder').ripples({
	resolution: 512,
	dropRadius: 25,
	perturbance: 0.04,
  interactive:false,
  crossOrigin:"anonymous",
  imageUrl:"img/bg_kai.jpg"
  });
  setInterval(function() {
		var $el = $('.ripple__holder');
		var x = Math.random() * $el.outerWidth();
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 20;
		var strength = 0.04 + Math.random() * 0.04;

		$el.ripples('drop', x, y, dropRadius, strength);
	}, 700);
});
