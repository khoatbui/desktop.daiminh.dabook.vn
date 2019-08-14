<template>
  <div class="tour-all second-background" v-if="componentLoaded">
    <div class="container py-4 my-0">
      <ModalDetailImageComponent :imgs="imgBackground"></ModalDetailImageComponent>
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
                <h6 class="text-left text-x1 font-bold border-bottom">Muc gia (vnd)</h6>
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
              <div class="card-title">
                <h6 class="text-left text-x1 font-bold border-bottom">Travel Style</h6>
              </div>
              <div class="card-body p-0 py-2">
                <div class="row p-0 m-0">
                  <div
                    class="col-12 p-0 m-0 text-left py-1"
                    v-for="(style,i) in travelStyle"
                    :key="'affsa'+i"
                  >
                    <vs-checkbox
                      v-model="filterCondition.travelStyle.filterTravelStyle"
                      :vs-value="style"
                    >{{style.travelStyleName}}</vs-checkbox>
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
                <h6 class="text-left text-x1 font-bold border-bottom">Destination</h6>
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
            <div class="col-12 w-100 m-0 p-0">
              <div class="card shadow-none">
                <div class="card-body m-0 p-0"></div>
              </div>
            </div>
          </div>
          <div class="row w-100 m-0 p-0">
            <div class="col-12 w-100 m-0 p-0">
              <div
                class="card w-100 shadow-none my-3 tour-card"
                v-for="(tour,i) in paginatedData"
                :key="'tsja'+i"
              >
                <div class="row h-100 p-0 m-0">
                  <div class="col-4 img-card h-100 p-0 m-0">
                    <img
                      class="image-package"
                      v-bind:class="{'small-loading-img':tour.tourImages.length==0}"
                      v-bind:src="tour.tourImages.length>0?`/webmp/${tour.tourImages[0].filePath.slice(0, -3)}webp`:'/img/defaultloading.gif'"
                      v-bind:alt="tour.tourName"
                    />
                  </div>
                  <div class="col-8 p-3 m-0">
                    <div class="card-body p-0">
                      <div
                        class="card-title m-0 text-color-50 text-06 d-flex justify-content-between align-items-center cursor-pointer"
                        @click="redirectToTourDetail(tour)"
                      >
                        <span class="badge badge-pill badge-info shadow" v-if="tour.isHot">
                          <font-awesome-icon icon="bolt" class="text-06 text-center" />
                        </span>
                        <h6
                          class="card-title text-x1 text-main-color m-0 cursor-pointer flex-grow"
                        >{{tour.tourName}}</h6>
                        <span class="shadow">
                          <font-awesome-icon icon="heart" class="text-x1 text-center text-muted" />
                        </span>
                      </div>
                      <div class="text-left text-08 text-2line" v-html="tour.tourIntro"></div>
                      <div class="text-muted text-06">
                        <p>
                          <font-awesome-icon
                            icon="map-marker-alt"
                            class="text-center mr-2 text-07 text-muted"
                            v-if="tour.destinationIds.length>0"
                          />
                          <span
                            v-for="(des,i) in tour.destinationIds"
                            :key="'saf'+i"
                          >{{des.destinationName}} .</span>
                        </p>
                        <p v-if="typeof tour.time !='undefined'">
                          <font-awesome-icon
                            icon="clock"
                            class="text-center mr-2 text-07 text-muted"
                          />
                          <span>{{tour.time.qty + '.' +tour.time.unit}}</span>
                        </p>
                      </div>
                      <div class="w-100 m-0 p-0 d-flex justify-content-between align-items-end">
                        <span>
                          <font-awesome-icon
                            icon="star"
                            class="text-center mr-1 text-06 text-muted text-info"
                            v-for="(star,i) in tour.star"
                            :key="'sasf'+i"
                          />
                          .{{tour.voteScore}}
                        </span>
                        <span v-if="tour.order>0">
                          <font-awesome-icon
                            icon="fire-alt"
                            class="text-center mr-1 text-06 text-muted text-danger"
                          />
                          .{{tour.order}}
                        </span>
                        <span
                          class="text-x1 price-text m-0 font-bold text-info"
                        >from {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tour.price)}}</span>
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
import { Carousel, Slide } from "vue-carousel";
import lazyLoadComponent from "@/utils/lazy-load-component";
import SkeletonBox from "@/components/SkeletonBox.vue";
import TourService from "@/api/TourService";
import TravelStyleService from "@/api/TravelStyleService";
import DestinationService from "@/api/DestinationService";

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
  name: "TourAllComponent",
  props: {
    msg: String
  },
  data() {
    return {
      componentLoaded: false,
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
      tourList: [],
      travelStyle: [],
      destination: [],
      filterCondition: {
        price: {
          filterPrice: [200000, 10500000],
          minPrice: 100000,
          maxPrice: 30000000,
          isFilter: false
        },
        travelStyle: {
          filterTravelStyle: [],
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
      this.getTravelStyle();
      this.getDestination();
    },
    async initial() {
      this.$store.commit("showHideLoading", true);
      const response = await TourService.getAllTour();
      this.tourList = randomArray(response.data);
      this.$store.commit("showHideLoading", false);
      this.componentLoaded = true;
    },
    async getTravelStyle() {
      const response = await TravelStyleService.getAllTravelStyle();
      this.travelStyle = randomArray(response.data);
    },
    async getDestination() {
      const response = await DestinationService.getAllDestination();
      this.destination = randomArray(response.data);
    },
    redirectToTourDetail(des) {
      this.$router.push(`/tourdetail?tourid=${des._id}`);
    },
    changeFilterAction() {
      this.filterCondition.price.isFilter = true;
      console.log(this.filterCondition.price.filterPrice);
    },
    resetFilter() {
      console.log("s");
    }
  },
  computed: {
    tourListByLang() {
      return this.tourList;
    },
    filterTourList() {
      if (this.componentLoaded == false) {
        return this.tourListByLang;
      }
      var that = this;
      return this.tourListByLang.filter(function(item) {
        return (
          ((item.price >= that.changeFilterPrice[0] &&
            item.price <= that.changeFilterPrice[1]) ||
            that.filterCondition.price.isFilter == false) &&
          (that.changeFilterTravelStyle.filter(function(styleItem) {
            return styleItem._id == item.travelStyleId._id;
          }).length > 0 ||
            that.filterCondition.travelStyle.isFilter == false) &&
          (that.changeFilterDestination.filter(function(desItem) {
            return desItem._id == item.destinationId._id;
          }).length > 0 ||
            that.filterCondition.destination.isFilter == false)
        );
      });
    },
    pageCount() {
      let l = this.tourList.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber === 1 ? 0 : this.pageNumber * this.size,
        end = start + this.size;
      return randomArray(this.filterTourList.slice(start, end));
    },
    changeFilterTravelStyle() {
      // getter
      if (this.filterCondition.travelStyle.filterTravelStyle.length === 0) {
        this.filterCondition.travelStyle.isFilter = false;
      } else {
        this.filterCondition.travelStyle.isFilter = true;
      }
      return this.filterCondition.travelStyle.filterTravelStyle;
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
</style>
