<template>
  <div class="toppackage" v-if="componentLoaded">
    <div class="section text-left pt-0 pb-4">
      <h3 class="title text-left m-0">{{travelStyle.travelStyleName}}</h3>
      <div class="row p-0 m-0 d-flex justify-content-end align-items-center">
          <a class="link-des text-danger">
              {{$t('general_showmore')}}
              <font-awesome-icon icon="chevron-right" class="text-08 text-center" />
          </a>
      </div>
      <div class="row p-0 m-0 d-flex align-items-stretch">
        <div class="col-8 m-0 p-1">
          <div class="card m-0 h-100 d-inline-block position-relative">
            <img class="card-img image-ads h-100" v-bind:class="{'small-loading-img':travelStyle.travelStyleImages.length==0}" v-bind:src="travelStyle.travelStyleImages.length>0?`/webmp/${travelStyle.travelStyleImages[0].filePath.slice(0, -3)}webp`:'/img/defaultloading.gif'"
            v-bind:alt="travelStyle.travelStyleName" />
            <div class="card-body-center text-left">
              <h4 class="card-title text-white text-x2">{{travelStyle.travelStyleName}}</h4>
              <p class="card-text text-white"><b>200</b> {{$t('general_destination')}} | <b>50</b> {{$t('general_hotel')}} | <b>10</b> {{$t('general_tour')}}</p>
            </div>
          </div>
        </div>
        <div class="col-4 m-0 p-1">
          <div class="card  m-0 h-100 d-inline-block">
            <img class="card-img-top image-package" v-bind:class="{'small-loading-img':tour[0].tourImages.length==0}"  v-bind:src="tour[0].tourImages.length>0?`/webmp/${tour[0].tourImages[0].filePath.slice(0, -3)}webp`:'/img/defaultloading.gif'"
          v-bind:alt="tour[0].tourName" />
             <div class="card-body p-2">
                <h6 class="card-title m-0 text-color-50 text-06">
               {{tour[0].destinationId.destinationName}}</h6>
              <h6 class="card-title m-0 cursor-pointer"  @click="redirectToTour(tour[0])">{{tour[0].tourName}}</h6>
               <p class="card-text intro-package hidden-outof-text" v-html="tour[0].tourIntro"></p>
               <h2 class="text-x1 price-text m-0">{{$t('general_from')}} {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tour[0].price)}}</h2>
               <div class="row p-0 m-0 d-flex justify-content-between align-items-center">
                <small class="text-muted m-0 text-success">{{$t('general_update')}} {{bookingDate}}</small>
                <font-awesome-icon icon="arrow-right" class="text-1 text-center text-danger cursor-pointer" @click="redirectToTour(tour[0])"/>
               </div>
            </div>
          </div>
        </div>
      </div>
      <carousel :per-page="5" :navigation-enabled="true" :paginationEnabled="false">
        <slide class="m-2" v-for="(pac,ides) in tour" v-bind:key="ides">
          <div class="card card-package m-0 h-100 d-inline-block">
            <img class="card-img-top image-package" v-bind:class="{'small-loading-img':pac.tourImages.length==0}"  v-bind:src="pac.tourImages.length>0?`/webmp/${pac.tourImages[0].filePath.slice(0, -3)}webp`:'/img/defaultloading.gif'"
          v-bind:alt="pac.tourName" />
             <div class="card-body w-100 p-2">
              <h6 class="card-title m-0 text-color-50 text-06  d-flex justify-content-between align-items-center cursor-pointer"  @click="redirectToTourDetail(pac)">
               <span class="flex-grow">{{pac.destinationId.destinationName}}</span>
               <span class="badge badge-pill badge-danger shadow" v-if="pac.isHot"><font-awesome-icon icon="fire-alt" class="text-06 text-center" /></span>
               <span class="badge badge-pill badge-danger shadow" v-if="pac.isPromotion"><font-awesome-icon icon="tag" class="text-06 text-center" /><font-awesome-icon icon="percent" class="text-06 text-center" /></span>
              </h6>
              <h6 class="card-title m-0 cursor-pointer" @click="redirectToTourDetail(pac)">{{pac.tourName}}</h6>
              <div class="card-text intro-package hidden-outof-text" v-html="pac.tourIntro"></div>
              <h2 class="text-x1 price-text m-0">{{$t('general_from')}} {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(pac.price)}}</h2>
               <div class="row p-0 m-0 d-flex justify-content-between align-items-center">
                <small class="text-muted m-0 text-success">{{$t('general_update')}} {{moment(pac.createDate).format('YYYY.MM.DD')}}</small>
                <font-awesome-icon icon="arrow-right" class="text-1 text-center text-danger cursor-pointer" @click="redirectToTourDetail(pac)"/>
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
  name: 'TourByTravelStyleComponent',
  props: {
    travelStyle:{}
  },
  data() {
    return {
      tour: [],
      bookingDate: moment().format('MM-DD-YYYY'),
      moment:moment,
      componentLoaded:false,
    };
  },
  mounted() {
    this.initial();
  },
  methods: {
    async initial() {
      this.$store.commit('showHideLoading', true);
      const response = await TourService.getTourPackageByStyle(this.travelStyle._id);
      this.tour = randomArray(response.data);
      this.$store.commit('showHideLoading', false);
      this.componentLoaded = true;
    },
    redirectToTourDetail(des){
       this.$router.push(
        `/tourdetail?tourid=${des._id}`
      );
    }
  },
  computed: {
    tourByLang() {
      if (this.componentLoaded === false) {
        return;
      }
      this.tour.forEach(element => {
        element.tourIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.tourName = area.tourName;
            element.tourIntro= area.tourIntro;
          }
        });
      });
      return this.tour;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<travelStyle scoped lang="scss">
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

</travelStyle>
