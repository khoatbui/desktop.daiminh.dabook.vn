<template>
  <div class="destination">
    <NavigationComponent :isTran="false"></NavigationComponent>
    <router-view></router-view>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>

import NavigationComponent from '@/components/NavigationComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'DestinationView',
  components: {
    NavigationComponent,
    FooterComponent,
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>
