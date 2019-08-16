<template>
  <div class="main-index h-400" data-parallax="true">
    <carousel :items="1" :autoplay="true" :nav="false" :dots="false" :loop="true" class="w-100 m-0 p-0">
        <img class="w-100" v-for="(img,i) in destination.destinationImages" v-bind:key="i" v-bind:src="`/webmp/${img.filePath.slice(0, -3)}webp`"
            v-bind:alt="img.fileName">
    </carousel>
        <div class="w-75 card-body-center">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto">
                    <div class="brand text-center">
                        <h4 class="my-0 font-weight-bold cursor-pointer"  data-toggle="modal" data-target="#searchModal">{{$t('pdestinationbackground_btn_h4')}}<font-awesome-icon icon="chevron-down" class="text-center" /></h4>
                        <h1 class="text-center text-white title my-0">{{destination.destinationName}}</h1>
                        <h4 class="my-0 font-weight-bold">{{$t('pdestinationbackground_body_h4')}}</h4>
                        <button class="btn btn-light bg-white border-radius-100 text-danger" v-if="destination.length">{{destination.cityId.cityName}} <font-awesome-icon icon="arrow-right" class="text-center" /></button>
                    </div>
                </div>
            </div>
        </div>
            <div
      class="modal fade"
      id="searchModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="searchModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog vw-50" role="document">
        <div class="modal-content">
          <div class="row">
            <div class="col-12 mr-auto ml-auto">
              <MainSearchComponent :defaultopen="true"></MainSearchComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel';
import MainSearchComponent from '@/components/MainSearchComponent.vue'

export default {
  components: {
    carousel,
    MainSearchComponent
  },
  name: 'DestinationBackgroundHeaderComponent',
  props: {
    msg: String,
    destination:{},
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-body-center{
  position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #FFFFFF;
    z-index: 2;
}
.h-400,.owl-carousel{
  height: 400px !important;
  overflow: hidden;
}
.des-img{
    height: 700px !important;
}
.bg-white:hover{
  background-color: #f44336 !important;
}
</style>
