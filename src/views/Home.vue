<template>
  <div class="home">
    <BackgroundHeaderComponent></BackgroundHeaderComponent>
    <NavigationComponent :isTran="true" :isFixed="true"></NavigationComponent>
    <div class="main-body">
      <div class="container-fluid p-0">
        <ThreeStepComponent></ThreeStepComponent>
      </div>
      <div class="container pt-4">
        <ExploreDaiMinhComponent></ExploreDaiMinhComponent>
      </div>
      <div class="container pt-4">
        <HorizontalAdsComponent :adstype="'ALL'"></HorizontalAdsComponent>
      </div>
      <div class="container pt-4">
        <TopCityComponent></TopCityComponent>
      </div>
      <div class="container pt-4">
        <TopDestinationComponent :isTitle="true"></TopDestinationComponent>
      </div>
      <div class="container-fluid pt-4 px-0">
        <VideoComponent></VideoComponent>
      </div>
      <div class="container pt-4">
        <TopHotelPromotionComponent :isTitle="true"></TopHotelPromotionComponent>
      </div>
      <div class="container pt-4">
        <IntroduceDaiMinhComponent></IntroduceDaiMinhComponent>
      </div>
      <div class="container pt-4">
        <TopTourPromotionComponent :isTitle="true"></TopTourPromotionComponent>
      </div>
      <div class="container pt-4">
        <AdsWithHotelPromotionComponent></AdsWithHotelPromotionComponent>
      </div>
      <div class="container pt-4">
        <BlogListMultiCardComponent></BlogListMultiCardComponent>
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
import lazyLoadComponent from '@/utils/lazy-load-component';
import SkeletonBox from '@/components/SkeletonBox.vue';
import NavigationComponent from '@/components/NavigationComponent.vue';
export default {
  name: 'home',
  components: {
    NavigationComponent,
    BackgroundHeaderComponent: lazyLoadComponent({
      componentFactory: () =>
        import('@/components/BackgroundHeaderComponent.vue'),
      loading: SkeletonBox
    }),
    ThreeStepComponent: lazyLoadComponent({
      componentFactory: () => import('@/components/ThreeStepComponent.vue'),
      loading: SkeletonBox
    }),
    ExploreDaiMinhComponent: lazyLoadComponent({
      componentFactory: () => import('@/components/ExploreDaiMinhComponent.vue'),
      loading: SkeletonBox
    }),
    TopCityComponent: lazyLoadComponent({
      componentFactory: () => import('@/components/TopCityComponent.vue'),
      loading: SkeletonBox
    }),
    TopDestinationComponent: lazyLoadComponent({
      componentFactory: () =>
        import('@/components/TopDestinationComponent.vue'),
      loading: SkeletonBox
    }),
    VideoComponent: lazyLoadComponent({
      componentFactory: () => import('@/components/VideoComponent.vue'),
      loading: SkeletonBox
    }),
    TopHotelPromotionComponent: lazyLoadComponent({
      componentFactory: () =>
        import('@/components/TopHotelPromotionComponent.vue'),
      loading: SkeletonBox
    }),
    TopTourPromotionComponent: lazyLoadComponent({
      componentFactory: () =>
        import('@/components/TopTourPromotionComponent.vue'),
      loading: SkeletonBox
    }),
    BlogListMultiCardComponent: lazyLoadComponent({
      componentFactory: () =>
        import('@/components/BlogListMultiCardComponent.vue'),
      loading: SkeletonBox
    }),
    IntroduceDaiMinhComponent: lazyLoadComponent({
      componentFactory: () =>
        import('@/components/IntroduceDaiMinhComponent.vue'),
      loading: SkeletonBox
    }),
    HorizontalAdsComponent: lazyLoadComponent({
      componentFactory: () => import('@/components/HorizontalAdsComponent.vue'),
      loading: SkeletonBox
    }),
    AdsWithHotelPromotionComponent: lazyLoadComponent({
      componentFactory: () =>
        import('@/components/AdsWithHotelPromotionComponent.vue'),
      loading: SkeletonBox
    }),
    IntroDaiMinhComponent: lazyLoadComponent({
      componentFactory: () => import('@/components/IntroDaiMinhComponent.vue'),
      loading: SkeletonBox
    }),
    FooterComponent: lazyLoadComponent({
      componentFactory: () => import('@/components/FooterComponent.vue'),
      loading: SkeletonBox
    })
  }
};
</script>
<style scoped  lang="scss">
</style>
