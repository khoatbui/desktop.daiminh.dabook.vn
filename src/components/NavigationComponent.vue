<template>
<<<<<<< HEAD
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
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="/destination"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Destination</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item text-info" href="/destination">
                <i class="fab fa-buysellads mr-2"></i> VietNam
              </a>
              <a class="dropdown-item text-info" href="#">
                <i class="fas fa-air-freshener mr-2"></i> Other Country
              </a>
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
                <div
                  class="col-3 m-0 p-1 d-flex flex-row justify-content-between align-items-center flex-wrap"
                >
                  <div class="card travel-style-card my-1" v-for="(style,iStyle) in travelStyle" v-bind:key="iStyle">
                    <a class="nav-card-link" href="/tour/tourlist.html">
                      <img class="w-100" v-bind:src="style.travelStyleImages.length>0?`/${style.travelStyleImages.filePath}`:'/img/defaultloading.gif'"
                        v-bind:alt="style.travelStyleName"  />
                      <div class="card-img-overlay">
                        <h4 class="card-title text-center text-white">{{style.travelStyleName}}</h4>
=======
    <nav class="navbar fixed-top navbar-expand-lg" v-bind:class="classObject"  color-on-scroll="100">
      <div class="container">
        <div class="navbar-translate">
          <a class="navbar-brand" href="/">
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
              <a href="/" class="nav-link">
                <i class="fa fa-menu"></i> Home
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="/destination"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Destination</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item text-info" href="/destination">
                  <i class="fab fa-buysellads mr-2"></i> VietNam
                </a>
                <a class="dropdown-item text-info" href="#">
                  <i class="fas fa-air-freshener mr-2"></i> Other Country
                </a>
              </div>
            </li>
            <li class="nav-item dropdown hestia-mega-menu">
              <a
                class="nav-link dropdown-toggle"
                href="/travelstyle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Travel Style</a>
              <div class="dropdown-menu" role="menu" aria-labelledby="navbarDropdownMenuLink">
                <div class="row m-1">
                  <div class="col-7">
                    <div class="row">
                      <div class="col-6 p-1">
                        <div class="card bg-dark text-white m-1">
                          <a class="nav-card-link" href="/travelstyle/detail">
                            <img
                              class="card-img h-30"
                              src="/img/tour/style_luxury.jpg"
                              alt="Card image"
                            />
                            <div class="card-img-overlay">
                              <h4 class="card-title text-center">LUXURY</h4>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="col-6 p-1">
                        <div class="card bg-dark text-white m-1">
                          <a class="nav-card-link" href="/travelstyle/detail">
                            <img
                              class="card-img h-30"
                              src="/img/tour/style_golf.jpg"
                              alt="Card image"
                            />
                            <div class="card-img-overlay">
                              <h4 class="card-title text-center">GOLF</h4>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="col-6 p-1">
                        <div class="card bg-dark text-white m-1">
                          <a class="nav-card-link" href="/travelstyle/detail">
                            <img
                              class="card-img h-30"
                              src="/img/tour/style_classic.jpg"
                              alt="Card image"
                            />
                            <div class="card-img-overlay">
                              <h4 class="card-title text-center">CLASSIC</h4>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="col-6 p-1">
                        <div class="card bg-dark text-white m-1">
                          <a class="nav-card-link" href="/travelstyle/detail">
                            <img
                              class="card-img h-30"
                              src="/img/tour/style_adventure.jpg"
                              alt="Card image"
                            />
                            <div class="card-img-overlay">
                              <h4 class="card-title text-center">ADVENTURE</h4>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-5">
                    <div class="row d-flex align-items-center justify-content-center h-100">
                      <div class="col-12 m-1">
                        <div class="card bg-dark text-white m-1">
                          <a class="nav-card-link" href="/travelstyle">
                            <img
                              class="card-img"
                              src="/img/tour/des_phuquoc.webp"
                              alt="Card image"
                            />
                            <div class="card-img-overlay">
                              <h4 class="card-title text-center">VIEW ALL</h4>
                            </div>
                          </a>
                        </div>
>>>>>>> 871c2fa645bd98a223218622c1e1dc7a47a4bf88
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-3 m-0 p-1"></div>
                <div class="col-3 m-0 p-1">
                  <HorizontalAdsComponent :adstype="'ANOTHER'"></HorizontalAdsComponent>
                </div>
              </div>
<<<<<<< HEAD
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
=======
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="/travelservice"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Travel Service</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item text-info" href="/hotel">
                  <i class="fas fa-hotel mr-2"></i> Hotel
                </a>
                <a class="dropdown-item text-info" href="/car">
                  <i class="fas fa-taxi mr-2"></i> Car
                </a>
                <a class="dropdown-item text-info" href="/visa">
                  <i class="fab fa-avianex mr-2"></i> Visa
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a href="/mice" class="nav-link">
                <i class="fa fa-menu"></i> MICE
              </a>
            </li>
            <li class="nav-item">
              <a href="/fit" class="nav-link">
                <i class="fa fa-menu"></i> FIT
              </a>
            </li>
            <li class="nav-item">
              <a href="/aboutus" class="nav-link">
                <i class="fa fa-menu"></i>
                About Us
>>>>>>> 871c2fa645bd98a223218622c1e1dc7a47a4bf88
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
import TravelStyleService from '@/api/TravelStyleService';
import HorizontalAdsComponent from "@/components/HorizontalAdsComponent.vue";
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
      travelStyle:[],
    };
  },
  mounted() {
         this.initial();
  },
  methods: {
     async initial() {
      this.$store.commit('showHideLoading', true);
      const response = await TravelStyleService.getAllTravelStyle();
      this.travelStyle =response.data;
      this.$store.commit('showHideLoading', false);
    },
  },
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
    padding: 0 20px !important;
    width: 100vw !important;
    left: 0 !important;
    top: 70px;
  }
}
.travel-style-card {
  width: 48%;
}
</style>
