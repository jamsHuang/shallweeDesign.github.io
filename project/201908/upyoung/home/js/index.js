// JavaScript Document
$(function(){
	
	$('#slideshow').cycle({
		slides: ' > div',
		//speed: 600,
		//manualSpeed: 500
		timeout: 4000
	}).on( 'cycle-update-view', function( event, optionHash, slideOptionsHash, currentSlideEl) {

		console.log(optionHash.currSlide);
		
		
		
		if( optionHash.currSlide == "4" ){
			
			$('#slideshowPic' + optionHash.currSlide).stop().transition({ scale: 1.1 }, 8000);//20000
			
			$('#slideshow').cycle('pause');
			$('#slideshowPic' + optionHash.currSlide).stop();
			setTimeout(function(){
				$('#slideshow').cycle('resume');
			},8000);
		}else{
			$('#slideshowPic' + optionHash.currSlide).stop().transition({ scale: 1.3 }, 20000);
		}
		
		
		
	}).on( 'cycle-after', function( event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
    				
		$('#slideshowPic' + optionHash.currSlide).stop().css({scale:1},0);
	});
	
	
});