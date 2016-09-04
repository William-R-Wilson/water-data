function setIndexMap(){
  //basic map setup
  console.log("setIndexMap called!");
  var myLatLng = {lat: 35.9606, lng: -83.9207};
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 8,
    center: myLatLng,
    mapTypeId: google.maps.MapTypeId.HYBRID
  });

  //get marker for all locations - need to extract this
  var loc = gon.locations //need to turn this into a hash
  var l = loc.length;
  for (i = 0; i < l; i++) {
    console.log(loc[i]);
    new google.maps.Marker({
      position: {lat: Number(loc[i].lat), lng: Number(loc[i].long)},
      map: map,
      title: loc[i].name,
      icon: getIconType(loc[i])
    });
  };
  function getIconType(location){
    if (location.type == "mine") {
      return "assets/mine.png";
    }
    else if (location.type == "test"){
      return "assets/Editing-Clipboard-icon.png";
    }
    else {
      return "";
    }
  }
}

function mapView() {
  console.log('mapView called');
  setIndexMap();
}
