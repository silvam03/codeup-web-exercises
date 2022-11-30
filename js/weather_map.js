"use strict";
//MAP
mapboxgl.accessToken = MAPBOX_TOKEN;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 12,
    center: [-96.915007, 32.646538]
});

//Starting point with weather data
let start = new mapboxgl.Marker()
    .setLngLat([-96.915007, 32.646538])
    .addTo(map);
$.get("https://api.openweathermap.org/data/2.5/forecast", {
    APPID: OPEN_WEATHER_APPID,
    q: "Duncanville, US",
    units: "imperial"
}).done(function (data) {
    console.log(data);
    //5 DAY CARDS
    //First day
    $("#temperature1").html("Temperature H/L: " + data.list[0].main.temp_max + "°F/" + data.list[0].main.temp_min + "°F");
    $("#feelsLike1").html("Feels like: " + data.list[0].main.feels_like + "°F");
    $("#description1").html("Description: " + data.list[0].weather[0].description);
    $("#humidity1").html("Humidity: " + data.list[0].main.humidity);
    $("#wind1").html("Wind: " + data.list[0].wind.speed);

    //Second day
    $("#temperature2").html("Temperature H/L: " + data.list[8].main.temp_max + "°F/" + data.list[8].main.temp_min + "°F");
    $("#feelsLike2").html("Feels like: " + data.list[0].main.feels_like + "°F");
    $("#description2").html("Description: " + data.list[8].weather[0].description);
    $("#humidity2").html("Humidity: " + data.list[8].main.humidity);
    $("#wind2").html("Wind: " + data.list[8].wind.speed);

    //Third day
    $("#temperature3").html("Temperature H/L: " + data.list[16].main.temp_max + "°F/" + data.list[16].main.temp_min + "°F");
    $("#feelsLike3").html("Feels like: " + data.list[0].main.feels_like + "°F");
    $("#description3").html("Description: " + data.list[16].weather[0].description);
    $("#humidity3").html("Humidity: " + data.list[16].main.humidity);
    $("#wind3").html("Wind: " + data.list[16].wind.speed);

    //Fourth day
    $("#temperature4").html("Temperature H/L: " + data.list[24].main.temp_max + "°F/" + data.list[24].main.temp_min + "°F");
    $("#feelsLike4").html("Feels like: " + data.list[0].main.feels_like + "°F");
    $("#description4").html("Description: " + data.list[24].weather[0].description);
    $("#humidity4").html("Humidity: " + data.list[24].main.humidity);
    $("#wind4").html("Wind: " + data.list[24].wind.speed);

    //Fifth day
    $("#temperature5").html("Temperature H/L: " + data.list[32].main.temp_max + "°F/" + data.list[32].main.temp_min + "°F");
    $("#feelsLike5").html("Feels like: " + data.list[0].main.feels_like + "°F");
    $("#description5").html("Description: " + data.list[32].weather[0].description);
    $("#humidity5").html("Humidity: " + data.list[32].main.humidity);
    $("#wind5").html("Wind: " + data.list[32].wind.speed);

});





//Search City Button
let userSearch = document.querySelector('#button');
userSearch.addEventListener('click', uploadNewCity);

function uploadNewCity(event) {
    let city = document.getElementById('search').value;
    event.preventDefault();

    geocode(city, MAPBOX_TOKEN).then(function(result) {
        map.setCenter(result);
        map.setZoom(12);
        let marker1 = new mapboxgl.Marker()
            .setLngLat(result)
            .addTo(map);

    $.get("https://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        q: city,
        units: "imperial"
    }).done(function (data) {
        console.log(data);

        updateWeatherCards()

        function updateWeatherCards(e) {
            //5 DAY CARDS
            //First day
            $("#temperature1").html("Temperature H/L: " + data.list[0].main.temp_max + "°F/" + data.list[0].main.temp_min + "°F");
            $("#feelsLike1").html("Feels like: " + data.list[0].main.feels_like + "°F");
            $("#description1").html("Description: " + data.list[0].weather[0].description);
            $("#humidity1").html("Humidity: " + data.list[0].main.humidity);
            $("#wind1").html("Wind: " + data.list[0].wind.speed);

            //Second day
            $("#temperature2").html("Temperature H/L: " + data.list[8].main.temp_max + "°F/" + data.list[8].main.temp_min + "°F");
            $("#feelsLike2").html("Feels like: " + data.list[0].main.feels_like + "°F");
            $("#description2").html("Description: " + data.list[8].weather[0].description);
            $("#humidity2").html("Humidity: " + data.list[8].main.humidity);
            $("#wind2").html("Wind: " + data.list[8].wind.speed);

            //Third day
            $("#temperature3").html("Temperature H/L: " + data.list[16].main.temp_max + "°F/" + data.list[16].main.temp_min + "°F");
            $("#feelsLike3").html("Feels like: " + data.list[0].main.feels_like + "°F");
            $("#description3").html("Description: " + data.list[16].weather[0].description);
            $("#humidity3").html("Humidity: " + data.list[16].main.humidity);
            $("#wind3").html("Wind: " + data.list[16].wind.speed);

            //Fourth day
            $("#temperature4").html("Temperature H/L: " + data.list[24].main.temp_max + "°F/" + data.list[24].main.temp_min + "°F");
            $("#feelsLike4").html("Feels like: " + data.list[0].main.feels_like + "°F");
            $("#description4").html("Description: " + data.list[24].weather[0].description);
            $("#humidity4").html("Humidity: " + data.list[24].main.humidity);
            $("#wind4").html("Wind: " + data.list[24].wind.speed);

            //Fifth day
            $("#temperature5").html("Temperature H/L: " + data.list[32].main.temp_max + "°F/" + data.list[32].main.temp_min + "°F");
            $("#feelsLike5").html("Feels like: " + data.list[0].main.feels_like + "°F");
            $("#description5").html("Description: " + data.list[32].weather[0].description);
            $("#humidity5").html("Humidity: " + data.list[32].main.humidity);
            $("#wind5").html("Wind: " + data.list[32].wind.speed);
        }
    });
    })
};






//Map click for new weather updates
map.on('click', function (e) {
    let coordinates = e.lngLat;
    let marker = new mapboxgl.Marker({draggable: true})
        .setLngLat([coordinates.lng, coordinates.lat])
        .addTo(map);
    map.flyTo({center: [coordinates.lng, coordinates.lat]});
    $.get("https://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat: coordinates.lat,
        lon: coordinates.lng,
        units: "imperial"
    }).done(function (data) {
        console.log(data);
        updateWeatherCards()

        function updateWeatherCards(e) {
            //5 DAY CARDS
            //First day
            $("#temperature1").html("Temperature H/L: " + data.list[0].main.temp_max + "°F/" + data.list[0].main.temp_min + "°F");
            $("#feelsLike1").html("Feels like: " + data.list[0].main.feels_like + "°F");
            $("#description1").html("Description: " + data.list[0].weather[0].description);
            $("#humidity1").html("Humidity: " + data.list[0].main.humidity);
            $("#wind1").html("Wind: " + data.list[0].wind.speed);

            //Second day
            $("#temperature2").html("Temperature H/L: " + data.list[8].main.temp_max + "°F/" + data.list[8].main.temp_min + "°F");
            $("#feelsLike2").html("Feels like: " + data.list[0].main.feels_like + "°F");
            $("#description2").html("Description: " + data.list[8].weather[0].description);
            $("#humidity2").html("Humidity: " + data.list[8].main.humidity);
            $("#wind2").html("Wind: " + data.list[8].wind.speed);

            //Third day
            $("#temperature3").html("Temperature H/L: " + data.list[16].main.temp_max + "°F/" + data.list[16].main.temp_min + "°F");
            $("#feelsLike3").html("Feels like: " + data.list[0].main.feels_like + "°F");
            $("#description3").html("Description: " + data.list[16].weather[0].description);
            $("#humidity3").html("Humidity: " + data.list[16].main.humidity);
            $("#wind3").html("Wind: " + data.list[16].wind.speed);

            //Fourth day
            $("#temperature4").html("Temperature H/L: " + data.list[24].main.temp_max + "°F/" + data.list[24].main.temp_min + "°F");
            $("#feelsLike4").html("Feels like: " + data.list[0].main.feels_like + "°F");
            $("#description4").html("Description: " + data.list[24].weather[0].description);
            $("#humidity4").html("Humidity: " + data.list[24].main.humidity);
            $("#wind4").html("Wind: " + data.list[24].wind.speed);

            //Fifth day
            $("#temperature5").html("Temperature H/L: " + data.list[32].main.temp_max + "°F/" + data.list[32].main.temp_min + "°F");
            $("#feelsLike5").html("Feels like: " + data.list[0].main.feels_like + "°F");
            $("#description5").html("Description: " + data.list[32].weather[0].description);
            $("#humidity5").html("Humidity: " + data.list[32].main.humidity);
            $("#wind5").html("Wind: " + data.list[32].wind.speed);
        }
    });
})
