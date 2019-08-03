<template>
  <nav class="navbar fixed-top navbar-expand-lg" v-bind:class="classObject" color-on-scroll="100">
    <div class="container">
      <div class="navbar-translate">
        <a class="navbar-brand" href="/index.html">
          <img src="/img/new_logo.jpg" alt height="50px;" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="/index.html" class="nav-link">
              <i class="fa fa-menu"></i> Home
            </a>
          </li>
          <li class="nav-item fullwidth-dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Destination</a>
            <div class="dropdown-menu fullwidth-mega-menu" aria-labelledby="navbarDropdownMenuLink">
              <div class="row m-1">
                <div class="col-2 m-0 p-2 pr-4 border-right">
                  <img class="style-logo py-4 d-inline-block" src="/img/logo_gif.gif" alt />
                  <p class="text-left text-08">
                    Hang tram diem den tuyet voi tren dat nuoc VietNam bao gom Tay Bac, Me Kong, Mien Trung
                    Mien Nam, va cac tinh Bac Trung Bo. Chung toi luon co nhung dich vu tuyet voi
                  </p>
                  <small class="text-06">
                    <font-awesome-icon icon="headset" class="text-08 text-center" />Goi ngay
                    <span class="text-danger text-08 font-weight-bold">19001542</span> 24/7 de tuoc tu van, hoac chat truc tiep voi chung toi
                  </small>
                </div>
                <div class="col-8 m-0 p-0">
                  <div class="row m-0 p-0">
                    <div class="col-4 m-0 p-2 border-right" v-for="(area,iArea) in areaCountry" v-bind:key="iArea">
                      <div
                        class="row w-100 p-0 m-0 mb-2 d-flex justify-content-between align-items-center"
                      >
                        <span class="text-1 text-danger font-weight-bold">{{area.areaCountryName}}</span>
                        <span class="text-08 text-danger">
                          Xem thêm
                          <font-awesome-icon icon="chevron-right" class="text-08 text-center" />
                        </span>
                      </div>
                      <div
                        class="row w-100 p-0 m-0 d-flex flex-row justify-content-between align-items-stretch flex-wrap"
                      >
                        <div
                          class="card travel-style-card my-1"
                          v-for="(des,iDes) in area.destinations"
                          v-bind:key="iDes"
                        >
                          <div class="row h-100 nav-style-card-filter">
                            <a
                              class="nav-card-link h-100"
                              v-bind:href="`/travelstyle/detail/${des._id}`"
                            >
                              <img
                                class="w-100 h-100"
                                v-bind:class="{'small-loading-img':des.destinationImages.length==0}"
                                v-bind:src="des.destinationImages.length>0?`/${des.destinationImages[0].filePath}`:'/img/defaultloading.gif'"
                                v-bind:alt="des.destinationName"
                              />
                              <div class="card-img-overlay">
                                <h4
                                  class="card-title text-08 text-center text-white"
                                >{{des.destinationName}}</h4>
                              </div>
                            </a>
                          </div>
                          <div class="row m-0 p-0">
                            <div class="hotel-card-body-bottom text-06">
                              <a><span class="text-08 font-weight-bold m-0">Tour</span></a> |
                              <a><span class="text-08 font-weight-bold m-0">Hotel</span></a> |
                              <a><span class="text-08 font-weight-bold m-0">Car</span></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-2 m-0 p-2">
                  <div
                    class="row w-100 p-0 m-0 mb-2 d-flex justify-content-between align-items-center"
                  >
                    <span class="text-1 text-danger font-weight-bold">Any question, contact us</span>
                  </div>
                  <div class="row m-0 p-0 d-flex flex-column justify-content-around">
                    <div class="col-12 py-1">
                      <label class="text-06 mb-1" for="iname">Your name</label>
                      <input class="custom-form-input" type="text" name="iname" id />
                    </div>
                    <div class="col-12 py-1">
                      <label class="text-06 mb-1" for="imail">Your email</label>
                      <input class="custom-form-input" type="text" name="imail" id />
                    </div>
                    <div class="col-12 py-1">
                      <label class="text-06 mb-1" for="iphone">Your phone</label>
                      <input class="custom-form-input" type="text" name="iphone" id />
                    </div>
                    <div class="col-12 py-1">
                      <label class="text-06 mb-1" for="imessage">Your request</label>
                      <textarea class="custom-form-input" type="text" name="imessage" id></textarea>
                    </div>
                    <div class="col-12 py-1 text-right">
                      <button class="btn btn-sm btn-danger border-radius-100">Send request</button>
                    </div>
                    <div class="col-12 py-1 text-right">
                      <small class="text-06">
                        <font-awesome-icon icon="headset" class="text-08 text-center" />Hotline
                        <span class="text-danger text-08 font-weight-bold">19001542</span> 24/7
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item fullwidth-dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Travel Style</a>
            <div class="dropdown-menu fullwidth-mega-menu" aria-labelledby="navbarDropdownMenuLink">
              <div class="row m-1">
                <div class="col-3 m-0 p-2 pr-4 border-right">
                  <img class="style-logo py-4 d-inline-block" src="/img/logo_gif.gif" alt />
                  <p class="text-left text-08">
                    Dai Minh cung cap tat ca cac tour theo style cua ban. Chung toi co cac style theo
                    phong cach co dien, mao hiem,sang trong va doc dao
                  </p>
                </div>
                <div class="col-3 m-0 p-2 border-right">
                  <div
                    class="row w-100 p-0 m-0 mb-2 d-flex justify-content-between align-items-center"
                  >
                    <span class="text-1 text-danger font-weight-bold">Travel style for you</span>
                    <span class="text-08 text-danger">
                      Xem thêm
                      <font-awesome-icon icon="chevron-right" class="text-08 text-center" />
                    </span>
                  </div>
                  <div
                    class="row w-100 p-0 m-0 d-flex flex-row justify-content-between align-items-stretch flex-wrap"
                  >
                    <div
                      class="card travel-style-card my-1"
                      v-for="(st,iStyle) in travelStyle"
                      v-bind:key="iStyle"
                    >
                      <div class="row h-100 nav-style-card-filter">
                        <a
                          class="nav-card-link h-100"
                          v-bind:href="`/travelstyle/detail/${st._id}`"
                        >
                          <img
                            class="w-100 h-100"
                            v-bind:class="{'small-loading-img':st.travelStyleImages.length==0}"
                            v-bind:src="st.travelStyleImages.length>0?`/${st.travelStyleImages[0].filePath}`:'/img/defaultloading.gif'"
                            v-bind:alt="st.travelStyleName"
                          />
                          <div class="card-img-overlay">
                            <h4
                              class="card-title text-08 text-center text-white"
                            >{{st.travelStyleName}}</h4>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4 m-0 p-2 border-right">
                  <div
                    class="row w-100 p-0 m-0 mb-2 d-flex justify-content-between align-items-center"
                  >
                    <span class="text-1 text-danger font-weight-bold">Today promotion hotel</span>
                    <span class="text-08 text-danger">
                      Xem thêm
                      <font-awesome-icon icon="chevron-right" class="text-08 text-center" />
                    </span>
                  </div>
                  <div
                    class="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-start flex-wrap"
                  >
                    <div
                      class="card nav-hotel-card"
                      v-for="(ht,iHotel) in top10PromotionHotel"
                      v-bind:key="iHotel"
                    >
                      <div class="row nav-hotel-card-filter">
                        <a
                          class="nav-card-link h-100"
                          v-bind:href="`/travelstyle/detail/${ht._id}`"
                        >
                          <!--  v-bind:src="ht.roomTypeId.roomImages.length>0?`/${ht.roomTypeId.roomImages[0].filePath}`:'/img/defaultloading.gif'" -->
                          <img
                            class="w-100 h-100"
                            v-bind:class="{'small-loading-img':ht.roomTypeId.roomImages.length==0}"
                            v-bind:src="ht.roomTypeId.roomImages.length>0?`/${ht.roomTypeId.roomImages[0].filePath}`:'/img/defaultloading.gif'"
                            v-bind:alt="ht.roomTypeId.roomTypeName"
                          />
                          <div class="card-img-overlay">
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
                              @click="redirectToTour(ht)"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-2 m-0 p-2">
                  <div
                    class="row w-100 p-0 m-0 mb-2 d-flex justify-content-between align-items-center"
                  >
                    <span class="text-1 text-danger font-weight-bold">Any question, contact us</span>
                  </div>
                  <div class="row m-0 p-0 d-flex flex-column justify-content-around">
                    <div class="col-12 py-1">
                      <label class="text-06 mb-1" for="iname">Your name</label>
                      <input class="custom-form-input" type="text" name="iname" id />
                    </div>
                    <div class="col-12 py-1">
                      <label class="text-06 mb-1" for="imail">Your email</label>
                      <input class="custom-form-input" type="text" name="imail" id />
                    </div>
                    <div class="col-12 py-1">
                      <label class="text-06 mb-1" for="iphone">Your phone</label>
                      <input class="custom-form-input" type="text" name="iphone" id />
                    </div>
                    <div class="col-12 py-1">
                      <label class="text-06 mb-1" for="imessage">Your request</label>
                      <textarea class="custom-form-input" type="text" name="imessage" id></textarea>
                    </div>
                    <div class="col-12 py-1 text-right">
                      <button class="btn btn-sm btn-danger border-radius-100">Send request</button>
                    </div>
                    <div class="col-12 py-1 text-right">
                      <small class="text-06">
                        <font-awesome-icon icon="headset" class="text-08 text-center" />Hotline
                        <span class="text-danger text-08 font-weight-bold">19001542</span> 24/7
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Travel Service</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item text-info" href="/hotel/hotel-booking-confirm.html">
                <i class="fas fa-hotel mr-2"></i> Hotel
              </a>
              <a class="dropdown-item text-info" href="#">
                <i class="fas fa-taxi mr-2"></i> Car
              </a>
              <a class="dropdown-item text-info" href="#">
                <i class="fab fa-avianex mr-2"></i> Visa
              </a>
            </div>
          </li>
          <li class="nav-item">
            <a href="/tour/mice.html" class="nav-link">
              <i class="fa fa-menu"></i> MICE
            </a>
          </li>
          <li class="nav-item">
            <a href="/tour/fit.html" class="nav-link">
              <i class="fa fa-menu"></i> FIT
            </a>
          </li>
          <li class="nav-item">
            <a href="/function/aboutus.html" class="nav-link">
              <i class="fa fa-menu"></i>
              About Us
            </a>
          </li>
          <li class="nav-item">
            <ul class="navbar-nav">
              <li class="hide">
                <a href="#" class="nav-link">
                  <img class="language-icon" src="/img/language/vietnam.png" alt /> | VI
                </a>
              </li>
              <li class="hide">
                <a href="#" class="nav-link">
                  <img class="language-icon" src="/img/language/united-kingdom.png" alt /> | EN
                </a>
              </li>
              <li class="active">
                <a href="#" class="nav-link">
                  <img class="language-icon" src="/img/language/south-korea.png" alt /> | KO
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item d-inline-block d-sm-inline-block d-md-none d-lg-none d-xl-none">
            <ul
              class="navbar-nav footer-social d-flex flex-row justify-content-around align-items-center p-4"
            >
              <li>
                <a href="#">
                  <img src="/img/social/kakao.png" alt />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/img/social/facebook.png" alt />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/img/social/skype.png" alt />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/img/social/twitter.png" alt />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/img/social/zalo.png" alt />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import TravelStyleService from "@/api/TravelStyleService";
import HotelService from "@/api/HotelService";
import DestinationService from "@/api/DestinationService";
import AreaCountryService from '@/api/AreaCountryService';
import HorizontalAdsComponent from "@/components/HorizontalAdsComponent.vue";

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
    HorizontalAdsComponent
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
      travelStyle: [],
      top10PromotionHotel: [],
      areaCountry: [],
    };
  },
  mounted() {
    this.getTravelStyle();
    this.getPromotionHotel();
    this.getAreaCountry();
  },
  methods: {
    async getAreaCountry() {
      const resArea = await AreaCountryService.getAllAreaCountry();
      this.areaCountry = resArea.data;
      for (let index = 0; index < this.areaCountry.length; index++) {
        const fruit = this.areaCountry[index]
        const numFruit = await this.getDestinationByArea(fruit._id)
        this.areaCountry[index].destinations=[...numFruit]
      }
      console.log(this.areaCountry);
    },
    async getTravelStyle() {
      const response = await TravelStyleService.getAllTravelStyle();
      this.travelStyle = response.data;
    },
    async getPromotionHotel() {
      const responsehotel = await HotelService.getTop10PromotionHotel();
      this.top10PromotionHotel = randomArray(responsehotel.data).slice(0, 10);
    },
    async getDestinationByArea(areaId) {
      const resDes =await DestinationService.getDestinationByAreaCountry(areaId);
      return resDes.data;
    },
    redirectToTour(tour) {}
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
.nav-card-link,
.nav-card-link:hover {
  box-shadow: none;
  background-color: #ffffff;
}
.vertical-260 {
  height: 260px !important;
  overflow: hidden;
  overflow-y: scroll;
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
.custom-form-input {
  padding: 3px 5px;
  border-radius: 2px;
  border: 0.5px solid #d2d2d2;
  width: 100%;
  margin: 0;
  font-size: 0.8rem;
}
textarea.custom-form-input {
  height: auto;
}
.style-logo {
  width: 100%;
}
</style>
