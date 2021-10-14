// JavaScript Document
function washerSlider(height){
	if ($('.comparison-slider')) {
		var initialHeight = $('.comparison .washer').outerHeight();
		$('.comparison-slider').slider({
			animate: 'fast',
			orientation: 'vertical',
			min: 0,
			max: height,
			value: height/2,
			slide: function() {
				comparisonCrop(initialHeight);
			},
			start: function() {
				comparisonCrop(initialHeight);
			},
			stop: function() {
			    comparisonCrop(initialHeight);			   
			}
		});
	}
	comparisonCrop(initialHeight);
}

function comparisonCrop(initialHeight) {
	var bottomCrop = 0;
	var topCrop = 0;

	if ($('body.stacked-washer-dryers').length > 0) {
		bottomCrop = 0;
		topCrop = 0;
	}

	$('.comparison .wireframe').height(initialHeight - $('.comparison-slider .ui-slider-handle').position().top + bottomCrop);
	$('.comparison .washer').height($('.comparison-slider .ui-slider-handle').position().top + topCrop);
}