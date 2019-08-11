<template>
  <li class="nav-item fullwidth-dropdown">
    <a
      class="nav-link dropdown-toggle"
      href="#"
      id="navbarDropdownMenuLink"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >Travel Service</a>
    <div class="dropdown-menu fullwidth-mega-menu" aria-labelledby="navbarDropdownMenuLink">
      <div class="row m-1">
        <div class="col-2 m-0 p-2 pr-4 border-right">
          <img class="style-logo py-4 d-inline-block" src="/img/logo_gif.gif" alt />
          <p class="text-left text-08">
            Ngoai tour va ve, chung toi cung cap cac dich vu lien quan toi du lich nhu khach san,
            xe, bao hiem, visa voi muc gia uu dai va dich vu hoan hao, xin hay lien he voi chung toi
            de duoc tu van tot nhat
          </p>
          <small class="text-06">
            <font-awesome-icon icon="headset" class="text-08 text-center" />Goi ngay
            <span class="text-danger text-08 font-weight-bold">19001542</span> 24/7 de duoc tu van, hoac chat truc tiep voi chung toi
          </small>
        </div>
        <div class="col-8 m-0 p-2 border-right">
          <div class="row m-0 p-0">
            <div class="col-4 m-0 p-2 border-right">
              <div class="row w-100 p-0 m-0 mb-2 d-flex justify-content-between align-items-center">
                <span class="text-08 text-danger font-weight-bold">Service</span>
                <span class="text-08 text-danger cursor-pointer" @click="redirectToAllTravelService">
                  View all
                  <font-awesome-icon icon="chevron-right" class="text-07 text-center" />
                </span>
              </div>
              <div
                class="row w-100 p-0 m-0 d-flex flex-row justify-content-between align-items-stretch flex-wrap"
              >
                <div
                  class="card travel-style-card my-1"
                  v-for="(tservice,iService) in travelServices"
                  v-bind:key="iService"
                >
                  <div class="row h-100 nav-style-card-filter">
                    <a class="nav-card-link h-100 cursor-pointer" @click="redirectToTravelService(tservice)">
                      <img
                        class="w-100 h-100"
                        v-bind:class="{'small-loading-img':tservice.travelServiceImages.length==0}"
                        v-bind:src="tservice.travelServiceImages.length>0?`/webmp/${tservice.travelServiceImages[0].filePath.slice(0, -3)}webp`:'/img/defaultloading.gif'"
                        v-bind:alt="tservice.travelServiceName"
                      />
                      <div class="card-img-overlay  d-flex align-items-center justify-content-center card-body-center">
                        <h4
                          class="card-title text-08 text-center text-white"
                        >{{tservice.travelServiceName}}</h4>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4 m-0 p-2 border-right">
              <div class="row w-100 p-0 m-0 mb-2 d-flex justify-content-between align-items-center">
                <span class="text-08 text-danger font-weight-bold">Today promotion hotel</span>
                <span class="text-08 text-danger cursor-pointer" @click="redirectToAllHotel">
                  View all
                  <font-awesome-icon icon="chevron-right" class="text-07 text-center" />
                </span>
              </div>
              <div
                class="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-stretch flex-wrap"
              >
                <div
                  class="card nav-50-card d-flex flex-column"
                  v-for="(ht,iHotel) in top10PromotionHotel"
                  v-bind:key="iHotel"
                >
                  <div class="row nav-hotel-card-filter">
                    <a class="nav-card-link max-height-150 h-100 cursor-pointer" @click="redirectToHotel(ht)">
                      <!--  v-bind:src="ht.roomTypeId.roomImages.length>0?`/${ht.roomTypeId.roomImages[0].filePath}`:'/img/defaultloading.gif'" -->
                      <img
                        class="w-100 h-100"
                        v-bind:class="{'small-loading-img':ht.roomTypeId.roomImages.length==0}"
                        v-bind:src="ht.roomTypeId.roomImages.length>0?`/webmp/${ht.roomTypeId.roomImages[0].filePath.slice(0, -3)}webp`:'/img/defaultloading.gif'"
                        v-bind:alt="ht.roomTypeId.roomTypeName"
                      />
                      <div class="card-img-overlay d-flex align-items-center justify-content-center card-body-center">
                        <h4
                          class="card-title text-08 text-center text-white"
                        >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(ht.price)}}</h4>
                      </div>
                    </a>
                  </div>
                  <div class="row m-0 p-0">
                    <div class="hotel-card-body-bottom text-06">
                      <p class="text-08 font-weight-bold m-0">{{ht.hotelId.hotelName}}</p>
                      <div class="w-100 d-flex justify-content-between align-items-center">
                        <span class="w-50">{{ht.roomTypeId.roomTypeName}}</span>
                        <font-awesome-icon
                          icon="arrow-right"
                          class="text-1 text-center text-danger cursor-pointer"
                          @click="redirectToHotel(ht)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4 m-0 p-2">
              <div class="row w-100 p-0 m-0 mb-2 d-flex justify-content-between align-items-center">
                <span class="text-08 text-danger font-weight-bold">Today promotion car</span>
                <span class="text-08 text-danger cursor-pointer"  @click="redirectToAllCar">
                  View all
                  <font-awesome-icon icon="chevron-right" class="text-07 text-center" />
                </span>
              </div>
              <div
                class="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-start flex-wrap"
              >
                <div class="card nav-50-card d-flex flex-column" v-for="(car,iCar) in top10Cars" v-bind:key="iCar">
                  <div class="row nav-hotel-card-filter">
                    <a class="nav-card-link max-height-150 h-100 cursor-pointer" @click="redirectToCar(car)">
                      <img
                        class="w-100 h-100"
                        v-bind:class="{'small-loading-img':car.priceByCarType[0].carImages.length==0}"
                        v-bind:src="car.priceByCarType[0].carImages.length>0?`/${car.priceByCarType[0].carImages[0].filePath}`:'/img/defaultloading.gif'"
                        v-bind:alt="car.tripName"
                      />
                      <div class="card-img-overlay d-flex align-items-center justify-content-center card-body-center">
                        <h4
                          class="card-title text-08 text-center text-white"
                        >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(car.priceByCarType[0].price)}} /km</h4>
                      </div>
                    </a>
                  </div>
                  <div class="row m-0 p-0">
                    <div class="hotel-card-body-bottom text-06">
                      <p class="text-08 font-weight-bold m-0">{{car.tripName}}</p>
                      <div class="w-100 d-flex justify-content-between align-items-center">
                        <span class="w-50">{{car.fromLocation}} | {{car.toLocation}}</span>
                        <font-awesome-icon
                          icon="arrow-right"
                          class="text-1 text-center text-danger cursor-pointer"
                          @click="redirectToCar(car)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-2 m-0 p-2">
          <DefaultContactFormComponent :menuCode="'TRAVEL-SERVICE'"></DefaultContactFormComponent>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import moment from "moment";
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
  name: "NavigationTravelServiceComponent",
  components: {
    DefaultContactFormComponent: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/DefaultContactFormComponent.vue"),
      loading: SkeletonBox
    }),
  },
  props: {
    isTran: true
  },
  data() {
    return {
      classObject: {
        "navbar-color-on-scroll navbar-transparent": this.isTran,
        "navbar-no-transparent": !this.isTran
      },
      top10PromotionHotel: [],
      top10Cars: [],
      travelServices: [],
      moment: moment
    };
  },
  mounted() {
    this.getTravelService();
    this.getCarPromotion();
    this.getPromotionHotel();
  },
  methods: {
    async getTravelService() {
      const responseservice = await TravelService.getAllTravelService();
      this.travelServices = randomArray(responseservice.data);
    },
    async getCarPromotion() {
      const resDes = await CarService.getTop10PromotionCar();
      this.top10Cars = randomArray(resDes.data).slice(0, 4);
    },
    async getPromotionHotel() {
      const responsehotel = await HotelService.getTop10PromotionHotel();
      this.top10PromotionHotel = randomArray(responsehotel.data).slice(0, 4);
    },
    redirectToCar(car) {
      this.$router.push(`/car/detail?carid=${car._id}`);
    },
    redirectToTravelService(travelservice) {
      this.$router.push(
        `/travelservice/detail?travelserviceid=${travelservice._id}`
      );
    },
    redirectToAllTravelService() {
      this.$router.push(
        `/travelservice`
      );
    },
    redirectToAllHotel() {
      this.$router.push(
        `/hotel`
      );
    },
    redirectToAllCar() {
      this.$router.push(
        `/car`
      );
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
.nav-50-card {
  width: 48% !important;
  margin: 1%;
  flex-shrink: 1;
  flex-grow: 1;
  box-shadow: none;
}
.nav-hotel-card {
  width: 18% !important;
  margin: 1%;
  flex-shrink: 1;
  flex-grow: 1;
  box-shadow: none;
}
.nav-hotel-card-filter,
.nav-style-card-filter {
  position: relative;
  margin: 0;
  flex-grow: 1;
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
.style-logo {
  width: 100%;
}
.card-img-overlay {
  padding: 1px !important;
  overflow: hidden !important;
}
.max-height-150{
  max-height: 150px;
  overflow: hidden;
}
.card-body-center{
  position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #FFFFFF;
}
</style>
