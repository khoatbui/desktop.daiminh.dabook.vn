<template>
  <div id="spinner" v-if="showHide">
    <div class="loading">
      <img class="footer-logo" src="/img/main_logo_text.png" alt />
      <looping-rhombuses-spinner
        :animation-duration="2500"
        :rhombus-size="15"
        :color="'#FFFFFF'"
        class="spinner-item"
      />
    </div>
  </div>
</template>

<script>
import { LoopingRhombusesSpinner } from "epic-spinners";
export default {
  name: "SpinnerComponent",
  components: {
    LoopingRhombusesSpinner
  },
  computed: {
    showHide() {
      return this.$store.state.loading.isShow;
    }
  }
};
</script>
<style scoped>
#spinner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999999999999999;
  background: #019ee2;
  opacity: 0.9;
}
.loading {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.footer-logo {
  height: 60px;
}
.spinner-item {
  margin: 0 auto;
}
</style>>

</style>