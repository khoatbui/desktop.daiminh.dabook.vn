<template>
  <div class="tour-all second-background" v-if="componentLoaded.carList">
    <div class="container py-4 my-0">
      <ModalDetailImageComponent :imgs="backgroundImage" :root="''" :minheight="'300px'"></ModalDetailImageComponent>
    </div>
    <div class="container py-4 my-0 custom-sticky-component">
      <div class="row w-100 m-0 p-0">
        <div class="col-3 m-0 p-0 pr-3">
          <div class="row m-0 p-0">
            <div class="card my-2 px-3">
              <div class="card-body p-0 py-2 font-bold">
                <AirbnbDatetimePickerComponent :customclass="'border-0'"></AirbnbDatetimePickerComponent>
              </div>
            </div>
          </div>

          <div class="row m-0 p-0">
            <div class="card shadow-none my-2 p-3">
              <div class="card-title">
                <h6
                  class="text-left text-x1 font-bold border-bottom"
                >{{$t('ptourall_filter_price')}}</h6>
                <p
                  class="text-left text-07 text-nomal text-muted"
                >{{priceformat(filterCondition.price.filterPrice[0]) + ' - ' + priceformat(filterCondition.price.filterPrice[1])}}</p>
              </div>
              <div class="card-body p-0 py-2">
                <vue-slider
                  v-model="filterCondition.price.filterPrice"
                  :tooltip="'none'"
                  :min="filterCondition.price.minPrice"
                  :max="filterCondition.price.maxPrice"
                  :tooltip-formatter="priceformat"
                  @change="changeFilterAction"
                ></vue-slider>
              </div>
            </div>
          </div>
          <div class="row m-0 p-0">
            <div class="card shadow-none my-2 p-3">
              <div
                class="card-title cursor-pointer"
                data-toggle="collapse"
                href="#collapseStyle"
                role="button"
                aria-expanded="false"
                aria-controls="collapseStyle"
              >
                <h6
                  class="text-left text-x1 font-bold border-bottom d-flex justify-content-between align-items-center"
                ><span>{{$t('ptourall_filter_cartype')}}</span>
                <font-awesome-icon icon="chevron-down" class="text-06 text-center" />
                </h6>
              </div>
              <div class="card-body p-0 py-2 collapse show" id="collapseStyle">
                <div class="row p-0 m-0">
                  <div
                    class="col-12 p-0 m-0 text-left py-1"
                    v-for="(style,i) in carType"
                    :key="'affsa'+i"
                  >
                    <vs-checkbox
                      v-model="filterCondition.carType.filterCarType"
                      :vs-value="style"
                    >{{style.carTypeName}}</vs-checkbox>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row m-0 p-0">
            <div class="card shadow-none my-2 p-3">
              <div
                class="card-title cursor-pointer"
                data-toggle="collapse"
                href="#collapseTransStyle"
                role="button"
                aria-expanded="false"
                aria-controls="collapseTransStyle"
              >
                <h6
                  class="text-left text-x1 font-bold border-bottom d-flex justify-content-between align-items-center"
                ><span>{{$t('ptourall_filter_transtype')}}</span>
                <font-awesome-icon icon="chevron-down" class="text-06 text-center" /></h6>
              </div>
              <div class="card-body p-0 py-2 collapse hide" id="collapseTransStyle">
                <div class="row p-0 m-0">
                  <div
                    class="col-12 p-0 m-0 text-left py-1"
                    v-for="(style,i) in transTypeByLang"
                    :key="'affsa'+i"
                  >
                    <vs-checkbox
                      v-model="filterCondition.transType.filterTransType"
                      :vs-value="style"
                    >{{style.carTransTypeName}}</vs-checkbox>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row m-0 p-0">
            <div class="card shadow-none my-2 p-3">
              <div
                class="card-title cursor-pointer"
                data-toggle="collapse"
                href="#collapseDestination"
                role="button"
                aria-expanded="false"
                aria-controls="collapseDestination"
              >
                <h6
                  class="text-left text-x1 font-bold border-bottom d-flex justify-content-between align-items-center"
                ><span>{{$t('ptourall_filter_destination')}}</span>
                <font-awesome-icon icon="chevron-down" class="text-06 text-center" /></h6>
              </div>
              <div class="card-body p-0 py-2 collapse hide" id="collapseDestination">
                <div class="row p-0 m-0">
                  <div
                    class="col-12 p-0 m-0 text-left py-1"
                    v-for="(des,i) in destination"
                    :key="'affsa'+i"
                  >
                    <vs-checkbox
                      v-model="filterCondition.destination.filterDestination"
                      :vs-value="des"
                    >{{des.destinationName}}</vs-checkbox>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-9 m-0 p-0 pl-3 text-left">
          <div class="row w-100 m-0 p-0">
            <div class="col-12 w-100 m-0 my-2 p-0">
              <div class="card shadow-none m-0">
                <div
                  class="card-body m-0 p-2 d-flex flex-row justify-content-between align-items-center"
                >
                  <span>
                    <span class="text-x1 text-info font-bold">{{carList.length}}</span>
                    {{$t('general_label_resultfound')}}
                  </span>
                  <vs-dropdown>
                    <a class="a-icon" href="#">
                      {{$t('pdestinationexplore_filter_sort')}}
                      <vs-icon class icon="expand_more"></vs-icon>
                    </a>

                    <vs-dropdown-menu>
                      <vs-dropdown-item
                        @click="filterCondition.sortBy = 'PRICE'"
                      >{{$t('general_label_sortby_price')}}</vs-dropdown-item>
                      <vs-dropdown-item
                        @click="filterCondition.sortBy = 'NAME'"
                      >{{$t('general_label_sortby_name')}}</vs-dropdown-item>
                      <vs-dropdown-item
                        @click="filterCondition.sortBy = 'POPULAR'"
                      >{{$t('general_label_sortby_popular')}}</vs-dropdown-item>
                      <vs-dropdown-item
                        @click="filterCondition.sortBy = 'VOTE'"
                      >{{$t('general_label_sortby_vote')}}</vs-dropdown-item>
                    </vs-dropdown-menu>
                  </vs-dropdown>
                </div>
              </div>
            </div>
          </div>
          <div class="row w-100 m-0 p-0">
            <div class="col-12 w-100 m-0 p-0">
              <div
                class="card w-100 shadow-none my-3 tour-card"
                v-for="(trip,i) in sortCar"
                :key="'tsja'+i"
              >
                <div class="row h-100 p-0 m-0">
                  <div class="col-4 img-card h-100 p-0 m-0">
                    <img
                      class="image-package cursor-pointer"
                      v-bind:class="{'small-loading-img':trip.cityId.cityImages.length==0}"
                      v-bind:src="trip.cityId.cityImages.length>0?`/${trip.cityId.cityImages[0].filePath}`:'/img/defaultloading.gif'"
                      v-bind:alt="trip.cityId.cityName"
                      @click="redirectToCarDetail(trip)"
                    />
                  </div>
                  <div class="col-8 p-3 m-0">
                    <div class="card-body p-0">
                      <div
                        class="card-title m-0 text-color-50 text-06 d-flex justify-content-between align-items-center cursor-pointer"
                        @click="redirectToCarDetail(trip)"
                      >
                        <span class="badge badge-pill badge-info shadow" v-if="trip.isHot">
                          <font-awesome-icon icon="bolt" class="text-06 text-center" />
                        </span>
                        <h6
                          class="card-title text-x1 text-main-color m-0 cursor-pointer flex-grow"
                        >{{trip.tripName}}</h6>
                        <span class="shadow">
                          <font-awesome-icon icon="heart" class="text-x1 text-center text-muted" />
                        </span>
                      </div>
                      <div class="text-left text-08  m-0 p-0">
                        <span class="mr-1">
                          <font-awesome-icon
                            icon="map-marker-alt"
                            class="text-center mr-2 text-07 text-muted"
                          />
                          {{trip.fromLocation}}
                        </span> /
                        <span class="ml-1">
                          <font-awesome-icon
                            icon="map-marker-alt"
                            class="text-center mr-2 text-07 text-muted"
                          />
                          {{trip.toLocation}}
                        </span>
                      </div>
                      <div class="text-left text-08 m-0 p-0">
                        <span class="mr-1">
                          <font-awesome-icon
                            icon="text-width"
                            class="text-center mr-2 text-07 text-muted"
                          />
                          {{trip.kmTotal}} km
                        </span> /
                        <span class="ml-1">
                          <font-awesome-icon
                            icon="clock"
                            class="text-center mr-2 text-07 text-muted"
                          />
                          {{trip.nightTotal}} night
                        </span>
                      </div>
                      <div class="text-left text-08 m-0 p-0">
                        <span class="mr-1">
                          <font-awesome-icon
                            icon="dharmachakra"
                            class="text-center mr-2 text-07 text-muted"
                          />
                          Driver include
                        </span>
                      </div>
                      <div class="text-muted text-06">
                        <p v-if="typeof trip.time !='undefined'">
                          <font-awesome-icon
                            icon="clock"
                            class="text-center mr-2 text-07 text-muted"
                          />
                          <span>{{trip.time.qty + '.' +trip.time.unit}}</span>
                        </p>
                      </div>
                      <div class="w-100 m-0 p-0 d-flex justify-content-between align-items-end">
                        <span>
                          <font-awesome-icon
                            icon="star"
                            class="text-center mr-1 text-06 text-muted text-info"
                            v-for="(star,i) in trip.star"
                            :key="'sasf'+i"
                          />
                          .{{trip.voteScore}}
                        </span>
                        <span v-if="trip.order>0">
                          <font-awesome-icon
                            icon="fire-alt"
                            class="text-center mr-1 text-06 text-muted text-danger"
                          />
                          .{{trip.order}}
                        </span>
                        <span
                          class="text-x1 price-text m-0 font-bold text-info"
                        >from {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(trip.smallPrice)}} /km</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-2 bg-white">
                <vs-pagination
                  :total="pageCount"
                  v-model="pageNumber"
                  prev-icon="arrow_back"
                  next-icon="arrow_forward"
                ></vs-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid my-0 mt-2 py-4 second-background">
      <div class="container p-0">
        <TopTourPromotionComponent :isTitle="true" :paginationEnabled="false"></TopTourPromotionComponent>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import i18n from "@/lang/i18n";
import { Carousel, Slide } from "vue-carousel";
import lazyLoadComponent from "@/utils/lazy-load-component";
import SkeletonBox from "@/components/SkeletonBox.vue";
import TourService from "@/api/TourService";
import DestinationService from "@/api/DestinationService";
import CarService from "@/api/CarService";

import "@lazy-copilot/datetimepicker/dist/datetimepicker.css";
import { DateTimePicker } from "@lazy-copilot/datetimepicker";
import AirbnbDatetimePickerComponent from "@/components/AirbnbDatetimePickerComponent.vue";

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
    DateTimePicker,
    Carousel,
    Slide,
    AirbnbDatetimePickerComponent,
    TopTourPromotionComponent: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/TopTourPromotionComponent.vue"),
      loading: SkeletonBox
    }),
    ModalDetailImageComponent: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/ModalDetailImageComponent.vue"),
      loading: SkeletonBox
    })
  },
  name: "CarAllComponent",
  props: {
    msg: String
  },
  data() {
    return {
      componentLoaded:{
        carList:false,
        transType:false,
      },
      imgBackground: [
        {
          fileName: "daiminh travel",
          filePath: "img/background/bg_01.jpg"
        },
        {
          fileName: "daiminh travel",
          filePath: "img/background/bg_02.jpg"
        },
        {
          fileName: "daiminh travel",
          filePath: "img/background/bg_03.jpg"
        },
        {
          fileName: "daiminh travel",
          filePath: "img/background/bg_04.jpg"
        },
        {
          fileName: "daiminh travel",
          filePath: "img/background/bg_05.jpg"
        },
        {
          fileName: "daiminh travel",
          filePath: "img/background/bg_06.jpg"
        },
        {
          fileName: "daiminh travel",
          filePath: "img/background/bg_07.jpg"
        }
      ],
      priceformat: v => {
        return new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND"
        }).format(v);
      },
      carList: [],
      carType: [],
      transType: [],
      destination: [],
      filterCondition: {
        price: {
          filterPrice: [200000, 10500000],
          minPrice: 100000,
          maxPrice: 30000000,
          isFilter: false
        },
        carType: {
          filterCarType: [],
          isFilter: false
        },
        transType: {
          filterTransType: [],
          isFilter: false
        },
        destination: {
          filterDestination: [],
          isFilter: false
        },
        promotion: {
          filterPromotion: true,
          isFilter: false
        },
        date: {
          filterDate: { startDate: "", endDate: "" },
          isFilter: false
        },
        sortBy: ""
      },
      pageNumber: 1,
      size: 10
    };
  },
  watch: {},
  created() {
    this.initialAll();
  },
  methods: {
    initialAll() {
      this.initial();
      this.getCarType();
      this.getTransType();
      this.getDestination();
    },
    async initial() {
      this.$store.commit("showHideLoading", true);
      const response = await CarService.getAllCarTrip();
      this.carList = randomArray(response.data);
      this.$store.commit("showHideLoading", false);
      this.componentLoaded.carList = true;
    },
    async getCarType() {
      const response = await CarService.getCarType();
      this.carType = randomArray(response.data);
    },
    async getTransType() {
      const response = await CarService.getTransType();
      this.transType = randomArray(response.data);
      this.componentLoaded.transType = true;
    },
    async getDestination() {
      const response = await DestinationService.getAllDestination();
      this.destination = randomArray(response.data);
    },
    redirectToCarDetail(des) {
      this.$router.push(`/cardetail?tripid=${des._id}`);
    },
    changeFilterAction() {
      this.filterCondition.price.isFilter = true;
    },
    resetFilter() {}
  },
  computed: {
    carListByLang() {
      if (this.componentLoaded.carList === false) {
        return;
      }
      this.carList.forEach(element => {
        element.tripIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.tripName = area.tripName;
            element.fromLocation = area.fromLocation;
            element.toLocation = area.toLocation;
          }
        });
        element.smallPrice=element.priceByCarType[0].price;
        element.priceByCarType.forEach(price => {
          element.smallPrice=  element.smallPrice >=price.price ? price.price:element.smallPrice;
        });
      });
      return this.carList;
    },
    transTypeByLang() {
      if (this.componentLoaded.transType === false) {
        return;
      }
      this.transType.forEach(element => {
        element.carTransTypeIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.carTransTypeName = area.carTransTypeName;
            element.carTransTypeIntro = area.carTransTypeIntro;
          }
        });
      });
      return this.transType;
    },
    filterCarList() {
      if (this.componentLoaded == false) {
        return this.carListByLang;
      }
      return this.carListByLang;
    },
    pageCount() {
      let l = this.carList.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber === 1 ? 0 : this.pageNumber * this.size,
        end = start + this.size;
      return randomArray(this.filterCarList.slice(start, end));
    },
    changeFilterCarType() {
      // getter
      if (this.filterCondition.carType.filterCarType.length === 0) {
        this.filterCondition.carType.isFilter = false;
      } else {
        this.filterCondition.carType.isFilter = true;
      }
      return this.filterCondition.carType.filterCarType;
    },
    changeFilterDestination() {
      // getter
      if (this.filterCondition.destination.filterDestination.length === 0) {
        this.filterCondition.destination.isFilter = false;
      } else {
        this.filterCondition.destination.isFilter = true;
      }
      return this.filterCondition.destination.filterDestination;
    },
    changeFilterPrice() {
      return this.filterCondition.price.filterPrice;
    },
    sortCar() {
      if (
        this.filterCondition.sortBy === "PRICE" &&
        typeof this.paginatedData !== "undefined"
      ) {
        this.paginatedData.sort(function(x, y) {
          return y.price - x.price;
        });
      } else if (
        this.filterCondition.sortBy === "NAME" &&
        typeof this.paginatedData !== "undefined"
      ) {
        this.paginatedData.sort(function(a, b) {
          if (a.tourName < b.tourName) {
            return -1;
          }
          if (a.tourName > b.tourName) {
            return 1;
          }
          return 0;
        });
      } else if (
        this.filterCondition.sortBy === "POPULAR" &&
        typeof this.paginatedData !== "undefined"
      ) {
        this.paginatedData.sort(function(x, y) {
          return y.order - x.order;
        });
      } else if (
        this.filterCondition.sortBy === "VOTE" &&
        typeof this.paginatedData !== "undefined"
      ) {
        this.paginatedData.sort(function(x, y) {
          return y.voteScore - x.voteScore;
        });
      }
      console.log(this.paginatedData);
      return this.paginatedData;
    },
    backgroundImage() {
      return randomArray(this.imgBackground);
    }
  },
  watch: {}
};
</script>

<style scoped lang="scss">
.img-card {
  overflow: hidden;
}
.image-package {
  height: 160px;
  width: auto;
  min-width: 100%;
}
.text-2line {
  height: 2rem;
  line-height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tour-card {
  min-height: 150px;
  overflow: hidden;
}
.con-vs-checkbox {
  justify-content: start !important;
}
.a-icon,
.a-icon:hover,
.a-icon:focus,
.a-icon:active,
.a-icon:visited {
  color: rgba(0, 0, 0, 0.87) !important;
}
.collapse {
  display: none;
}
.collapse.show {
  display: block;
}
</style>
