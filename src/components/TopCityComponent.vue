<template>
  <div class="topcity">
    <div class="section text-left pt-0 pb-4">
      <h2 class="title text-left">Top city</h2>
      <h5>Cùng Dabook bắt đầu hành trình của bạn</h5>
      <carousel :per-page="4" :navigation-enabled="true">
        <slide class="m-2" v-for="(city,ides) in citys" v-bind:key="ides">
          <div class="card m-0 h-100 d-inline-block position-relative">
            <img class="card-img image-city h-100"  v-bind:src="city.cityImages.length>0?`/${city.cityImages[0].filePath}`:'/img/defaultloading.gif'"
          v-bind:alt="city.cityImages[0].fileName" />
            <div class="card-body-bottom-left">
              <h4 class="card-title text-white">{{city.cityName}}</h4>
              <p class="card-text text-white"><b>15</b> điểm đến | <b>60</b> khách sạn </p>
            </div>
          </div>
        </slide>
      </carousel>
      <div class="row d-flex justify-content-end align-items-center">
        <a class="link-des">
          더보기
          <i class="fas fa-chevron-right"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import CityService from '@/api/CityService';

function randomArray(array) {
  const array2 = [];
  while (array.length !== 0) {
    const randomIndex = Math.floor(Math.random() * array.length);
    array2.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return array2;
}
export default {
  components: {
    Carousel,
    Slide,
  },
  name: 'TopCityComponent',
  props: {
    msg: String,
  },
  data() {
    return {
      citys: [],
      selectedPayment: {},
    };
  },
  mounted() {
    this.initial();
  },
  methods: {
    async initial() {
      this.$store.commit('showHideLoading', true);
      const response = await CityService.getTopCity();
      this.citys = randomArray(response.data);
      console.log(this.citys);
      this.$store.commit('showHideLoading', false);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.image-city{
    height: 280px;
}
.card-body-bottom-left{
    position:absolute;
    bottom: 10px;
    left: 10px;
    color: #FFFFFF;
}
</style>
