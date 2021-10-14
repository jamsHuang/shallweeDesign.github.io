var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '900',
    width: '506.25',
    videoId: 'OOG1Lx-ICc0',
    autoplay: 0,
    showinfo : 0,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  //event.target.playVideo();
}

var done = false;

function onPlayerStateChange(event) {
  // if (event.data == YT.PlayerState.PLAYING && !done) {
  //   setTimeout(stopVideo, 6000);
  //   done = true;
  // }
}

function stopVideo() {
  player.stopVideo();
}

$(function(){
  $('.a4__video__button,.a4__video__cover').on('click',function(){
    console.log('ii');
    $('.a4__video__button').hide();
    $('.a4__video__cover').hide();
    player.playVideo();
  })
})
