<template>
  <div class="intro-component">
    <div class="row m-0 p-0">
      <div class="col-12 m-0 p-0 parent-absolute">
        <img class="w-100 card-img-top image-modal" v-bind:class="{'small-loading-img':imgs.length==0}"  v-bind:src="imgs.length>0?`/webmp/${imgs[0].filePath.slice(0, -3)}webp`:'/img/background/bg_10.jpg'"
          v-bind:alt="imgs[0].fileName"  />
        <div class="left-top-absolute text-center text-white">
          <button class="image-view-btn shadow text-x06">
            <font-awesome-icon icon="image" class="text-center" /> Xem hinh
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalDetailImageComponent',
  props: {
    imgs:Array,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.image-modal{
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
.image-view-btn{
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
</style>
