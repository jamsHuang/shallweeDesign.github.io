// JavaScript Document
$(function(){
	$('#slideshow').cycle({
		slides: ' > div',
		speed: 600,
		manualSpeed: 500
	}).on( 'cycle-update-view', function( event, optionHash, slideOptionsHash, currentSlideEl) {
    // your event handler code here
    // argument opts is the slideshow's option hash		
		/*
		if( optionHash.currSlide == 4){
			console.log(optionHash.currSlide);
			$('#slideshowPic' + optionHash.currSlide).stop().transition({ scale: 1.3 },20000, function(){
				$('#slideshow').cycle('pause');
				setTimeout(function(){
					$('#slideshow').cycle('resume');
				},40000);
			});
			
		}else{
			$('#slideshowPic' + optionHash.currSlide).stop().transition({ scale: 1.3 },20000);
		}
		*/
		$('#slideshowPic' + optionHash.currSlide).stop().transition({ scale: 1.3 },20000);
		
	}).on( 'cycle-before', function( event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
    // your event handler code here
    // argument opts is the slideshow's option hash
		//console.log(optionHash.currSlide);
		//$('#slideshow > div:eq('+optionHash.currSlide+') > div:eq(1)').animate({top:100});
	}).on( 'cycle-after', function( event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
    // your event handler code here
    // argument opts is the slideshow's option hash
		//console.log(optionHash.currSlide);
		//$('#slideshow > div:eq('+optionHash.currSlide+') > div:eq(1)').animate({top:100});
		console.log(optionHash.currSlide);
		if( optionHash.currSlide == 4){
			
			$('#slideshow').cycle('pause');
			setTimeout(function(){
				$('#slideshow').cycle('resume');
			},40000);
		}
		$('#slideshowPic' + optionHash.currSlide).stop().css({scale:1},0);
	}).on( 'cycle-pager-activated', function( event, optionHash) {
    // your event handler code here
    // argument opts is the slideshow's option hash
		//console.log(optionHash);
		//$('#slideshow > div:eq('+optionHash.currSlide+') > div:eq(1)').animate({top:100});
		
		
	});
	
	
	
	
});