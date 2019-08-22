<template>
  <div class="intro-component">
    <div class="row m-0 p-0">
      <div class="col-12 m-0 p-0 parent-absolute">
        <!--           v-bind:src="imgs.length>0?`/${root}${imgs[0].filePath}`:'/img/background/bg_10.jpg'" -->
        <div
          class="w-100 card-img-top image-modal"
          v-bind:class="{'small-loading-img':imgs.length==0}"
          v-bind:style="{ backgroundImage: 'url(' + imgs.length>0?`/${root}${imgs[0].filePath}`:'/img/background/bg_10.jpg' + ')',backgroundSize: 'cover'}"
          v-bind:alt="imgs[0].fileName"
        ></div>
        <div class="left-top-absolute text-center text-white">
          <button
            class="image-view-btn shadow text-x06"
            data-toggle="modal"
            data-target="#imageModal"
            @click="isShowModal=!isShowModal"
          >
            <font-awesome-icon icon="image" class="text-center" />Xem hinh
          </button>
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
            <carousel
              :per-page="1"
              :navigation-enabled="true"
              :paginationEnabled="true"
            v-if="isShowModal">
              <slide class="m-2" v-for="(img,ides) in imgs" v-bind:key="ides">
                <div
                  class="card-img-top image-package cursor-pointer"
                  v-bind:style="{ backgroundImage: 'url(' + `/${root}${img.filePath}` + ')',backgroundSize: 'cover'}"
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
    root: String
  },
  data() {
    return {
      isShowModal:false
    };
  },
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.image-modal {
  position: relative;
  bottom: 100%;
  left: 0px;
}
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
</style>
