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
            <img class="card-img image-ads h-100"  v-bind:src="ads[0].adsImages.length>0?`/${ads[0].adsImages[0].filePath}`:'/img/defaultloading.gif'"
            v-bind:alt="ads[0].adsImages[0].fileName" />
            <div class="card-body-center text-left">
              <h4 class="card-title text-white text-x2">{{ads[0].adsName}}</h4>
              <p class="card-text text-white"  v-html="ads[0].adsIntro"></p>
              <small class="m-0 text-white">Chuong trinh keo dai den ngay {{bookingDate}}</small>
            </div>
          </div>
        </div>
        <div class="col-4 m-0 p-1">
          <div class="card  m-0 h-100 d-inline-block">
            <img class="card-img-top image-package"  v-bind:src="packages[0].roomTypeId.roomImages.length>0?`/${packages[0].roomTypeId.roomImages[0].filePath}`:'/img/defaultloading.gif'"
          v-bind:alt="packages[0].roomTypeId.roomImages[0].fileName" />
            <div class="card-body p-2">
               <h6 class="card-title m-0 text-color-50 text-06">
                <img class="img-supplier" v-bind:src="packages[0].supplierId.supplierImages.length>0?`/${packages[0].supplierId.supplierImages[0].filePath}`:'/img/defaultloading.gif'" alt="">
                 {{packages[0].supplierId.supplierName}}</h6>
              <h6 class="card-title m-0">{{packages[0].hotelId.hotelName}}</h6>
              <p class="card-text intro-package hidden-outof-text" v-html="packages[0].roomTypeId.roomTypeName"></p>
              <h2 class="text-x1 price-text m-0">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(packages[0].price)}}</h2>
              <small class="text-muted m-0 text-success">Có thể đặt từ ngày {{bookingDate}}</small>
            </div>
          </div>
        </div>
      </div>
      <carousel :per-page="5" :navigation-enabled="true" :paginationEnabled="false">
        <slide class="m-2" v-for="(pac,ides) in packages" v-bind:key="ides">
          <div class="card  m-0 h-100 d-inline-block">
            <img class="card-img-top image-package"  v-bind:src="pac.roomTypeId.roomTypeImages.length>0?`/${pac.roomTypeId.roomTypeImages[0].filePath}`:'/img/defaultloading.gif'"
          v-bind:alt="pac.roomTypeId.roomTypeImages[0].fileName" />
            <div class="card-body p-2">
               <h6 class="card-title m-0 text-color-50 text-06">
                <img class="img-supplier" v-bind:src="pac.supplierId.supplierImages.length>0?`/${pac.supplierId.supplierImages[0].filePath}`:'/img/defaultloading.gif'" alt="">
                 {{pac.supplierId.supplierName}}</h6>
              <h6 class="card-title m-0">{{pac.hotelId.hotelName}}</h6>
              <p class="card-text intro-package hidden-outof-text" v-html="pac.roomTypeId.roomTypeName"></p>
              <h2 class="text-x1 price-text m-0">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(pac.price)}}</h2>
              <small class="text-muted m-0 text-success">Có thể đặt từ ngày {{bookingDate}}</small>
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
import HotelService from '@/api/HotelService';
import AdsService from '@/api/AdsService';

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
  name: 'AdsWithHotelPromotionComponent',
  props: {
    msg: String,
  },
  data() {
    return {
      packages: [],
      ads:[],
      bookingDate: moment().format('MM-DD-YYYY'),
    };
  },
  mounted() {
    this.initial();
  },
  methods: {
    async initial() {
      this.$store.commit('showHideLoading', true);
      const response = await HotelService.getTopPromotionHotelPackage();
      this.packages = randomArray(response.data);
      const responseads = await AdsService.getAllAds();
      this.ads = randomArray(responseads.data);
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
