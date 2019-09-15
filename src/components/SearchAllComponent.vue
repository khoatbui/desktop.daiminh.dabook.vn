<template>
  <div class="tour-all second-background">
    <div class="container py-4 my-0">
      <ModalDetailImageComponent :imgs="imgBackground" :root="''" :minheight="'300px'"></ModalDetailImageComponent>
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
              <div class="card-title">
                <h6
                  class="text-left text-x1 font-bold border-bottom"
                >{{$t('ptourall_filter_producttype')}}</h6>
              </div>
              <div class="card-body p-0 py-2">
                <div class="row p-0 m-0">
                  <div class="col-12 p-0 m-0 text-left py-1">
                    <vs-checkbox v-model="filterCondition.productType.hotel">Hotel</vs-checkbox>
                  </div>
                  <div class="col-12 p-0 m-0 text-left py-1">
                    <vs-checkbox v-model="filterCondition.productType.tour">Tour</vs-checkbox>
                  </div>
                  <div class="col-12 p-0 m-0 text-left py-1">
                    <vs-checkbox v-model="filterCondition.productType.car">Car</vs-checkbox>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row m-0 p-0">
            <div class="card shadow-none my-2 p-3">
              <div class="card-title">
                <h6
                  class="text-left text-x1 font-bold border-bottom"
                >{{$t('ptourall_filter_style')}}</h6>
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
                <h6
                  class="text-left text-x1 font-bold border-bottom"
                >{{$t('ptourall_filter_destination')}}</h6>
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
          <div class="row m-0 p-0">
            <div class="card shadow-none my-2 p-3">
              <div class="card-title">
                <h6
                  class="text-left text-x1 font-bold border-bottom"
                >{{$t('photelall_filter_supplier')}}</h6>
              </div>
              <div class="card-body p-0 py-2">
                <div class="row p-0 m-0">
                  <div
                    class="col-12 p-0 m-0 text-left py-1"
                    v-for="(supp,i) in supplier"
                    :key="'affsa'+i"
                  >
                    <vs-checkbox
                      v-model="filterCondition.supplier.filterSupplier"
                      :vs-value="supp"
                    >{{supp.supplierName}}</vs-checkbox>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row m-0 p-0" v-if="roomType.length >0">
            <div class="card shadow-none my-2 p-3">
              <div class="card-title">
                <h6
                  class="text-left text-x1 font-bold border-bottom"
                >{{$t('photelall_filter_roomType')}}</h6>
              </div>
              <div class="card-body p-0 py-2">
                <div class="row p-0 m-0">
                  <div
                    class="col-12 p-0 m-0 text-left py-1"
                    v-for="(style,i) in roomType"
                    :key="'affsa'+i"
                  >
                    <vs-checkbox
                      v-model="filterCondition.roomType.filterRoomType"
                      :vs-value="style"
                    >{{style.roomTypeName}}</vs-checkbox>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row m-0 p-0">
            <div class="card shadow-none my-2 p-3">
              <div class="card-title">
                <h6
                  class="text-left text-x1 font-bold border-bottom"
                >{{$t('photelall_filter_star')}}</h6>
              </div>
              <div class="card-body p-0 py-2">
                <div class="row p-0 m-0">
                  <div class="col-12 p-0 m-0 text-left py-1" v-for="(star) in 5" :key="star">
                    <vs-checkbox
                      v-model="filterCondition.star.filterStar"
                      :vs-value="star"
                    >{{star}} star</vs-checkbox>
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
                href="#collapseCity"
                role="button"
                aria-expanded="false"
                aria-controls="collapseCity"
              >
                <h6
                  class="text-left text-x1 font-bold border-bottom"
                >{{$t('photelall_filter_city')}}</h6>
              </div>
              <div class="card-body p-0 py-2 collapse hide" id="collapseCity">
                <div class="row p-0 m-0">
                  <div
                    class="col-12 p-0 m-0 text-left py-1"
                    v-for="(des,i) in city"
                    :key="'affsa'+i"
                  >
                    <vs-checkbox
                      v-model="filterCondition.city.filterCity"
                      :vs-value="des"
                    >{{des.cityName}}</vs-checkbox>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-9 m-0 p-0 pl-3 text-left content-section">
          <div class="row w-100 m-0 p-0">
            <div class="col-12 w-100 m-0 my-2 p-0">
              <div class="card shadow-none m-0">
                <div class="card-body m-0 p-2 d-flex flex-row justify-content-between align-items-center">
                  <span>
                    <span
                      class="text-x1 text-info font-bold"
                    >{{Object.values(groupPackageByRoomType).length + tourList.length}}</span> {{$t('general_label_resultfound')}}
                  </span>
                  <vs-dropdown>
                    <a class="a-icon" href="#">
                     {{$t('pdestinationexplore_filter_sort')}}
                      <vs-icon class icon="expand_more"></vs-icon>
                    </a>

                    <vs-dropdown-menu>
                      <vs-dropdown-item @click="filterCondition.sortBy = 'PRICE'">{{$t('general_label_sortby_price')}}</vs-dropdown-item>
                      <vs-dropdown-item @click="filterCondition.sortBy = 'NAME'">{{$t('general_label_sortby_name')}}</vs-dropdown-item>
                      <vs-dropdown-item @click="filterCondition.sortBy = 'POPULAR'" >{{$t('general_label_sortby_popular')}}</vs-dropdown-item>
                      <vs-dropdown-item @click="filterCondition.sortBy = 'VOTE'">{{$t('general_label_sortby_vote')}}</vs-dropdown-item>
                    </vs-dropdown-menu>
                  </vs-dropdown>
                </div>
              </div>
            </div>
          </div>
          <div class="row w-100 m-0 p-0" v-if="filterCondition.productType.tour">
            <div class="col-12 w-100 m-0 p-0">
              <div
                class="card w-100 shadow-none my-3 tour-card"
                v-for="(tour,i) in sortTour"
                :key="'tsja'+i"
              >
                <div class="row h-100 p-0 m-0">
                  <div class="col-4 img-card h-100 p-0 m-0 absolute-parrent">
                    <img
                      class="image-package"
                      v-bind:class="{'small-loading-img':tour.tourImages.length==0}"
                      v-bind:src="tour.tourImages.length>0?`/${tour.tourImages[0].filePath}`:'/img/defaultloading.gif'"
                      v-bind:alt="tour.tourName"
                    />
                    <div class="absolute-center">
                          <span class="productype-icon">
                            <font-awesome-icon icon="umbrella-beach" class="text-center text-x1" />
                          </span>
                    </div>
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
            </div>
          </div>
          <div class="row w-100 m-0 p-0" v-if="filterCondition.productType.hotel">
            <div class="col-12 w-100 m-0 p-0">
              <div
                class="card w-100 shadow-none my-3 hotel-card"
                v-for="(hotel,i) in sortHotel"
                :key="'tsja'+i"
              >
                <div class="row h-100 p-0 m-0">
                  <div class="col-4 img-card h-100 p-0 m-0 absolute-parrent">
                    <img
                      class="image-package"
                      v-bind:class="{'small-loading-img':hotel[0].hotelId.hotelImages.length==0}"
                      v-bind:src="hotel[0].hotelId.hotelImages.length>0?`/smimg/${hotel[0].hotelId.hotelImages[0].filePath.slice(0, -3)}jpg`:'/img/defaultloading.gif'"
                      v-bind:alt="hotel[0].hotelId.hotelName"
                    />
                    <div class="absolute-center">
                          <span class="productype-icon">
                            <font-awesome-icon icon="hotel" class="text-center text-x1" />
                          </span>
                    </div>
                  </div>
                  <div class="col-8 p-3 m-0">
                    <div class="card-body p-0">
                      <div
                        class="card-title m-0 text-color-50 text-06 d-flex justify-content-between align-items-center cursor-pointer"
                        @click="redirectToTourDetail(hotel[0].hotelId)"
                      >
                        <h6
                          class="card-title text-x1 text-main-color m-0 mb-1 cursor-pointer flex-grow"
                        >
                          <span class="text-info text-x1 mr-2" v-if="hotel[0].hotelId.isHot">
                            <font-awesome-icon icon="bolt" class="text-center" />
                          </span>
                          {{hotel[0].hotelId.hotelName}}
                        </h6>
                        <span class="shadow">
                          <font-awesome-icon icon="heart" class="text-x1 text-center text-muted" />
                        </span>
                      </div>
                      <div
                        class="text-left text-08 text-2line"
                        v-html="hotel[0].hotelId.hotelIntro"
                      ></div>
                      <div class="text-muted text-06">
                        <p>
                          <font-awesome-icon
                            icon="medal"
                            class="text-center mr-2 text-07 text-muted"
                          />
                          <span>{{hotel[0].supplierId.supplierName}}</span>
                        </p>
                      </div>
                      <div class="w-100 m-0 p-0 d-flex justify-content-between align-items-end">
                        <span>
                          <span class="text-07 text-muted mr-2 border-right">
                            <font-awesome-icon
                              icon="star"
                              class="text-center mr-1 text-06 text-muted text-info"
                              v-for="(star,i) in hotel[0].hotelId.star"
                              :key="'sasf'+i"
                            />
                            .{{hotel[0].hotelId.view}} review
                          </span>
                          <span class="text-muted text-07 ml-2" v-if="hotel[0].hotelId.booked>0">
                            <font-awesome-icon
                              icon="fire-alt"
                              class="text-center mr-1 text-08 text-warning"
                            />
                            {{hotel[0].hotelId.booked}} booked
                          </span>
                        </span>
                        <span
                          class="text-x1 price-text m-0 font-bold text-info"
                        >from {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(hotel[0].packageId.price)}}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row w-100 m-0 p-0">
            <div class="col-12 w-100 m-0 p-0">
              <div
                class="card w-100 shadow-none my-3 hotel-card"
                v-for="(car,i) in carListByLang"
                :key="'tsja'+i"
              >
                <div class="row h-100 p-0 m-0">
                  <div class="col-4 img-card h-100 p-0 m-0 absolute-parrent">
                    <img
                      class="image-package cursor-pointer"
                       @click="redirectToCarDetail(car)"
                      v-bind:class="{'small-loading-img':car.cityId.cityImages.length==0}"
                      v-bind:src="car.cityId.cityImages.length>0?`/smimg/${car.cityId.cityImages[0].filePath.slice(0, -3)}jpg`:'/img/defaultloading.gif'"
                      v-bind:alt="car.tripName"
                    />
                    <div class="absolute-center">
                          <span class="productype-icon">
                            <font-awesome-icon icon="car" class="text-center text-x1" />
                          </span>
                    </div>
                  </div>
                  <div class="col-8 p-3 m-0">
                    <div class="card-body p-0">
                      <div
                        class="card-title m-0 text-color-50 text-06 d-flex justify-content-between align-items-start cursor-pointer"
                        @click="redirectToCarDetail(car)"
                      >
                        <h6
                          class="card-title text-x1 text-main-color m-0 mb-1 cursor-pointer flex-grow d-flex align-items-start"
                        >
                          <span class="text-info text-x1 mr-2" v-if="car.isPromotion">
                            <font-awesome-icon icon="bolt" class="text-center" />
                          </span>{{car.tripName}}
                        </h6>
                        <span class="shadow">
                          <font-awesome-icon icon="heart" class="text-x1 text-center text-muted" />
                        </span>
                      </div>
                      <div class="text-muted text-06">
                        <p>
                          <font-awesome-icon
                            icon="medal"
                            class="text-center mr-2 text-07 text-muted"
                          />
                          <span class="text-08">{{car.supplierId.supplierName}}</span>
                        </p>
                      </div>
                      <div
                        class="text-left text-08 text-2line"
                        v-html="car.tripIntro"
                        v-if="typeof car.tripIntro!=='undefined'"
                      ></div>
                      <div class="w-100 m-0 p-0 d-flex justify-content-between align-items-end">
                        <span>
                          <span class="text-07 text-muted mr-2">
                            <font-awesome-icon
                            icon="text-width"
                            class="text-center mr-2 text-07 text-muted"
                          />
                            {{car.kmTotal}} km
                            <font-awesome-icon
                            icon="clock"
                            class="text-center mr-2 text-07 text-muted"
                          />
                            {{car.nightTotal}} night
                          </span>
                          <span class="text-muted text-07 ml-2" v-if="car.order>0">
                            <font-awesome-icon
                              icon="fire-alt"
                              class="text-center mr-1 text-08 text-warning"
                            />
                            {{car.order}} booked
                          </span>
                        </span>
                        <span
                          class="text-x1 price-text m-0 font-bold text-info"
                        >from {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(car.smallPrice)}} /km</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row w-100 m-0 p-0">
            <div class="col-12 w-100 m-0 p-0">
              <div class="p-2 bg-white">
                <vs-pagination
                  :total="pageCount + pageCountHotel"
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
import _ from "underscore";
import i18n from "@/lang/i18n";
import { Carousel, Slide } from "vue-carousel";
import lazyLoadComponent from "@/utils/lazy-load-component";
import SkeletonBox from "@/components/SkeletonBox.vue";
import SearchService from "@/api/SearchService";
import TravelStyleService from "@/api/TravelStyleService";
import DestinationService from "@/api/DestinationService";
import CityService from "@/api/CityService";
import HotelSupplierService from "@/api/HotelSupplierService";
import RoomTypeService from "@/api/RoomTypeService";
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

const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

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
  name: "SearchAllComponent",
  props: {
    msg: String
  },
  data() {
    return {
      componentLoaded: {
        tour: false,
        hotel: false
      },
      imgBackground: [
        {
          fileName: "daiminh travel",
          filePath: "img/background/bg_05.jpg"
        },
        {
          fileName: "daiminh travel",
          filePath: "img/background/bg_01.jpg"
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
      cars:[],
      destination: [],
      supplier: [],
      roomType: [],
      packageList: [],
      city: [],
      filterCondition: {
        productType: {
          hotel: true,
          tour: true,
          car:true,
        },
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
        supplier: {
          filterSupplier: [],
          isFilter: false
        },
        roomType: {
          filterRoomType: [],
          isFilter: false
        },
        star: {
          filterStar: [],
          isFilter: false
        },
        city: {
          filterCity: [],
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
      this.initialTour(this.$route.query.key);
      this.initialHotelPackage(this.$route.query.key);
      this.initialCar(this.$route.query.key);
      this.getTravelStyle();
      this.getDestination();
      this.getSupplier();
      this.getCity();
    },
    async initialTour(keyword) {
      this.$store.commit("showHideLoading", true);
      const response = await SearchService.GetTourBySearch(keyword);
      this.tourList = randomArray(response.data);
      this.$store.commit("showHideLoading", false);
      this.componentLoaded.tour = true;
    },
    async getTravelStyle() {
      const response = await TravelStyleService.getAllTravelStyle();
      this.travelStyle = randomArray(response.data);
    },
    async getDestination() {
      const response = await DestinationService.getAllDestination();
      this.destination = randomArray(response.data);
    },
    async initialCar(keyword) {
      const response = await CarService.getCarBySearch(keyword);
      this.cars = randomArray(response.data);
    },
    async initialHotelPackage(keyword) {
      const response = await SearchService.GetHotelPackageBySearch(keyword);
      this.packageList = randomArray(response.data);
      this.componentLoaded.hotel = true;
    },
    async getSupplier() {
      const response = await HotelSupplierService.getAllHotelSupplier();
      this.supplier = randomArray(response.data);
    },
    async getRoomType(id) {
      const response = await RoomTypeService.getRoomTypeBySupplier(id);
      this.roomType = randomArray(response.data);
    },
    async getCity() {
      const response = await CityService.getAllCity();
      this.city = randomArray(response.data);
    },
    redirectToTourDetail(des) {
      this.$router.push(`/tourdetail?tourid=${des._id}`);
    },
    changeFilterAction() {
      this.filterCondition.price.isFilter = true;
    },
    resetFilter() {},
    redirectToCarDetail(des) {
      this.$router.push(`/cardetail?tripid=${des._id}`);
    },
  },
  computed: {
    tourListByLang() {
      if (this.componentLoaded.tour === false) {
        return;
      }
      this.tourList.forEach(element => {
        element.tourIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.tourName = area.tourName;
            element.tourIntro = area.tourIntro;
          }
        });
      });
      return this.tourList;
    },
    carListByLang() {
      if (this.componentLoaded.cars === false) {
        return;
      }
      this.cars.forEach(element => {
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
      return this.cars;
    },
    filterTourList() {
      if (this.componentLoaded.tour == false) {
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
      if (typeof this.filterTourList !== "undefined") {
        const start = this.pageNumber === 1 ? 0 : this.pageNumber * this.size,
          end = start + this.size;
        return randomArray(this.filterTourList.slice(start, end));
      }
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
    },
    packageListByLang() {
      if (this.componentLoaded.hotel === false) {
        return;
      }
      this.packageList.forEach(element => {
        element.hotelId.hotelIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.hotelId.hotelName = area.hotelName;
            element.hotelId.hotelIntro = area.hotelIntro;
          }
        });
        element.roomTypeId.roomTypeIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.roomTypeId.roomTypeName = area.roomTypeName;
            element.roomTypeId.roomTypeIntro = area.roomTypeIntro;
          }
        });
      });
      return this.packageList;
    },
    filterHotelList() {
      if (this.componentLoaded.hotel == false) {
        return this.packageListByLang;
      }
      var that = this;
      return this.packageListByLang.filter(function(item) {
        return (
          ((item.price >= that.changeFilterPrice[0] &&
            item.price <= that.changeFilterPrice[1]) ||
            that.filterCondition.price.isFilter == false) &&
          (that.changeFilterSupplier.filter(function(supItem) {
            return supItem._id == item.supplierId._id;
          }).length > 0 ||
            that.filterCondition.supplier.isFilter == false) &&
          (that.changeFilterCity.filter(function(desItem) {
            return desItem._id == item.cityId._id;
          }).length > 0 ||
            that.filterCondition.city.isFilter == false) &&
          (that.changeFilterStar.filter(function(starItem) {
            return starItem == item.hotelId.star;
          }).length > 0 ||
            that.filterCondition.star.isFilter == false)
        );
      });
    },
    pageCountHotel() {
      let l = Object.values(this.groupPackageByRoomType).length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedDataHotel() {
      if (typeof this.groupPackageByRoomType !== "undefined") {
        const start = this.pageNumber === 1 ? 0 : this.pageNumber * this.size,
          end = start + this.size;
        return randomArray(
          Object.values(this.groupPackageByRoomType).slice(start, end)
        );
      }
    },
    groupPackageByRoomType() {
      return _(this.filterHotelList).groupBy(function(o) {
        return o.roomTypeId.roomTypeCode;
      });
    },
    changeFilterSupplier() {
      // getter
      if (this.filterCondition.supplier.filterSupplier.length === 0) {
        this.filterCondition.supplier.isFilter = false;
      } else {
        this.filterCondition.supplier.isFilter = true;
      }
      return this.filterCondition.supplier.filterSupplier;
    },
    changeFilterRoomType() {
      // getter
      if (this.filterCondition.roomType.filterRoomType.length === 0) {
        this.filterCondition.roomType.isFilter = false;
      } else {
        this.filterCondition.roomType.isFilter = true;
      }
      return this.filterCondition.roomType.filterRoomType;
    },
    changeFilterStar() {
      // getter
      if (this.filterCondition.star.filterStar.length === 0) {
        this.filterCondition.star.isFilter = false;
      } else {
        this.filterCondition.star.isFilter = true;
      }
      return this.filterCondition.star.filterStar;
    },
    changeFilterCity() {
      // getter
      if (this.filterCondition.city.filterCity.length === 0) {
        this.filterCondition.city.isFilter = false;
      } else {
        this.filterCondition.city.isFilter = true;
      }
      return this.filterCondition.city.filterCity;
    },
    sortHotel() {
      if (this.filterCondition.sortBy==="PRICE" && typeof this.paginatedDataHotel !== 'undefined') {
        this.paginatedDataHotel.sort(function(x, y) {
        return y[0].packageId.price - x[0].packageId.price;
      });
      }
      else if (this.filterCondition.sortBy==="NAME" && typeof this.paginatedDataHotel !== 'undefined') {
        this.paginatedDataHotel.sort(function ( a, b ) {
          if ( a[0].hotelId.hotelName < b[0].hotelId.hotelName ){
            return -1;
          }
          if ( a[0].hotelId.hotelName > b[0].hotelId.hotelName ){
            return 1;
          }
          return 0;
        });
      }
      else if (this.filterCondition.sortBy==="POPULAR" && typeof this.paginatedDataHotel !== 'undefined') {
        this.paginatedDataHotel.sort(function(x, y) {
        return y[0].hotelId.view - x[0].hotelId.view;
      });
      }
      else if (this.filterCondition.sortBy==="VOTE" && typeof this.paginatedDataHotel !== 'undefined') {
        this.paginatedDataHotel.sort(function(x, y) {
        return y[0].hotelId.booked- x[0].hotelId.booked;
      });
      }
      return this.paginatedDataHotel;
    },
    sortTour() {
      if (this.filterCondition.sortBy==="PRICE" && typeof this.paginatedData !== 'undefined') {
        this.paginatedData.sort(function(x, y) {
        return y.price- x.price;
      });
      }
      else if (this.filterCondition.sortBy==="NAME" && typeof this.paginatedData !== 'undefined') {
        this.paginatedData.sort(function ( a, b ) {
          if ( a.tourName < b.tourName ){
            return -1;
          }
          if ( a.tourName > b.tourName ){
            return 1;
          }
          return 0;
        });
      }
      else if (this.filterCondition.sortBy==="POPULAR" && typeof this.paginatedData !== 'undefined') {
        this.paginatedData.sort(function(x, y) {
        return y.order- x.order;
      });
      }
      else if (this.filterCondition.sortBy==="VOTE" && typeof this.paginatedData !== 'undefined') {
        this.paginatedData.sort(function(x, y) {
        return y.voteScore- x.voteScore;
      });
      }
      return this.paginatedData;
    },
  },
  watch: {}
};
</script>

<style scoped lang="scss">
.img-card {
  overflow: hidden;
  min-height: 150px;
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
.content-section {
  min-height: 70vh;
}
.a-icon,.a-icon:hover,.a-icon:focus,.a-icon:active,.a-icon:visited{
  color:rgba(0,0,0,0.87) !important;
}
.productype-icon{
  width: 150px;
  height: 150px;
  background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
  color: #FFF;
  padding: 10px;
  border-radius: 50%;
  z-index: 3;
}
</style>
