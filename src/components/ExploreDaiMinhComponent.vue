<template>
  <div class="topcity">
    <div class="section text-left pt-0 pb-4">
      <h3 class="title text-left m-0">{{$t('pexplore_title_h3')}}</h3>
      <carousel :per-page="4" :navigation-enabled="true"  :paginationEnabled="false">
        <slide class="m-2" v-for="(explore,ides) in exploreList" v-bind:key="ides">
          <div class="card m-0 h-100 d-inline-block">
            <img
              class="card-img image-city cursor-pointer"
              v-bind:src="explore.img"
              v-bind:alt="explore.name"
              @click="redirectToTarget(explore)"
            />
            <div class="text-center">
              <h4 class="card-title mb-3" @click="redirectToTarget(explore)">{{explore.name}}</h4>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

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
    Slide
  },
  name: 'ExploreDaiMinhComponent',
  props: {},
  data() {
    return {
      exploreList: [
        {
          img: '/img/general/hotel-explore.jpg',
          name: 'Hotel - Villa - Resort',
          router: '/hotel'
        },
        {
          img: '/img/general/tour-explore.jpg',
          name: 'Tour - Travel',
          router: '/tour'
        },
        {
          img: '/img/general/car-explore.jpg',
          name: 'Car',
          router: '/car'
        },
        {
          img: '/img/general/blog-explore.jpg',
          name: 'Kinh nghiem - du lich',
          router: '/blog'
        },
        {
          img: '/img/general/ads-explore.jpg',
          name: 'Khuyen mai - Giam gia',
          router: '/ads'
        },
      ],
      selectedPayment: {}
    };
  },
  methods: {
    redirectToTarget(des) {
      this.$router.push(`${des.router}`);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.explore-card{
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}
.image-city {
  height: 150px;
}
.card-body-bottom-left {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #ffffff;
  z-index: 3;
}
.position-relative {
  overflow: hidden;
}
.position-relative::after,
.position-relative::before {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  background-image: linear-gradient(0deg, #111 0%, #111 100%);
  z-index: 2;
  opacity: 0.15;
}
</style>
