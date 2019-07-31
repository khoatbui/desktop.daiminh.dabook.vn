<template>
  <div class="home">
   <BackgroundHeaderComponent></BackgroundHeaderComponent>
    <NavigationComponent></NavigationComponent>
    <div class="main-body">
      <div class="container-fluid p-0">
        <ThreeStepComponent></ThreeStepComponent>
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
      <div class="container-fluid px-0 pt-4">
        <IntroduceDaiMinhComponent></IntroduceDaiMinhComponent>
      </div>
      <div class="container pt-4">
        <TopTourPromotionComponent></TopTourPromotionComponent>
      </div>
      <div class="container pt-4">
        <IntroDaiMinhComponent></IntroDaiMinhComponent>
      </div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationComponent from '@/components/NavigationComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import IntroDaiMinhComponent from '@/components/IntroDaiMinhComponent.vue';
import VideoComponent from '@/components/VideoComponent.vue';
import TopDestinationComponent from '@/components/TopDestinationComponent.vue';
import TopCityComponent from '@/components/TopCityComponent.vue';
import TopHotelPromotionComponent from '@/components/TopHotelPromotionComponent.vue';
import BackgroundHeaderComponent from '@/components/BackgroundHeaderComponent.vue';
import ThreeStepComponent from '@/components/ThreeStepComponent.vue';
import TopTourPromotionComponent from '@/components/TopTourPromotionComponent.vue';
import IntroduceDaiMinhComponent from '@/components/IntroduceDaiMinhComponent.vue';

export default {
  name: 'home',
  components: {
    NavigationComponent,
    FooterComponent,
    IntroDaiMinhComponent,
    VideoComponent,
    TopDestinationComponent,
    TopCityComponent,
    TopHotelPromotionComponent,
    BackgroundHeaderComponent,
    ThreeStepComponent,
    TopTourPromotionComponent,
    IntroduceDaiMinhComponent,
  },
};
</script>
<style scoped  lang="scss">

</style>
