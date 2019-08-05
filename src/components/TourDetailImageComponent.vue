<template>
  <div class="intro-component">
    <div class="row m-0 p-0">
      <div class="col-12 m-0 p-0 parent-absolute">
        <img class="w-100" src="/img/background/bg_10.jpg" alt />
        <div class="left-bottom-absolute text-center text-white">
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
  name: 'TourDetailImageComponent',
  props: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.parent-absolute {
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  height: 300px;
  overflow: hidden;
}
.left-bottom-absolute {
  position: absolute;
  bottom: 10px;
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
