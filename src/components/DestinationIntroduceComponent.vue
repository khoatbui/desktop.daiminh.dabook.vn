<template>
  <div class="topcity" v-if="componentLoaded">
    <div class="section text-left pt-0 pb-4">
      <h4
        class="title text-left m-0 p-3 text-uppercase"
      >{{$t('general_label_whatwelove')+ ' ' + destinationByLang.destinationName}}</h4>
      <div class="row m-0 p-0 d-flex align-items-stretch">
        <div class="col-8">
          <div class="row m-0 p-0 text-08 h-100">
            <div class="col-12 m-0 px-0 pb-2">
              <div class="shot-intro" v-html="destinationByLang.destinationIntro"></div>
            </div>
            <div class="col-12 m-0 p-0 d-flex justify-content-start align-items-center flex-grow-1">
              <span class="text-success font-weight-bold px-2">{{$t('general_label_dontmiss')}} :</span>
              <span class="text-muted px-2">{{$t('general_label_historyandcuture')}}</span>
              <span class="text-muted px-2">{{$t('general_label_urban')}}</span>
              <span class="text-muted px-2">{{$t('general_label_art')}}</span>
            </div>
            <div
              class="col-12 mt-auto text-align-center w-100 p-0 m-0 cursor-pointer"
              data-toggle="modal"
              data-target="#destinationIntroModal"
            >
              <p class="text-center border-top font-weight-bold text-info">
                {{$t('general_showmore')}}
                <font-awesome-icon icon="chevron-down" class="text-center" />
              </p>
            </div>
          </div>
        </div>
        <div class="col-4 m-0 p-0">
          <WeatherComponent></WeatherComponent>
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
                <b>{{$t('pdestinationintro_exploremore')}} {{destinationByLang.destinationName}}</b>
              </h4>
            </div>
            <div class="col-8">
              <div v-html="destinationByLang.destinationIntro"></div>
            </div>
            <div class="col-4">
              <carousel
                class="image-des"
                :per-page="1"
                :navigation-enabled="false"
                :paginationEnabled="false"
              >
                <slide
                  class="m-2"
                  v-for="(pac,ides) in destinationByLang.destinationImages"
                  v-bind:key="ides"
                >
                  <img
                    class="image-des-img"
                    v-bind:src="`/smimg/${pac.filePath.slice(0, -3)}jpg`"
                    v-bind:alt="pac.fileName"
                  />
                </slide>
              </carousel>
            </div>
          </div>
          <div class="row m-0 p-2 border-bottom">
            <div class="col-12">
              <h4>
                <b>{{$t('pdestinationintro_defaultinfo')}}</b>
              </h4>
            </div>
            <div class="col-4">
              <p>
                <b>{{$t('pdestinationintro_timezone')}}</b>
              </p>
              <p>GMT +07</p>
              <p>
                <small>Truoc 2 gio</small>
              </p>
            </div>
            <div class="col-4">
              <p>
                <b>{{$t('pdestinationintro_money')}}</b>
              </p>
              <p>Vietnamdong</p>
              <p>
                <small>1$ = 23.000d</small>
              </p>
            </div>
            <div class="col-4">
              <p>
                <b>{{$t('pdestinationintro_timetotravel')}}</b>
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
                <b>{{$t('generail_hotpromotion')}}</b>
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
import i18n from "@/lang/i18n";
import lazyLoadComponent from "@/utils/lazy-load-component";
import SkeletonBox from "@/components/SkeletonBox.vue";
import { Carousel, Slide } from "vue-carousel";
import CityService from "@/api/CityService";
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
    Carousel,
    Slide,
    TopTourPromotionComponent: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/TopTourPromotionComponent.vue"),
      loading: SkeletonBox
    }),
    WeatherComponent: lazyLoadComponent({
      componentFactory: () => import("@/components/WeatherComponent.vue"),
      loading: SkeletonBox
    })
  },
  name: "DestinationIntroComponent",
  props: {
    msg: String,
    destination: {}
  },
  data() {
    return {
      destinationData:this.destination,
      citys: [],
      selectedPayment: {},
      componentLoaded: false
    };
  },
  watch: {
    $route: "initial"
  },
  mounted() {
    this.initial();
  },
  methods: {
    async initial() {
      this.$store.commit("showHideLoading", true);
      const response = await CityService.getTopCity();
      this.citys = randomArray(response.data);
      if (Object.keys(this.destinationData).length === 0) {
        const responsedes = await DestinationService.getDestinationById(
          this.$route.query.destinationid
        );
        this.destinationData = responsedes.data;
      }
      this.$store.commit("showHideLoading", false);
      this.componentLoaded = true;
    }
  },
  computed: {
    destinationByLang() {
      if (this.componentLoaded == false) {
        return;
      }
      this.destinationData.destinationIntros.forEach(element => {
        if (element.lang.toUpperCase() === i18n.locale.toUpperCase()) {
          this.destinationData.destinationName = element.destinationName;
          this.destinationData.destinationIntro = element.destinationIntro;
        }
      });
      return this.destinationData;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.image-des {
  height: 200px !important;
}
.image-des-img {
  height: 200px !important;
  width: auto !important;
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
