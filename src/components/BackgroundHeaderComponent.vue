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
      <img :src="img.imgPath" v-for="(img,i) in backgroundImage" :key="i"/>
    </carousel>
    <div class="w-75 card-body-center">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto">
          <div class="brand text-center">
            <h1 class="text-center text-white title mb-0">{{$t('pbackgroundheader_title_h1')}}</h1>
            <h4 class="title text-white text-center mt-0">
              {{$t('pbackgroundheader_body_h4')}}
            </h4>
          </div>
        </div>
        <div class="col-md-7 ml-auto mr-auto">
          <MainSearchComponent :defaultopen="false"></MainSearchComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel';
import MainSearchComponent from '@/components/MainSearchComponent.vue';
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
    MainSearchComponent,
    carousel
  },
  name: 'BackgroundHeaderComponent',
  props: {
    msg: String
  },
  data() {
    return {
      background :[
      {imgPath:"/img/background/bg_01.jpg"},
      {imgPath:"/img/background/bg_02.jpg" },
      {imgPath:"/img/background/bg_03.jpg" },
      {imgPath:"/img/background/bg_04.jpg" },
      {imgPath:"/img/background/bg_05.jpg" },
      {imgPath:"/img/background/bg_06.jpg" },
      {imgPath:"/img/background/bg_07.jpg" },
      {imgPath:"/img/background/bg_08.jpg" },
      {imgPath:"/img/background/bg_09.jpg" },
      {imgPath:"/img/background/bg_10.jpg" },
      {imgPath:"/img/background/bg_11.jpg" },
      {imgPath:"/img/background/bg_12.jpg" },
      {imgPath:"/img/background/bg_13.jpg" },
      {imgPath:"/img/background/bg_14.jpg" },
      {imgPath:"/img/background/bg_15.jpg" },
      {imgPath:"/img/background/bg_16.jpg" },
      {imgPath:"/img/background/bg_17.jpg" },
      {imgPath:"/img/background/bg_18.jpg" },
      {imgPath:"/img/background/bg_19.jpg" },
      {imgPath:"/img/background/bg_20.jpg" },
      {imgPath:"/img/background/bg_21.jpg" },
      {imgPath:"/img/background/bg_22.jpg" },
      {imgPath:"/img/background/bg_23.jpg" },
      {imgPath:"/img/background/bg_24.jpg" },
      {imgPath:"/img/background/bg_25.jpg" },
      {imgPath:"/img/background/bg_26.jpg" },
      {imgPath:"/img/background/bg_27.jpg" },
      {imgPath:"/img/background/bg_28.jpg" },
      {imgPath:"/img/background/bg_29.jpg" },
      {imgPath:"/img/background/bg_30.jpg" },
      {imgPath:"/img/background/bg_31.jpg" },
      {imgPath:"/img/background/bg_32.jpg" },
      ]
    };
  },
  mounted() {},
  methods: {},
  computed: {
    backgroundImage() {
      return randomArray(this.background);
    }
  },
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
.banner_filter::before,.banner_filter::after {
    background-color: #333;
    position: absolute;
    z-index: 2;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.2;
}
</style>
