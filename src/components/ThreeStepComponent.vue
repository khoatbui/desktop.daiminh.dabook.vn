<template>
  <div class=" trip-destination text-left">
    <div class="container">
      <div class="row pt-4 pb-4">
        <div class="col-12 col-md-4 border-right">
          <div class="row align-items-center">
            <font-awesome-icon icon="medal" class="col-12 col-md-3 col-lg-2 col-xl-2 text-x3" />
            <div class="col-12 col-md-9 col-lg-10 col-xl-10 row">
              <h5>Competitive Pricing</h5>
              <p>
                With 500+ suppliers and the purchasing power of 300 million members, DaiMinh can
                save you more!
              </p>
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
              <h5>Award-Winning Service</h5>
              <p>Travel worry-free knowing that we're here if you need us, 24 hours a day</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="row align-items-center">
            <font-awesome-icon icon="globe-asia" class="col-12 col-md-3 col-lg-2 col-xl-2 text-x3" />
            <div class="col-12 col-md-9 col-lg-10 col-xl-10 row">
              <h5>Worldwide Coverage</h5>
              <p>
                Over 1,200,000 hotels in more than 200 countries and regions & flights to over
                5,000 cities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  name: 'ThreeStepComponent',
  props: {
    msg: String,
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
</style>
