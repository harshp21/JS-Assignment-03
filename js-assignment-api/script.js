// var xhttp = new XMLHttpRequest();


// xhttp.onreadystatechange = function () {
//     if (xhttp.status == 200) {
//         console.log(JSON.parse(xhttp.responseText));
//     }
// }
// xhttp.open("GET", "https://restcountries.eu/rest/v2/all", true);

// xhttp.send();

let countryData = {};
fetch("https://restcountries.eu/rest/v2/all").then((response) => {
    response.json().then(function (data) {
        countryData = data[0];
        // console.log(countryData)
        getWeatherDetails(countryData);
    });
})

function getWeatherDetails(countryData) {
    let longLat = countryData.latlng;
    let cityName = "Mumbai";
    let cityId = "2172797";
    let appId = "444c619e09f729569614aeca5949eb2f";
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appId}`).then((response) => {
        response.json().then((data) => {
            console.log(`${data.main.temp} faranite`);
        })
    })
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${appId}`).then((response) => {
        response.json().then((data) => {
            console.log(`${data.main.temp} faranite`);
        })
    })
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${longLat[0]}&lon=${longLat[1]}&appid=${appId}`).then((response) => {
        response.json().then((data) => {
            console.log(`${data.main.temp} faranite`);
        })
    })
}


