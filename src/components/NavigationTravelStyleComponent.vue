<template>
  <li class="nav-item fullwidth-dropdown">
    <a
      class="nav-link dropdown-toggle"
      href="#"
      id="navbarDropdownMenuLink"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >{{$t('na_travelstyle')}}</a>
    <div class="dropdown-menu fullwidth-mega-menu" aria-labelledby="navbarDropdownMenuLink">
      <div class="row m-1">
        <div class="col-3 m-0 p-2 pr-4 border-right">
          <img class="style-logo py-4 d-inline-block" src="/img/logo_gif.gif" alt />
          <p class="text-left text-08">
            {{$t('navi_travelstyle_intro')}}
          </p>
        </div>
        <div class="col-3 m-0 p-2 border-right">
          <div class="row w-100 p-0 m-0 mb-2 d-flex justify-content-between align-items-center">
            <span class="text-08 text-danger font-weight-bold">{{$t('navi_travelstyle_travelforyou')}}</span>
            <span class="text-08 text-danger cursor-pointer"  @click="redirectToAllTravelStyle">
              {{$t('general_showmore')}}
              <font-awesome-icon icon="chevron-right" class="text-07 text-center" />
            </span>
          </div>
          <div
            class="row w-100 p-0 m-0 d-flex flex-row justify-content-between align-items-stretch flex-wrap"
          >
            <div
              class="card travel-style-card my-1"
              v-for="(st,iStyle) in travelStyleByLang"
              v-bind:key="iStyle"
            >
              <div class="row h-100 nav-style-card-filter">
                <a class="nav-card-link h-100 cursor-pointer" @click="redirectToTravelStyle(st)">
                  <img
                    class="w-100 h-100"
                    v-bind:class="{'small-loading-img':st.travelStyleImages.length==0}"
                    v-bind:src="st.travelStyleImages.length>0?`/${st.travelStyleImages[0].filePath}`:'/img/defaultloading.gif'"
                    v-bind:alt="st.travelStyleName"
                  />
                  <div class="card-img-overlay card-body-center d-flex align-items-center justify-content-center">
                    <h4 class="card-title text-08 text-center text-white">{{st.travelStyleName}}</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 m-0 p-2 border-right">
          <div class="row w-100 p-0 m-0 mb-2 d-flex justify-content-between align-items-center">
            <span class="text-08 text-danger font-weight-bold">{{$t('navi_travelstyle_todayhotel')}}</span>
            <span class="text-08 text-danger cursor-pointer"  @click="redirectToAllHotel">
              {{$t('general_showmore')}}
              <font-awesome-icon icon="chevron-right" class="text-07 text-center" />
            </span>
          </div>
          <div
            class="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-start flex-wrap"
          >
            <div
              class="card nav-hotel-card"
              v-for="(ht,iHotel) in hotelByLang"
              v-bind:key="iHotel"
            >
              <div class="row nav-hotel-card-filter">
                <a class="nav-card-link max-height-150 h-100 cursor-pointer" @click="redirectToHotel(ht.hotelId)">
                  <img
                    class="w-100 h-100"
                    v-bind:class="{'small-loading-img':ht.roomTypeId.roomImages.length==0}"
                    v-bind:src="ht.roomTypeId.roomImages.length>0?`/smimg/${ht.roomTypeId.roomImages[0].filePath.slice(0, -3)}jpg`:'/img/defaultloading.gif'"
                    v-bind:alt="ht.roomTypeId.roomTypeName"
                  />
                  <div class="card-img-overlay card-body-center d-flex align-items-center justify-content-center">
                    <h4
                      class="card-title text-08 text-center text-white"
                    >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(ht.price)}}</h4>
                  </div>
                </a>
              </div>
              <div class="row m-0 p-0">
                <div class="hotel-card-body-bottom text-06">
                  <p class="text-08 font-weight-bold m-0 hidden-overflow">{{ht.hotelId.hotelName}}</p>
                  <div class="w-100 d-flex justify-content-between align-items-center">
                    <span class="w-75 hidden-overflow">{{ht.roomTypeId.roomTypeName}}</span>
                    <font-awesome-icon
                      icon="arrow-right"
                      class="text-1 text-center text-danger cursor-pointer"
                      @click="redirectToHotel(ht.hotelId)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-2 m-0 p-2">
          <DefaultContactFormComponent :menuCode="'TRAVEL-STYLE'"></DefaultContactFormComponent>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import moment from "moment";
import i18n from '@/lang/i18n';
import lazyLoadComponent from "@/utils/lazy-load-component";
import SkeletonBox from "@/components/SkeletonBox.vue";
import TravelStyleService from "@/api/TravelStyleService";
import HotelService from "@/api/HotelService";
import CarService from "@/api/CarService";
import TravelService from "@/api/TravelService";
import MICEService from "@/api/MICEService";
import DestinationService from "@/api/DestinationService";
import AreaCountryService from "@/api/AreaCountryService";
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
  name: "NavigationComponent",
  components: {
    DefaultContactFormComponent: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/DefaultContactFormComponent.vue"),
      loading: SkeletonBox
    }),
  },
  props: {},
  data() {
    return {
      classObject: {
        "navbar-color-on-scroll navbar-transparent": this.isTran,
        "navbar-no-transparent": !this.isTran
      },
      travelStyle: [],
      top10PromotionHotel: [],
      moment: moment,
      componentLoaded: {
        travel:false,
        hotel:false
      },
    };
  },
  mounted() {
    this.getTravelStyle();
    this.getPromotionHotel();
  },
  methods: {
    async getTravelStyle() {
      const response = await TravelStyleService.getAllTravelStyle();
      this.travelStyle = response.data;
      this.componentLoaded.travel=true;
    },
    async getPromotionHotel() {
      const responsehotel = await HotelService.getTop10PromotionHotel();
      this.top10PromotionHotel = randomArray(responsehotel.data).slice(0, 8);
      this.componentLoaded.hotel=true;
    },
    redirectToHotel(hotel) {
this.$router.push(`/hoteldetail?hotelid=${hotel._id}`);
    },
    redirectToTravelStyle(travelstyle) {
      this.$router.push(`/travelstyle/detail?travelstyleid=${travelstyle._id}`);
    },
    redirectToAllTravelStyle(travelstyle) {
      this.$router.push(`/travelstyle`);
    },
    redirectToAllHotel(travelstyle) {
      this.$router.push(`/hotel`);
    },
  },
  computed: {
    hotelByLang() {
      if (this.componentLoaded.hotel === false) {
        return;
      }
      this.top10PromotionHotel.forEach(element => {
        element.hotelId.hotelIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.hotelId.hotelName = area.hotelName;
            element.hotelId.hotelIntro= area.hotelIntro;
          }
        });
      });
      return this.top10PromotionHotel;
    },
    travelStyleByLang() {
      if (this.componentLoaded.travel === false) {
        return;
      }
      this.travelStyle.forEach(element => {
        element.travelStyleIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.travelStyleName = area.travelStyleName;
          }
        });
      });
      return this.travelStyle;
    },
  }
};
</script>

<style scoped lang="scss">
.dropup,
.fullwidth-dropdown {
  position: static !important;
}
/* =======MENU========== */
@media (min-width: 769px) {
  .fullwidth-mega-menu {
    padding: 0 10px !important;
    width: 100vw !important;
    left: 0 !important;
    top: 70px;
  }
}
.travel-style-card {
  width: 31%;
  box-shadow: none;
  margin: 1%;
  flex-shrink: 1;
  flex-grow: 1;
}
.nav-card-link {
  box-shadow: none;
  background-color: #ffffff;
  color: #205072;
  font-weight: 700;
}
.nav-card-link:hover {
  box-shadow: none;
  background-color: #ffffff;
  color: #205072;
}
.nav-hotel-card {
  width: 23.2% !important;
  margin: 0.65%;
  flex-shrink: 1;
  flex-grow: 1;
  box-shadow: none;
}
.nav-hotel-card-filter,
.nav-style-card-filter {
  position: relative;
  margin: 0;
}
.nav-hotel-card-filter::after,
.nav-hotel-card-filter::before,
.nav-style-card-filter::after,
.nav-style-card-filter::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgb(17, 17, 17, 0.2) !important;
}
.nav-hotel-card-filter .card-img-overlay,
.nav-style-card-filter .card-img-overlay {
  z-index: 11 !important;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}
.hotel-card-body-bottom {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 2em;
  margin-top: 10px;
}
.card-img-overlay {
  padding: 1px !important;
  overflow: hidden !important;
}
.style-logo {
  width: 100%;
}
.max-height-150{
  max-height: 150px;
  overflow: hidden;
  height: 70px !important;
}
.card-body-center{
  position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #FFFFFF;
}
.hidden-overflow{
  overflow: hidden;
  text-overflow: ellipsis;
}
.nav-item a,.nav-item.fullwidth-dropdown a{
  font-weight: bold !important;
}
</style>
