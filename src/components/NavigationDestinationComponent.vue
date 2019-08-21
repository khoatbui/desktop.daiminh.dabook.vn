<template>
    <li class="nav-item fullwidth-dropdown">
    <a
        class="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
    >{{$t('na_destination')}}</a>
    <div class="dropdown-menu fullwidth-mega-menu" aria-labelledby="navbarDropdownMenuLink">
        <div class="row m-1">
        <div class="col-2 m-0 p-2 pr-4 border-right">
            <img class="style-logo py-4 d-inline-block" src="/img/logo_gif.gif" alt />
            <p class="text-left text-08">
            {{$t('navi_destination_intro')}}
            </p>
            <small class="text-06" v-html="$t('navi_destination_call')">
            </small>
        </div>
        <div class="col-8 m-0 p-0">
            <div class="row m-0 p-0">
            <div
                class="col-4 m-0 p-2 border-right"
                v-for="(area,iArea) in areaByLang"
                v-bind:key="iArea"
            >
                <div
                class="row w-100 p-0 m-0 mb-2 d-flex justify-content-between align-items-center"
                >
                <span class="text-08 text-danger font-weight-bold">{{area.areaCountryName}}</span>
                <span class="text-08 text-danger cursor-pointer" @click="redirectToAllDestination">
                    {{$t('btn_showall')}}
                    <font-awesome-icon icon="chevron-right" class="text-07 text-center" />
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
                    <div class="row h-100 p-0 m-0 nav-style-card-filter">
                    <a
                        class="nav-card-link cursor-pointer"
                        @click="redirectToDestination(des)"
                    >
                        <img
                        class="w-100 h-100"
                        v-bind:class="{'small-loading-img':des.destinationImages.length==0}"
                        v-bind:src="des.destinationImages.length>0?`/smimg/${des.destinationImages[0].filePath.slice(0, -3)}jpg`:'/img/defaultloading.gif'"
                        v-bind:alt="des.destinationName"
                        />
                        <div class="card-img-overlay card-body-center">
                        <h4
                            class="card-title text-08 text-center text-white"
                        >{{des.destinationName}}</h4>
                        </div>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="col-2 m-0 p-2">
            <DefaultContactFormComponent :menuCode="'DESTINATION'"></DefaultContactFormComponent>
        </div>
        </div>
    </div>
    </li>
</template>

<script>
import moment from 'moment';
import i18n from '@/lang/i18n';
import lazyLoadComponent from '@/utils/lazy-load-component'
import SkeletonBox from '@/components/SkeletonBox.vue';
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
  name: "NavigationDestinationComponent",
  components: {
    DefaultContactFormComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/DefaultContactFormComponent.vue'),
      loading: SkeletonBox,
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
      moment:moment,
      componentLoaded: false,
    };
  },
  mounted() {
    this.getAreaCountry();
  },
  methods: {
    async getAreaCountry() {
      const resArea = await AreaCountryService.getAllAreaCountry();
      this.areaCountry = resArea.data;
      const promises = resArea.data.map(async fruit => {
        fruit.destinations = await this.getDestinationByArea(fruit._id);
        return fruit;
      });

      const numFruits = await Promise.all(promises);
      this.areaCountry = numFruits;
      this.componentLoaded=true;
    },
    async getDestinationByArea(areaId) {
      const resDes = await DestinationService.getDestinationByAreaCountry(
        areaId
      );
      return randomArray(resDes.data).slice(0, 9);
    },
    redirectToDestination(destination){
       this.$router.push(
        `/destination/detail?destinationid=${destination._id}`
      );
    },
    redirectToAllDestination() {
      this.$router.push(`/destination`);
    },
  },
  computed: {
    areaByLang() {
      if (this.componentLoaded===false) {
        return;
      }
      this.areaCountry.forEach(element => {
        element.destinations.forEach(des => {
          des.destinationIntros.forEach(desIntro => {
            if (desIntro.lang.toUpperCase()===i18n.locale.toUpperCase()) {
              des.destinationIntro=desIntro.destinationIntro;
              des.destinationName=desIntro.destinationName;
            }
          })
        });

        element.areaCountryIntros.forEach(area => {
          if (area.lang.toUpperCase()===i18n.locale.toUpperCase()) {
              element.areaCountryName=area.areaCountryName;
            }
        })
      });
      return this.areaCountry;
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
  height: 70px !important;
  width: 100% !important;
}
.nav-card-link:hover {
  box-shadow: none;
  background-color: #ffffff;
  color: #205072;
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
.card-body-center{
  position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #FFFFFF;
    white-space: nowrap;
}
</style>
