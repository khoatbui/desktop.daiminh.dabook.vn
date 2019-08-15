<template>
  <li class="nav-item fullwidth-dropdown">
    <a
      class="nav-link dropdown-toggle"
      href="#"
      id="navbarDropdownMenuLink"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >{{$t('na_mice')}}</a>
    <div class="dropdown-menu fullwidth-mega-menu" aria-labelledby="navbarDropdownMenuLink">
      <div class="row m-1">
        <div class="col-2 m-0 p-2 pr-4 border-right">
          <img class="style-logo py-4 d-inline-block" src="/img/logo_gif.gif" alt />
          <p class="text-left text-08">{{$t('navi_mice_intro')}}</p>
          <small class="text-06" v-html="$t('navi_mice_call')"></small>
        </div>
        <div class="col-6 m-0 p-2 border-right">
          <div class="row w-100 p-0 m-0 mb-2 d-flex justify-content-between align-items-center">
            <span
              class="text-08 text-danger font-weight-bold text-uppercase"
            >{{$t('navi_mice_activity')}}</span>
            <span class="text-08 text-danger cursor-pointer" @click="redirectToAllMICE">
              {{$t('btn_showall')}}
              <font-awesome-icon icon="chevron-right" class="text-07 text-center" />
            </span>
          </div>
          <div
            class="row w-100 p-0 m-0 d-flex flex-row justify-content-between align-items-stretch flex-wrap"
          >
            <div
              class="card nav-25-card my-1"
              v-for="(mice,iMice) in miceByLang"
              v-bind:key="iMice"
            >
              <div class="row h-100 nav-style-card-filter">
                <a class="nav-card-link h-100 cursor-pointer" @click="redirectToMICE(mice)">
                  <img
                    class="w-100 h-100"
                    v-bind:class="{'small-loading-img':mice.miceImages.length==0}"
                    v-bind:src="mice.miceImages.length>0?`/webmp/${mice.miceImages[0].filePath.slice(0, -3)}webp`:'/img/defaultloading.gif'"
                    v-bind:alt="mice.miceName"
                  />
                  <div
                    class="card-img-overlay card-body-center d-flex align-items-center justify-content-center"
                  >
                    <h4 class="card-title text-08 text-center text-white">{{mice.miceName}}</h4>
                  </div>
                </a>
              </div>
              <div class="row m-0 p-0">
                <div class="mice-card-body-bottom text-06">
                  <div class="text-08 three-row m-0" v-html="mice.miceIntros[0].miceIntro"></div>
                  <div class="w-100 d-flex justify-content-between align-items-center text-right">
                    <small
                      class="text-06 text-default"
                    >{{$t('general_update')}} {{moment(mice.createDate).format('YYYY.MM.DD')}}</small>
                    <font-awesome-icon
                      icon="arrow-right"
                      class="text-1 text-center text-danger cursor-pointer"
                      @click="redirectToMICE(mice)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-2 m-0 p-2 border-right">
          <div class="row w-100 p-0 m-0 mb-2 d-flex justify-content-between align-items-center">
            <span
              class="text-08 text-danger font-weight-bold text-uppercase"
            >{{$t('na_destination')}}</span>
            <span class="text-08 text-danger" @click="redirectToAllDestination">
              {{$t('btn_showall')}}
              <font-awesome-icon icon="chevron-right" class="text-07 text-center" />
            </span>
          </div>
          <div
            class="row w-100 p-0 m-0 d-flex flex-row justify-content-between align-items-stretch flex-wrap"
          >
            <div class="text-left" v-for="(ar,iAr) in areaByLang" v-bind:key="iAr">
              <a
                href="#"
                class="nav-card-link m-0 p-0 cursor-pointer"
                @click="redirectToDestination(de)"
                v-for="(de,iDe) in ar.destinations"
                v-bind:key="iDe"
              >
                <p class="text-06 m-0">{{de.destinationName}}</p>
              </a>
            </div>
          </div>
        </div>
        <div class="col-2 m-0 p-2">
          <DefaultContactFormComponent :menuCode="'MICE'"></DefaultContactFormComponent>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import moment from "moment";
import i18n from "@/lang/i18n";
import lazyLoadComponent from "@/utils/lazy-load-component";
import SkeletonBox from "@/components/SkeletonBox.vue";
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
  name: "NavigationMICEComponent",
  components: {
    DefaultContactFormComponent: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/DefaultContactFormComponent.vue"),
      loading: SkeletonBox
    })
  },
  props: {},
  data() {
    return {
      classObject: {
        "navbar-color-on-scroll navbar-transparent": this.isTran,
        "navbar-no-transparent": !this.isTran
      },
      areaCountry: [],
      mices: [],
      moment: moment,
      componentLoaded: false
    };
  },
  mounted() {
    this.initial();
  },
  methods: {
    async initial() {
      await this.getAreaCountry();
      await this.getMICE();
      this.componentLoaded = true;
    },
    async getAreaCountry() {
      const resArea = await AreaCountryService.getAllAreaCountry();
      this.areaCountry = resArea.data;
      const promises = resArea.data.map(async fruit => {
        fruit.destinations = await this.getDestinationByArea(fruit._id);
        return fruit;
      });

      const numFruits = await Promise.all(promises);
      this.areaCountry = numFruits;
    },
    async getMICE() {
      const responsemice = await MICEService.getAllMICE();
      this.mices = randomArray(responsemice.data);
    },
    async getDestinationByArea(areaId) {
      const resDes = await DestinationService.getDestinationByAreaCountry(
        areaId
      );
      return randomArray(resDes.data).slice(0, 9);
    },
    redirectToDestination(destination) {
      this.$router.push(`/destination/detail?destinationid=${destination._id}`);
    },
    redirectToMICE(mice) {
      this.$router.push(`/mice/detail?miceid=${mice._id}`);
    },
    redirectToAllMICE() {
      this.$router.push(`/mice`);
    },
    redirectToAllDestination() {
      this.$router.push(`/destination`);
    }
  },
  computed: {
    miceByLang() {
      if (this.componentLoaded === false) {
        return;
      }
      this.mices.forEach(element => {
        element.miceIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.miceName = area.miceName;
            element.miceIntro= area.miceIntro;
          }
        });
      });
      return this.mices;
    },
    areaByLang() {
      if (this.componentLoaded === false) {
        return;
      }
      this.areaCountry.forEach(element => {
        element.destinations.forEach(des => {
          des.destinationIntros.forEach(desIntro => {
            if (desIntro.lang.toUpperCase() === i18n.locale.toUpperCase()) {
              des.destinationIntro = desIntro.destinationIntro;
              des.destinationName = desIntro.destinationName;
            }
          });
        });

        element.areaCountryIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.areaCountryName = area.areaCountryName;
          }
        });
      });
      return this.areaCountry;
    }
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
.nav-25-card {
  width: 23% !important;
  margin: 1%;
  flex-shrink: 1;
  flex-grow: 1;
  box-shadow: none;
}
.nav-style-card-filter {
  position: relative;
  margin: 0;
}
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
.nav-style-card-filter .card-img-overlay {
  z-index: 11 !important;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}
.mice-card-body-bottom {
  width: 100%;
  text-overflow: ellipsis;
  margin-top: 10px;
}
.three-row {
  line-height: 2em;
  height: 6em;
  overflow: hidden;
  text-overflow: ellipsis;
}
.style-logo {
  width: 100%;
}
.card-img-overlay {
  padding: 1px !important;
  overflow: hidden !important;
}
.card-body-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
}
</style>
