//setup global variables
var event_kai = new Event('drawKai');
var deg = 0;
var moveX = 0;
var isMobile = function() {
	return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
};

var ml;
var canvas = document.getElementById("kale");
  canvas.height = window.innerHeight * 4 / 3;
  if (window.innerHeight > window.innerWidth) {
    canvas.width = window.innerHeight;

  } else {
    canvas.width = window.innerWidth;
  }

$(function(){
  ml = (window.innerWidth - canvas.width) / 2;

  if(isMobile==true){
    $('#kale').css({"width":window.innerWidth+"px","height":window.innerHeight+"px"});
  }else{
    $('#kale').css({"width":canvas.width+"px","height":canvas.height+"px","margin-left":ml+"px"});
  }

});
(function draw() {
  var ctx = canvas.getContext('2d');
  var img = new Image();
  var triangles = 8; //amount of triangles for kaleidoscope

  img.onload = function() {
    var diagonal = Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2));
    var scaleFactor = img.width / img.height;
    var h = diagonal / 2;
    var w = parseInt(scaleFactor * h);

    kaleidoscope(w, h, img, canvas, ctx, triangles, 0);
    var r = w / 8;

    window.addEventListener('drawKai', function() {
      kaleidoscope(w, h, img, canvas, ctx, triangles, moveX);
      rad = Math.PI / 180 * deg;
      moveX = Math.sin(rad) * r;
      deg += 0.5;
      //console.log("de",deg);
      if (deg > 360) {
        deg = 0;
      }
    })
    //redraw kaleidoscope when window size changes
    window.addEventListener("resize", function() {
      console.log('resize');
      canvas = document.getElementById("kale");
      canvas.height = window.innerHeight * 4 / 3;
      if (window.innerHeight > window.innerWidth) {
        canvas.width = window.innerHeight;

      } else {
        canvas.width = window.innerWidth;
      }
      console.log('canvas:',canvas.width);
      ml = (window.innerWidth - canvas.width) / 2;
      $('#kale').css("margin-left", ml + "px");

      //
      // window.requestAnimationFrame(function() {
      //   kaleidoscope(w, h, img, canvas, ctx, triangles, 0);
      // });
      diagonal = Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2));
      scaleFactor = img.width / img.height;
      h = diagonal / 2;
      w = parseInt(scaleFactor * h);
    });

  }
  img.src = document.getElementById("defaultImg").src;

})();

function kaleidoscope(w, h, img, canvas, ctx, triangles, offset) {
  //creates the triangle for the clipping mask
  var triangleClip = new Path2D();
  triangleClip.moveTo(0, 0);
  triangleClip.lineTo(canvas.width, 0);
  triangleClip.lineTo(canvas.width * Math.cos((Math.PI / 180) * (360 / triangles)), canvas.width * Math.sin((Math.PI / 180) * (360 / triangles)));
  triangleClip.lineTo(0, 0);

  //gets the angles of the triangleClip
  var vertexAngle = 360 / triangles;
  var baseAngle = (180 - vertexAngle) / 2;

  //start drawing triangles
  for (var i = 0; i < triangles; i++) {
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((Math.PI / 180) * vertexAngle * i);
    ctx.clip(triangleClip);
    if (i % 2 === 0) {
      ctx.rotate(-(Math.PI / 180) * baseAngle);
      mirror(img, ctx, w / 2 + offset, 0, w, h);
    } else {
      ctx.rotate(-(Math.PI / 180) * baseAngle);
      ctx.drawImage(img, -w / 2 + offset, 0, w, h);
    }
    ctx.restore();
  }
}

function mirror(v, canvas, x, y, width, height) {
  canvas.save();
  canvas.scale(-1, 1);
  canvas.drawImage(v, x, y, width * -1, height);
  canvas.restore();
}

Number.prototype.map = function(in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
