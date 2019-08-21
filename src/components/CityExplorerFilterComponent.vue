<template>
  <div class="toppackage" v-if="componentLoaded">
    <div class="section text-left pt-0 pb-4">
      <h3 class="title text-left m-0">{{getTitle}}</h3>
      <div class="row m-2 p-0 bg-white border border-radius-none text-08">
        <div class="col-6 border-right border-bottom m-0 p-2">
          <span>{{$t('pcityexplore_filter_location')}}</span>
          <span class="ml-auto">{{city.cityName}}</span>
        </div>
        <div class="col-6 border-bottom d-flex justify-content-between m-0 p-2 dropdown">
           <button
            class="btn custom-btn-md w-100 text-08 hidden-outof-text custom-btn-outline-default dropdown-toggle text-nomal d-flex justify-content-between align-items-center p-0 m-0"
            type="button"
            id="dropdownSort"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span>{{$t('pcityexplore_filter_filtetype')}}</span>
            <font-awesome-icon icon="chevron-down" class="text-center text-1" />
          </button>
          <div class="dropdown-menu dropdown-menu-left w-100" aria-labelledby="dropdownSort">
            <a class="dropdown-item cursor-pointer">{{$t('pcityexplore_filter_filtetype_booked')}}</a>
            <a class="dropdown-item cursor-pointer">{{$t('pcityexplore_filter_filtetype_price')}}</a>
            <a class="dropdown-item cursor-pointer">{{$t('pcityexplore_filter_filtetype_voted')}}</a>
            <a class="dropdown-item cursor-pointer">{{$t('pcityexplore_filter_filtetype_create')}}</a>
          </div>
        </div>
        <div class="col-3 d-flex justify-content-between border-right m-0 p-2">
          <AirbnbDatetimePickerComponent :customclass="'border-0'"></AirbnbDatetimePickerComponent>
        </div>
        <div class="col-3 d-flex justify-content-between border-right m-0 p-2 dropdown" v-bind:class="{'show showing':dropdown.price}">
          <button
            class="btn custom-btn-md w-100 text-08 hidden-outof-text custom-btn-outline-default dropdown-toggle text-nomal d-flex justify-content-between align-items-center p-0 m-0"
            type="button"
            id="dropdownPrice"
            aria-haspopup="true"
            aria-expanded="false"
            @click="dropdown.price=!dropdown.price"
          >
            <span>{{$t('pcityexplore_filter_price')}}</span>
            <font-awesome-icon icon="chevron-down" class="text-center text-1" />
          </button>
          <div class="dropdown-menu dropdown-menu-left w-100 p-2 pt-4" v-bind:class="{'show showing':dropdown.price,'hide hideing':!dropdown.price}" aria-labelledby="dropdownPrice">
              <div class="row m-0 p-0 w-100 py-4">
                <div class="col-12">
              <vue-slider v-model="filter.price" :tooltip="'always'" :min="100000" :max="30000000" :tooltip-formatter="priceformat"></vue-slider>
                </div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-12 d-flex justify-content-end align-items-center">
                <button class="btn btn-sm btn-outline-danger text-nomal"  @click="dropdown.price=!dropdown.price">Cancel</button>
                <button class="btn btn-sm btn-info text-nomal"  @click="dropdown.price=!dropdown.price">Ok</button>
                </div>
              </div>
          </div>
        </div>
        <div class="col-3 d-flex justify-content-between border-right m-0 p-2">
          <span>{{$t('pcityexplore_filter_promotion')}}</span>
          <span>
            <font-awesome-icon icon="chevron-down" class="text-center" />
          </span>
        </div>
        <div class="col-3 d-flex justify-content-between m-0 p-2 dropdown">
          <button
            class="btn custom-btn-md w-100 text-08 hidden-outof-text custom-btn-outline-default dropdown-toggle text-nomal d-flex justify-content-between align-items-center p-0 m-0"
            type="button"
            id="dropdownSort"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span>{{$t('pcityexplore_filter_sort')}}</span>
            <font-awesome-icon icon="chevron-down" class="text-center text-1" />
          </button>
          <div class="dropdown-menu dropdown-menu-left w-100" aria-labelledby="dropdownSort">
           <a class="dropdown-item cursor-pointer">{{$t('pcityexplore_filter_filtetype_booked')}}</a>
            <a class="dropdown-item cursor-pointer">{{$t('pcityexplore_filter_filtetype_price')}}</a>
            <a class="dropdown-item cursor-pointer">{{$t('pcityexplore_filter_filtetype_voted')}}</a>
            <a class="dropdown-item cursor-pointer">{{$t('pcityexplore_filter_filtetype_create')}}</a>
          </div>
        </div>
      </div>
      <div class="row m-0 p-0 pt-3 d-flex flex-wrap justify-content-start align-items-stretch">
        <div
          class="card filter-card m-2 h-100 d-inline-block"
          v-for="(pac,ipac) in packageByLang"
          v-bind:key="ipac"
        >
          <img
            class="card-img-top image-package cursor-pointer"
            v-bind:src="pac.roomTypeId.roomImages.length>0?`/smimg/${pac.roomTypeId.roomImages[0].filePath.slice(0, -3)}jpg`:'/img/defaultloading.gif'"
            v-bind:alt="pac.roomTypeId.roomImages[0].fileName"
            click="redirectToHotelDetail(pac.hotelId)"
          />
          <div class="card-body p-2">
            <h6 class="card-title m-0 text-color-50 text-06">
              <img
                class="img-supplier"
                v-bind:src="pac.supplierId.supplierImages.length>0?`/smimg/${pac.supplierId.supplierImages[0].filePath.slice(0, -3)}jpg`:'/img/defaultloading.gif'"
                alt
              />
              {{pac.supplierId.supplierName}}
            </h6>
            <h6
              class="card-title m-0 cursor-pointer"
              @click="redirectToHotelDetail(pac.hotelId)"
            >{{pac.hotelId.hotelName}}</h6>
            <p
              class="card-text intro-package hidden-outof-text"
              v-html="pac.roomTypeId.roomTypeName"
            ></p>
            <h2
              class="text-x1 price-text m-0"
            >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(pac.price)}}</h2>
            <small class="text-muted m-0 text-success">{{$t('general_availablefrom')}} {{bookingDate}}</small>
          </div>
        </div>
        <div
          class="card filter-card m-2 h-100 d-inline-block"
          v-for="(tour,ideas) in tourByLang"
          v-bind:key="'Tour'+ideas"
        >
          <img
            class="card-img-top image-package cursor-pointer"
            v-bind:src="tour.tourImages.length>0?`/smimg/${tour.tourImages[0].filePath.slice(0, -3)}jpg`:'/img/defaultloading.gif'"
            v-bind:alt="tour.tourImages[0].fileName"
             @click="redirectToTourDetail(tour)"
          />
          <div class="card-body p-2">
            <h6
              class="card-title m-0 text-color-50 text-06"
            >{{tour.to}} | {{tour.tourTypeId.tourTypeName}}</h6>
            <h6
              class="card-title m-0 cursor-pointer"
              @click="redirectToTourDetail(tour)"
            >{{tour.tourName}}</h6>
            <p class="card-text intro-package hidden-outof-text" v-html="tour.tourIntro"></p>
            <h2
              class="text-x1 price-text m-0"
            >{{$t('general_from')}}  {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tour.price)}}</h2>
            <small class="text-muted m-0 text-success">{{$t('general_availablefrom')}} {{bookingDate}}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import moment from "moment";
import i18n from "@/lang/i18n";
import HotelService from "@/api/HotelService";
import TourService from "@/api/TourService";
import "@lazy-copilot/datetimepicker/dist/datetimepicker.css";
import { DateTimePicker } from "@lazy-copilot/datetimepicker";
import AirbnbDatetimePickerComponent from '@/components/AirbnbDatetimePickerComponent.vue';

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
    DateTimePicker,
    AirbnbDatetimePickerComponent
  },
  name: "CityExplorerFilterComponent",
  props: {
    msg: String,
    city: {}
  },
  data() {
    return {
      dropdown:{
        price:false,
      },
      packages: [],
      tours: [],
      bookingDate: moment().format("MM-DD-YYYY"),
      title: "Top hotel promotion today",
      priceformat:  v => {return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(v)},
      filter: {
        price:  [200000, 10500000],
        promotion:true,
        date: {
          startDate: '',
          endDate: ''
        },
        sortBy: ''
      },
      componentLoaded:false,
    };
  },
  mounted() {
    if (
      typeof this.city._id !== "undefined" &&
      this.city._id !== ""
    ) {
      this.initialByCity(this.city._id);
      this.title = `Lam gi khi den ${this.city.cityName}`;
    } else {
      this.initial();
    }
  },
  methods: {
    async initial() {
      this.$store.commit("showHideLoading", true);
      const response = await HotelService.getTopPromotionHotelPackage();
      this.packages = randomArray(response.data);
      const responsetour = await TourService.getTopPromotionTourPackage();
      this.tours = randomArray(responsetour.data);
      this.$store.commit("showHideLoading", false);
      this.componentLoaded=true;
    },
    async initialByCity(cityId) {
      this.$store.commit("showHideLoading", true);
      const response = await HotelService.getHotelPackageByCity(
        cityId
      );
      this.packages = randomArray(response.data);
      const responsetour = await TourService.getTourPackageByCity(
        cityId
      );
      this.tours = randomArray(responsetour.data);
      this.$store.commit("showHideLoading", false);
      this.componentLoaded=true;
    },
    redirectToTourDetail(des) {
      this.$router.push(`/tourdetail?tourid=${des._id}`);
    },
    redirectToHotelDetail(des) {
      this.$router.push(`/hoteldetail?hotelid=${des._id}`);
    },
    onChangeDate() {}
  },
  computed: {
    getTitle() {
      if (
        typeof this.city._id !== "undefined" &&
        this.city._id !== ""
      ) {
        return `Hot hotel in ${this.city.cityName}`;
      } else {
        return "Du lich cung chung toi";
      }
    },
    tourByLang() {
      if (this.componentLoaded === false) {
        return;
      }
      this.tours.forEach(element => {
        element.tourIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.tourName = area.tourName;
            element.tourIntro= area.tourIntro;
          }
        });
      });
      return this.tours;
    },
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
    HotelByFilter() {

    },
    TourByFilter() {

    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.price-slider{
  padding:30px 0px;
}
.card-package {
  width: 220px;
}
.intro-package {
  width: 100px;
}
.image-package {
  height: 200px;
}
.price-text {
  font-weight: 900;
}
.img-supplier {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
}
.small-loading-img {
  width: 30px !important;
  height: 30px !important;
}
.filter-card {
  width: 23% !important;
  max-height: 340px;
  min-height: 340px;
  flex-grow: 1 !important;
  overflow: hidden;
}
.dropdown-toggle::after {
  display: none !important;
}
.btn:active,
.btn.active,
.open > .btn.dropdown-toggle,
.show > .btn.dropdown-toggle,
.btn.btn-default:active,
.btn.btn-default.active,
.open > .btn.btn-default.dropdown-toggle,
.show > .btn.btn-default.dropdown-toggle {
  color: #333 !important;
  box-shadow: none !important;
  border: none !important;
}
.dropdown-menu {
  position: absolute;
  z-index: 100;
  border-radius: 0px !important;
}
.dropdown-menu-left {
  left: 0px !important;
  right: auto;
}
.dropdown-menu-right {
  right: 0px !important;
  left: auto;
}
.dropdown-menu .dropdown-item:hover,
.dropdown-menu .dropdown-item:focus,
.dropdown-menu a:hover,
.dropdown-menu a:focus,
.dropdown-menu a:active {
  box-shadow: none;
  background-color: #fff;
  color: #333;
}
.btn:hover {
  color: #333 !important;
}
.btn,
.btn.btn-default {
  box-shadow: none;
  border: none !important;
}
.custom-btn-md {
  line-height: normal;
  height: 20px !important;
}
.calendarTrigger{
  width: 100% !important;
  min-width: 100px !important;
}
#itime .calendarTrigger{
  width:100% !important;
  min-width: 100px !important;
  border: none !important;
  height: 20px !important;
}
a.calendarTrigger{
  width:100% !important;
  min-width: 100px !important;
  max-width: 100% !important;
}
</style>
