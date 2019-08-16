<template>
  <div class="toppackage" v-cloak v-if="packages.length>0">
    <div class="section text-left pt-0 pb-4">
      <h3 class="title text-left m-0" v-if="isTitle">{{getTitle}}</h3>
      <div class="row p-0 m-0 d-flex justify-content-end align-items-center" v-if="isTitle">
          <a class="link-des text-danger">
              {{$t('general_showmore')}}
              <font-awesome-icon icon="chevron-right" class="text-08 text-center" />
          </a>
      </div>
      <carousel :per-page="5" :navigation-enabled="true" :paginationEnabled="paginationEnabled">
        <slide class="m-2" v-for="(pac,ides) in packages" v-bind:key="ides">
          <div class="card  m-0 h-100 d-inline-block">
            <img class="card-img-top image-package"  v-bind:src="pac.tourImages.length>0?`/webmp/${pac.tourImages[0].filePath.slice(0, -3)}webp`:'/img/defaultloading.gif'"
          v-bind:alt="pac.tourImages[0].fileName" />
            <div class="card-body p-2">
                <h6 class="card-title m-0 text-color-50 text-06 d-flex justify-content-between align-items-center">
               <span>{{pac.to}} | {{pac.tourTypeId.tourTypeName}}</span> <span class="badge badge-pill badge-danger shadow"><font-awesome-icon icon="umbrella-beach" class="text-06 text-center" /></span></h6>
              <h6 class="card-title m-0 cursor-pointer" @click="redirectToTourDetail(pac)">{{pac.tourName}}</h6>
               <p class="card-text intro-package hidden-outof-text" v-html="pac.tourIntro"></p>
              <h2 class="text-x1 price-text m-0">{{$t('general_from')}} {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(pac.price)}}</h2>
              <small class="text-muted m-0 text-success">{{$t('general_availablefrom')}} {{bookingDate}}</small>
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
  name: 'TopTourComponent',
  props: {
    msg: String,
    isTitle:true,
    paginationEnabled:true,
    destination:{},
  },
  data() {
    return {
      packages: [],
      selectedPayment: {},
      bookingDate: moment().format('MM-DD-YYYY'),
      componentLoaded:false
    };
  },
  mounted() {
      if (typeof this.destination._id !=='undefined' && this.destination._id !== "") {
        this.initialByDestination(this.destination._id);
        this.title = `Hot tour in ${this.destination.destinationName}`
      }
      else {
        this.initial();
      }
  },
  methods: {
    async initial() {
      this.$store.commit('showHideLoading', true);
      const response = await TourService.getTopPromotionTourPackage();
      this.packages = randomArray(response.data);
      this.$store.commit('showHideLoading', false);
      this.componentLoaded=true;
    },
    async initialByDestination(destinationId) {
      this.$store.commit('showHideLoading', true);
      const response = await TourService.getTourPackageByDestination();
      this.packages = randomArray(response.data);
      this.$store.commit('showHideLoading', false);
      this.componentLoaded=true;
    },
    redirectToTourDetail(des){
       this.$router.push(
        `/tourdetail?tourid=${des._id}`
      );
    }
  },
  computed: {
      getTitle() {
           if (typeof this.destination._id !=='undefined' && this.destination._id !== "") {
               return `Hot tour in ${this.destination.destinationName}`
           }
           else {
               return 'Top tour promotion today'
           }
      },
      tourByLang() {
      if (this.componentLoaded === false) {
        return;
      }
      this.packages.forEach(element => {
        element.tourIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.tourName = area.tourName;
            element.tourIntro= area.tourIntro;
          }
        });
      });
      return this.packages;
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
   min-width: 100px;
   max-width: 200px;
}
.image-package{
    height: 180px;
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
