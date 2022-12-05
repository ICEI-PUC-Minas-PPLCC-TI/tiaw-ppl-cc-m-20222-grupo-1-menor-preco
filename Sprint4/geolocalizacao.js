var map;
var marker;
var markers;
var lojas;

lojas = [
    L.latLng(-19.883689004384298, -43.993655789458096),
    L.latLng(-19.886756102489617, -43.928338640955026),
    L.latLng(-19.967125156690585, -43.965074172603714),
    L.latLng(-19.919710026661324, -43.94267799881416),
    L.latLng(-19.94367494930993, -44.04123970215806),
    L.latLng(-19.930174075021306, -44.036091157982426),
]

markers = []

function addmarker(btn) {
    var coordenadas = btn.value;
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
