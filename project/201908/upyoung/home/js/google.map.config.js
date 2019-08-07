(function($){
	var map, myLatlng, myZoom, marker;
	$(document).ready(function(){

		// Google Maps
		//-----------------------------------------------
		if ($("#map-canvas").length>0) {
			// Set the coordinates of your location
			myLatlng = new google.maps.LatLng(23.59781, 120.960515);
			function initialize() {
				var mapOptions = {
					zoom: 8,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					center: myLatlng,
					draggable:false,
					scrollwheel: false
				};
				marker = new google.maps.Marker({
					map:map,
					animation: google.maps.Animation.DROP
				});
				google.maps.event.addDomListener(window, "resize", function() {
					map.setCenter(myLatlng);
				});
				
				map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
			}
			google.maps.event.addDomListener(window, "load", initialize);
		}
	}); // End document ready

})(this.jQuery);

	function geocodeAddress( add_id ) {
		var geocoder=new google.maps.Geocoder();
		var resultsMap=new google.maps.Map(document.getElementById("map-canvas"),{
					zoom: 16,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					draggable:false,
					scrollwheel: false
				});
		$.ajax({
			type: 'POST',
			url: 'location_show.php',
			data: {aid:add_id},
			dataType: 'text',
			success: function(data) {
				if(data!='ERROR'){
					var show_str=data.split(' , ');
					geocoder.geocode({'address': show_str[0]}, function(results, status) {
						if (status === google.maps.GeocoderStatus.OK) {
							resultsMap.setCenter(results[0].geometry.location);
							var marker = new google.maps.Marker({
								map: resultsMap,
								position: results[0].geometry.location
							});
							marker.addListener('click', function() {
								$('#mapdetail').show();
							});
							$('#mapdetail').html(show_str[1]).show();
						} else {
							alert('Geocode was not successful for the following reason: ' + status);
						}
					});
				}else
					alert(data);
			}
		});
	}

	function show_div(){
		$('#mapdetail').hide();
	}