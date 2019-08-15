<template>
  <div class="trip-destination text-left">
    <div class="container">
      <div class="row pt-4 pb-4">
        <div class="col-12 col-md-4 border-right">
          <div class="row align-items-center">
            <font-awesome-icon icon="medal" class="col-12 col-md-3 col-lg-2 col-xl-2 text-x3" />
            <div class="col-12 col-md-9 col-lg-10 col-xl-10 row">
              <h5>{{$t('pthreestep_title_wepround')}}</h5>
              <div class="p-0 m-0" v-html="$t('pthreestep_body_wepround')"></div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 border-right">
          <div class="row align-items-center">
            <font-awesome-icon
              icon="comment-alt"
              class="col-12 col-md-3 col-lg-2 col-xl-2 text-x3"
            />
            <div class="col-12 col-md-9 col-lg-10 col-xl-10 row">
              <h5>{{$t('pthreestep_title_care')}}</h5>
              <div class="p-0 m-0" v-html="$t('pthreestep_body_care')"></div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="row align-items-center">
            <font-awesome-icon icon="globe-asia" class="col-12 col-md-3 col-lg-2 col-xl-2 text-x3" />
            <div class="col-12 col-md-9 col-lg-10 col-xl-10 row">
              <h5>{{$t('pthreestep_title_hitech')}}</h5>
              <div class="p-0 m-0" v-html="$t('pthreestep_body_hitech')"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "ThreeStepComponent",
  props: {
    msg: String
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
