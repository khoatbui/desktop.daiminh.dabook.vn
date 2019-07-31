<template>
  <div class="intro-component">
      <div class="row m-0 p-0">
          <div class="col-12 m-0 p-0 parent-absolute">
              <img class="w-100" src="/img/background/bg_04.jpg" alt="">
              <div class="center-absolute text-center text-white">
                <button class="explorer-btn shadow text-x06">
                    EXPLORE US <font-awesome-icon icon="play" class=" text-center" />
                </button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'VideoComponent',
  props: {
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.parent-absolute{
    position: relative;
}
.center-absolute{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
}
.intro-component img{
    height: 300px;
}
.explorer-btn{
    height: 48px;
    padding: 0 10px;
    border-radius: 5px;
    background-color: #FFFFFF;
    color: #205072 !important;
    border: none;
}
.explorer-btn:hover{
    opacity: 0.5;
}
#videoModal{
    background-color: rgba(32, 80, 114,0.5);
}
#videoModal #video{
    width: 100%;
    height: 100%;
}
</style>
