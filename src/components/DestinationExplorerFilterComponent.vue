<template>
  <div class="toppackage">
    <div class="section text-left pt-0 pb-4">
      <h3 class="title text-left m-0">{{getTitle}}</h3>
      <div class="row m-2 p-0 bg-white border border-radius-none text-08">
        <div class="col-6 border-right border-bottom m-0 p-2">
          <span>Dia diem</span> <span class="ml-auto">{{destination.destinationName}}</span>
        </div>
        <div class="col-6 border-bottom d-flex justify-content-between m-0 p-2">
          <span>Loc theo the loai</span> <span><font-awesome-icon icon="chevron-down" class="text-center ml-auto" /></span>
        </div>
        <div class="col-3  d-flex justify-content-between  border-right m-0 p-2">
          <span>Co the dat </span> <span><font-awesome-icon icon="chevron-down" class="text-center" /></span>
        </div>
         <div class="col-3  d-flex justify-content-between border-right m-0 p-2">
          <span>Muc gia </span> <span><font-awesome-icon icon="chevron-down" class="text-center" /></span>
        </div>
         <div class="col-3  d-flex justify-content-between border-right m-0 p-2">
          <span>Promotion </span> <span><font-awesome-icon icon="chevron-down" class="text-center" /></span>
        </div>
        <div class="col-3  d-flex justify-content-between m-0 p-2">
          <span>Sap xep theo </span> <span><font-awesome-icon icon="chevron-down" class="text-center" /></span>
        </div>
      </div>
      <div class="row m-0 p-0 pt-3 d-flex flex-wrap justify-content-start align-items-stretch">
          <div class="card filter-card m-2 h-100 d-inline-block" v-for="(pac,ides) in packages" v-bind:key="ides">
            <img class="card-img-top image-package"  v-bind:src="pac.roomTypeId.roomImages.length>0?`/${pac.roomTypeId.roomImages[0].filePath}`:'/img/defaultloading.gif'"
          v-bind:alt="pac.roomTypeId.roomImages[0].fileName" />
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
          <div class="card filter-card m-2 h-100 d-inline-block" v-for="(pac,ideas) in tours" v-bind:key="ideas">
            <img class="card-img-top image-package"  v-bind:src="pac.tourImages.length>0?`/${pac.tourImages[0].filePath}`:'/img/defaultloading.gif'"
          v-bind:alt="pac.tourImages[0].fileName" />
            <div class="card-body p-2">
                <h6 class="card-title m-0 text-color-50 text-06">
               {{pac.to}} | {{pac.tourTypeId.tourTypeName}}</h6>
              <h6 class="card-title m-0">{{pac.tourName}}</h6>
               <p class="card-text intro-package hidden-outof-text" v-html="pac.tourIntro"></p>
              <h2 class="text-x1 price-text m-0">from {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(pac.price)}}</h2>
              <small class="text-muted m-0 text-success">Có thể đặt từ ngày {{bookingDate}}</small>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import moment from 'moment';
import HotelService from '@/api/HotelService';
import TourService from '@/api/TourService';


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
  name: 'DestinationExplorerFilterComponent',
  props: {
    msg: String,
    destination:{},
  },
  data() {
    return {
      packages: [],
      tours:[],
      bookingDate: moment().format('MM-DD-YYYY'),
      title: "Top hotel promotion today",
    };
  },
  mounted() {
      if (typeof this.destination._id !=='undefined' && this.destination._id !== "") {
        this.initialByDestination(this.destination._id);
        this.title = `Lam gi khi den ${this.destination.destinationName}`
      }
      else {
        this.initial();
      }
  },
  methods: {
    async initial() {
      this.$store.commit('showHideLoading', true);
      const response = await HotelService.getTopPromotionHotelPackage();
      this.packages = randomArray(response.data);
      const responsetour = await TourService.getTopPromotionTourPackage();
      this.tours = randomArray(responsetour.data);
      this.$store.commit('showHideLoading', false);
    },
    async initialByDestination(destinationId) {
      this.$store.commit('showHideLoading', true);
      const response = await HotelService.getHotelPackageByDestination(destinationId);
      this.packages = randomArray(response.data);
      const responsetour = await TourService.getTourPackageByDestination(destinationId);
      this.tours = randomArray(responsetour.data);
      this.$store.commit('showHideLoading', false);
    },
  },
  computed: {
      getTitle() {
           if (typeof this.destination._id !=='undefined' && this.destination._id !== "") {
               return `Hot hotel in ${this.destination.destinationName}`
           }
           else {
               return 'Du lich cung chung toi'
           }
      },
  }
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
.filter-card{
  width: 23% !important;
  max-height: 340px;
  min-height: 340px;
  flex-grow: 1 !important;
}
</style>
