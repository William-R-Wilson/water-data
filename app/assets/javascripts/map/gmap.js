function set_map(){

  var myLatLng = {lat: 35.9606, lng: -83.9207};

  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 4,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Here be knoxville'
  });
  var markerTwo = new google.maps.Marker({
    position: {lat: 35.0000, lng: -83.0000},
    map: map,
    title: 'where the fuck is this?'
  });



}


    $(document).ready(function(){
      set_map();
      console.log(gon.locations); //data is being passed from the controller
    })
