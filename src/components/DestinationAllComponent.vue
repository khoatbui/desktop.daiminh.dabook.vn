<template>
  <div class="destinationmain">
    <BackgroundHeaderComponent :destination="destination" ></BackgroundHeaderComponent>
    <div class="main-body">
      <div class="container pt-4">
        <HorizontalAdsComponent :adstype="'ALL'" :paginationEnabled="false" :navigationEnabled="false"></HorizontalAdsComponent>
      </div>
      <div class="container pt-4" v-for="(area,i) in areaCountry" v-bind:key="i">
        <DestinationByAreaCountryComponent :area="area"></DestinationByAreaCountryComponent>
      </div>
      <div class="container pt-4">
        <HorizontalAdsComponent :adstype="'ANOTHER'"></HorizontalAdsComponent>
      </div>
      <div class="container pt-4">
        <HotelByDestinationComponent :destination="destination"></HotelByDestinationComponent>
      </div>
      <div class="container pt-4">
        <TourByDestinationComponent :isTitle="true" :paginationEnabled="false" :destination="destination"></TourByDestinationComponent>
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
import DestinationService from '@/api/DestinationService';
import AreaCountryService from '@/api/AreaCountryService';

export default {
  name: 'destinationmain',
  components: {
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
    BackgroundHeaderComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/BackgroundHeaderComponent.vue'),
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
    DestinationByAreaCountryComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/DestinationByAreaCountryComponent.vue'),
      loading: SkeletonBox,
    }),
    TourByDestinationComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/TourByDestinationComponent.vue'),
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
      destination:{},
      areaCountry:[]
    };
  },
  mounted() {
         this.initial();
  },
  methods: {
      async initial() {
      this.$store.commit('showHideLoading', true);
      const response = await AreaCountryService.getAllAreaCountry();
      this.areaCountry =response.data;
      this.$store.commit('showHideLoading', false);
    }
  },
};
</script>
