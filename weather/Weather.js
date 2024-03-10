//searches city-wise weather
async function getCityWeather() {
  try {
    let response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        document.getElementById("citynm").value +
        "&appid=4250482cdffde121adb25d175ed4fca0&units=metric"
    );
    let cityWeather = await response.json();
    console.log(cityWeather);
    document.getElementById("weatherCard").style.visibility = "visible";
    document.getElementById("cityname").innerHTML =
      "Weather in " + cityWeather.name;
    document.getElementById("temp").innerHTML =
      Math.round(cityWeather.main.temp) + "°C";
    document.getElementById("wind").innerHTML =
      "Wind Speed : " + cityWeather.wind.speed + "km/hr";
    document.getElementById("desc").innerHTML =
      "Description : " + cityWeather.weather[0].description;
    document.getElementById("humidity").innerHTML =
      "Humidity :" + cityWeather.main.humidity;
  } catch (error) {
    alert("You entered Wrong city..!!  ");
    document.getElementById("citynm").value = "";
    document.getElementById("weatherCard").style.visibility = "hidden";
  }
}
