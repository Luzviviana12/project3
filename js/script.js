  function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 41, lng: -87},
      zoom: 10
    });
}

google.maps.event.addDomListener(window, 'load', initMap);

const marker = new AdvancedMarkerElement({
      map,
      position: { lat: 41, lng: -87 },
	  title: "Illinois Tech",
  });


new google.maps.Map(document.getElementById("map"), {
  zoom,
  center,
});


const {ColorScheme} = await google.maps.importLibrary("core")

const mapOptions = {
  center: { lat: -34.397, lng: 150.644 },
  zoom: 8,
  colorScheme: ColorScheme.FOLLOW_SYSTEM,
}
map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);