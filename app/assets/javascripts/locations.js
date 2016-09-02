function newLocationMap(){
  //basic map setup
  console.log("called!");
  var myLatLng = {lat: 35.9606, lng: -83.9207};
  var newLocMap = new google.maps.Map(document.getElementById('new-location-map-canvas'), {
    zoom: 10,
    center: myLatLng,
    mapTypeId: google.maps.MapTypeId.HYBRID
  });

  var markers = [];
  // This event listener will call addMarker() when the map is clicked.
        newLocMap.addListener('click', function(event) {
          addMarker(event.latLng);
          $("#location_lat").val(event.latLng.lat());
          $("#location_long").val(event.latLng.lng());
        });

      // Adds a marker to the map
      function addMarker(location) {
        clearMarkers();
        marker = new google.maps.Marker({
          position: location,
          map: newLocMap
        });
        markers.push(marker);
      }

      function clearMarkers() {
        l = markers.length;
        for (var i = 0; i < l; i++) {
          markers[i].setMap(null);
        }
        markers = [];
      }

}


    function newLocation(){
      newLocationMap();
    };
