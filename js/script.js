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

function init(){

}
window.addEventListener('load', init);

function init(){
  function myEventFunction(){
  alert('Hello');
}
  var d4 = document.getElementById('div4');
  d4.addEventListener('click', myEventFunction);
  d4.addEventListener('click', function(){
	console.log('I was Clicked!');
	d4.style.backgroundColor = 'white';
	d4.innerHTML = '<strong>Goodbye</strong>';
});
}
window.addEventListener('load', init);

$('.bxslider').bxSlider({
  adaptiveHeight: true,
  slideWidth: 960
});