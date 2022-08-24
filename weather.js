// to get geo location co ordinates when needed

// const options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
// };

// function success(pos) {
//     const crd = pos.coords;

//     console.log('Your current position is:');
//     console.log(`Latitude : ${crd.latitude}`);
//     console.log(`Longitude: ${crd.longitude}`);
//     console.log(`More or less ${crd.accuracy} meters.`);
// }

// function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options); // can be used to fetch location automatically

let weather = {
    "api_Key": '50909ffea1644d4e8cf103401221807',
    get_Weather: function (city_Name) {
        fetch("http://api.weatherapi.com/v1/current.json?key=" + this.api_Key + "&q=" + city_Name
            + "&aqi=no").then((response) => response.json()).then((data) => this.displayWeather(data)); //closure
        // data variable holds the json 

    },

    displayWeather: function (data) {
        const { name } = data.location;
        const { text } = data.current.condition;
        const { temp_c } = data.current;
        const { wind_mph } = data.current;
        const { temp_f } = data.current;
        const { icon } = data.current.condition;
        const { humidity } = data.current;
        //  console.log(text, name, temp_c, wind_mph, temp_f, icon, humidity);
        document.querySelector('.city').textContent = 'Weather in ' + name;
        //* document.querySelector('#weather-icon').src = 'https://www.weatherapi.com/api-explorer.aspx#forecast' + icon;
        document.querySelector('.temp').textContent = temp_c + '°C';
        document.querySelector('.temp_fahrenheit').textContent = temp_f + '° Fahrenheit';
        document.querySelector('.desc').textContent = text;
        document.querySelector('.humidity').textContent = 'Humidity : ' + humidity + '%';
        document.querySelector('.wind').textContent = 'Wind: ' + wind_mph + ' Km/h';
        document.querySelector('.weather').classList.remove('weather-visibility');
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";

    },
    search: function (city_Name) {

        this.get_Weather(city_Name);

    }

};
function getCityName() {
    let city_Name;
    //* city_Name = document.querySelector('#search-input').textContent; the next line works fine but this should work instead of that
    return city_Name = document.querySelector('input').value;
}

document.querySelector('#search-btn').addEventListener('click', function () {

    weather.search(getCityName());
});
document.body.addEventListener('keyup', function (event) {
    getCityName();
    if (event.key === 'Enter') {
        weather.search(getCityName());
    }
})


//* battery api

// navigator.getBattery().then((battery) => {
//     let BatteryState = function () {
//         updateChargeInfo();
//         updateLevelInfo();

//     }
//     BatteryState();



// });
// battery.addEventListener('chargingchange', 'levelchange', () => {
//     updateChargeInfo();
// });
// function updateChargeInfo() {
//     let charge = battery.charging
//     if (charge === true) {
//         document.querySelector('#battery-text').textContent = 'Plugged in⚡'
//     }
//     else {
//         battery.addEventListener('levelchange', () => {
//             updateLevelInfo();
//         });
//     }
// }

// function updateLevelInfo() {
//     document.querySelector('#battery-text').textContent = `${battery.level * 100}%`;
// }




//* updates about weather
let city_ft = document.querySelector('#search-input-weathermap').textContent
document.querySelector('#search-btn-weathermap').addEventListener('onclick', function () {
    fetch("http://api.weatherapi.com/v1/current.json?key=" + this.api_Key + "&q=" + city_ft
        + "&aqi=no").then((response) => response.json()).then((data) => this.weatherForcast(data));
});
