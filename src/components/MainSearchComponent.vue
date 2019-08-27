<template>
  <div class="main-search-component w-100 m-0 d-flex justify-content-center" @focus="magic_flag=true"
        @focusout="magic_flag=false"
        tabindex="0">
    <input class="main-input-search w-100 flex-grow-1" type="text" v-model="key" v-on:keyup="search" @click="magic_flag=true"/>
    <button class="main-button-search cursor-pointer" @click="redirectToSearchView">
      <font-awesome-icon icon="search" class="text-x1 text-center" />
    </button>
    <div class="sugestion w-100 p-0 px-3  m-0" v-if="magic_flag">
      <div class="card shadow">
        <div class="card-body">
          <div class="row p-2 text-left">
            <div class="col-12 border-bottom p-0">
              <h5 class="my-1">{{$t('pmainsearch_title_popup')}}</h5>
            </div>
          </div>
          <div class="row p-2 text-left" v-if="isSearch==false">
            <div class="col-6 p-1" v-for="(des,i) in destinations" :key="'sfs'+i">
              <p class="cursor-pointer hidden-outof-text" @click="redirectToDestination(des)"><font-awesome-icon class="mx-2 text-07 text-muted" icon="map-marker-alt"/>{{des.destinationName}}
                <span class="text-07 text-center text-danger font-bold"><font-awesome-icon class="mx-2" icon="fire-alt"/>HOT</span>
              </p>
            </div>
          </div>
          <div class="row p-2 text-left">
            <div class="col-6 p-1" v-for="(des,i) in destinationListByLang" :key="'sfs'+i">
              <p class="cursor-pointer hidden-outof-text" @click="redirectToDestination(des)"><font-awesome-icon class="mx-2 text-07 text-muted" icon="map-marker-alt"/>{{des.destinationName}}
                <span class="text-07 text-center text-danger font-bold"><font-awesome-icon class="mx-2" icon="fire-alt"/>HOT</span>
              </p>
            </div>
          </div>
          <div class="row p-2 text-left">
            <div class="col-6 p-1" v-for="(tour,i) in tourByLang" :key="'sfs'+i">
              <p class="cursor-pointer hidden-outof-text" @click="redirectToTourDetail(tour)"><font-awesome-icon class="mx-2 text-07 text-muted" icon="umbrella-beach"/>{{tour.tourName}}
                <span class="text-07 text-center text-danger font-bold" v-if="tour.isPromotion"><font-awesome-icon class="mx-2" icon="fire-alt"/>HOT</span>
              </p>
            </div>
          </div>
          <div class="row p-2 text-left">
            <div class="col-6 p-1" v-for="(hotel,i) in hotelByLang" :key="'sfs'+i">
              <p class="cursor-pointer hidden-outof-text" @click="redirectToHotelDetail(hotel)"><font-awesome-icon class="mx-2 text-07 text-muted" icon="hotel"/>{{hotel.hotelName}}
                <span class="text-07 text-center text-danger font-bold" v-if="hotel.isPromotion"><font-awesome-icon class="mx-2" icon="fire-alt"/>HOT</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from '@/lang/i18n';
import PaymentComponent from '@/components/PaymentComponent.vue';
import DestinationService from '@/api/DestinationService';
import SearchService from '@/api/SearchService'

export default {
  components: {
    PaymentComponent,
  },
  name: 'MainSearchComponent',
  props: {
    defaultopen:false,
  },
  data() {
    return {
      key:'',
      destinations:[],
      tourList:[],
      hotelList:[],
      destinationList:[],
      componentLoaded:{
        hotel:false,
        tour:false,
        destination:false},
      isSearch:false,
      magic_flag:this.defaultopen,
    };
  },
  mounted() {
    this.getDestination();
  },
  methods: {
    async getDestination() {
      const response = await DestinationService.getTopDestination();
      this.destinations = response.data;
      this.componentLoaded.destination=true;
    },
    async searchDestinationList(key) {
      const response = await SearchService.GetDestinationBySearch(key);
      this.destinationList = response.data;
       this.componentLoaded.destination=true;
    },
    async searchTourList(key) {
      const response = await SearchService.GetTourBySearch(key);
      this.tourList = response.data;
       this.componentLoaded.tour=true;
    },
    async searchHotelList(key) {
      const response = await SearchService.getHotelBySearch(key);
      this.hotelList = response.data;
       this.componentLoaded.hotel=true;
    },
    async search(){
      this.searchDestinationList(this.key);
      this.searchTourList(this.key);
      this.searchHotelList(this.key);
      this.isSearch=true;
    },
    redirectToDestination(des){
       this.$router.push(
        `/destination/detail?destinationid=${des._id}`
      );
            this.$emit('searchclick');
    },
    redirectToTourDetail(tour) {
       this.$router.push(`/tourdetail?tourid=${tour._id}`);
             this.$emit('searchclick');
    },
    redirectToHotelDetail(hotel) {
       this.$router.push(`/hoteldetail?hotelid=${hotel._id}`);
             this.$emit('searchclick');
    },
    redirectToSearchView(){
      if (this.key.length>0) {
        this.$router.push(`/search?key=${this.key}`);
                this.$emit('searchclick');
      }
    },
  },
  computed :{
    tourByLang() {
      if (this.componentLoaded.tour === false) {
        return;
      }
      this.tourList.forEach(element => {
        element.tourIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.tourName = area.tourName;
            element.tourIntro= area.tourIntro;
          }
        });
      });
      return this.tourList;
    },
    hotelByLang() {
      if (this.componentLoaded.tour === false) {
        return;
      }
      this.hotelList.forEach(element => {
        element.hotelIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.hotelName = area.hotelName;
            element.hotelIntro= area.hotelIntro;
          }
        });
      });
      return this.hotelList;
    },
    destinationListByLang(){
      if (this.componentLoaded.destination === false) {
        return;
      }
      this.destinationList.forEach(element => {
        element.destinationIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.destinationName = area.destinationName;
            element.destinationIntro= area.destinationIntro;
          }
        });
      });
      return this.destinationList;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-search-component{
  box-sizing: border-box;
  border-radius: 5px;
  overflow: hidden;
  margin:0;
  padding: 0;
  outline: none;
  height: 40px;
  box-sizing: border-box;
}
.main-search-component:hover{
  box-shadow: 0 0 7px -4px#00bcd4;
}
.main-input-search{
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.main-button-search{
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.main-input-search,.main-button-search{
  border:2px solid #00bcd4;
  display: inline-block;
  padding: 0 20px;
  height: 100%;
  margin:0;
  box-sizing: border-box;
}
.main-button-search{
  border:none;
  background-color:#00bcd4 !important;
  font-size: 0.8rem;
  color: #FFFFFF;
  padding: 0 40px;
}
.sugestion{
    position: absolute;
    top: 20px;
    left: 0;
    z-index: 999999;
}
.sugestion .card{
      max-height:350px;
    overflow: hidden;
    overflow-y: scroll;
}
</style>
