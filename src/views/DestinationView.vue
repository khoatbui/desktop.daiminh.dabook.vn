<template>
  <div class="destination">
    <NavigationComponent :isTran="false" :isFixed="true"></NavigationComponent>
    <router-view :key="$route.fullPath"></router-view>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import lazyLoadComponent from '@/utils/lazy-load-component'
import SkeletonBox from '@/components/SkeletonBox.vue';
import NavigationComponent from '@/components/NavigationComponent.vue';

export default {
  name: 'DestinationView',
  components: {
    NavigationComponent,
    FooterComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/FooterComponent.vue'),
      loading: SkeletonBox,
    }),
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
