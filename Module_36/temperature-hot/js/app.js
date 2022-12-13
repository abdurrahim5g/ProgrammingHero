/**
 *
 *
 * In this file i will write the open weather api display
 */

const loadWeatherByCityName = async (city) => {
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPI}&units=metric`;
  try {
    const res = await fetch(endpoint);
    const data = await res.json();

    if (data.cod === 200) {
      displayWeather(data);
    } else {
      alert("Please input valid city name");
    }
  } catch (error) {
    console.log(error);
  }
};
loadWeatherByCityName("Jessore");

const displayWeather = (data) => {
  //   console.log(data);
  const cityName = document.getElementById("cityName");
  const temperature = document.getElementById("temperature");
  const secuation = document.getElementById("secuation");

  cityName.innerHTML = data.name;
  temperature.innerHTML = data.main.temp;
  secuation.innerHTML = data.weather[0].main;
};

const submitCity = document.getElementById("submitCity");
submitCity.addEventListener("click", () => {
  getCity();
});

const getCity = () => {
  const cityField = document.getElementById("cityField");
  const cityValue = cityField.value;

  loadWeatherByCityName(cityValue);
  cityField.value = "";
  return false;
};

document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    getCity();
  }
});
