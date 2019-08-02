<template>
  <div class="topcity">
    <div class="section text-left pt-0 pb-4">
      <h4 class="title text-left m-0 p-3">Ban se thich</h4>
      <div class="row m-0 p-0 d-flex align-items-stretch">
        <div class="col-8">
          <div class="row m-0 p-0 text-08 h-100">
            <div class="col-12 m-0 px-0 pb-2">
              <div class="shot-intro" v-html="destination.destinationIntro"></div>
            </div>
            <div
              class="col-12 m-0 p-0 d-flex justify-content-between align-items-center flex-grow-1"
            >
              <span class="text-success font-weight-bold">Dung bo lo</span>
            </div>
            <div
              class="col-12 mt-auto text-align-center w-100 p-0 m-0 cursor-pointer"
              data-toggle="modal"
              data-target="#destinationIntroModal"
            >
              <p class="text-center border-top font-weight-bold text-info">
                Xem them
                <font-awesome-icon icon="chevron-down" class="text-center" />
              </p>
            </div>
          </div>
        </div>
        <div class="col-4 m-0 p-0">
          <div class="card m-0 h-100">
            <div class="card-body text-08">
              <div class="row">
                <div class="col-4 text-right">
                  <font-awesome-icon
                    icon="cloud-sun-rain"
                    class="text-x3 text-warning text-center"
                  />
                </div>
                <div class="col-8 text-left">
                  <p class="text-x1 font-weight-bold">
                    <span class="pr-2">39 c</span>
                    <span class="text-muted">26 c</span>
                  </p>
                  <p class="text-08">THU 5,1/8.(Gio dia phuong)</p>
                </div>
              </div>
            </div>
            <div class="card-footer bg-transparent border-success text-center">
              <small class="border-top text-center m-0 text-center w-100">
                Xem thoi tiet 7 ngay tiep theo
                <font-awesome-icon icon="chevron-down" class="text-center" />
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="destinationIntroModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="destinationIntroModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog vw-85" role="document">
        <div class="modal-content p-4 text-08 text-left">
          <div class="row m-0 p-2 border-bottom">
            <div class="col-12">
              <h4>
                <b>Hieu them ve Thai Lan</b>
              </h4>
            </div>
            <div class="col-8">
              <div v-html="destination.destinationIntro"></div>
            </div>
            <div class="col-4">
              <carousel class="image-des" :per-page="1" :navigation-enabled="false" :paginationEnabled="false">
                <slide
                  class="m-2"
                  v-for="(pac,ides) in destination.destinationImages"
                  v-bind:key="ides"
                >
                  <img class="image-des-img" v-bind:src="`/${pac.filePath}`" v-bind:alt="pac.fileName" />
                </slide>
              </carousel>
            </div>
          </div>
          <div class="row m-0 p-2 border-bottom">
            <div class="col-12">
              <h4>
                <b>Thong tin chung</b>
              </h4>
            </div>
            <div class="col-4">
              <p>
                <b>Mui gio</b>
              </p>
              <p>GMT +07</p>
              <p>
                <small>Truoc 2 gio</small>
              </p>
            </div>
            <div class="col-4">
              <p>
                <b>Tien te</b>
              </p>
              <p>Vietnamdong</p>
              <p>
                <small>1$ = 23.000d</small>
              </p>
            </div>
            <div class="col-4">
              <p>
                <b>Thoi gian tuyet nhat de vi vu</b>
              </p>
              <p>THG 7 + 8</p>
              <p>
                <small>Mua hoa man</small>
              </p>
            </div>
          </div>
          <div class="row m-0 p-2">
            <div class="col-12">
              <h4>
                <b>Hot promotion</b>
              </h4>
            </div>
            <div class="col-12">
              <TopTourPromotionComponent :isTitle="false" :paginationEnabled="false"></TopTourPromotionComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import TopTourPromotionComponent from '@/components/TopTourPromotionComponent.vue'
import CityService from '@/api/CityService';

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
    TopTourPromotionComponent,
  },
  name: 'DestinationIntroComponent',
  props: {
    msg: String,
    destination: {},
  },
  data() {
    return {
      citys: [],
      selectedPayment: {},
    };
  },
  mounted() {
    this.initial();
  },
  methods: {
    async initial() {
      this.$store.commit('showHideLoading', true);
      const response = await CityService.getTopCity();
      this.citys = randomArray(response.data);
      this.$store.commit('showHideLoading', false);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.image-des {
  height: 200px !important;
}
.image-des-img{
  height: 200px !important;
  width:auto !important;
}
.card-body-bottom-left {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #ffffff;
}
.shot-intro {
  height: 48px;
  text-overflow: clip;
  overflow: hidden;
}
</style>
