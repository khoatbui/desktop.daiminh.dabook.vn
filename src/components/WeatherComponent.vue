<template>
  <div class="weather" v-if="componentLoaded">
    <div class="card weather-card m-0 h-100">
      <div class="card-body text-08">
        <div class="row">
          <div class="col-4 text-right">
            <img
              :src="`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`"
              alt
            />
          </div>
          <div class="col-8 text-left d-flex flex-column justify-content-center align-items-center">
            <p class="text-x1 mb-0 font-weight-bold">
              <span class="text-muted text-06 pr-2">{{currentWeather.main.temp_min}} &deg;</span>
              <span class="pr-2 text-x1">{{currentWeather.main.temp}} &deg;</span>
              <span class="text-muted text-06">{{currentWeather.main.temp_max}}&deg;</span>
            </p>
            <p class="text-08">{{currentDate}}(Gio dia phuong)</p>
          </div>
        </div>
      </div>
      <div class="card-footer position-relative bg-transparent border-success text-center">
        <small class="border-top text-center m-0 text-center w-100 cursor-pointer" @click="showHide5Day">
          Xem thoi tiet 7 ngay tiep theo
          <font-awesome-icon icon="chevron-down" class="text-center" />
        </small>
      <div class="absolute-card card" v-show="isShow5Day">
        <div class="card-body">
            <div class="row align-items-center" v-for="(weatherday,i) in weather5Day.list" v-bind:key="'weather'+i">
                <div class="col-4 text-08">
                    {{moment(weatherday.dt_txt).format('DD/MM HH:MM')}}
                </div>
                <div class="col-4 text-08">
                    <img
              :src="`http://openweathermap.org/img/wn/${weatherday.weather[0].icon}.png`"
              alt
            />
                </div>
                 <div class="col-4 text-08">
                    {{weatherday.main.temp}} &deg;
                </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherService from "@/api/WeatherService";
import moment from "moment";

export default {
  components: {},
  name: "WeatherComponent",
  props: {
    msg: String
  },
  data() {
    return {
        moment:moment,
        componentLoaded: false,
        currentWeather: {},
        weather5Day: {},
        currentDate: moment().format("MM-DD-YYYY HH:MM"),
        isShow5Day:false,
    };
  },
  mounted() {
    this.initial();
  },
  methods: {
    async initial() {
      const response = await WeatherService.getWeatherByCity("HALONG");
      this.currentWeather = response.data;
      const respon5day = await WeatherService.get5DayWeatherByCityId("1581129");
      this.weather5Day = respon5day.data;
      this.componentLoaded = true;
    },
    showHide5Day(){
        this.isShow5Day=!this.isShow5Day
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.weather-card{
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
.absolute-card{
    position: absolute;
    left: 0;
    width: 100%;
    top: 11px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    z-index: 1 !important;
    max-height: 300px;
    overflow: hidden;
    overflow-y: scroll;
}
</style>
