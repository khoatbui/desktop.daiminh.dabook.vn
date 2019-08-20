<template>
  <div class="toppackage">
    <div class="section text-left p-0">
      <h3 class="title text-left m-0" v-if="isTitle">{{$t('ppackagebyroomtype_title_h3')}}</h3>
      <div class="row p-0 m-0 " v-if="isTitle">
        <div class="col-12 p-0 m-0 d-flex justify-content-between align-items-center">
          <p>{{$t('ppackagebyroomtype_title_body')}}</p>
          <a class="link-des text-danger" @click="redirectToAllHotel">
              {{$t('general_showmore')}}
              <font-awesome-icon icon="chevron-right" class="text-08 text-center" />
          </a>
        </div>
      </div>
      <carousel :per-page="5" :navigation-enabled="true" :paginationEnabled="paginationEnabled">
        <slide class="m-2" v-for="(pac,ides) in packageByLang" v-bind:key="ides">
          <div class="card m-0 height-250 d-inline-block position-relative">
              <!-- v-bind:src="pac.roomImages.length>0?`/${pac.roomImages[0].filePath}`:'/img/defaultloading.gif'" -->
              <img class="card-img image-packages h-100 cursor-pointer" 
               v-bind:class="{'small-loading-img':pac.roomTypeId.roomImages.length==0}"
               v-bind:src="pac.roomTypeId.roomImages.length>0?`/webmp/${pac.roomTypeId.roomImages[0].filePath.slice(0, -3)}webp`:'/img/defaultloading.gif'"
            v-bind:alt="pac.roomTypeId.roomTypeIntro"  @click="redirectToPackage(pac)"/>
              <div class="card-body-bottom-left cursor-pointer" @click="redirectToPackage(pac)">
                <h4 class="card-title text-white">{{pac.packageId.packageName}}</h4>
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
  name: 'PackageByRoomTypeComponent',
  props: {
    hotelid: String,
    roomtypeid: String,
    isTitle:true,
    paginationEnabled:true,
  },
  data() {
    return {
      packages: [],
      selectedPayment: {},
      bookingDate: moment().format('MM-DD-YYYY'),
      componentLoaded:false,
    };
  },
  mounted() {
    this.initial(this.hotelid,this.roomtypeid);
  },
  methods: {
    async initial(hotelid,roomtypeid) {
      this.$store.commit('showHideLoading', true);
      const response = await HotelService.getPackageByHotelRoomType(hotelid,roomtypeid);
      this.packages = randomArray(response.data);
      this.$store.commit('showHideLoading', false);
      this.componentLoaded = true
    },
    redirectToPackage(des){
       this.$router.push(
        `/hotelpackagedetail?packageid=${des._id}`
      );
    },
    redirectToAllHotel(){
      this.$router.push(
        `/hotel`
      );
    }
  },
  computed: {
    packageByLang() {
      if (this.componentLoaded === false) {
        return;
      }
      this.packages.forEach(element => {
        element.hotelId.hotelIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.hotelId.hotelName = area.hotelName;
            element.hotelId.hotelIntro= area.hotelIntro;
          }
        });
        element.roomTypeId.roomTypeIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.roomTypeId.roomTypeName = area.roomTypeName;
            element.roomTypeId.roomTypeIntro= area.roomTypeIntro;
          }
        });
      });
      return this.packages;
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
  z-index: 3;
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
.image-packages{
    height: 350px;
}
.position-relative{
    overflow: hidden;
}
.position-relative::after,.position-relative::before{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    z-index: 2;
    opacity: 0.65;
}
</style>
