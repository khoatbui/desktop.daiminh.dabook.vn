<template>
  <div class="toppackage">
    <div class="section text-left pt-0 pb-4">
      <h3 class="title text-left m-0">{{area.areaCountryName}}</h3>
      <div class="row p-0 m-0 ">
        <div class="col-12 p-0 m-0 d-flex justify-content-between align-items-center">
          <div v-html="area.areaCountryIntro"></div>
          <a class="link-des text-danger">
              Xem thêm
              <font-awesome-icon icon="chevron-right" class="text-08 text-center" />
          </a>
        </div>
      </div>
      <div class="row p-0 m-0 d-flex align-items-stretch">
        <div class="col-8 m-0 p-1">
          <div class="card m-0 h-100 d-inline-block position-relative">
            <img class="card-img image-ads h-100" v-bind:class="{'small-loading-img':area.areaCountryImages.length==0}" v-bind:src="area.areaCountryImages.length>0?`/${area.areaCountryImages[0].filePath}`:'/img/defaultloading.gif'"
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
            <img class="card-img-top image-package" v-bind:class="{'small-loading-img':destination[0].destinationImages.length==0}"  v-bind:src="destination[0].destinationImages.length>0?`/webmp/${destination[0].destinationImages[0].filePath.slice(0, -3)}webp`:'/img/defaultloading.gif'"
          v-bind:alt="destination[0].destinationName" />
             <div class="card-body p-2">
                <h6 class="card-title m-0 text-color-50 text-06">
               {{destination[0].cityId.cityName}}</h6>
              <h6 class="card-title m-0 cursor-pointer" @click="redirectToDestination(destination[0])">{{destination[0].destinationName}}</h6>
               <p class="card-text intro-package hidden-outof-text" v-html="destination[0].destinationIntro"></p>
              <div class="row p-0 m-0 d-flex justify-content-between align-items-center">
                <small class="text-muted m-0 text-success">Cap nhap tu {{bookingDate}}</small>
                <font-awesome-icon icon="arrow-right" class="text-1 text-center text-danger cursor-pointer" @click="redirectToDestination(destination[0])"/>
               </div>
            </div>
          </div>
        </div>
      </div>
      <carousel :per-page="5" :navigation-enabled="true" :paginationEnabled="false">
        <slide class="m-2" v-for="(pac,ides) in destination" v-bind:key="ides">
          <div class="card card-package m-0 h-100 d-inline-block">
            <img class="card-img-top image-package" v-bind:class="{'small-loading-img':pac.destinationImages.length==0}"  v-bind:src="pac.destinationImages.length>0?`/webmp/${pac.destinationImages[0].filePath.slice(0, -3)}webp`:'/img/defaultloading.gif'"
          v-bind:alt="pac.destinationName" />
             <div class="card-body w-100 p-2">
              <h6 class="card-title m-0 text-color-50 text-06  d-flex justify-content-between align-items-center">
               <span class="flex-grow">{{pac.cityId.cityName}}</span>
               <span class="badge badge-pill badge-danger shadow" v-if="pac.isHot"><font-awesome-icon icon="fire-alt" class="text-06 text-center" /></span>
               <span class="badge badge-pill badge-danger shadow" v-if="pac.isPromotion"><font-awesome-icon icon="tag" class="text-06 text-center" /><font-awesome-icon icon="percent" class="text-06 text-center" /></span>
              </h6>
              <h6 class="card-title m-0 cursor-pointer" @click="redirectToDestination(pac)">{{pac.destinationName}}</h6>
              <div class="card-text intro-package hidden-outof-text" v-html="pac.destinationIntro"></div>
              <div class="row p-0 m-0 d-flex justify-content-between align-items-center">
                <small class="text-muted m-0 text-success">Cap nhap tu {{moment(pac.createDate).format('YYYY.MM.DD')}}</small>
                <font-awesome-icon icon="arrow-right" class="text-1 text-center text-danger cursor-pointer" @click="redirectToDestination(pac)"/>
               </div>
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
      moment:moment
    };
  },
  mounted() {
    this.initial();
  },
  methods: {
    async initial() {
      this.$store.commit('showHideLoading', true);
      const response = await DestinationService.getDestinationByAreaCountry(this.area._id);
      this.destination = randomArray(response.data);
      this.$store.commit('showHideLoading', false);
    },
    redirectToDestination(des){
       this.$router.push(
        `/destination/detail?destinationid=${des._id}`
      );
    }
  },
  computed: {
    destinationByLang() {
      return this.destination;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-package{
    width: 220px;
    overflow: hidden;
}
.intro-package{
    width: 280px;
    height: 3em;
    line-height: 1.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
.flex-grow{
  flex-grow: 1 !important;
}

</style>
