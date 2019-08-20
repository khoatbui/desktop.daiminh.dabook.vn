<template>
  <div class="citymain">
    <CityBackgroundHeaderComponent :city="city" ></CityBackgroundHeaderComponent>
    <div class="main-body">
      <div class="container pt-4">
        <CityIntroduceComponent :city="city"></CityIntroduceComponent>
      </div>
      <div class="container pt-4">
        <HorizontalAdsComponent :adstype="'ANOTHER'"></HorizontalAdsComponent>
      </div>
      <div class="container pt-4">
        <HotelByCityComponent :city="city"></HotelByCityComponent>
      </div>
      <div class="container pt-4">
        <TourByCityComponent :isTitle="true" :paginationEnabled="false" :city="city"></TourByCityComponent>
      </div>
      <div class="container-fluid pt-4 px-0">
        <VideoComponent></VideoComponent>
      </div>
      <div class="container pt-4">
        <CityExplorerFilterComponent :city="city"></CityExplorerFilterComponent>
      </div>
      <div class="container pt-4">
        <TopHotelPromotionComponent  :isTitle="true" :paginationEnabled="false"></TopHotelPromotionComponent>
      </div>
      <div class="container pt-4">
        <IntroduceDaiMinhComponent></IntroduceDaiMinhComponent>
      </div>
      <div class="container pt-4">
        <TopTourPromotionComponent :isTitle="true" :paginationEnabled="false"></TopTourPromotionComponent>
      </div>
      <div class="container pt-4">
        <AdsWithHotelPromotionComponent></AdsWithHotelPromotionComponent>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import lazyLoadComponent from '@/utils/lazy-load-component'
import SkeletonBox from '@/components/SkeletonBox.vue';
import CityService from '@/api/CityService';

export default {
  name: 'CityDetailComponent',
  components: {
    VideoComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/VideoComponent.vue'),
      loading: SkeletonBox,
    }),
    HotelByCityComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/HotelByCityComponent.vue'),
      loading: SkeletonBox,
    }),
    TopHotelPromotionComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/TopHotelPromotionComponent.vue'),
      loading: SkeletonBox,
    }),
    CityBackgroundHeaderComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/CityBackgroundHeaderComponent.vue'),
      loading: SkeletonBox,
    }),
    TopTourPromotionComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/TopTourPromotionComponent.vue'),
      loading: SkeletonBox,
    }),
    IntroduceDaiMinhComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/IntroduceDaiMinhComponent.vue'),
      loading: SkeletonBox,
    }),
    HorizontalAdsComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/HorizontalAdsComponent.vue'),
      loading: SkeletonBox,
    }),
    AdsWithHotelPromotionComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/AdsWithHotelPromotionComponent.vue'),
      loading: SkeletonBox,
    }),
    CityIntroduceComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/CityIntroduceComponent.vue'),
      loading: SkeletonBox,
    }),
    TourByCityComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/TourByCityComponent.vue'),
      loading: SkeletonBox,
    }),
    CityExplorerFilterComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/CityExplorerFilterComponent.vue'),
      loading: SkeletonBox,
    }),
  },
  data() {
    return {
      cityId:this.$route.query.cityid,
      city:{},
    };
  },
  mounted() {
         this.initial(this.cityId);
  },
  methods: {
      async initial(cityId) {
      this.$store.commit('showHideLoading', true);
      const response = await CityService.getCityById(cityId);
      this.city =response.data;
      this.$store.commit('showHideLoading', false);
    }
  },
};
</script>
