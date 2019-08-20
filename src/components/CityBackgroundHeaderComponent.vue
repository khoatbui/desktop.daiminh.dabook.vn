<template>
  <div class="main-index h-400" data-parallax="true">
    <carouselab
      :items="1"
      :autoplay="true"
      :nav="false"
      :dots="false"
      :loop="true"
      class="w-100 m-0 p-0 bg-ovelay-white"
    >
      <img
        class="w-100"
        v-for="(img,i) in city.cityImages"
        v-bind:key="i"
        v-bind:src="`/webmp/${img.filePath.slice(0, -3)}webp`"
        v-bind:alt="img.fileName"
      />
    </carouselab>
    <div class="w-100 card-body-center card-body-center-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="brand text-left">
              <h4
                class="my-0 font-weight-bold cursor-pointer"
                data-toggle="modal"
                data-target="#searchModal"
              >
                {{$t('pcitybackground_btn_h4')}}
                <font-awesome-icon icon="chevron-down" class="text-center" />
              </h4>
              <h1 class="text-center text-white title my-0">{{city.cityName}}</h1>
              <h4 class="my-0 font-weight-bold">{{$t('pcitybackground_body_h4')}}</h4>
              <button
                class="btn btn-light bg-white border-radius-100 text-danger"
                v-if="city.length"
              >
                {{city.areaCountryId.areaCountryName}}
                <font-awesome-icon icon="arrow-right" class="text-center" />
              </button>
            </div>
          </div>
          <div class="col-md-7">
            <carousel :per-page="4" :navigation-enabled="true">
              <slide
                class="m-2 d-flex justify-content-start align-items-center flex-wrap"
                v-for="(des,i) in destinationByLang"
                v-bind:key="'ssf'+i"
              >
                <div
                  class="card card-des m-1 flex-grow-1 d-inline-block city-des-card"
                  @click="redirectToDestination(des)"
                >
                  <img
                    class="card-img image-des cursor-pointer city-des-img"
                    v-bind:class="{'small-loading-img':des.destinationImages.length==0}"
                    v-bind:src="des.destinationImages.length>0?`/webmp/${des.destinationImages[0].filePath.slice(0, -3)}webp`:'/img/defaultloading.gif'"
                    v-bind:alt="des.destinationName"
                  />
                  <div class="card-body-center">
                    <h4 class="card-title text-white">{{des.destinationName}}</h4>
                  </div>
                </div>
              </slide>
            </carousel>
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
import carouselab from "vue-owl-carousel";
import MainSearchComponent from "@/components/MainSearchComponent.vue";
import i18n from "@/lang/i18n";
import { Carousel, Slide } from "vue-carousel";
import DestinationService from "@/api/DestinationService";
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
    carouselab,
    MainSearchComponent,
    Carousel,
    Slide
  },
  name: "CityBackgroundHeaderComponent",
  props: {
    msg: String,
    city: {}
  },
  data() {
    return {
      destinations: []
    };
  },
  mounted() {
    if (typeof this.city._id === "undefined") {
      this.initial(this.$route.query.cityid);
    } else {
                console.log('b');
      this.initial(this.city._id);
    }
  },
  methods: {
    async initial(cityId) {
      this.$store.commit("showHideLoading", true);
      const response = await DestinationService.getDestinationByCity(cityId);
      this.destinations = randomArray(response.data);
      console.log(this.destinations);
      this.$store.commit("showHideLoading", false);
    }
  },
  computed: {
      cityByLang() {
          return this.city;
      },
      destinationByLang() {
          return this.destinations;
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-body-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  z-index: 2;
}
.card-body-center-bottom{
  top: 60% !important;
}
.h-400,
.owl-carousel {
  height: 400px !important;
  overflow: hidden;
}
.des-img {
  height: 700px !important;
}
.bg-white:hover {
  background-color: #f44336 !important;
}
.city-des-card{
  width: 180px !important;
  overflow: hidden;
}
.city-des-img{
  height: 200px !important;
  width: auto !important;
}
.bg-ovelay-white::after,.bg-ovelay-white::before{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background: #12c2e9;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    z-index: 2;
    opacity: 0.65;
}
</style>
