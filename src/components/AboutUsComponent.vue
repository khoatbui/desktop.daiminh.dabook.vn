<template>
  <div class="about-us second-background">
    <div class="background-gradiend"></div>
    <div class="container">
      <div class="row m-0 p-0 align-items-stretch" v-if="componentLoaded.aboutList">
        <div class="col-4 m-0 p-0 pr-2">
          <div class="card shadow-none border-0">
            <div class="card-body">
              <div class="row m-0 p-0 text-left">
                <div
                  class="col-12 m-0 p-0 cursor-pointer"
                  v-for="(ab,i) in aboutList"
                  :key="'kk'+i"
                  @click="getAboutDetail(ab)"
                >
                  <h4 class="text-nomal text-x1">{{ab.blogName}}</h4>
                </div>
              </div>
            </div>
          </div>
          <DabookCardComponent></DabookCardComponent>
          <div class="card border-0">
            <div class="card-body text-left">
              <h4>Contact us</h4>
              <DefaultContactFormComponent></DefaultContactFormComponent>
            </div>
          </div>
        </div>
        <div class="col-8 m-0 p-0 pl-2">
          <div class="card shadow-none border-0">
            <div class="card-body">
              <div class="row m-0 p-0 text-left" v-if="componentLoaded.aboutDetail">
                <div class="col-12 p-2 m-0">
                  <img
                    v-if="aboutDetailByLang.blogId.blogImages.length>0"
                    class="w-100 m-0 p-0 mb-4"
                    :src="aboutDetailByLang.blogId.blogImages[0].filePath"
                    alt
                  />
                  <div v-html="aboutDetailByLang.block01"></div>
                  <div v-html="aboutDetailByLang.block02"></div>
                  <div v-html="aboutDetailByLang.block03"></div>
                  <div v-html="aboutDetailByLang.block04"></div>
                  <div v-html="aboutDetailByLang.block05"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import i18n from "@/lang/i18n";
import carouselss from "vue-owl-carousel";
import { Carousel, Slide } from "vue-carousel";
import lazyLoadComponent from "@/utils/lazy-load-component";
import SkeletonBox from "@/components/SkeletonBox.vue";
import BlogService from "@/api/BlogService";

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
    }),
    DefaultContactFormComponent: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/DefaultContactFormComponent.vue"),
      loading: SkeletonBox
    })
  },
  name: "AdsAllComponent",
  props: {
    msg: String
  },
  data() {
    return {
      aboutList: [],
      aboutDetail: [],
      componentLoaded: {
        aboutList: false,
        aboutDetail: false
      }
    };
  },
  created() {
    this.initialAll();
  },
  methods: {
    initialAll() {
      this.getaboutlist();
    },
    async getaboutlist() {
      this.$store.commit("showHideLoading", true);
      const response = await BlogService.getBlogByType(
        "5d387ca60c393a0a54e72214"
      );
      this.aboutList = response.data;
      this.getAboutDetail(response.data[0]);
      this.componentLoaded.aboutList = true;
      this.$store.commit("showHideLoading", false);
    },
    async getAboutDetail(item) {
      const response = await BlogService.getBlogDetailById(item._id);
      this.aboutDetail = response.data;
      this.componentLoaded.aboutDetail = true;
    }
  },
  computed: {
    aboutDetailByLang() {
      if (!this.componentLoaded.aboutDetail) return null;
      var temp = this.aboutDetail.filter(item => {
        return (
          item.lang.toUpperCase() == this.$store.state.currentLang.toUpperCase()
        );
      });
      return temp[0];
    }
  },
  watch: {
    $route: "initialAll"
  }
};
</script>

<style scoped lang="scss">
.container {
  z-index: 5;
  position: relative;
}
.about-us {
  position: relative;
}
.background-gradiend {
  background-image: url("/img/background/bg_07.jpg");
  background-repeat: no-repeat;
  width: 100%;
  height: 600px;
  background-size: cover;
  background-position: bottom;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
}
.background-gradiend::before,
.background-gradiend::after {
  position: absolute;
  background: linear-gradient(
    0deg,
    rgba(250, 250, 250, 1) 0%,
    rgba(250, 250, 250, 0) 100%
  );
  z-index: 1;
  width: 100%;
  height: 100%;
  content: "";
  bottom: 0;
  left: 0;
}
</style>
