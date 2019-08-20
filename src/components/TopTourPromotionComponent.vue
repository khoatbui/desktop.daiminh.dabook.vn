<template>
  <div class="toppackage">
    <div class="section text-left pt-0 pb-4">
      <h3 class="title text-left m-0" v-if="isTitle">{{$t('ptoptour_title_h3')}}</h3>
      <div class="row p-0 m-0" v-if="isTitle">
        <div class="col-12 p-0 m-0 d-flex justify-content-between align-items-center">
          <p>{{$t('ptoptour_title_explain')}}</p>
          <a class="link-des text-danger" @click="redirectToAllTour">
            {{$t('general_showmore')}}
            <font-awesome-icon icon="chevron-right" class="text-08 text-center" />
          </a>
        </div>
      </div>
      <carousel :per-page="5" :navigation-enabled="true" :paginationEnabled="paginationEnabled">
        <slide class="m-2" v-for="(pac,ides) in tourByLang" v-bind:key="ides">
          <div class="card m-0 h-100 d-inline-block">
            <img
              class="card-img-top image-package cursor-pointer"
              v-bind:class="{'small-loading-img':pac.tourImages.length==0}"
              v-bind:src="pac.tourImages.length>0?`/webmp/${pac.tourImages[0].filePath.slice(0, -3)}webp`:'/img/defaultloading.gif'"
              v-bind:alt="pac.tourImages[0].fileName"
              @click="redirectToTourDetail(pac)"
            />
            <div class="card-body p-2">
              <h6
                class="card-title m-0 text-color-50 text-06"
              >{{pac.to}} | {{pac.tourTypeId.tourTypeName}}</h6>
              <h6
                class="card-title m-0 cursor-pointer"
                @click="redirectToTourDetail(pac)"
              >{{pac.tourName}}</h6>
              <p class="card-text intro-package hidden-outof-text" v-html="pac.tourIntro"></p>
              <h2
                class="text-x1 price-text text-info m-0"
              >{{$t('general_from')}} {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(pac.price)}}</h2>
              <small
                class="text-muted m-0 text-success"
              >{{$t('general_availablefrom')}} {{bookingDate}}</small>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import moment from "moment";
import i18n from "@/lang/i18n";
import TourService from "@/api/TourService";

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
    Slide
  },
  name: "TopTourComponent",
  props: {
    msg: String,
    isTitle: true,
    paginationEnabled: true
  },
  data() {
    return {
      packages: [],
      selectedPayment: {},
      bookingDate: moment().format("MM-DD-YYYY"),
      componentLoaded:false,
    };
  },
  mounted() {
    this.initial();
  },
  methods: {
    async initial() {
      this.$store.commit("showHideLoading", true);
      const response = await TourService.getTopPromotionTourPackage();
      this.packages = randomArray(response.data);
      this.$store.commit("showHideLoading", false);
      this.componentLoaded=true;
    },
    redirectToTourDetail(des) {
      this.$router.push(`/tourdetail?tourid=${des._id}`);
    },
    redirectToAllTour() {
      this.$router.push(`/tour`);
    }
  },
  computed : {
    tourByLang() {
      if (this.componentLoaded === false) {
        return;
      }
      this.packages.forEach(element => {
        element.tourIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.tourName = area.tourName;
            element.tourIntro= area.tourIntro;
          }
        });
      });
      return this.packages;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-package {
  width: 220px;
  overflow: hidden;
}
.intro-package {
  min-width: 100px;
  max-width: 200px;
}
.image-package {
  height: 180px;
}
.price-text {
  font-weight: 900;
}
.img-supplier {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
}
</style>
