<template>
  <div class="about-view">
    <NavigationComponent :isTran="false" :isFixed="false"></NavigationComponent>
    <AboutUsComponent></AboutUsComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import lazyLoadComponent from '@/utils/lazy-load-component'
import SkeletonBox from '@/components/SkeletonBox.vue';
import NavigationComponent from '@/components/NavigationComponent.vue';
import AboutUsComponent from '@/components/AboutUsComponent.vue'
export default {
  name: 'AboutView',
  components: {
    NavigationComponent,
    FooterComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/FooterComponent.vue'),
      loading: SkeletonBox,
    }),
    AboutUsComponent
  },
};
</script>