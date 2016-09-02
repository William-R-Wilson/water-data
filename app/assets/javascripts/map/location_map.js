function set_map(){
  //basic map setup
  var myLatLng = {lat: 35.9606, lng: -83.9207};
  var map = new google.maps.Map(document.getElementById('new-location-map-canvas'), {
    zoom: 10,
    center: myLatLng,
    mapTypeId: google.maps.MapTypeId.HYBRID
  });

  var markers = [];
  // This event listener will call addMarker() when the map is clicked.
        map.addListener('click', function(event) {
          addMarker(event.latLng);
          $("#location_lat").val(event.latLng.lat());
          $("#location_long").val(event.latLng.lng());
          $("#remove-marker").show();
        });

        $("#remove-marker").click(function() {
          clearMarkers();
          $("#location_lat").val("");
          $("#location_long").val("");
        })

      // Adds a marker to the map
      function addMarker(location) {
        marker = new google.maps.Marker({
          position: location,
          map: map
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


    $(document).ready(function(){
      set_map();
      $("#remove-marker").hide();
    })
