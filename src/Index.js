console.log("hello")

const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = "pk.eyJ1IjoiYmlueTIzNSIsImEiOiJjamRtZGszY2cwaXUyMnhsN2FnOHFhY2dpIn0.JorUve5sCPGe8oruMCjyWw";

const map = new mapboxgl.Map({

    container: "map",
    center: [-74.009, 40.705],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"

});

const markerDomEl = document.createElement("div");
markerDomEl.style.width= "32px";
markerDomEl.style.height= "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
console.log(markerDomEl)