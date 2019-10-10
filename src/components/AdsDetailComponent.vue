<template>
  <div class="tour-all second-background">
    <div class="container py-4 my-0" v-if="componentLoaded.adsDetailList">
      <ModalDetailImageComponent :imgs="adsDetailByLang.adsId.adsImages" :root="''" :minheight="'300px'"></ModalDetailImageComponent>
    </div>
    <div class="container py-4 my-0 custom-sticky-component" v-if="componentLoaded.ads">
      <div class="row w-100 m-0 p-0">
        <div class="col-8 m-0 p-0 pr-3 text-left">
          <div class="row w-100 m-0 p-0">
            <div class="col-12 w-100 m-0 mt-2 p-0">
              <div class="card shadow-none m-0">
                <div class="card-body m-0 p-2 px-4">
                  <p class="m-0">{{ads.adsTypeId.adsTypeName}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row w-100 m-0 p-0" v-if="componentLoaded.adsDetailList">
            <div class="col-12 w-100 m-0 p-0">
              <div class="card w-100 shadow-none my-3 tour-card">
                <div class="row p-4 m-0">
                  <h2
                    class="text-x2 font-bold w-100 text-nomal border-bottom"
                  >{{adsDetailByLang.adsId.adsName}}</h2>
                  <p class="text-09 w-100 text-info">
                    <span
                      class="bg-danger text-white font-bold text-left p-2 px-4 border-radius-100"
                    >{{moment(adsDetailByLang.adsId.endDate).diff(moment(), 'days')>0?`${moment(adsDetailByLang.adsId.endDate).diff(moment(), 'days')} days left`:'End'}}</span>
                  </p>
                </div>
                <!-- <div class="row p-0 m-0">
                  <carouselss
                    :items="1"
                    :autoplay="true"
                    :nav="false"
                    :dots="false"
                    :loop="true"
                    class="w-100 m-0 p-0 banner_filter"
                  >
                    <img
                      v-for="(img,i) in adsDetailByLang.adsId.adsImages"
                      :key="'iii'+i"
                      class="w-100"
                      v-bind:src="`/${img.filePath}`"
                      :alt="img.fileName"
                    />
                    <img
                      v-if="adsDetailByLang.adsId.adsImages.length==0"
                      :key="'iii'+i"
                      class="w-100"
                      v-bind:class="{'small-loading-img':adsDetailByLang.adsId.adsImages.length==0}"
                      v-bind:src="'/img/defaultloading.gif'"
                    />
                  </carouselss>
                </div> -->
                <div class="row h-100 p-0 px-4 m-0 ads-content-block">
                  <div class="col-12 p-0 m-0 full-img" v-html="adsDetailByLang.block01"></div>
                  <div class="col-12 p-0 m-0 full-img" v-html="adsDetailByLang.block02"></div>
                  <div class="col-12 p-0 m-0 full-img" v-html="adsDetailByLang.block03"></div>
                  <div class="col-12 p-0 m-0 full-img" v-html="adsDetailByLang.block04"></div>
                  <div class="col-12 p-0 m-0 full-img" v-html="adsDetailByLang.block05"></div>
                </div>
                <div
                  class="row h-100 p-0 px-4 pb-4 m-0"
                  v-if="ads.ctaId !=null && componentLoaded.ads"
                >
                  <a class="btn btn-sm btn-info text-white" :href="ads.link">{{ads.ctaId.ctaName}}</a>
                </div>
                <div class="row h-100 p-0 px-4 py-4 m-0">
                  <p class="font-bold w-100 text-09 border-top">{{$t('general_label_sharethis')}}</p>
                  <div class="text-07">
                    <button
                      class="btn text-07 text-nomal custom-btn-sm p-2 text-white bg-primary border-radius-100"
                    >facebook</button>
                    <button
                      class="btn text-07 text-nomal custom-btn-sm p-2 text-white bg-danger border-radius-100"
                    >instagram</button>
                    <button
                      class="btn text-07 text-nomal custom-btn-sm p-2 text-primary bg-warning border-radius-100"
                    >kakao</button>
                    <button
                      class="btn text-07 text-nomal custom-btn-sm p-2 text-white bg-success border-radius-100"
                    >naver</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row w-100 m-0 p-0">
            <div class="col-12 w-100 m-0 p-0">
              <DabookCardComponent></DabookCardComponent>
            </div>
          </div>
          <div class="row w-100 m-0 p-0" v-if="componentLoaded.ads && componentLoaded.adsList">
            <div class="col-12 w-100 m-0 p-0">
              <div class="card w-100 shadow-none my-3 tour-card">
                <div class="row p-4 m-0">
                  <h4 class="font-bold text-nomal border-bottom">{{$t('general_label_relatedpost')}}</h4>
                </div>
                <div class="row p-4 m-0">
                  <div
                    class="col-12 m-0 pb-2 p-0"
                    v-for="(ads,i) in adsRelateByLang"
                    :key="'wrw'+i"
                  >
                    <h6
                      class="text-info text-nomal w-100 m-0 hidden-outof-text cursor-pointer"
                      @click="redirectToDetailAds(ads)"
                    >{{ads.adsName}}</h6>
                    <p class="text-08 text-muted two-line hidden-outof-text" v-html="ads.adsIntro"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 m-0 p-0 pl-3">
          <div class="row m-0 p-0">
            <div class="card shadow-none my-2 p-3">
              <div class="card-title">
                <h6
                  class="text-left text-x1 font-bold border-bottom"
                >{{$t('ptourall_filter_followus')}}</h6>
              </div>
              <div class="card-body p-0 py-2">
                <ul class="ul-nonestyle d-flex justify-content-between align-items-center">
                  <li>
                    <a href="https://www.facebook.com/daiminh.dabook.vn/" target="_blank">
                      <img src="/img/social/facebook.png" alt />
                    </a>
                  </li>
                  <li>
                    <a href="https://ads.naver.com/godud2004" target="_blank">
                      <img src="/img/social/naver.png" alt />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/p/B1dkSA3gEUe/?utm_source=ig_web_copy_link"
                      target="_blank"
                    >
                      <img src="/img/social/instagram.png" alt />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="/img/social/kakao.png" alt />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="/img/social/zalo.png" alt />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row m-0 p-0">
            <div class="card shadow-none my-2 px-3">
              <div class="card-body p-0 py-4 font-bold">
                <input
                  class="custom-form-input p-1"
                  placeholder="Search..."
                  type="text"
                  name="iname"
                  v-model="search"
                />
              </div>
            </div>
          </div>

          <div class="row m-0 p-0" v-if="componentLoaded.adsList">
            <div class="card shadow-none my-2 p-3">
              <div class="card-title">
                <h6
                  class="text-left text-x1 font-bold border-bottom"
                >{{$t('ptourall_filter_hotads')}}</h6>
              </div>
              <div class="card-body p-0 py-2">
                <div class="row m-0 p-0">
                  <div
                    class="col-12 m-0 p-0"
                    v-for="(ads,i) in adsListByLang.slice(0,5)"
                    :key="'sadf'+i"
                  >
                    <div class="card related-card shadow-none my-2">
                      <div class="card-body p-0">
                        <div class="row m-0 p-0">
                          <div class="col-5 m-0 p-0 overflow-hidden">
                            <img
                              class="related-ads-img cursor-pointer"
                              :src="ads.adsImages.length>0?`/${ads.adsImages[0].filePath}`:'/img/background/bg_01.jpg'"
                              :alt="ads.adsName"
                              @click="redirectToDetailAds(ads)"
                            />
                          </div>
                          <div class="col-7 p-0 px-2 text-left">
                            <h6
                              class="one-line m-0 text-info cursor-pointer"
                              @click="redirectToDetailAds(ads)"
                            >{{ads.adsName}}</h6>
                            <div class="text-muted two-line text-08 text-left d-block" v-html="ads.adsIntro"></div>
                            <div
                              class="text-muted two-line text-06"
                            >{{moment(ads.createDate).format('YYYY-DD-MM')}}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row m-0 p-0">
            <div class="card shadow-none my-2 p-3">
              <div class="card-title">
                <h6
                  class="text-left text-x1 font-bold border-bottom"
                >{{$t('ptourall_filter_facebook')}}</h6>
              </div>
              <div class="card-body p-0 py-2">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdaiminh.dabook.vn%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="100%"
                  height="250px"
                  style="border:none;overflow:hidden"
                  scrolling="no"
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </div>
            </div>
          </div>
          <div class="row m-0 p-0">
            <div class="card shadow-none my-2 p-3">
              <div class="card-title">
                <h6
                  class="text-left text-x1 font-bold border-bottom"
                >{{$t('ptourall_filter_naver')}}</h6>
              </div>
              <div class="card-body p-0 py-2"></div>
            </div>
          </div>
          <div class="row m-0 p-0">
            <div class="card shadow-none my-2 p-3">
              <div class="card-title">
                <h6
                  class="text-left text-x1 font-bold border-bottom"
                >{{$t('ptourall_filter_instagram')}}</h6>
              </div>
              <div class="card-body p-0 py-2"></div>
            </div>
          </div>
          <div class="row m-0 p-0">
            <div class="card shadow-none my-2 p-3">
              <div class="card-title">
                <h6
                  class="text-left text-x1 font-bold border-bottom"
                >{{$t('ptourall_filter_kakao')}}</h6>
              </div>
              <div class="card-body p-0 py-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid my-0 mt-2 py-4 second-background">
      <div class="container p-0">
        <TopTourPromotionComponent :isTitle="true" :paginationEnabled="false"></TopTourPromotionComponent>
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
      const response = await AdsService.getAdsById(id);
      this.ads = response.data;
      this.componentLoaded.ads = true;
    },
    async getAdsList() {
      const response = await AdsService.getAllAds();
      this.adsList = randomArray(response.data);
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
.ads-content-block img{
  max-width: 100%;
  width: 100%;
}
</style>
