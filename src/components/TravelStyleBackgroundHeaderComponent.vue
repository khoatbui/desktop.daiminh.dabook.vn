<template>
  <div class="main-index h-400" data-parallax="true">
    <carousel :items="1" :autoplay="true" :nav="false" :dots="false" :loop="true" class="w-100 m-0 p-0">
        <img class="w-100" v-for="(img,i) in travelstyle.travelStyleImages" v-bind:key="i" v-bind:src="`/webmp/${img.filePath.slice(0, -3)}webp`"
            v-bind:alt="img.fileName">
    </carousel>
        <div class="w-75 card-body-center">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto">
                    <div class="brand text-center">
                        <h4 class="my-0 font-weight-bold">Tim kiem diem den theo style cua ban <font-awesome-icon icon="chevron-down" class="text-center" /></h4>
                        <h1 class="text-center text-white title my-0">{{travelstyle.travelStyleName}}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel';

export default {
  components: {
    carousel,
  },
  name: 'TravelStyleBackgroundHeaderComponent',
  props: {
    msg: String,
    travelstyle:{},
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
