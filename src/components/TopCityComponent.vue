<template>
  <div class="topcity">
    <div class="section text-left pt-0 pb-4">
      <h3 class="title text-left m-0">{{$t('ptopcity_title_h3')}}</h3>
      <div class="row p-0 m-0 ">
        <div class="col-12 p-0 m-0 d-flex justify-content-between align-items-center">
          <p>{{$t('ptopcity_title_explain')}}</p>
          <a class="link-des text-danger" @click="redirectToAllCity">
              {{$t('general_showmore')}}
              <font-awesome-icon icon="chevron-right" class="text-08 text-center" />
          </a>
        </div>
      </div>
      <carousel :per-page="5" :navigation-enabled="true">
        <slide class="m-2" v-for="(city,ides) in citys" v-bind:key="ides">
          <div class="card m-0 h-100 d-inline-block position-relative">
            <img class="card-img image-city h-100 cursor-pointer"
             v-bind:class="{'small-loading-img':city.cityImages.length==0}"
            v-bind:src="city.cityImages.length>0?`/smimg/${city.cityImages[0].filePath.slice(0, -3)}jpg`:'/img/defaultloading.gif'"
            v-bind:alt="city.cityImages[0].fileName" 
            @click="redirectToCity(city)"/>
            <div class="card-body-bottom-left text-left" >
              <h4 class="card-title text-white" @click="redirectToCity(city)">{{city.cityName}}</h4>
              <p class="card-text text-white"><b>15</b> {{$t('general_destination')}} | <b>60</b> {{$t('general_hotel')}} </p>
            </div>
          </div>
        </slide>
      </carousel>
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
      this.$store.commit('showHideLoading', false);
    },
    redirectToCity(des) {
       this.$router.push(
        `/city/detail?cityid=${des._id}`
      );
    },
    redirectToAllCity(des) {
       this.$router.push(
        `/city`
      );
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.image-city{
    height: 350px;
}
.card-body-bottom-left{
    position:absolute;
    bottom: 10px;
    left: 10px;
    color: #FFFFFF;
    z-index: 3;
}
.position-relative{
    overflow: hidden;
}
.position-relative::after,.position-relative::before{
    position: absolute;
    bottom:0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-image: linear-gradient(0deg, #111 0%, #111 100%);
    z-index: 2;
    opacity: 0.15;
}
</style>
