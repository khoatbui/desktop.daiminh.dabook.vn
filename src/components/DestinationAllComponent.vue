<template>
  <div class="destinationmain">
    <BackgroundHeaderComponent :destination="destination" ></BackgroundHeaderComponent>
    <div class="main-body">
      <div class="container pt-4" v-for="(area,i) in areaCountry" v-bind:key="i">
        <DestinationByAreaCountryComponent :area="area"></DestinationByAreaCountryComponent>
      </div>
      <div class="container pt-4">
        <HorizontalAdsComponent :adstype="'ANOTHER'"></HorizontalAdsComponent>
      </div>
      <div class="container pt-4">
        <HotelByDestinationComponent :destination="destination"></HotelByDestinationComponent>
      </div>
      <div class="container pt-4">
        <TourByDestinationComponent :isTitle="true" :paginationEnabled="false" :destination="destination"></TourByDestinationComponent>
      </div>
      <div class="container-fluid pt-4 px-0">
        <VideoComponent></VideoComponent>
      </div>
      <div class="container pt-4">
        <DestinationExplorerFilterComponent :destination="destination"></DestinationExplorerFilterComponent>
      </div>
      <div class="container pt-4">
        <TopHotelPromotionComponent></TopHotelPromotionComponent>
      </div>
      <div class="container pt-4">
        <IntroduceDaiMinhComponent></IntroduceDaiMinhComponent>
      </div>
      <div class="container pt-4">
        <TopTourPromotionComponent></TopTourPromotionComponent>
      </div>
      <div class="container pt-4">
        <AdsWithHotelPromotionComponent></AdsWithHotelPromotionComponent>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DestinationService from '@/api/DestinationService';
import AreaCountryService from '@/api/AreaCountryService';
import IntroDaiMinhComponent from '@/components/IntroDaiMinhComponent.vue';
import VideoComponent from '@/components/VideoComponent.vue';
import TopDestinationComponent from '@/components/TopDestinationComponent.vue';
import HotelByDestinationComponent from '@/components/HotelByDestinationComponent.vue';
import TourByDestinationComponent from '@/components/TourByDestinationComponent.vue';
import TopHotelPromotionComponent from '@/components/TopHotelPromotionComponent.vue';
import BackgroundHeaderComponent from '@/components/BackgroundHeaderComponent.vue';
import ThreeStepComponent from '@/components/ThreeStepComponent.vue';
import TopTourPromotionComponent from '@/components/TopTourPromotionComponent.vue';
import IntroduceDaiMinhComponent from '@/components/IntroduceDaiMinhComponent.vue';
import HorizontalAdsComponent from '@/components/HorizontalAdsComponent.vue';
import AdsWithHotelPromotionComponent from '@/components/AdsWithHotelPromotionComponent.vue';
import DestinationByAreaCountryComponent from '@/components/DestinationByAreaCountryComponent.vue';
import DestinationExplorerFilterComponent from '@/components/DestinationExplorerFilterComponent.vue';

export default {
  name: 'destinationmain',
  components: {
    IntroDaiMinhComponent,
    VideoComponent,
    TopDestinationComponent,
    HotelByDestinationComponent,
    TopHotelPromotionComponent,
    BackgroundHeaderComponent,
    ThreeStepComponent,
    TopTourPromotionComponent,
    IntroduceDaiMinhComponent,
    HorizontalAdsComponent,
    AdsWithHotelPromotionComponent,
    DestinationByAreaCountryComponent,
    TourByDestinationComponent,
    DestinationExplorerFilterComponent,
  },
  data() {
    return {
      destinationId:this.$route.query.destinationid,
      destination:{},
      areaCountry:[]
    };
  },
  mounted() {
         this.initial();
  },
  methods: {
      async initial() {
      this.$store.commit('showHideLoading', true);
      const response = await AreaCountryService.getAllAreaCountry();
      this.areaCountry =response.data;
      this.$store.commit('showHideLoading', false);
    }
  },
};
</script>
