var map;
var marker;
var markers;
var lojas;

lojas = [
    L.latLng(-19.931970763507262, -43.932086171494625),
    L.latLng(-19.93123940734516, -44.05329552916521),
    L.latLng(-19.919729974040244, -43.94275904450579),
    L.latLng(-19.929217114716515, -43.935731615670534),
    L.latLng(-19.94419996543401, -44.04063218907774),
    L.latLng(-19.93022450637502, -44.036160895413396),
    L.latLng(-19.931254865943114, -44.053099731011116),
    L.latLng(-19.929851362996214, -43.943519690925434),
    L.latLng(-19.914403836400044, -44.08198650442179),
    L.latLng(-19.96815026122083, -43.96481715984572),
]

markers = []

function addmarker(btn) {
    var coordenadas = btn.value;
    markers.pop();
    markers.push(lojas[coordenadas]);
    this.sucess;
}
function success(pos) {
    console.log(pos.coords.latitude, pos.coords.longitude);
    if (map == undefined) {
        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);

    }
    else {
        map.remove();
        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);
    }

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)
        .bindPopup('Você está aqui.')
        .openPopup();
    markers.push(L.latLng(pos.coords.latitude, pos.coords.longitude))
    L.Routing.control({ waypoints: markers }).addTo(map);

}
function error(err) {
    console.log(err)
}

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 20000
});
