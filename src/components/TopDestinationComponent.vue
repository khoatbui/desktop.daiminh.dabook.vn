<template>
  <div class="topdestination">
    <div class="section text-left pt-0 pb-4">
      <h3 class="title text-left m-0"  v-if="isTitle">{{$t('ptopdestination_title_h3')}}</h3>
      <div class="row p-0 m-0" v-if="isTitle">
        <div class="col-12 p-0 m-0 d-flex justify-content-between align-items-center">
          <p>{{$t('ptopdestination_title_explain')}}</p>
          <a class="link-des text-danger" @click="redirectToAllDestination">
            {{$t('general_showmore')}}
            <font-awesome-icon icon="chevron-right" class="text-08 text-center" />
          </a>
        </div>
      </div>
      <carousel :per-page="1" :navigation-enabled="true">
        <slide class="m-2 d-flex justify-content-start align-items-center flex-wrap" v-for="index in pageCount" v-bind:key="index">
            <div class="card card-des m-1 flex-grow-1 d-inline-block" @click="redirectToDestination(page)" v-for="(page,ipage) in destinations.slice(index, index+size)" v-bind:key="ipage">
              <img class="card-img image-des" 
               v-bind:class="{'small-loading-img':page.destinationImages.length==0}"
               v-bind:src="page.destinationImages.length>0?`/webmp/${page.destinationImages[0].filePath.slice(0, -3)}webp`:'/img/defaultloading.gif'"
            v-bind:alt="page.destinationName" />
              <div class="card-body-center">
                <h4 class="card-title text-white">{{page.destinationName}}</h4>
              </div>
            </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import i18n from "@/lang/i18n";
import { Carousel, Slide } from 'vue-carousel';
import DestinationService from '@/api/DestinationService';

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
  name: 'TopDestinationComponent',
  props: {
    msg: String,
    isTitle:true,
  },
  data() {
    return {
      destinations: [],
      selectedPayment: {},
      pageNumber: 0,
      size: 10,
    };
  },
  mounted() {
    this.initial();
  },
  methods: {
    async initial() {
      this.$store.commit('showHideLoading', true);
      const response = await DestinationService.getAllDestination();
      this.destinations = randomArray(response.data);
      this.$store.commit('showHideLoading', false);
    },
    redirectToDestination(des){
       this.$router.push(
        `/destination/detail?destinationid=${des._id}`
      );
    },
    redirectToAllDestination(){
       this.$router.push(
        `/destination`
      );
    }
  },
  computed: {
    pageCount() {
      const l = this.destinations.length;
      const s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber * this.size;
      const end = start + this.size;
      return randomArray(this.destinations.slice(start, end));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-des{
    width: 19%;
}
.image-des{
    height: 180px;
}
.card-body-center{
  position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #FFFFFF;
}
</style>
