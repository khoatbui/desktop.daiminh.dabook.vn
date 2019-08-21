<template>
  <div class="travel-service">
    <NavigationComponent :isTran="false" :isFixed="false"></NavigationComponent>
    <router-view></router-view>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>

import lazyLoadComponent from '@/utils/lazy-load-component'
import SkeletonBox from '@/components/SkeletonBox.vue';
import NavigationComponent from '@/components/NavigationComponent.vue';

export default {
  name: 'TravelServiceView',
  components: {
    NavigationComponent,
    FooterComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/FooterComponent.vue'),
      loading: SkeletonBox,
    }),
  },
};
</script>
