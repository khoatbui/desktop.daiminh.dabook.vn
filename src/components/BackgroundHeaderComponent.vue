<template>
  <div class="main-index h-700" data-parallax="true">
    <carousel
      :items="1"
      :autoplay="true"
      :nav="false"
      :dots="false"
      :loop="true"
      class="w-100 m-0 p-0 banner_filter"
    >
      <img src="/webmp/img/background/bg_01.webp"/>
      <img src="/webmp/img/background/bg_02.webp" />
      <img src="/webmp/img/background/bg_03.webp" />
      <img src="/webmp/img/background/bg_04.webp" />
      <img src="/webmp/img/background/bg_05.webp" />
      <img src="/webmp/img/background/bg_06.webp" />
      <img src="/webmp/img/background/bg_07.webp" />
      <img src="/webmp/img/background/bg_08.webp" />
      <img src="/webmp/img/background/bg_09.webp" />
      <img src="/webmp/img/background/bg_10.webp" />
      <img src="/webmp/img/background/bg_11.webp" />
      <img src="/webmp/img/background/bg_12.webp" />
      <img src="/webmp/img/background/bg_13.webp" />
      <img src="/webmp/img/background/bg_14.webp" />
      <img src="/webmp/img/background/bg_15.webp" />
      <img src="/webmp/img/background/bg_16.webp" />
      <img src="/webmp/img/background/bg_17.webp" />
      <img src="/webmp/img/background/bg_18.webp" />
      <img src="/webmp/img/background/bg_19.webp" />
      <img src="/webmp/img/background/bg_20.webp" />
      <img src="/webmp/img/background/bg_21.webp" />
      <img src="/webmp/img/background/bg_22.webp" />
      <img src="/webmp/img/background/bg_23.webp" />
    </carousel>
    <div class="w-75 card-body-center">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto">
          <div class="brand text-center">
            <h1 class="text-center text-white title mb-0">Amazing Service</h1>
            <h4 class="title text-white text-center mt-0">
              You can get an additional 10% discount on your first
              reservation.
            </h4>
          </div>
        </div>
        <div class="col-md-7 ml-auto mr-auto">
          <MainSearchComponent></MainSearchComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel';
import MainSearchComponent from '@/components/MainSearchComponent.vue';

export default {
  components: {
    MainSearchComponent,
    carousel
  },
  name: 'BackgroundHeaderComponent',
  props: {
    msg: String
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-body-center {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  z-index: 2;
}
.h-700,
.owl-carousel {
  height: 700px !important;
  overflow: hidden;
}
</style>
