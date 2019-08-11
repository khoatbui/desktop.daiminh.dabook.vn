<template>
  <div class="map-component">
    <div class="row m-0 p-0">
      <div class="col-12 m-0 p-0 parent-absolute">
        <div class="w-100 card-img-top image-package" v-html="map">

        </div>
        <div class="left-bottom-absolute text-center text-white">
          <button class="image-view-btn shadow text-x06">
            <font-awesome-icon icon="image" class="text-center" /> View more
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MapComponent',
  props: {
    map: String,
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
.default-card{
    display: none !important;
}
.parent-absolute {
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  max-height: 300px;
  overflow: hidden;
}
.parent-absolute::after,.parent-absolute::before{
    content: " ";
    position: absolute;
    z-index: 10000;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
}
.left-bottom-absolute {
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 10001;
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
