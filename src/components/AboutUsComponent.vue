<template>
  <div class="about-us">
    
  </div>
</template>
<script>
import moment from "moment";
import i18n from "@/lang/i18n";
import carouselss from "vue-owl-carousel";
import { Carousel, Slide } from "vue-carousel";
import lazyLoadComponent from "@/utils/lazy-load-component";
import SkeletonBox from "@/components/SkeletonBox.vue";
import AdsService from "@/api/AdsService";

import "@lazy-copilot/datetimepicker/dist/datetimepicker.css";
import { DateTimePicker } from "@lazy-copilot/datetimepicker";
import AirbnbDatetimePickerComponent from "@/components/AirbnbDatetimePickerComponent.vue";

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
    DateTimePicker,
    carouselss,
    Carousel,
    Slide,
    AirbnbDatetimePickerComponent,
    TopTourPromotionComponent: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/TopTourPromotionComponent.vue"),
      loading: SkeletonBox
    }),
    ModalDetailImageComponent: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/ModalDetailImageComponent.vue"),
      loading: SkeletonBox
    }),
    DabookCardComponent: lazyLoadComponent({
      componentFactory: () => import("@/components/DabookCardComponent.vue"),
      loading: SkeletonBox
    })
  },
  name: "AdsAllComponent",
  props: {
    msg: String
  },
  data() {
    return {
      search: "",
      moment: moment,
      componentLoaded: {
        adsList: false,
        adsDetailList: false,
        ads: false
      },
      imgBackground: [
        {
          fileName: "daiminh travel",
          filePath: "img/background/bg_09.jpg"
        },
        {
          fileName: "daiminh travel",
          filePath: "img/background/bg_08.jpg"
        },
        {
          fileName: "daiminh travel",
          filePath: "img/background/bg_06.jpg"
        },
        {
          fileName: "daiminh travel",
          filePath: "img/background/bg_07.jpg"
        },
        {
          fileName: "daiminh travel",
          filePath: "img/background/bg_02.jpg"
        },
        {
          fileName: "daiminh travel",
          filePath: "img/background/bg_01.jpg"
        },
        {
          fileName: "daiminh travel",
          filePath: "img/background/bg_07.jpg"
        }
      ],
      priceformat: v => {
        return new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND"
        }).format(v);
      },
      adsList: [],
      adsDetailList: [],
      ads: {},
      filterCondition: {
        sortBy: ""
      },
      pageNumber: 1,
      size: 10
    };
  },
  created() {
    this.initialAll();
  },
  methods: {
    initialAll() {
      this.initial(this.$route.query.adsid);
      this.getAdsList();
      this.getAdsById(this.$route.query.adsid);
    },
    async initial(id) {
      this.$store.commit("showHideLoading", true);
      const response = await AdsService.getAdsDetailById(id);
      this.adsDetailList = randomArray(response.data);
      this.$store.commit("showHideLoading", false);
      this.componentLoaded.adsDetailList = true;
    },
    async getAdsById(id) {
      this.$store.commit("showHideLoading", true);
      const response = await AdsService.getAdsById(id);
      this.ads = response.data;
      this.componentLoaded.ads = true;
      this.$store.commit("showHideLoading", false);
    },
    async getAdsList() {
      this.$store.commit("showHideLoading", true);
      const response = await AdsService.getAllAds();
      this.adsList = randomArray(response.data);
      console.log(this.adsList);
      this.$store.commit("showHideLoading", false);
      this.componentLoaded.adsList = true;
    },
    redirectToDetailAds(des) {
      this.$router.push(`/ads/detail?adsid=${des._id}`);
    },
    changeFilterAction() {
      this.filterCondition.price.isFilter = true;
    },
    resetFilter() {}
  },
  computed: {
    adsListByLang() {
      if (this.componentLoaded.adsList === false) {
        return;
      }
      this.adsList.forEach(element => {
        element.adsIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.adsName = area.adsName;
            element.adsIntro = area.adsIntro;
          }
        });
      });
      return this.adsList;
    },
    adsRelateByLang() {
      if (this.componentLoaded.ads === false) {
        return;
      }
      var that = this;
      return this.adsListByLang.filter(function(adss) {
        return adss.adsTypeId._id == that.ads.adsTypeId._id;
      });
    },
    adsDetailByLang() {
      if (this.componentLoaded.adsDetailList === false) {
        return;
      }
      var temp = this.adsDetailList.filter(function(adss) {
        return adss.lang.toUpperCase() === i18n.locale.toUpperCase();
      });
      temp.forEach(element => {
        element.adsId.adsIntros.forEach(blog => {
          if (blog.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.adsId.adsName = blog.adsName;
            element.adsId.adsIntro = blog.adsIntro;
          }
        });
      });
      return temp[0];
    },
    pageCount() {
      let l = this.adsList.length,
        s = this.size;
      return Math.ceil(l / s);
    }
  },
  watch: {
    $route: "initialAll"
  }
};
</script>

<style scoped lang="scss">
.banner_filter {
  height: 300px;
  overflow: hidden;
}
.img-card {
  overflow: hidden;
}
.image-package {
  height: 160px;
  width: auto;
  min-width: 100%;
}
.text-5line {
  height: 5rem;
  line-height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tour-card {
  min-height: 150px;
  overflow: hidden;
}
.con-vs-checkbox {
  justify-content: start !important;
}
.a-icon,
.a-icon:hover,
.a-icon:focus,
.a-icon:active,
.a-icon:visited {
  color: rgba(0, 0, 0, 0.87) !important;
}
.ul-nonestyle li a img {
  height: 40px;
}
.related-ads-img {
  height: 80px;
  width: auto;
  min-width: 100%;
}
.related-card {
  overflow: hidden;
}
</style>
