<template>
  <div class="travelstyle">
    <NavigationComponent :isTran="false"></NavigationComponent>
    <router-view></router-view>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationComponent from '@/components/NavigationComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'TravelStyleView',
  components: {
    NavigationComponent,
    FooterComponent,
  },
};
</script>
