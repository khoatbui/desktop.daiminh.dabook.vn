<template>
  <div class="toppackage">
    <div class="section text-left pt-0 pb-4">
      <h3 class="title text-left m-0" v-if="isTitle">Top room promotion today</h3>
      <div class="row p-0 m-0 " v-if="isTitle">
        <div class="col-12 p-0 m-0 d-flex justify-content-between align-items-center">
          <p>Cung kham pha nhung khach san va resort 5* noi tieng</p>
          <a class="link-des text-danger">
              Xem thêm
              <font-awesome-icon icon="chevron-right" class="text-08 text-center" />
          </a>
        </div>
      </div>
      <carousel :per-page="5" :navigation-enabled="true" :paginationEnabled="paginationEnabled">
        <slide class="m-2" v-for="(room,ides) in roomType" v-bind:key="ides">
          <div class="card m-0 h-100 d-inline-block position-relative">
              <!-- v-bind:src="room.roomImages.length>0?`/${room.roomImages[0].filePath}`:'/img/defaultloading.gif'" -->
              <img class="card-img image-roomtype h-100" 
               v-bind:class="{'small-loading-img':room.roomImages.length==0}"
               v-bind:src="room.roomImages.length>0?`/webmp/${room.roomImages[0].filePath.slice(0, -3)}webp`:'/img/defaultloading.gif'"
            v-bind:alt="room.roomTypeIntro" />
              <div class="card-body-bottom-left cursor-pointer" @click="redirectToRoomType(room)">
                <h4 class="card-title text-white">{{room.roomTypeName}}</h4>
              </div>
              <div class="card-body-top-right">
                  <font-awesome-icon icon="heart" class="text-08 text-center text-white" />
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
import HotelService from '@/api/HotelService';

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
  name: 'RoomTypeByHotelComponent',
  props: {
    hotelid: String,
    isTitle:true,
    paginationEnabled:true,
  },
  data() {
    return {
      roomType: [],
      selectedPayment: {},
      bookingDate: moment().format('MM-DD-YYYY'),
    };
  },
  mounted() {
    this.initial(this.hotelid);
  },
  methods: {
    async initial(hotelid) {
      this.$store.commit('showHideLoading', true);
      const response = await HotelService.getRoomTypeByHotel(hotelid);
      this.roomType = randomArray(response.data);
      this.$store.commit('showHideLoading', false);
    },
    redirectToRoomType(des){
       this.$router.push(
        `/roomdetail?hotelid=${this.hotelid}&&roomtypeid=${des._id}`
      );
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-body-bottom-left {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #ffffff;
}
.card-body-top-right{
  position: absolute;
  top: 10px;
  right: 10px;
  color: #ffffff;
  z-index: 3;
}
.card-package{
    width: 220px;
    overflow: hidden;
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
.image-roomtype{
    height: 350px;
}
</style>
