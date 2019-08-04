<template>
  <div class="toppackage">
    <div class="section text-left pt-0 pb-4">
      <carousel :per-page="caculatePage" :navigation-enabled="navigationEnabled" :pagination-enabled="paginationEnabled">
        <slide class="m-2" v-for="(pac,ides) in ads" v-bind:key="ides">
            <div class="card m-0 h-100 d-inline-block position-relative">
            <img class="card-img image-ads h-100"  v-bind:src="pac.adsImages.length>0?`/${pac.adsImages[0].filePath}`:'/img/defaultloading.gif'"
            v-bind:alt="pac.adsImages[0].fileName" />
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import moment from 'moment';
import AdsService from '@/api/AdsService';

function randomArray(array) {
  const array2 = [];
  while (array.length !== 0) {
    const randomIndex = Math.floor(Math.random() * array.length);
    array2.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return array2;
}
export default {
  components: {
    Carousel,
    Slide,
  },
  name: 'HorizontalAdsComponent',
  props: {
    msg: String,
    adstype: String,
    paginationEnabled:true,
    navigationEnabled:true,
  },
  data() {
    return {
      ads: [],
      selectedPayment: {},
      bookingDate: moment().format('MM-DD-YYYY'),
      moment:moment,
    };
  },
  mounted() {
    if(this.adstype=='ALL') {
      this.initialAll();
    }
    else {
      this.initial();
    }
  },
  methods: {
    async initial() {
      this.$store.commit('showHideLoading', true);
      const response = await AdsService.getAllAdsByType(this.adstype);
      this.ads = randomArray(response.data);
      this.$store.commit('showHideLoading', false);
    },
    async initialAll() {
      this.$store.commit('showHideLoading', true);
      const response = await AdsService.getAllAds();
      this.ads = randomArray(response.data);
      this.$store.commit('showHideLoading', false);
    }
  },
  computed: {
    caculatePage() {
      return (this.ads.length > 3) ? (this.ads.length > 6) ? 3 : 2 : 1;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-package{
    width: 220px;
}
.intro-package{
    width: 100px;
}
.image-package{
    height: 200px;
}
.price-text{
  font-weight: 900;
}
.img-supplier{
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border:none
}
.image-ads{
    height: 220px !important;
}
.card-body-bottom-left{
    position:absolute;
    bottom: 10px;
    left: 10px;
    color: #FFFFFF;
    background:rgba(244,67,54,.9)!important;
    padding: 20px;
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
}
</style>
