<template>
  <div class="main-index h-400" data-parallax="true">
    <carousel :items="1" :autoplay="true" :nav="false" :dots="false" :loop="true" class="w-100 m-0 p-0">
      <div
        class="w-100"
        v-for="(img,i) in imgsDataReload"
        v-bind:key="i"
        v-bind:style="img"
      ></div>
        <!-- <img class="w-100" v-for="(img,i) in travelstyle.travelStyleImages" v-bind:key="i" v-bind:src="`/${img.filePath}`"
            v-bind:alt="img.fileName"> -->
    </carousel>
        <div class="w-75 card-body-center">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto">
                    <div class="brand text-center">
                        <h4 class="my-0 font-weight-bold">{{$t('ptravelstylebackground_title')}}<font-awesome-icon icon="chevron-down" class="text-center" /></h4>
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
  computed: {
    imgsDataReload() {
      if (typeof this.travelstyle.travelStyleImages == 'undefined') {
        return null;
      }
      var temp = [];
      this.travelstyle.travelStyleImages.forEach(element => {
        temp.push({
          backgroundImage: `url("/${element.filePath}")`,
          backgroundSize: "cover",
          height: "100% !important",
          minHeight: "500px !important",
          backgroundPosition: "center"
        });
      });
      return temp;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-index{
  position: relative;
}
.main-index::before,.main-index::after{
  background-color: #111;
    position: absolute;
    z-index: 2;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.2;
}
.card-body-center{
  position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #FFFFFF;
    z-index: 3;
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
