<template>
  <div class="destinationmain">
    <DestinationBackgroundHeaderComponent :destination="destination" ></DestinationBackgroundHeaderComponent>
    <div class="main-body">
      <div class="container pt-4">
        <DestinationIntroduceComponent v-bind:destination="destination"></DestinationIntroduceComponent>
      </div>
      <div class="container pt-4">
        <HorizontalAdsComponent :adstype="'FLIGHTADS'"></HorizontalAdsComponent>
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
import DestinationService from '@/api/DestinationService';

export default {
  name: 'DestinationDetailComponent',
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
    DestinationBackgroundHeaderComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/DestinationBackgroundHeaderComponent.vue'),
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
    DestinationIntroduceComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/DestinationIntroduceComponent.vue'),
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
      destination:{},
    };
  },
  watch: {
    // call again the method if the route changes
    '$route': 'initialParam'
  },
  mounted() {
         this.initialParam();
  },
  methods: {
    initialParam (){
      this.initial(this.$route.query.destinationid);
    },
      async initial(destinationId) {
      this.$store.commit('showHideLoading', true);
      const response = await DestinationService.getDestinationById(destinationId);
      this.destination =response.data;
      this.$store.commit('showHideLoading', false);
    }
  },
  computed:{
    destinationByLang (){
      return this.destination;
    }
  }
};
</script>
