<template>
  <div class="topblog" v-if="componentLoaded">
    <div class="section text-left pt-0 pb-4">
      <h3 class="title text-left m-0">{{$t('ptopblog_title_h3')}}</h3>
      <div class="row p-0 m-0 ">
        <div class="col-12 p-0 m-0 d-flex justify-content-between align-items-center">
          <p>{{$t('ptopblog_title_body')}}</p>
          <a class="link-des text-danger" @click="redirectToAllBlog">
              {{$t('general_showmore')}}
              <font-awesome-icon icon="chevron-right" class="text-08 text-center" />
          </a>
        </div>
      </div>
      <carousel :per-page="5" :navigation-enabled="true" :paginationEnabled="false">
        <slide class="m-2" v-for="(blog,ides) in blogListByLang" v-bind:key="ides">
          <div class="card card-blog m-0 d-inline-block position-relative cursor-pointer">
            <img class="card-img image-blog cursor-pointer"
             v-bind:class="{'small-loading-img':blog.blogImages.length==0}"
            v-bind:src="blog.blogImages.length>0?`/${blog.blogImages[0].filePath}`:'/img/defaultloading.gif'"
            v-bind:alt="blog.blogName" 
            @click="redirectToDetailBlog(blog)"/>
            <div class="card-body-bottom-left text-left" >
              <h4 class="card-title text-white" @click="redirectToDetailBlog(blog)">{{blog.blogName}}</h4>
              <div class="card-text text-white two-line" v-html="blog.blogIntro"></div>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import i18n from "@/lang/i18n";
import { Carousel, Slide } from "vue-carousel";
import carouselss from "vue-owl-carousel";
import BlogService from "@/api/BlogService";

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
    carouselss
  },
  name: "BlogListMultiCardComponent",
  props: {},
  data() {
    return {
      moment: moment,
      componentLoaded: false,
      blogList: []
    };
  },
  mounted() {
    this.initial();
  },
  methods: {
    async initial() {
      this.$store.commit("showHideLoading", true);
      const response = await BlogService.getAllBlog();
      this.blogList = randomArray(response.data);
      this.$store.commit("showHideLoading", false);
      this.componentLoaded = true;
    },
    redirectToDetailBlog(des) {
      this.$router.push(`/blog/detail?blogid=${des._id}`);
    },
    redirectToAllBlog(des) {
      this.$router.push(`/blog/`);
    },
  },
  computed: {
    blogListByLang() {
      console.log(this.blogList);
      return this.blogList;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.related-blog-img {
  height: 120px;
  width: auto;
  min-width: 100%;
}
.card-blog{
    height: 300px !important;
    overflow: hidden !important;
}
.image-blog{
    height: 300px;
    width: auto;
    min-width: 100%;
}
.card-body-bottom-left{
    position:absolute;
    bottom: 10px;
    left: 10px;
    color: #FFFFFF;
    z-index: 4;
}
.position-relative{
    overflow: hidden;
}
.position-relative::after,.position-relative::before{
    position: absolute;
    bottom:0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-image: linear-gradient(0deg, #111 0%, #111 100%);
    z-index: 2;
    opacity: 0.15;
}
</style>
