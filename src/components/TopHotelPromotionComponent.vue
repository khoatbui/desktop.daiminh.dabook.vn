<template>
  <div class="topdestination">
    <div class="section text-left pt-0 pb-4">
      <h2 class="title text-center">Top destination</h2>
      <div class="row d-flex justify-content-center align-items-center pl-10 pr-10 scroll-ngang">
        <a class="link-des active">HaNoi</a>
        <a class="link-des">HoChiMinh</a>
        <a class="link-des">DaNang</a>
        <a class="link-des">Mekong</a>
        <a class="link-des">Korea</a>
        <a class="link-des">Japan</a>
        <a class="link-des">Euro</a>
        <a class="link-des">ThaiLand</a>
      </div>
      <carousel :per-page="4" :navigation-enabled="true">
        <slide class="m-2" v-for="(destination,ides) in destinations" v-bind:key="ides">
          <div class="card  m-0 h-100 d-inline-block">
            <img class="card-img-top image-des"  v-bind:src="destination.destinationImages.length>0?`/${destination.destinationImages[0].filePath}`:'/img/defaultloading.gif'"
          v-bind:alt="destination.destinationImages[0].fileName" />
            <div class="card-body">
              <h4 class="card-title">{{destination.destinationName}}</h4>
              <p class="card-text">{{destination.destinationIntro}}</p>
              <div class="row">
                <div class="col-6">
                  <a href="#0" class="btn btn-info btn-sm">Read...</a>
                </div>
                <div class="col-6 d-flex align-items-center justify-content-end">
                  <i class="far fa-heart mr-2 text-info"></i>
                  <i class="far fa-comment-dots text-info"></i>
                </div>
              </div>
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
    };
  },
  mounted() {
    this.initial();
  },
  methods: {
    async initial() {
      this.$store.commit('showHideLoading', true);
      const response = await DestinationService.getTopDestination();
      this.destinations = randomArray(response.data);
      console.log(this.destinations);
      this.$store.commit('showHideLoading', false);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-des{
    width: 220px;
}
.image-des{
    height: 180px;
}
</style>
