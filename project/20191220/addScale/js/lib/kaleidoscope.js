//setup global variables
var event_kai = new Event('drawKai');
var event_kai2 = new Event('drawKai2');

var deg = 0;
var moveX = 0;

var deg2 = 0;
var moveX2 = 0;
var ml;
var canvas = document.getElementById("kale");
var canvas2 = document.getElementById("kale2");


  canvas2.height = canvas.height = window.innerHeight * 4 / 3;
  console.log(canvas2.height);
  console.log(window.innerHeight);
  if (window.innerHeight > window.innerWidth) {
    canvas2.width = canvas.width = window.innerHeight;

  } else {
    canvas2.width = canvas.width = window.innerWidth;
  }
  ml = (window.innerWidth - canvas.width) / 2;

  $('#kale').css({"margin-left": ml + "px","width":canvas.width+"px","height":canvas.height+"px"});
  $('#kale2').css({"margin-left": ml + "px","width":canvas2.width+"px","height":canvas2.height+"px"});

(function draw() {
  var ctx = canvas.getContext('2d');
  var ctx2 = canvas2.getContext('2d');
  var img = new Image();
  var img2 = new Image();
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
      canvas.height = window.innerHeight * 4 / 3;
      if (window.innerHeight > window.innerWidth) {
        canvas.width = window.innerHeight;

      } else {
        canvas.width = window.innerWidth;
      }
      ml = (window.innerWidth - canvas.width) / 2;
      $('#kale').css("margin-left", ml + "px");


      window.requestAnimationFrame(function() {
        kaleidoscope(w, h, img, canvas, ctx, triangles, 0);
      });
      diagonal = Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2));
      scaleFactor = img.width / img.height;
      h = diagonal / 2;
      w = parseInt(scaleFactor * h);
    });

  }
  img.src = document.getElementById("defaultImg").src;

  img2.onload = function() {
    var diagonal = Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2));
    var scaleFactor = img.width / img.height;
    var h = diagonal / 2;
    var w = parseInt(scaleFactor * h);

    kaleidoscope(w, h, img2, canvas2, ctx2, triangles, 0);
    var r = w / 8;

    window.addEventListener('drawKai2', function() {

      kaleidoscope(w, h, img2, canvas2, ctx2, triangles, moveX);

    })

    //redraw kaleidoscope when window size changes
    window.addEventListener("resize", function() {
      canvas2.height = window.innerHeight * 4 / 3;
      if (window.innerHeight > window.innerWidth) {
        canvas2.width = window.innerHeight;

      } else {
        canvas2.width = window.innerWidth;
      }
      ml = (window.innerWidth - canvas.width) / 2;
      $('#kale2').css("margin-left", ml + "px");


      window.requestAnimationFrame(function() {
        kaleidoscope(w, h, img2, canvas2, ctx2, triangles, 0);
      });
      diagonal = Math.sqrt(Math.pow(canvas2.width, 2) + Math.pow(canvas2.height, 2));
      scaleFactor = img2.width / img2.height;
      h = diagonal / 2;
      w = parseInt(scaleFactor * h);
    });

  }
  img2.src = document.getElementById("defaultImg2").src;
})();

var timer_kai = setInterval(moveKai, 50);

function moveKai() {
  window.dispatchEvent(event_kai);
  window.dispatchEvent(event_kai2);
}

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

//http://stackoverflow.com/questions/8168217/html-canvas-how-to-draw-a-flipped-mirrored-image
function mirror(v, canvas, x, y, width, height) {
  canvas.save();
  canvas.scale(-1, 1);
  canvas.drawImage(v, x, y, width * -1, height);
  canvas.restore();
}

//http://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers#23202637
/* maps number from one range to another */
Number.prototype.map = function(in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
