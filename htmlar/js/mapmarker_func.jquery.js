//set up markers 
	function initMap() {
		var myMarkers = {"markers": [
				{"latitude": "51.511732", "longitude":"-0.123270", "icon": "img/map-marker.png"}
			]
		};
		
		//set up map options
		$("#map_detail").mapmarker({
			zoom	: 14,
			center	: 'Covent Garden London',
			markers	: myMarkers
		});
}
