<template>
  <div class="tour-detail">
    <NavigationComponent :isTran="false" :isFixed="false"></NavigationComponent>
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
  name: "RoomTypeDetailView",
  components: {
    NavigationComponent,
    FooterComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/FooterComponent.vue'),
      loading: SkeletonBox,
    }),
  }
};
</script>
