<template>
  <div class="destination">
    <DestinationBackgroundHeaderComponent :destination="destination" ></DestinationBackgroundHeaderComponent>
    <NavigationComponent></NavigationComponent>
    <div class="main-body">
      <div class="container pt-4">
        <DestinationIntroduceComponent :destination="destination"></DestinationIntroduceComponent>
      </div>
      <div class="container pt-4">
        <HorizontalAdsComponent :adstype="'ANOTHER'"></HorizontalAdsComponent>
      </div>
      <div class="container pt-4">
        <TopCityComponent></TopCityComponent>
      </div>
      <div class="container pt-4">
        <TopDestinationComponent></TopDestinationComponent>
      </div>
      <div class="container-fluid pt-4 px-0">
        <VideoComponent></VideoComponent>
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
      <div class="container pt-4">
        <IntroDaiMinhComponent></IntroDaiMinhComponent>
      </div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import DestinationService from '@/api/DestinationService';

import NavigationComponent from '@/components/NavigationComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import IntroDaiMinhComponent from '@/components/IntroDaiMinhComponent.vue';
import VideoComponent from '@/components/VideoComponent.vue';
import TopDestinationComponent from '@/components/TopDestinationComponent.vue';
import TopCityComponent from '@/components/TopCityComponent.vue';
import TopHotelPromotionComponent from '@/components/TopHotelPromotionComponent.vue';
import DestinationBackgroundHeaderComponent from '@/components/DestinationBackgroundHeaderComponent.vue';
import ThreeStepComponent from '@/components/ThreeStepComponent.vue';
import TopTourPromotionComponent from '@/components/TopTourPromotionComponent.vue';
import IntroduceDaiMinhComponent from '@/components/IntroduceDaiMinhComponent.vue';
import HorizontalAdsComponent from '@/components/HorizontalAdsComponent.vue';
import AdsWithHotelPromotionComponent from '@/components/AdsWithHotelPromotionComponent.vue';
import DestinationIntroduceComponent from '@/components/DestinationIntroduceComponent.vue';

export default {
  name: 'DestinationView',
  components: {
    NavigationComponent,
    FooterComponent,
    IntroDaiMinhComponent,
    VideoComponent,
    TopDestinationComponent,
    TopCityComponent,
    TopHotelPromotionComponent,
    DestinationBackgroundHeaderComponent,
    ThreeStepComponent,
    TopTourPromotionComponent,
    IntroduceDaiMinhComponent,
    HorizontalAdsComponent,
    AdsWithHotelPromotionComponent,
    DestinationIntroduceComponent,
  },
  data() {
    return {
      destinationId:this.$route.query.destinationid,
      destination:{},
    };
  },
  mounted() {
         this.initial();
  },
  methods: {
      async initial() {
      this.$store.commit('showHideLoading', true);
      const response = await DestinationService.getDestinationById(this.destinationId);
      this.destination =response.data;
      console.log(this.destination);
      this.$store.commit('showHideLoading', false);
    }
  },
};
</script>
