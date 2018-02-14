console.log("hello")

const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = "pk.eyJ1IjoiYmlueTIzNSIsImEiOiJjamRtZGszY2cwaXUyMnhsN2FnOHFhY2dpIn0.JorUve5sCPGe8oruMCjyWw";

const map = new mapboxgl.Map({

    container: "map",
    center: [-74.009, 40.705],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"

});