<template>
  <div class="intro-component">
    <div class="row m-0 p-0">
      <div class="col-12 m-0 p-0 parent-absolute">
        <div
          class="w-100 h-100 card-img-top image-modal"
          v-bind:class="{'small-loading-img':imgsDataReload.length==0}"
          v-bind:style="imgsDataReload"
        ></div>
        <div class="left-top-absolute text-center text-white">
          <a
            class="image-view-btn shadow text-x06 py-2 cursor-pointer"
            data-toggle="modal"
            data-target="#imageModal"
            href="#imageModal"
          >
            <font-awesome-icon icon="image" class="text-center" />Xem hinh
          </a>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="imageModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="imageModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <carousel :per-page="1" :navigation-enabled="true" :paginationEnabled="true">
              <slide class="m-2" v-for="(img,ides) in imgs" v-bind:key="ides">
                <div
                  class="card-img-top image-package cursor-pointer"
                  v-bind:style="getBackgroundImage(img)"
                  v-bind:alt="img.fileName"
                ></div>
              </slide>
            </carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide
  },
  name: "ModalDetailImageComponent",
  props: {
    imgs: Array,
    root: String,
    minheight:String,
  },
  data() {
    return {
      imgsData: this.imgs,
      min_height:this.minheight,
    };
  },
  mounted() {},
  methods: {
    getBackgroundImage(item) {
      return {
        backgroundImage: `url("/${this.root}${item.filePath}")`,
        backgroundSize: "cover",
        height: "100% !important",
        minHeight: "70vh !important",
        backgroundPosition: "center"
      };
    }
  },
  computed: {
    imgsDataReload() {
      return {
        backgroundImage: `url("/${this.root}${this.imgs[0].filePath}")`,
        backgroundSize: "cover",
        height: "100% !important",
        minHeight: "300px !important",
        backgroundPosition: "center"
      };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.parent-absolute {
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  max-height: 300px;
  overflow: hidden;
}
.left-top-absolute {
  position: absolute;
  top: 10px;
  left: 10px;
}
.intro-component img {
  background-size: cover;
}
.image-view-btn {
  height: 34px;
  padding: 0 10px;
  border-radius: 2px;
  font-size: 0.8rem;
  background-color: #ffffff;
  color: #205072 !important;
  border: none;
}
.image-view-btn:hover {
  opacity: 0.5;
}
.modal-dialog {
  max-width: 80vw !important;
}
.VueCarousel-inner {
  flex-basis: 10px !important;
}
</style>
