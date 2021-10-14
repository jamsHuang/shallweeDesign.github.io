// JavaScript Document
var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");
$(function(){
	
	if( device.mobile() ){ // || device.ipad() || device.tablet()
		$('body').addClass("mobile");
		$('.mobile').show();
		$('.desktop').hide();
		
		if( $.fancybox ){
			$(".various").fancybox({
				width	: '100%',
				height	: 600,
				fitToView	: true,
				//width		: '70%',
				//height		: '70%',
				autoSize	: true,
				closeClick	: false,
				openEffect	: 'none',
				closeEffect	: 'none'
			});
		}
		
	}else{
		$('body').addClass("desktop");
		$('.mobile').hide();
		$('.desktop').show();
		
		if( $.fancybox ){
			$(".various").fancybox({
				width	: 600,
				height	: 600,
				fitToView	: false,
				//width		: '70%',
				//height		: '70%',
				autoSize	: false,
				closeClick	: false,
				openEffect	: 'none',
				closeEffect	: 'none'
			});
		}
	}
	
	var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
	$body.animate({	scrollTop: 0 }, 600);
	
	$('.scrollTop').bind(clickHandler, function(){
		$body.animate({	scrollTop: 0 }, 400);
		return false;
	});	
	
	$('.navbar-toggle').bind(clickHandler, function(){
		$('#nav').toggle();			
		return false;
	});	
	
	

});

$(window).scroll(function(){
	if( $(this).scrollTop() > 10 ){
		$('.bottomScrollTop').fadeIn("fast");
	}else{
		$('.bottomScrollTop').fadeOut("fast");
	}
	
});