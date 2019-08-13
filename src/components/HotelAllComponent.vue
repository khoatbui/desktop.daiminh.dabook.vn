<template>
  <div class="hotel-all" v-if="componentLoaded">
    <div class="container py-4 my-0"></div>
    <div class="container py-4 my-0 custom-sticky-component">
      <div class="row m-0 p-0">
        <div class="col-4 m-0 p-0 pr-3">
          <div class="row m-0 p-0">
            <div class="card">
              <div class="card-body"></div>
              <div class="card-footer"></div>
            </div>
          </div>
        </div>
        <div class="col-8 m-0 p-0 pl-3 text-left"></div>
      </div>
    </div>
    <div class="container-fluid my-0 mt-2 py-4 second-background">
      <div class="container p-0">
        <TopTourPromotionComponent :isTitle="true" :paginationEnabled="false"></TopTourPromotionComponent>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { Carousel, Slide } from "vue-carousel";
import CityService from "@/api/CityService";
import lazyLoadComponent from "@/utils/lazy-load-component";
import SkeletonBox from "@/components/SkeletonBox.vue";
import TourService from "@/api/TourService";
import HotelService from "@/api/HotelService";

import "@lazy-copilot/datetimepicker/dist/datetimepicker.css";
import { DateTimePicker } from "@lazy-copilot/datetimepicker";

function randomArray(array) {
  const array2 = [];
  while (array.length !== 0) {
    const randomIndex = Math.floor(Math.random() * array.length);
    array2.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return array2;
}

export default {
  components: {
    DateTimePicker,
    Carousel,
    Slide,
    TopTourPromotionComponent: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/TopTourPromotionComponent.vue"),
      loading: SkeletonBox
    })
  },
  name: "HotelAllComponent",
  props: {
    msg: String
  },
  data() {
    return {
      componentLoaded: true
    };
  },
  watch: {},
  created() {},
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
</style>
