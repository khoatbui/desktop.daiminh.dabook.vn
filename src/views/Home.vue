<template>
  <div class="home">
    <NavigationComponent></NavigationComponent>
    <div class="main-body">
      <div class="container py-4">
        <TopDestinationComponent></TopDestinationComponent>
      </div>
      <div class="component-fluid">
        <VideoComponent></VideoComponent>
      </div>
      <div class="container py-4">
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

export default {
  name: 'home',
  components: {
    NavigationComponent,
    FooterComponent,
    IntroDaiMinhComponent,
    VideoComponent,
    TopDestinationComponent,
  },
};
</script>
