<template>
  <div class="toppackage" v-if="componentLoaded">
    <div class="section text-left pt-0 pb-4">
      <h3 class="title text-left m-0">{{areaByLang.areaCountryName}}</h3>
      <div class="row p-0 m-0 ">
        <div class="col-12 p-0 m-0 d-flex justify-content-between align-items-center">
          <div v-html="areaByLang.areaCountryIntro"></div>
          <a class="link-des text-danger cursor-pointer" @click="redirectToAllDestination">
              {{$t('general_showmore')}}
              <font-awesome-icon icon="chevron-right" class="text-08 text-center" />
          </a>
        </div>
      </div>
      <div class="row p-0 m-0 d-flex align-items-stretch">
        <div class="col-8 m-0 p-1">
          <div class="card m-0 h-100 d-inline-block position-relative">
            <img class="card-img image-ads h-100" v-bind:class="{'small-loading-img':areaByLang.areaCountryImages.length==0}" v-bind:src="areaByLang.areaCountryImages.length>0?`/smimg/${areaByLang.areaCountryImages[0].filePath.slice(0, -3)}jpg`:'/img/defaultloading.gif'"
            v-bind:alt="areaByLang.areaCountryName"/>
            <div class="card-body-center text-left">
              <h4 class="card-title text-white text-x2">{{areaByLang.areaCountryName}}</h4>
              <p class="card-text text-white"><b>200</b> {{$t('general_destination')}} | <b>50</b> {{$t('general_hotel')}} | <b>10</b> {{$t('general_tour')}}</p>
              <small class="m-0 text-white">{{$t('pdestinationbyarea_body')}} {{bookingDate}}</small>
            </div>
          </div>
        </div>
        <div class="col-4 m-0 p-1">
          <div class="card  m-0 h-100 d-inline-block">
            <img class="card-img-top image-package cursor-pointer" v-bind:class="{'small-loading-img':destinationByLang[0].destinationImages.length==0}"  v-bind:src="destinationByLang[0].destinationImages.length>0?`/smimg/${destinationByLang[0].destinationImages[0].filePath.slice(0, -3)}jpg`:'/img/defaultloading.gif'"
          v-bind:alt="destinationByLang[0].destinationName"  @click="redirectToDestination(destinationByLang[0])"/>
             <div class="card-body p-2">
                <h6 class="card-title m-0 text-color-50 text-06">
               {{destinationByLang[0].cityId.cityName}}</h6>
              <h6 class="card-title m-0 cursor-pointer" @click="redirectToDestination(destinationByLang[0])">{{destinationByLang[0].destinationName}}</h6>
               <p class="card-text intro-package hidden-outof-text" v-html="destinationByLang[0].destinationIntro"></p>
              <div class="row p-0 m-0 d-flex justify-content-between align-items-center">
                <small class="text-muted m-0 text-success">{{$t('general_update')}} {{bookingDate}}</small>
                <font-awesome-icon icon="arrow-right" class="text-1 text-center text-danger cursor-pointer" @click="redirectToDestination(destinationByLang[0])"/>
               </div>
            </div>
          </div>
        </div>
      </div>
      <carousel :per-page="5" :navigation-enabled="true" :paginationEnabled="false">
        <slide class="m-2" v-for="(pac,ides) in destinationByLang" v-bind:key="ides">
          <div class="card card-package m-0 h-100 d-inline-block">
            <img class="card-img-top image-package" v-bind:class="{'small-loading-img':pac.destinationImages.length==0}"  v-bind:src="pac.destinationImages.length>0?`/smimg/${pac.destinationImages[0].filePath.slice(0, -3)}jpg`:'/img/defaultloading.gif'"
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
                <small class="text-muted m-0 text-success">{{$t('general_update')}} {{moment(pac.createDate).format('YYYY.MM.DD')}}</small>
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
import i18n from "@/lang/i18n";
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
      moment:moment,
      componentLoaded: false
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
      this.componentLoaded =true;
    },
    redirectToDestination(des){
       this.$router.push(
        `/destination/detail?destinationid=${des._id}`
      );
    },
    redirectToAllDestination () {
      this.$router.push(
        `/destination`
      );
    }
  },
  computed: {
    destinationByLang() {
      if (this.componentLoaded === false) {
        return;
      }
      this.destination.forEach(element => {
        element.destinationIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.destinationName = area.destinationName;
            element.destinationIntro= area.destinationIntro;
          }
        });
      });
      return this.destination;
    },
    areaByLang() {
      console.log(this.area);
      this.area.areaCountryIntros.forEach(ar => {
        if (ar.lang.toUpperCase() === i18n.locale.toUpperCase()) {
          this.area.areaCountryName = ar.areaCountryName;
          this.area.areaCountryIntro= ar.areaCountryIntro;
        }
      });
      return this.area;
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
