let latitude, longitude, destination;

// Asking the User for their destination
$(document).ready(function () {
    alert("Please share your location!")
    initGeolocation();
})

$(function(){
    $("#navigate-button").click(function(){
        window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
    })
})

function initGeolocation() {
    if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(success)
    }else{
        alert("OOPS!!Your browser does not support geo loaction services")
    }
}

function success(){

    console.log(position)
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;

    // Intializing Mapbox
    mapboxgl.accessToken = 'pk.eyJ1Ijoib3BoaWxpYSIsImEiOiJjbGc3Y3JwNGEwbHpwM2ZvOTJkcjI1ZHljIn0.SfMU6sv_x5r6hyHl7JPk6Q'

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [longitude,latitude],
        zoom:4
    })

    var img1 = document.querySelector("#amber")
    var img2 = document.querySelector("#gateway")
    var img3 = document.querySelector("#gate")
    var img4 = document.querySelector("#lotus")
    var img5 = document.querySelector("#victoria")

    // Create a Amber Palace, Jaipur Marker and add it to the map.
    var marker1 = new mapboxgl.Marker({
        element:img1
    })
    .setLngLat([75.85133, 26.98547])
    .addTo(map);

    var marker2 = new mapboxgl.Marker({
        element:img2
    })
    .setLngLat([72.8347, 18.9217])
    .addTo(map);

    var marker3 = new mapboxgl.Marker({
        element:img3
    })
    .setLngLat([77.2295, 28.6129])
    .addTo(map);

    var marker4 = new mapboxgl.Marker({
        element:img4
    })
    .setLngLat([77.2588,28.5535])
    .addTo(map);

    var marker5 = new mapboxgl.Marker({
        element:img5
    })
    .setLngLat([88.3426, 22.5448])
    .addTo(map);

    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        }).on('result', function (e) {
            destination = e.result.center
        })
    );
}