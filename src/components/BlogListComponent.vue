<template>
  <div class="blog-list overflow-hidden" v-if="componentLoaded">
    <div class="row w-100 m-0 p-0">
      <carouselss :items="1" :autoplay="true" :nav="false" :dots="false" :loop="true" class="w-100 m-0 p-0 banner_filter">
        <div class="card shadow-none overflow-hidden" v-for="(blog, i) in blogListByLang" :key="'aaa' + i">
          <div class="row m-0 p-0">
            <div class="col-3 m-0 p-0">
              <img
                class="related-blog-img cursor-pointer"
                :src="blog.blogImages.length > 0 ? `/${blog.blogImages[0].filePath}` : '/img/background/bg_01.jpg'"
                :alt="blog.blogName"
                @click="redirectToDetailBlog(blog)"
              />
            </div>
            <div class="col-9 m-0 p-2">
              <h6 class="one-line m-0 mb-2 text-info cursor-pointer" @click="redirectToDetailBlog(blog)">{{ blog.blogName }}</h6>
              <div class="text-muted two-line text-08" v-html="blog.blogIntro"></div>
              <div class="text-muted two-line text-06 mt-2">{{ moment(blog.createDate).format('YYYY-DD-MM') }} / {{ blog.createBy }}</div>
            </div>
          </div>
        </div>
      </carouselss>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import i18n from '@/lang/i18n';
import { Carousel, Slide } from 'vue-carousel';
import carouselss from 'vue-owl-carousel';
import BlogService from '@/api/BlogService';

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
    carouselss,
  },
  name: 'BlogListComponent',
  props: {},
  data() {
    return {
      moment: moment,
      componentLoaded: false,
      blogList: [],
    };
  },
  mounted() {
    this.initial();
  },
  methods: {
    async initial() {
      const response = await BlogService.getAllBlog();
      this.blogList = randomArray(response.data);
      this.componentLoaded = true;
    },
    redirectToDetailBlog(des) {
      this.$router.push(`/blog/detail?blogid=${des._id}`);
    },
  },
  computed: {
    blogListByLang() {
      if (this.componentLoaded === false) {
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
      return this.blogList.slice(0, 5);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.related-blog-img {
  height: 120px;
  width: auto;
  min-width: 100%;
}
</style>
