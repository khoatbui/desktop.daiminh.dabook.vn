<template>
  <div class="tour-all second-background">
    <!-- <vue-scroll-progress></vue-scroll-progress> -->
    <div class="container py-4 my-0" v-if="componentLoaded.blogDetailList">
      <ModalDetailImageComponent :imgs="blogDetailByLang.blogId.blogImages" :root="''" :minheight="'300px'"></ModalDetailImageComponent>
    </div>
    <progress-scroll>
      <div class="container py-4 my-0 custom-sticky-component" v-if="componentLoaded.blog">
        <div class="row w-100 m-0 p-0">
          <div class="col-8 m-0 p-0 pr-3 text-left">
            <div class="row w-100 m-0 p-0">
              <div class="col-12 w-100 m-0 mt-2 p-0">
                <div class="card shadow-none m-0">
                  <div class="card-body m-0 p-2 px-4">
                    <p class="m-0">
                      {{ blog.blogTypeId.blogTypeName }}
                      <span v-if="blog.destinationId != null">/ {{ blog.destinationId.destinationName }}</span>
                      <span v-if="blog.travelStyleId != null">/ {{ blog.travelStyleId.travelStyleName }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row w-100 m-0 p-0" v-if="componentLoaded.blogDetailList">
              <div class="col-12 w-100 m-0 p-0">
                <div class="card w-100 shadow-none my-3 tour-card">
                  <div class="row p-4 m-0">
                    <h2 class="text-x2 font-bold w-100 text-nomal border-bottom">{{ blogDetailByLang.blogId.blogName }}</h2>
                    <p class="text-09 w-100 text-info">
                      {{ moment(blogDetailByLang.createDate).format('YYYY-DD-MM') }} /
                      <span class="text-muted">by</span>
                      {{ blogDetailByLang.createBy }}
                    </p>
                  </div>
                  <div class="row p-0 m-0">
                    <carouselss :items="1" :autoplay="true" :nav="false" :dots="false" :loop="true" class="w-100 m-0 p-0 banner_filter">
                      <img v-for="(img, i) in blogDetailByLang.blogId.blogImages" :key="'iii' + i" class="w-100" v-bind:src="`/${img.filePath}`" :alt="img.fileName" />
                      <img
                        v-if="blogDetailByLang.blogId.blogImages.length == 0"
                        :key="'iii' + i"
                        class="w-100"
                        v-bind:class="{ 'small-loading-img': blogDetailByLang.blogId.blogImages.length == 0 }"
                        v-bind:src="'/img/defaultloading.gif'"
                      />
                    </carouselss>
                  </div>
                  <div class="row h-100 p-0 px-4 m-0">
                    <div class="col-12 p-0 m-0 full-img my-2">
                      <blockquote class="custom-blockquote">
                        <p class="mb-0 text-08 font-italic" v-html="blogDetailByLang.blogId.blogIntro"></p>
                      </blockquote>
                    </div>
                    <div class="col-12 p-0 m-0 full-img" v-html="blogDetailByLang.block01"></div>
                    <div class="col-12 p-0 m-0 full-img" v-html="blogDetailByLang.block02"></div>
                    <div class="col-12 p-0 m-0 full-img" v-html="blogDetailByLang.block03"></div>
                    <div class="col-12 p-0 m-0 full-img" v-html="blogDetailByLang.block04"></div>
                    <div class="col-12 p-0 m-0 full-img" v-html="blogDetailByLang.block05"></div>
                  </div>
                  <div class="row h-100 p-0 px-4 pb-4 m-0" v-if="blog.ctaId != null && componentLoaded.blog">
                    <a class="btn btn-sm btn-info text-white" :href="blog.link">{{ blog.ctaId.ctaName }}</a>
                  </div>
                  <div class="row h-100 p-0 px-4 py-4 m-0">
                    <p class="font-bold w-100 text-09 border-top">{{ $t('general_label_sharethis') }}</p>
                    <div class="text-07">
                      <button class="btn text-07 text-nomal custom-btn-sm p-2 text-white bg-primary border-radius-100">facebook</button>
                      <button class="btn text-07 text-nomal custom-btn-sm p-2 text-white bg-danger border-radius-100">instagram</button>
                      <button class="btn text-07 text-nomal custom-btn-sm p-2 text-primary bg-warning border-radius-100">kakao</button>
                      <button class="btn text-07 text-nomal custom-btn-sm p-2 text-white bg-success border-radius-100">naver</button>
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
            <div class="row w-100 m-0 p-0" v-if="componentLoaded.blog && componentLoaded.blogList">
              <div class="col-12 w-100 m-0 p-0">
                <div class="card w-100 shadow-none my-3 tour-card">
                  <div class="row p-4 m-0">
                    <h4 class="font-bold text-nomal border-bottom">{{ $t('general_label_relatedpost') }}</h4>
                  </div>
                  <div class="row p-4 m-0">
                    <div class="col-12 m-0 pb-2 p-0" v-for="(blog, i) in blogRelateByLang" :key="'wrw' + i">
                      <h6 class="text-info text-nomal w-100 m-0 hidden-outof-text cursor-pointer" @click="redirectToDetailBlog(blog)">{{ blog.blogName }}</h6>
                      <p class="text-08 text-muted two-line hidden-outof-text" v-html="blog.blogIntro"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row w-100 m-0 p-0">
              <BlogListComponent></BlogListComponent>
            </div>
          </div>
          <div class="col-4 m-0 p-0 pl-3">
            <div class="row m-0 p-0">
              <div class="card shadow-none my-2 p-3">
                <div class="card-title">
                  <h6 class="text-left text-x1 font-bold border-bottom">{{ $t('ptourall_filter_followus') }}</h6>
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
                  <input class="custom-form-input p-1" placeholder="Search..." type="text" name="iname" v-model="search" />
                </div>
              </div>
            </div>

            <div class="row m-0 p-0" v-if="componentLoaded.blogList">
              <div class="card shadow-none my-2 p-3">
                <div class="card-title">
                  <h6 class="text-left text-x1 font-bold border-bottom">{{ $t('ptourall_filter_hotblog') }}</h6>
                </div>
                <div class="card-body p-0 py-2">
                  <div class="row m-0 p-0">
                    <div class="col-12 m-0 p-0" v-for="(blog, i) in blogListByLang.slice(0, 5)" :key="'sadf' + i">
                      <div class="card related-card shadow-none my-2">
                        <div class="card-body p-0">
                          <div class="row m-0 p-0">
                            <div class="col-5 m-0 p-0 overflow-hidden">
                              <img
                                class="related-blog-img cursor-pointer"
                                :src="blog.blogImages.length > 0 ? `/${blog.blogImages[0].filePath}` : '/img/background/bg_01.jpg'"
                                :alt="blog.blogName"
                                @click="redirectToDetailBlog(blog)"
                              />
                            </div>
                            <div class="col-7 p-0 px-2 text-left">
                              <h6 class="one-line m-0 text-info cursor-pointer" @click="redirectToDetailBlog(blog)">{{ blog.blogName }}</h6>
                              <div class="text-muted two-line text-08 text-left d-block" v-html="blog.blogIntro"></div>
                              <div class="text-muted two-line text-06">{{ moment(blog.createDate).format('YYYY-DD-MM') }}</div>
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
                  <h6 class="text-left text-x1 font-bold border-bottom">{{ $t('ptourall_filter_facebook') }}</h6>
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
                  <h6 class="text-left text-x1 font-bold border-bottom">{{ $t('ptourall_filter_naver') }}</h6>
                </div>
                <div class="card-body p-0 py-2"></div>
              </div>
            </div>
            <div class="row m-0 p-0">
              <div class="card shadow-none my-2 p-3">
                <div class="card-title">
                  <h6 class="text-left text-x1 font-bold border-bottom">{{ $t('ptourall_filter_instagram') }}</h6>
                </div>
                <div class="card-body p-0 py-2"></div>
              </div>
            </div>
            <div class="row m-0 p-0">
              <div class="card shadow-none my-2 p-3">
                <div class="card-title">
                  <h6 class="text-left text-x1 font-bold border-bottom">{{ $t('ptourall_filter_kakao') }}</h6>
                </div>
                <div class="card-body p-0 py-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </progress-scroll>
    <div class="container-fluid my-0 mt-2 py-4 second-background">
      <div class="container p-0">
        <TopTourPromotionComponent :isTitle="true" :paginationEnabled="false"></TopTourPromotionComponent>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
import i18n from '@/lang/i18n';
import carouselss from 'vue-owl-carousel';
import { Carousel, Slide } from 'vue-carousel';
import lazyLoadComponent from '@/utils/lazy-load-component';
import SkeletonBox from '@/components/SkeletonBox.vue';
import BlogService from '@/api/BlogService';
import TravelStyleService from '@/api/TravelStyleService';

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
    carouselss,
    Carousel,
    Slide,
    TopTourPromotionComponent: lazyLoadComponent({
      componentFactory: () => import('@/components/TopTourPromotionComponent.vue'),
      loading: SkeletonBox,
    }),
    ModalDetailImageComponent: lazyLoadComponent({
      componentFactory: () => import('@/components/ModalDetailImageComponent.vue'),
      loading: SkeletonBox,
    }),
    DabookCardComponent: lazyLoadComponent({
      componentFactory: () => import('@/components/DabookCardComponent.vue'),
      loading: SkeletonBox,
    }),
    BlogListComponent: lazyLoadComponent({
      componentFactory: () => import('@/components/BlogListComponent.vue'),
      loading: SkeletonBox,
    }),
  },
  name: 'BlogDetailComponent',
  props: {
    msg: String,
  },
  data() {
    return {
      search: '',
      moment: moment,
      componentLoaded: {
        blogList: false,
        blogDetailList: false,
        blog: false,
      },
      imgBackground: [
        {
          fileName: 'daiminh travel',
          filePath: 'img/background/bg_09.jpg',
        },
        {
          fileName: 'daiminh travel',
          filePath: 'img/background/bg_08.jpg',
        },
        {
          fileName: 'daiminh travel',
          filePath: 'img/background/bg_06.jpg',
        },
        {
          fileName: 'daiminh travel',
          filePath: 'img/background/bg_07.jpg',
        },
        {
          fileName: 'daiminh travel',
          filePath: 'img/background/bg_02.jpg',
        },
        {
          fileName: 'daiminh travel',
          filePath: 'img/background/bg_01.jpg',
        },
        {
          fileName: 'daiminh travel',
          filePath: 'img/background/bg_07.jpg',
        },
      ],
      priceformat: v => {
        return new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND',
        }).format(v);
      },
      blogList: [],
      blogDetailList: [],
      blog: {},
      filterCondition: {
        sortBy: '',
      },
      pageNumber: 1,
      size: 10,
    };
  },
  created() {
    this.initialAll();
  },
  methods: {
    initialAll() {
      this.initial(this.$route.query.blogid);
      this.getBlogById(this.$route.query.blogid);
      this.getBlogList();
    },
    async initial(id) {
      this.$store.commit('showHideLoading', true);
      const response = await BlogService.getBlogDetailById(id);
      this.blogDetailList = randomArray(response.data);
      this.$store.commit('showHideLoading', false);
      this.componentLoaded.blogDetailList = true;
    },
    async getBlogById(id) {
      const response = await BlogService.getBlogById(id);
      this.blog = response.data;
      this.componentLoaded.blog = true;
    },
    async getBlogList() {
      const response = await BlogService.getAllBlog();
      this.blogList = randomArray(response.data);
      this.componentLoaded.blogList = true;
    },
    redirectToDetailBlog(des) {
      this.$router.push(`/blog/detail?blogid=${des._id}`);
    },
    changeFilterAction() {
      this.filterCondition.price.isFilter = true;
    },
    resetFilter() {},
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
    blogRelateByLang() {
      if (this.componentLoaded.blog === false) {
        return;
      }
      var that = this;
      return this.blogListByLang.filter(function(blogs) {
        return blogs.blogTypeId._id == that.blog.blogTypeId._id;
      });
    },
    blogDetailByLang() {
      try {
        if (this.componentLoaded.blogDetailList === false) {
          return;
        }
        var temp = this.blogDetailList.filter(function(blogs) {
          return blogs.lang.toUpperCase() === i18n.locale.toUpperCase();
        });
        temp.forEach(element => {
          element.blogId.blogIntros.forEach(blog => {
            if (blog.lang.toUpperCase() === i18n.locale.toUpperCase()) {
              element.blogId.blogName = blog.blogName;
              element.blogId.blogIntro = blog.blogIntro;
            }
          });
        });
        return temp[0];
      } catch (error) {}
    },
    pageCount() {
      let l = this.blogList.length,
        s = this.size;
      return Math.ceil(l / s);
    },
  },
  watch: {
    $route: 'initialAll',
  },
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
.related-blog-img {
  height: 80px;
  width: auto;
  min-width: 100%;
}
.related-card {
  overflow: hidden;
}
.custom-blockquote {
  font-size: 0.8rem !important;
    padding: 10px 20px;
    margin: 0 0 20px;
    border-left: 5px solid #eee;
}
</style>
