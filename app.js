mapboxgl.accessToken = 'pk.eyJ1Ijoiemt2c2siLCJhIjoiY2xmZ3J5M2c4MDZqcTNwcnMzNGNyY3ExNiJ9.nx2O1NOAyazLGjZmkvMRjQ';

let loc = [14.433835791881858, 50.08695619289439]

let map = new mapboxgl.Map({
    container: 'map', 
    center: loc,
    zoom: 14,
    style: 'mapbox://style/mapbox/dark-v10'
});

map.scrollZoom.disable();
map.addControl(new mapboxgl.NavigationControl());

let marker = document.createElement('div');
marker.id = 'marker';

let popup = new mapboxgl.Popup({offset: 70}).setHTML('<div id="hello">Hello World</div');

new mapboxgl.Marker(marker, {anchor: 'bottom'})
.setLngLat(loc)
.addTo(map)
.setPopup(popup);

$('.carousel').carousel({
  interval: 2000
})