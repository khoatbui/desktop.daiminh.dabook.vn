<template>
  <div class="tour-all second-background" v-if="componentLoaded.blogList">
    <div class="container py-4 my-0">
      <ModalDetailImageComponent :imgs="imgBackground" :root="''"></ModalDetailImageComponent>
    </div>
    <div class="container py-4 my-0 custom-sticky-component">
      <div class="row w-100 m-0 p-0">
        <div class="col-8 m-0 p-0 pr-3 text-left">
          <div class="row w-100 m-0 p-0">
            <div class="col-12 w-100 m-0 my-2 p-0">
              <div class="card shadow-none m-0">
                <div
                  class="card-body m-0 p-2 d-flex flex-row justify-content-between align-items-center"
                >
                  <span>
                    <span class="text-x1 text-info font-bold">{{blogListByLang.length}}</span>
                    {{$t('general_label_resultfound')}}
                  </span>
                  <div class="d-flex align-items-center" >
                      <ul class="ul-nonestyle d-flex justify-content-around m-0 mx-4">
                          <li class="mx-1 cursor-pointer">
                              <font-awesome-icon icon="list" class="text-x1 text-center text-muted" />
                          </li>
                          <li class="mx-1 cursor-pointer">
                              <font-awesome-icon icon="th-large" class="text-x1 text-center text-muted" />
                          </li>
                      </ul>
                  <vs-dropdown>
                    <a class="a-icon" href="#">
                      {{$t('pdestinationexplore_filter_sort')}}
                      <vs-icon class icon="expand_more"></vs-icon>
                    </a>

                    <vs-dropdown-menu>
                      <vs-dropdown-item
                        @click="filterCondition.sortBy = 'PRICE'"
                      >{{$t('general_label_sortby_price')}}</vs-dropdown-item>
                      <vs-dropdown-item
                        @click="filterCondition.sortBy = 'NAME'"
                      >{{$t('general_label_sortby_name')}}</vs-dropdown-item>
                      <vs-dropdown-item
                        @click="filterCondition.sortBy = 'POPULAR'"
                      >{{$t('general_label_sortby_popular')}}</vs-dropdown-item>
                      <vs-dropdown-item
                        @click="filterCondition.sortBy = 'VOTE'"
                      >{{$t('general_label_sortby_vote')}}</vs-dropdown-item>
                    </vs-dropdown-menu>
                  </vs-dropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row w-100 m-0 p-0">
            <div class="col-12 w-100 m-0 p-0">
              <div
                class="card w-100 shadow-none my-3 tour-card"
                v-for="(blog,i) in blogListByLang"
                :key="'tsja'+i"
              >
                <div class="row h-100 p-0 m-0">
                  <div class="col-4 img-card h-100 p-0 m-0">
                    <img
                      class="image-package cursor-pointer"
                      v-bind:class="{'small-loading-img':blog.blogImages.length==0}"
                      v-bind:src="blog.blogImages.length>0?`/${blog.blogImages[0].filePath}`:'/img/defaultloading.gif'"
                      v-bind:alt="blog.blogName"
                      @click="redirectToDetailBlog(blog)"
                    />
                  </div>
                  <div class="col-8 p-3 m-0">
                    <div class="card-body p-0">
                      <div
                        class="card-title m-0 text-color-50 text-06 d-flex justify-content-between align-items-center cursor-pointer"
                        @click="redirectToDetailBlog(blog)"
                      >
                        <h6
                          class="card-title text-x1 text-main-color m-0 cursor-pointer flex-grow"
                        >{{blog.blogName}}</h6>
                        <span class="shadow">
                          <font-awesome-icon icon="heart" class="text-x1 text-center text-muted" />
                        </span>
                      </div>
                      <div class="text-left text-muted">
                          <p class="text-06 m-0">{{moment(blog.createDate).format('YYYY-DD-MM')}} / {{blog.createBy}}</p>
                      </div>
                      <div class="text-left text-08 text-5line" v-html="blog.blogIntro"></div>
                      <div class="text-right">
                          <a class="text-info cursor-pointer text-08">Read more <font-awesome-icon icon="arrow-right" class="text-center ml-1" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-2 bg-white">
                <vs-pagination
                  :total="pageCount"
                  v-model="pageNumber"
                  prev-icon="arrow_back"
                  next-icon="arrow_forward"
                ></vs-pagination>
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
                    <a href="https://blog.naver.com/godud2004" target="_blank">
                      <img src="/img/social/naver.png" alt />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/p/B1dkSA3gEUe/?utm_source=ig_web_copy_link" target="_blank">
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

          <div class="row m-0 p-0">
            <div class="card shadow-none my-2 p-3">
              <div class="card-title">
                <h6
                  class="text-left text-x1 font-bold border-bottom"
                >{{$t('ptourall_filter_hotblog')}}</h6>
              </div>
              <div class="card-body p-0 py-2">
                <div class="row m-0 p-0">
                  <div
                    class="col-12 m-0 p-0"
                    v-for="(blog,i) in blogListByLang.slice(0,5)"
                    :key="'sadf'+i"
                  >
                    <div class="card related-card shadow-none my-2">
                      <div class="card-body p-0">
                        <div class="row m-0 p-0">
                          <div class="col-5 m-0 p-0 overflow-hidden">
                            <img
                              class="related-blog-img cursor-pointer"
                              :src="blog.blogImages.length>0?`/${blog.blogImages[0].filePath}`:'/img/background/bg_01.jpg'"
                              :alt="blog.blogName"
                              @click="redirectToDetailBlog(blog)"
                            />
                          </div>
                          <div class="col-7 p-0 px-2 text-left">
                            <h6 class="one-line m-0 text-info cursor-pointer" @click="redirectToDetailBlog(blog)">{{blog.blogName}}</h6>
                            <div class="text-muted two-line text-08" v-html="blog.blogIntro"></div>
                            <div
                              class="text-muted two-line text-06"
                            >{{moment(blog.createDate).format('YYYY-DD-MM')}}</div>
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
                >{{$t('ptourall_filter_category')}}</h6>
              </div>
              <div class="card-body p-0 py-2">
                <div class="row p-0 m-0">
                  <div
                    class="col-12 p-0 m-0 text-left py-1"
                    v-for="(type,i) in blogTypeListByLang"
                    :key="'affsa'+i"
                  >
                    <vs-checkbox
                      v-model="filterCondition.blogTypeList.filterBlogTypeList"
                      :vs-value="type"
                    >{{type.blogTypeName}}</vs-checkbox>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row m-0 p-0">
            <div class="card shadow-none my-2 p-3">
              <div
                class="card-title cursor-pointer"
                data-toggle="collapse"
                href="#collapseDestination"
                role="button"
                aria-expanded="false"
                aria-controls="collapseDestination"
              >
                <h6
                  class="text-left text-x1 font-bold border-bottom"
                >{{$t('ptourall_filter_destination')}}</h6>
              </div>
              <div class="card-body p-0 py-2 collapse hide" id="collapseDestination">
                <div class="row p-0 m-0">
                  <div
                    class="col-12 p-0 m-0 text-left py-1"
                    v-for="(des,i) in destination"
                    :key="'affsa'+i"
                  >
                    <vs-checkbox
                      v-model="filterCondition.destination.filterDestination"
                      :vs-value="des"
                    >{{des.destinationName}}</vs-checkbox>
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
                >{{$t('ptourall_filter_tag')}}</h6>
              </div>
              <div class="card-body p-0 py-2">
                <div class="row p-0 m-0">
                  <div
                    class="col-12 p-0 m-0 text-left py-1"
                    v-for="(type,i) in blogTypeListByLang"
                    :key="'affsa'+i"
                  >
                    <vs-checkbox
                      v-model="filterCondition.blogTypeList.filterBlogTypeList"
                      :vs-value="type"
                    >{{type.blogTypeName}}</vs-checkbox>
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
                  <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdaiminh.dabook.vn%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%" height="200px" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
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
              <div class="card-body p-0 py-2">
              </div>
            </div>
          </div>
          <div class="row m-0 p-0">
            <div class="card shadow-none my-2 p-3">
              <div class="card-title">
                <h6
                  class="text-left text-x1 font-bold border-bottom"
                >{{$t('ptourall_filter_instagram')}}</h6>
              </div>
              <div class="card-body p-0 py-2">
              </div>
            </div>
          </div>
          <div class="row m-0 p-0">
            <div class="card shadow-none my-2 p-3">
              <div class="card-title">
                <h6
                  class="text-left text-x1 font-bold border-bottom"
                >{{$t('ptourall_filter_kakao')}}</h6>
              </div>
              <div class="card-body p-0 py-2">
                  
              </div>
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
import { Carousel, Slide } from "vue-carousel";
import lazyLoadComponent from "@/utils/lazy-load-component";
import SkeletonBox from "@/components/SkeletonBox.vue";
import TourService from "@/api/TourService";
import BlogService from "@/api/BlogService";
import TravelStyleService from "@/api/TravelStyleService";
import DestinationService from "@/api/DestinationService";

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
    })
  },
  name: "BlogAllComponent",
  props: {
    msg: String
  },
  data() {
    return {
      search: "",
      moment: moment,
      componentLoaded:{
        blogList:false,
        blogTypeList:false,
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
      blogList: [],
      blogTypeList: [],
      tourList: [],
      travelStyle: [],
      destination: [],
      filterCondition: {
        blogTypeList: {
          filterBlogTypeList: [],
          isFilter: false
        },
        destination: {
          filterDestination: [],
          isFilter: false
        },
        sortBy: ""
      },
      pageNumber: 1,
      size: 10
    };
  },
  watch: {},
  created() {
    this.initialAll();
  },
  methods: {
    initialAll() {
      this.initial();
      this.getBlogType();
      this.getTravelStyle();
      this.getDestination();
    },
    async initial() {
      this.$store.commit("showHideLoading", true);
      const response = await BlogService.getAllBlog();
      this.blogList = randomArray(response.data);
      this.$store.commit("showHideLoading", false);
      this.componentLoaded.blogList = true;
    },
    async getBlogType() {
      this.$store.commit("showHideLoading", true);
      const response = await BlogService.getAllBlogType();
      this.blogTypeList = randomArray(response.data);
      this.$store.commit("showHideLoading", false);
      this.componentLoaded.blogTypeList = true;
    },
    async getTravelStyle() {
      const response = await TravelStyleService.getAllTravelStyle();
      this.travelStyle = randomArray(response.data);
    },
    async getDestination() {
      const response = await DestinationService.getAllDestination();
      this.destination = randomArray(response.data);
    },
    redirectToDetailBlog(des) {
      this.$router.push(`/blog/detail?blogid=${des._id}`);
    },
    changeFilterAction() {
      this.filterCondition.price.isFilter = true;
    },
    resetFilter() {}
  },
  computed: {
    blogListByLang() {
      if (this.componentLoaded.blogList === false) {
        return;
      }
      this.blogList.forEach(element => {
        element.blogIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.blogName = area.blogName;
            element.blogIntro = area.blogIntro;
          }
        });
      });
      return this.blogList;
    },
    blogTypeListByLang() {
        return this.blogTypeList;
    },
    pageCount() {
      let l = this.blogList.length,
        s = this.size;
      return Math.ceil(l / s);
    },
  },
  watch: {}
};
</script>

<style scoped lang="scss">
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
.related-blog-img {
  height: 80px;
  width: auto;
  min-width: 100%;
}
.related-card {
  overflow: hidden;
}
</style>
