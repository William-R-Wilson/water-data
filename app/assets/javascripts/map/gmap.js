function set_map(){
  //basic map setup
  var myLatLng = {lat: 35.9606, lng: -83.9207};
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 8,
    center: myLatLng,
    mapTypeId: google.maps.MapTypeId.HYBRID
  });

  //get marker for all locations
  var loc = gon.locations
  var l = loc.length;
  for (i = 0; i < l; i++) {
    console.log(typeof(loc[i][1]))  ;
    console.log(loc[i][2])
    new google.maps.Marker({
      position: {lat: Number(loc[i][1]), lng: Number(loc[i][2])},
      map: map,
      title: loc[i][0]
    });
  };

}


    $(document).ready(function(){
      set_map();
      console.log(gon.locations); //data is being passed from the controller
    })
