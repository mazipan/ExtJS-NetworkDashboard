var map;
function initialize_map(){
	  /* Create Google Map */
	  var myOptions = {
	    zoom : 4,
	    minZoom : 1,
	    center : new google.maps.LatLng(-3.380111, 118.421327),
	    mapTypeId : google.maps.MapTypeId.HYBRID,
	    streetViewControl : true,
	    scrollwheel : true,
	    disableDoubleClickZoom : false,
	    draggable : true,
	    panControl : false,
	    zoomControl : true,
	    zoomControlOptions : {
	      style : google.maps.ZoomControlStyle.SMALL,
	      position : google.maps.ControlPosition.LEFT_TOP
	    }
	  };

	  map = new google.maps.Map(document.getElementById('map-container'), myOptions);

	  var legend = document.getElementById('map_legend');
	  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(legend);
	  
	  load_local_marker(map);
}

function load_local_marker(map){
	// AJAX CANNOT WORK IN LOCAL
	$.get("./data/Markers.json", function(json) {

		var redStartZIndex = 30000;
		var yellowStartZIndex = 15000;
		
	    for (var i = 0; i < json.root.length; i++) {
			var obj = json.root[i];			
			
			var	myLatLng = new google.maps.LatLng(obj.latlong[0], obj.latlong[1]);
			var marker = new google.maps.Marker({
				position: myLatLng,
				title: obj.hotspotName
			});
			
			if(obj.category=='Platinum'){
				if(obj.alarm == 0){
					marker.setIcon('./images/markers/platinum-site.png');
				} else if(obj.alarm == 1){
					marker.setIcon('./images/markers/platinum-site.png');
					marker.setZIndex(redStartZIndex);  redStartZIndex++;
				} else if(obj.alarm == 2){
					marker.setIcon('./images/markers/platinum-site.png');
					marker.setZIndex(yellowStartZIndex);  yellowStartZIndex++;
				}
			} else if(obj.category=='Gold'){
				if(obj.alarm == 0){
					marker.setIcon('./images/markers/gold-site.png');
				} else if(obj.alarm == 1){
					marker.setIcon('./images/markers/gold-site.png');
					marker.setZIndex(redStartZIndex);  redStartZIndex++;
				} else if(obj.alarm == 2){
					marker.setIcon('./images/markers/gold-site.png');
					marker.setZIndex(yellowStartZIndex);  yellowStartZIndex++;
				}
			} else if(obj.category=='Silver'){
				if(obj.alarm == 0){
					marker.setIcon('./images/markers/silver-site.png');
				} else if(obj.alarm == 1){
					marker.setIcon('./images/markers/silver-site.png');
					marker.setZIndex(redStartZIndex);  redStartZIndex++;
				} else if(obj.alarm == 2){
					marker.setIcon('./images/markers/silver-site.png');
					marker.setZIndex(yellowStartZIndex);  yellowStartZIndex++;
				}
			}
			
			
			marker.setMap(map);
			
		}
	});
}