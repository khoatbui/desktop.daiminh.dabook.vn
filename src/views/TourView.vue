<template>
  <div class="tour-view">
    <NavigationComponent :isTran="false" :isFixed="true"></NavigationComponent>
    <router-view></router-view>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import lazyLoadComponent from '@/utils/lazy-load-component'
import SkeletonBox from '@/components/SkeletonBox.vue';
import NavigationComponent from '@/components/NavigationComponent.vue';

export default {
  name: 'TourView',
  components: {
    NavigationComponent,
    FooterComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/FooterComponent.vue'),
      loading: SkeletonBox,
    }),
  },
};
</script>
