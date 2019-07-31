<template>
  <div class="home">
    <NavigationComponent></NavigationComponent>
    <div class="main-body">
      <div class="container pt-2">
        <TopCityComponent></TopCityComponent>
      </div>
      <div class="container pt-2">
        <TopDestinationComponent></TopDestinationComponent>
      </div>
      <div class="container-fluid pt-2 px-0">
        <VideoComponent></VideoComponent>
      </div>
      <div class="container pt-2">
        <TopHotelPromotionComponent></TopHotelPromotionComponent>
      </div>
      <div class="container pt-2">
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
  },
};
</script>
