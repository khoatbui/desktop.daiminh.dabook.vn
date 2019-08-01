<template>
  <div class="toppackage">
    <div class="section text-left pt-0 pb-4">
      <carousel :per-page="caculatePage" :navigation-enabled="true">
        <slide class="m-2" v-for="(pac,ides) in ads" v-bind:key="ides">
            <div class="card m-0 h-100 d-inline-block position-relative">
            <img class="card-img image-ads h-100"  v-bind:src="pac.adsImages.length>0?`/${pac.adsImages[0].filePath}`:'/img/defaultloading.gif'"
            v-bind:alt="pac.adsImages[0].fileName" />
            <div class="card-body-bottom-left text-left">
              <h4 class="card-title text-white">{{pac.adsName}}</h4>
              <p class="card-text text-white"  v-html="pac.adsIntro"></p>
              <small class="text-muted m-0 text-white">Chuong trinh keo dai den ngay {{bookingDate}}</small>
            </div>
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
  },
  data() {
    return {
      ads: [],
      selectedPayment: {},
      bookingDate: moment().format('MM-DD-YYYY'),
    };
  },
  mounted() {
    this.initial();
  },
  methods: {
    async initial() {
      this.$store.commit('showHideLoading', true);
      const response = await AdsService.getAllAdsByType(this.adstype);
      this.ads = randomArray(response.data);
      console.log(this.ads);
      this.$store.commit('showHideLoading', false);
    },
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
    height: 350px;
}
.card-body-bottom-left{
    position:absolute;
    bottom: 10px;
    left: 10px;
    color: #FFFFFF;
}
</style>
