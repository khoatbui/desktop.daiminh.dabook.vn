<template>
  <div class="destinationmain">
    <TravelStyleBackgroundHeaderComponent :travelstyle="travelStyle" ></TravelStyleBackgroundHeaderComponent>
    <div class="main-body">
      <div class="container pt-4">
        <TravelStyleIntroduceComponent :travelStyle="travelStyle"></TravelStyleIntroduceComponent>
      </div>
      <div class="container pt-4">
        <HorizontalAdsComponent :adstype="'ANOTHER'"></HorizontalAdsComponent>
      </div>
      <div class="container pt-4">
        <TourByTravelStyleComponent :isTitle="true" :paginationEnabled="false" :travelStyle="travelStyle"></TourByTravelStyleComponent>
      </div>
      <div class="container-fluid pt-4 px-0">
        <VideoComponent></VideoComponent>
      </div>
      <div class="container pt-4">
        <DestinationExplorerFilterComponent :destination="destination"></DestinationExplorerFilterComponent>
      </div>
      <div class="container pt-4">
        <TopHotelPromotionComponent></TopHotelPromotionComponent>
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
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import lazyLoadComponent from '@/utils/lazy-load-component'
import SkeletonBox from '@/components/SkeletonBox.vue';
import TravelStyleService from '@/api/TravelStyleService';

export default {
  name: 'TravelStyleDetailComponent',
  components: {
    IntroDaiMinhComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/IntroDaiMinhComponent.vue'),
      loading: SkeletonBox,
    }),
    VideoComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/VideoComponent.vue'),
      loading: SkeletonBox,
    }),
    HotelByDestinationComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/HotelByDestinationComponent.vue'),
      loading: SkeletonBox,
    }),
    TopHotelPromotionComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/TopHotelPromotionComponent.vue'),
      loading: SkeletonBox,
    }),
    TravelStyleBackgroundHeaderComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/TravelStyleBackgroundHeaderComponent.vue'),
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
    TravelStyleIntroduceComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/TravelStyleIntroduceComponent.vue'),
      loading: SkeletonBox,
    }),
    TourByTravelStyleComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/TourByTravelStyleComponent.vue'),
      loading: SkeletonBox,
    }),
    DestinationExplorerFilterComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/DestinationExplorerFilterComponent.vue'),
      loading: SkeletonBox,
    }),
  },
  data() {
    return {
      destinationId:this.$route.query.destinationid,
      travelStyleId:this.$route.query.travelstyleid,
      destination: {},
      travelStyle: {},
    };
  },
  mounted() {
         this.initial();
  },
  methods: {
      async initial() {
      this.$store.commit('showHideLoading', true);
      const response = await TravelStyleService.getTravelStyleById(this.travelStyleId);
      this.travelStyle =response.data;
      this.$store.commit('showHideLoading', false);
    }
  },
};
</script>
