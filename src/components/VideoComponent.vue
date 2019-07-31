<template>
  <div class="video-component">
      <div class="row m-0 p-0">
          <div class="col-12 m-0 p-0 parent-absolute">
              <img class="w-100" src="https://res.klook.com/image/upload/q_60/v1465888536/web3.0/how_to_use.webp" alt="">
              <div class="center-absolute text-center text-white">
                  <h3 class="text-x4"><b>New in VietNam</b></h3>
                  <p class="text-x2">Explore now with promotion code</p>
                <button class="video-btn shadow" data-toggle="modal" data-target="#videoModal">
                <font-awesome-icon icon="play" class="text-x3 text-center" />
                </button>
              </div>
          </div>
      </div>
    <div
      class="modal fade"
      id="videoModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="videoModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog vw-85" role="document">
        <div class="modal-content">
            <video id="video" class="g_v_c_mid" autoplay="none" src="https://res.klook.com/video/upload/v1558002261/Homepage/EN4_m.mov"></video>
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
.video-btn{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #FFFFFF;
    color: #205072 !important;
    border: none;
}
.video-btn:nth-child(1){
    font-size: 2rem;
}
.video-btn:hover{
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
