<template>
  <div class="toppackage">
    <div class="section text-left p-0">
      <h3 class="title text-left m-0" v-if="isTitle">{{$t('proomtypebyhotel_title_h3')}}</h3>
      <div class="row p-0 m-0 " v-if="isTitle">
        <div class="col-12 p-0 m-0 d-flex justify-content-between align-items-center">
          <p>{{$t('proomtypebyhotel_body_h3')}}</p>
          <a class="link-des text-danger" @click="redirectToAllHotel">
              {{$t('general_showmore')}}
              <font-awesome-icon icon="chevron-right" class="text-08 text-center" />
          </a>
        </div>
      </div>
      <carousel :per-page="5" :navigation-enabled="true" :paginationEnabled="paginationEnabled">
        <slide class="m-2" v-for="(room,ides) in roomTypeByLang" v-bind:key="ides">
          <div class="card m-0 height-250 d-inline-block position-relative">
              <!-- v-bind:src="room.roomImages.length>0?`/${room.roomImages[0].filePath}`:'/img/defaultloading.gif'" -->
              <img class="card-img image-roomtype h-100 cursor-pointer" 
               v-bind:class="{'small-loading-img':room.roomImages.length==0}"
               v-bind:src="room.roomImages.length>0?`/webmp/${room.roomImages[0].filePath.slice(0, -3)}webp`:'/img/defaultloading.gif'"
            v-bind:alt="room.roomTypeIntro" 
             @click="redirectToRoomType(room)"/>
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
import i18n from "@/lang/i18n";
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
      componentLoaded:false,
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
      console.log('room');
      console.log(this.roomType);
      this.componentLoaded=true;
    },
    redirectToRoomType(des){
       this.$router.push(
        `/roomdetail?hotelid=${this.hotelid}&&roomtypeid=${des._id}`
      );
    },
    redirectToAllHotel() {
      this.$router.push(
        `/hotel`
      );
    }
  },
  computed: {
    roomTypeByLang() {
      if (this.componentLoaded === false) {
        return;
      }
      this.roomType.forEach(element => {
        element.roomTypeIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.roomTypeName = area.roomTypeName;
            element.roomTypeIntro= area.roomTypeIntro;
          }
        });
      });
      return this.roomType;
    },
  }
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
