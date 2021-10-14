$(document).ready(function() {
  var xx =0;
  var yy =0;
  var spdX=1;
  var spdY=1;
  var deg=0;
  var rad;
  var xlimit = window.innerWidth/2;
  var ylimit = window.innerHeight/2;

  var timer = setInterval(function() {
    $(".kal_cont").each(function(i) {

      $(this).find(".ksc").each(function(i) {
        $(this).css({
          backgroundPosition: xx + "px " + yy + "px"
        });
      });

    });

    rad = Math.PI/180*deg;
    spdY = Math.sin(rad)*ylimit/2;
    spdX = Math.cos(rad)*xlimit/2;
    deg++;

    xx=spdX;
    yy=spdY;
    // if(xx>xlimit || xx<0){
    //   spdX*=-1;
    // }
    // if(yy>ylimit || yy<0){
    //   spdY*=-1;
    // }

  }, 50);
  // $(".kal_cont").each(function(i) {
  //   $(this).mousemove(function(e) {
  //     $(this).find(".ksc").each(function(i) {
  //       $(this).css({
  //         backgroundPosition: xx + "px " + yy + "px"
  //       });
  //     });
  //   });
  // });
});
