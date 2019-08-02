<template>
  <div class="toppackage">
    <div class="section text-left pt-0 pb-4">
      <h3 class="title text-left m-0">Cam hung du lich</h3>
      <div class="row p-0 m-0 ">
        <div class="col-12 p-0 m-0 d-flex justify-content-between align-items-center">
          <p>trai nghiem nhung dieu tuyet voi nhat tu Dabook</p>
          <a class="link-des text-danger">
              Xem thêm
              <font-awesome-icon icon="chevron-right" class="text-08 text-center" />
          </a>
        </div>
      </div>
      <div class="row p-0 m-0 d-flex align-items-stretch">
        <div class="col-8 m-0 p-1">
          <div class="card m-0 h-100 d-inline-block position-relative">
            <img class="card-img image-ads h-100"  v-bind:src="area.areaCountryImages.length>0?`/${area.areaCountryImages[0].filePath}`:'/img/defaultloading.gif'"
            v-bind:alt="area.areaCountryName" />
            <div class="card-body-center text-left">
              <h4 class="card-title text-white text-x2">{{area.areaCountryName}}</h4>
              <p class="card-text text-white"><b>200</b> diem den | <b>50</b> khach san | <b>10</b> tour</p>
              <small class="m-0 text-white">Chuong trinh keo dai den ngay {{bookingDate}}</small>
            </div>
          </div>
        </div>
        <div class="col-4 m-0 p-1">
          <div class="card  m-0 h-100 d-inline-block">
            <img class="card-img-top image-package"  v-bind:src="destination[0].destinationImages.length>0?`/${destination[0].destinationImages[0].filePath}`:'/img/defaultloading.gif'"
          v-bind:alt="destination[0].destinationName" />
             <div class="card-body p-2">
                <h6 class="card-title m-0 text-color-50 text-06">
               {{packages[0].cityId.cityName}}</h6>
              <h6 class="card-title m-0">{{destination[0].destinationName}}</h6>
               <p class="card-text intro-package hidden-outof-text" v-html="destination[0].destinationIntro"></p>
              <small class="text-muted m-0 text-success">Cap nhap tu {{bookingDate}}</small>
            </div>
          </div>
        </div>
      </div>
      <carousel :per-page="5" :navigation-enabled="true" :paginationEnabled="false">
        <slide class="m-2" v-for="(pac,ides) in destination" v-bind:key="ides">
          <div class="card  m-0 h-100 d-inline-block">
            <img class="card-img-top image-package"  v-bind:src="pac.destinationImages.length>0?`/${pac.destinationImages[0].filePath}`:'/img/defaultloading.gif'"
          v-bind:alt="pac.destinationName" />
             <div class="card-body p-2">
                <h6 class="card-title m-0 text-color-50 text-06">
               {{pac.cityId.cityName}}</h6>
              <h6 class="card-title m-0">{{pac.destinationName}}</h6>
               <p class="card-text intro-package hidden-outof-text" v-html="pac.destinationIntro"></p>
              <small class="text-muted m-0 text-success">Cap nhap tu {{bookingDate}}</small>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import moment from 'moment';
import DestinationService from '@/api/DestinationService';

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
  name: 'DestinationByAreaCountryComponent',
  props: {
    area:{}
  },
  data() {
    return {
      destination: [],
      selectedPayment: {},
      bookingDate: moment().format('MM-DD-YYYY'),
    };
  },
  mounted() {
    this.initial();
  },
  methods: {
    async initial() {
      this.$store.commit('showHideLoading', true);
      console.log(this.area);
      const response = await DestinationService.getDestinationByAreaCountry(this.area._id);
      this.destination = randomArray(response.data);
      console.log(this.destination);
      this.$store.commit('showHideLoading', false);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-package{
    width: 220px;
}
.intro-package{
    width: 100px;
}
.image-package{
    height: 200px;
}
.price-text{
  font-weight: 900;
}
.img-supplier{
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border:none
}
.image-ads{
    height: 350px !important;
}
.card-body-center{
  position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #FFFFFF;
}
</style>
