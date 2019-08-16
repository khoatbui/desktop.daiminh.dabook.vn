<template>
  <div class="toppackage" v-cloak v-if="componentLoaded">
    <div class="section text-left pt-0 pb-4">
      <h3 class="title text-left m-0">{{$t('padswithtour_title_h3')}}</h3>
      <div class="row p-0 m-0 ">
        <div class="col-12 p-0 m-0 d-flex justify-content-between align-items-center">
          <p>{{$t('padswithtour_body_h3')}}</p>
          <a class="link-des text-danger">
              {{$t('general_showmore')}}
              <font-awesome-icon icon="chevron-right" class="text-08 text-center" />
          </a>
        </div>
      </div>
      <div class="row p-0 m-0 d-flex align-items-stretch">
        <div class="col-8 m-0 p-1">
          <div class="card m-0 h-100 d-inline-block position-relative">
            <img class="card-img image-ads h-100" v-bind:class="{'small-loading-img':ads[0].adsImages.length==0}" v-bind:src="ads[0].adsImages.length>0?`/${ads[0].adsImages[0].filePath}`:'/img/defaultloading.gif'"
            v-bind:alt="ads[0].adsImages[0].fileName" />
          </div>
        </div>
        <div class="col-4 m-0 p-1">
          <div class="card  m-0 h-100 d-inline-block">
            <img class="card-img-top image-package"  v-bind:src="tourByLang[0].tourImages.length>0?`/webmp/${tourByLang[0].tourImages[0].filePath.slice(0, -3)}webp`:'/img/defaultloading.gif'"
          v-bind:alt="tourByLang[0].tourImages[0].fileName" />
             <div class="card-body p-2">
                <h6 class="card-title m-0 text-color-50 text-06">
               {{tourByLang[0].to}} | {{tourByLang[0].tourTypeId.tourTypeName}}</h6>
              <h6 class="card-title m-0">{{tourByLang[0].tourName}}</h6>
               <p class="card-text intro-package hidden-outof-text" v-html="tourByLang[0].tourIntro"></p>
              <h2 class="text-x1 price-text m-0">{{$t('general_from')}} {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tourByLang[0].price)}}</h2>
              <small class="text-muted m-0 text-success">{{$t('general_availablefrom')}} {{bookingDate}}</small>
            </div>
          </div>
        </div>
      </div>
      <carousel :per-page="5" :navigation-enabled="true" :paginationEnabled="false">
        <slide class="m-2" v-for="(pac,ides) in tourByLang" v-bind:key="ides">
          <div class="card  m-0 h-100 d-inline-block">
            <img class="card-img-top image-package"  v-bind:src="pac.tourImages.length>0?`/webmp/${pac.tourImages[0].filePath.slice(0, -3)}webp`:'/img/defaultloading.gif'"
          v-bind:alt="pac.tourImages[0].fileName" />
             <div class="card-body p-2">
                <h6 class="card-title m-0 text-color-50 text-06">
               {{pac.to}} | {{pac.tourTypeId.tourTypeName}}</h6>
              <h6 class="card-title m-0">{{pac.tourName}}</h6>
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
  name: 'AdsWithTourPromotionComponent',
  props: {
    msg: String,
  },
  data() {
    return {
      packages: [],
      ads:[],
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
      const response = await TourService.getTopPromotionTourPackage();
      this.packages = randomArray(response.data);
      const responseads = await AdsService.getAllAds();
      this.ads = randomArray(responseads.data);
      this.$store.commit('showHideLoading', false);
      this.componentLoaded = true;
    },
  },
  computed: {
    tourByLang() {
      if (this.componentLoaded === false) {
        return;
      }
      this.packages.forEach(element => {
        element.tourTypeId.tourTypeIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.tourTypeId.tourTypeName = area.tourTypeName;
            element.tourTypeId.tourTypeIntro= area.tourTypeIntro;
          }
        });
        element.tourIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.tourName = area.tourName;
            element.tourIntro= area.tourIntro;
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
