<template>
  <div class="topdestination">
    <div class="section text-left pt-0 pb-4">
      <h3 class="title text-left m-0">Top destination</h3>
      <carousel :per-page="1" :navigation-enabled="true">
        <slide class="m-2 d-flex justify-content-between align-items-center flex-wrap" v-for="index in pageCount" v-bind:key="index">
          <div class="card card-des m-1 flex-grow-1 d-inline-block" v-for="(page,ipage) in destinations.slice(index, index+size)" v-bind:key="ipage">
            <img class="card-img image-des"  v-bind:src="page.destinationImages.length>0?`/${page.destinationImages[0].filePath}`:'/img/defaultloading.gif'"
          v-bind:alt="page.destinationImages[0].fileName" />
            <div class="card-body-center">
              <h4 class="card-title text-white">{{page.destinationName}}</h4>
              <p class="card-text text-white">{{page.destinationIntro}}</p>
            </div>
          </div>
        </slide>
      </carousel>
      <div class="row d-flex justify-content-end align-items-center">
        <a class="link-des">
          더보기
          <i class="fas fa-chevron-right"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import DestinationService from '@/api/DestinationService';

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
    Carousel,
    Slide,
  },
  name: 'TopDestinationComponent',
  props: {
    msg: String,
  },
  data() {
    return {
      destinations: [],
      selectedPayment: {},
      pageNumber: 0,
      size: 10,
    };
  },
  mounted() {
    this.initial();
  },
  methods: {
    async initial() {
      this.$store.commit('showHideLoading', true);
      const response = await DestinationService.getAllDestination();
      this.destinations = randomArray(response.data);
      console.log(this.destinations);
      this.$store.commit('showHideLoading', false);
    },
  },
  computed: {
    pageCount() {
      const l = this.destinations.length;
      const s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber * this.size;
      const end = start + this.size;
      return randomArray(this.destinations.slice(start, end));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-des{
    width: 18%;
}
.image-des{
    height: 180px;
}
.card-body-center{
  position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #FFFFFF;
}
</style>
