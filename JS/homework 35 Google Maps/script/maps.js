'use strict';

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: { lat: 49.67603244826885, lng: 34.536315947657435 },
    });

    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const image = ("./6.png");
    const markers = locations.map((location, i) => {
        return new google.maps.Marker({
            position: location,
            icon: image,
            label: labels[i % labels.length],
        });
    });

    new MarkerClusterer(map, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
    const bermudaTriangle = new google.maps.Polygon({
        paths: locations,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
    });
    bermudaTriangle.setMap(map);
}
const locations = [
    { lat: 49.56423207036945, lng: 34.52460149810273 },
    { lat: 49.597791442505795, lng: 34.53553682694002 },

];





