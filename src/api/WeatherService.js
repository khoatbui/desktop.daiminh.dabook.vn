import axios from 'axios';

const Weather = {
  getAllWeather() {
    return axios.get('http://103.237.144.222:3000/weather/getused');
  },
  getWeatherById(parram) {
    return axios.get(`http://103.237.144.222:3000/weather/m/getweatherbyid/${parram}`);
  },
  getWeatherByCity(city) {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=c49f2a5b07ce03250befb407c4410be3`);
  },
  get5DayWeatherByCityId(city) {
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${city}&units=metric&APPID=c49f2a5b07ce03250befb407c4410be3`);
  },
};

export default Weather;
