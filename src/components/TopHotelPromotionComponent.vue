<template>
  <div class="toppackage">
    <div class="section text-left pt-0 pb-4">
      <h3 class="title text-left m-0" v-if="isTitle">Top hotel promotion today</h3>
      <div class="row p-0 m-0 " v-if="isTitle">
        <div class="col-12 p-0 m-0 d-flex justify-content-between align-items-center">
          <p>Cung kham pha nhung khach san va resort 5* noi tieng</p>
          <a class="link-des text-danger">
              Xem thêm
              <font-awesome-icon icon="chevron-right" class="text-08 text-center" />
          </a>
        </div>
      </div>
      <carousel :per-page="5" :navigation-enabled="true" :paginationEnabled="paginationEnabled">
        <slide class="m-2" v-for="(pac,ides) in packages" v-bind:key="ides">
          <div class="card  m-0 h-100 d-inline-block">
            <img class="card-img-top image-package"
            v-bind:class="{'small-loading-img':pac.hotelImages.length==0}"
            v-bind:src="pac.hotelImages.length>0?`/webmp/${pac.hotelImages[0].filePath.slice(0, -3)}webp`:'/img/defaultloading.gif'"
          v-bind:alt="pac.hotelImages[0].fileName" />
            <div class="card-body p-2">
               <h6 class="card-title m-0 text-color-50 text-06 d-flex justify-content-between align-items-center">
             <span><img class="img-supplier"
              v-bind:class="{'small-loading-img':pac.supplierId.supplierImages.length==0}"
              v-bind:src="pac.supplierId.supplierImages.length>0?`/webmp/${pac.supplierId.supplierImages[0].filePath.slice(0, -3)}webp`:'/img/defaultloading.gif'" alt="">
                 {{pac.supplierId.supplierName}}</span>
                 <span class="badge badge-pill badge-danger shadow" v-if="pac.isPromote"><font-awesome-icon icon="tag" class="text-06 text-center" /><font-awesome-icon icon="percent" class="text-06 text-center" /></span>
                 </h6>
              <h6 class="card-title m-0 cursor-pointer" @click="redirectToHotelDetail(pac)">{{pac.hotelName}}</h6>
              <p class="text-muted text-07 mb-0"><font-awesome-icon icon="map-marker-alt" class=" mr-2 text-07"/>{{pac.cityId.cityName}}</p>
              <p class="text-muted text-07 mb-0"><font-awesome-icon icon="bolt" class=" mr-2 text-07"/>{{pac.booked}} nguoi da dat</p>
              <p class="d-flex justify-content-between align-items-center"><span class="text-info text-07"><font-awesome-icon icon="star" v-for="star in pac.star" :key="star"/> ({{pac.view}} views)</span>
              <font-awesome-icon
                          icon="arrow-right"
                          class="text-1 text-center text-danger cursor-pointer"
                          @click="redirectToHotelDetail(pac)"
                        />
              </p>
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
  name: 'TopHotelComponent',
  props: {
    msg: String,
    isTitle:true,
    paginationEnabled:true,
  },
  data() {
    return {
      packages: [],
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
      const response = await HotelService.getTopPromotionHotel();
      this.packages = randomArray(response.data);
      this.$store.commit('showHideLoading', false);
    },
    redirectToHotelDetail(des){
       this.$router.push(
        `/hoteldetail?hotelid=${des._id}`
      );
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-package{
    width: 220px;
    overflow: hidden;
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
</style>
