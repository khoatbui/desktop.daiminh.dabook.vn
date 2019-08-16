<template>
  <div class="toppackage">
    <div class="section text-left pt-0 pb-4">
      <h3 class="title text-left m-0" v-if="isTitle">{{$t('ptophotelpackage_title_h3')}}</h3>
      <div class="row p-0 m-0 " v-if="isTitle">
        <div class="col-12 p-0 m-0 d-flex justify-content-between align-items-center">
          <p>{{$t('ptophotelpackage_title_body')}}</p>
          <a class="link-des text-danger" @click="redirectToAllHotel">
             {{$t('general_showmore')}}
              <font-awesome-icon icon="chevron-right" class="text-08 text-center" />
          </a>
        </div>
      </div>
      <carousel :per-page="5" :navigation-enabled="true" :paginationEnabled="paginationEnabled">
        <slide class="m-2" v-for="(pac,ides) in packageByLang" v-bind:key="ides">
          <div class="card  m-0 h-100 d-inline-block">
            <img class="card-img-top image-package"
            v-bind:class="{'small-loading-img':pac.roomTypeId.roomImages.length==0}"
            v-bind:src="pac.roomTypeId.roomImages.length>0?`/webmp/${pac.roomTypeId.roomImages[0].filePath.slice(0, -3)}webp`:'/img/defaultloading.gif'"
          v-bind:alt="pac.roomTypeId.roomImages[0].fileName" />
            <div class="card-body p-2">
               <h6 class="card-title m-0 text-color-50 text-06 d-flex justify-content-between align-items-center">
             <span><img class="img-supplier"
              v-bind:class="{'small-loading-img':pac.supplierId.supplierImages.length==0}"
              v-bind:src="pac.supplierId.supplierImages.length>0?`/webmp/${pac.supplierId.supplierImages[0].filePath.slice(0, -3)}webp`:'/img/defaultloading.gif'" alt="">
                 {{pac.supplierId.supplierName}}</span>
                 <span class="badge badge-pill badge-danger shadow" v-if="pac.isPromote"><font-awesome-icon icon="tag" class="text-06 text-center" /><font-awesome-icon icon="percent" class="text-06 text-center" /></span>
                 </h6>
              <h6 class="card-title m-0 cursor-pointer" @click="redirectToHotelPackageDetail(pac)">{{pac.hotelId.hotelName}}</h6>
              <p class="card-text intro-package hidden-outof-text" v-html="pac.roomTypeId.roomTypeName"></p>
              <small class="text-muted m-0"><font-awesome-icon icon="bolt" class=" mr-2 text-07"/>{{pac.hotelId.booked}} nguoi da dat</small>
              <p class="d-flex justify-content-between align-items-center"><span class="text-info text-07"><font-awesome-icon icon="star" v-for="star in pac.star" :key="star"/> ({{pac.view}} views)</span><h2 class="text-x1 price-text m-0">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(pac.price)}}</h2></p>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import i18n from "@/lang/i18n";
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
  name: 'TopHotelPackagePromotionComponent',
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
      componentLoaded:false,
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
      this.$store.commit('showHideLoading', false);
      this.componentLoaded = true
    },
    redirectToHotelPackageDetail(des){
       this.$router.push(
        `/hotelpackagedetail?hotelpackageid=${des._id}`
      );
    },
    redirectToAllHotel(){
       this.$router.push(
        `/hotel`
      );
    }
  },
  computed: {
    packageByLang() {
      if (this.componentLoaded === false) {
        return;
      }
      this.packages.forEach(element => {
        element.hotelId.hotelIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.hotelId.hotelName = area.hotelName;
            element.hotelId.hotelIntro= area.hotelIntro;
          }
        });
        element.roomTypeId.roomTypeIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.roomTypeId.roomTypeName = area.roomTypeName;
            element.roomTypeId.roomTypeIntro= area.roomTypeIntro;
          }
        });
      });
      return this.packages;
    },
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
