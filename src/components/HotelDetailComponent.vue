<template>
  <div class="tour-detail" v-if="componentLoaded">
    <div class="container py-4 my-0">
      <ModalDetailImageComponent
        :imgs="hotelDetailByLang.hotelImages"
        :root="'lgimg/'"
        :minheight="'300px'"
      ></ModalDetailImageComponent>
    </div>
    <div class="container-fluid my-0 mt-2 py-4 second-background">
      <div class="container p-0">
        <RoomTypeByHotelComponent
          :isTitle="false"
          :paginationEnabled="false"
          :hotelid="$route.query.hotelid"
        ></RoomTypeByHotelComponent>
      </div>
    </div>
    <div class="container py-4 my-0 custom-sticky-component">
      <div class="row m-0 p-0">
        <div class="col-12 w-100 my-0 p-0 custom-sticky-top sticky-z-index-100 border-bottom">
          <ul
            class="w-100 d-flex flex-row justify-content-start align-items-center bg-white m-0 p-2 sticky-tab"
          >
            <li class="px-4">
              <a
                href="#thongtin"
                @click="sectionActive='thongtin'"
                v-bind:class="{'section-active':sectionActive=='thongtin'}"
              >{{$t('general_sticky_tab_info')}}</a>
            </li>
            <li class="px-4">
              <a
                href="#danhgia"
                @click="sectionActive='danhgia'"
                v-bind:class="{'section-active':sectionActive=='danhgia'}"
              >{{$t('general_sticky_tab_vote')}}</a>
            </li>
            <li class="px-4">
              <a
                href="#chon"
                @click="sectionActive='chon'"
                v-bind:class="{'section-active':sectionActive=='chon'}"
              >{{$t('general_sticky_tab_roomselect')}}</a>
            </li>
            <li class="px-4">
              <a
                href="#map"
                @click="sectionActive='map'"
                v-bind:class="{'section-active':sectionActive=='map'}"
              >{{$t('general_sticky_tab_map')}}</a>
            </li>
          </ul>
        </div>
        <div class="col-8 m-0 p-0 pr-3 text-left">
          <div class="section-tour py-2" id="thongtin">
            <div class="row m-0 p-0 py-2 d-flex justify-content-between align-items-center">
              <h3 class="text-xh1">{{hotelDetailByLang.hotelName}}</h3>
              <font-awesome-icon icon="heart" class="text-center text-1" />
            </div>
            <div
              class="row p-0 m-0 py-2 text-08 d-flex justify-content-between falign-items-center border-bottom border-info"
            >
              <p>
                <span>
                  <img
                    class="img-supplier"
                    v-bind:class="{'small-loading-img':hotelDetailByLang.supplierId.supplierImages.length==0}"
                    v-bind:src="hotelDetailByLang.supplierId.supplierImages.length>0?`/smimg/${hotelDetailByLang.supplierId.supplierImages[0].filePath.slice(0, -3)}jpg`:'/img/defaultloading.gif'"
                    alt
                  />
                  {{hotelDetailByLang.supplierId.supplierName}}
                </span>
                <span>{{hotelDetailByLang.supplierId.supplierName}}</span> |
                <span class="ml-2">
                  <font-awesome-icon icon="map-marker-alt" class="mr-2 text-07" />
                  {{hotelDetailByLang.cityId.cityName}}
                </span>
              </p>
            </div>
            <div class="row m-0 p-0 py-4 text-08 text-left d-block" v-html="hotelDetailByLang.hotelIntro"></div>
          </div>
          <div class="section-tour py-2" id="danhgia">
            <div class="row m-0 p-0 py-2 d-flex justify-content-between align-items-center">
              <h3 class="text-xh1 info-title">{{$t('general_sticky_tab_vote')}}</h3>
            </div>
            <div class="row w-100 p-0 m-0 py-2 text-08">
              <ReviewComponent class="w-100"></ReviewComponent>
              <!-- <p>{{$t('general_sticky_tab_vote_empty')}}</p> -->
            </div>
          </div>
          <div class="section-tour py-2 second-background" id="chon">
            <div class="row m-0 p-0 py-2 d-flex justify-content-between align-items-center">
              <h3 class="text-xh1 info-title">{{$t('general_sticky_tab_roomselect')}}</h3>
            </div>
            <div class="row m-0 p-0 py-2">
              <div class="col-4 py-1">
                <date-time-picker
                  :singleDate="false"
                  ref="rcheckinouttime"
                  @onChange="onChangeDate"
                />
              </div>
            </div>
            <div class="row m-0 p-2 accordion" id="accordionExample">
              <div class="col-12 m-0 p-0" v-for="(pac,i) in groupPackageByRoomType" :key="'hods'+i">
                <div
                  class="card my-2 shadow-none"
                  :class="{'border-outline-info':pac[0].roomTypeId.roomTypeCode==formCheck.roomTypeCode}"
                >
                  <div class="card-body">
                    <div class="row">
                      <div
                        class="col-12 p-0 py-2 d-flex justify-content-between align-items-center"
                        :id="`headingOne${i}`"
                      >
                        <span
                          class="text-x1 font-bold text-nomal"
                        >{{pac[0].roomTypeId.roomTypeName}}</span>
                        <span>
                          <span
                            class="text-07 pr-3 font-weight-bold text-muted text-deco-line-through"
                          >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format((formCheck.usingDefaultData!==true && pac[0].roomTypeId.roomTypeCode==formCheck.roomTypeCode) ?totalPrice*1.3:pac[0].price*1.3)}}</span>
                          <span class="text-08 font-bold text-muted pr-1">tu</span>
                          <span
                            class="text-x1 font-bold"
                          >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format((formCheck.usingDefaultData!==true && pac[0].roomTypeId.roomTypeCode==formCheck.roomTypeCode) ?totalPrice:pac[0].price)}}</span>
                        </span>
                      </div>
                      <div
                        :id="`collapseOne${i}`"
                        class="m-0 p-0 w-100 collapse"
                        :aria-labelledby="`headingOne${i}`"
                        data-parent="#accordionExample"
                      >
                        <div
                          class="col-12 m-0 p-0 py-3 border-bottom border-bottom-dash"
                          v-if="pac[0].roomTypeId.roomTypeCode==formCheck.roomTypeCode"
                        >
                          <div class="row m-0 p-0">
                            <div class="col-6 m-0 p-0 pr-4">
                              <div class="row m-0 p-0">
                                <div
                                  class="col-6 m-0 p-0 d-flex flex-column justify-content-between align-items-start"
                                >
                                  <p class="mb-0">
                                    <span class="text-08 font-bold">{{$t('general_label_guest')}}</span>
                                    <span class="text-07 text-muted">( Age 13-99)</span>
                                  </p>
                                  <p
                                    class="text-07 text-danger mb-0"
                                    v-show="order.guest.guest.qty==0"
                                  >{{$t('general_label_less1')}}</p>
                                </div>
                                <div
                                  class="col-6 m-0 p-0 d-flex justify-content-between align-items-center"
                                >
                                  <PersonPlusMinusComponent :person="order.guest.guest"></PersonPlusMinusComponent>
                                </div>
                              </div>
                            </div>
                            <div class="col-6 m-0 p-0 pl-4">
                              <div class="row m-0 p-0 pb-2 border-bottom">
                                <div
                                  class="col-6 m-0 p-0 d-flex flex-column justify-content-between align-items-start"
                                >
                                  <p class="mb-0">
                                    <span class="text-08 font-bold">{{$t('general_label_child04')}}</span>
                                    <span class="text-07 text-muted">( Age 0-4)</span>
                                  </p>
                                </div>
                                <div
                                  class="col-6 m-0 p-0 d-flex justify-content-between align-items-center"
                                >
                                  <PersonPlusMinusComponent :person="order.guest.child04"></PersonPlusMinusComponent>
                                </div>
                              </div>
                              <div class="row m-0 p-0 pt-2">
                                <div
                                  class="col-6 m-0 p-0 d-flex flex-column justify-content-between align-items-start"
                                >
                                  <p class="mb-0">
                                    <span class="text-08 font-bold">{{$t('general_label_child48')}}</span>
                                    <span class="text-07 text-muted">( Age 4-8)</span>
                                  </p>
                                </div>
                                <div
                                  class="col-6 m-0 p-0 d-flex justify-content-between align-items-center"
                                >
                                  <PersonPlusMinusComponent :person="order.guest.child48"></PersonPlusMinusComponent>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-12 p-0 py-3 border-bottom"
                          v-if="pac[0].roomTypeId.roomTypeCode==formCheck.roomTypeCode"
                        >
                          <div
                            class="row w-100 m-0 p-0 d-flex justify-content-between align-items-center"
                          >
                            <div class="col-12 m-0 p-0">
                              <carousel
                                :per-page="5"
                                :navigation-enabled="true"
                                :paginationEnabled="false"
                              >
                                <slide class="m-2" v-for="(packa,ides) in pac" v-bind:key="ides">
                                  <div class="card shadow-none pac-card">
                                    <div
                                      class="card-body p-0 d-flex justify-content-between flex-column"
                                    >
                                      <img
                                        class="card-img-top pac-package cursor-pointer"
                                        v-bind:src="packa.roomTypeId.roomImages.length>0?`/smimg/${packa.roomTypeId.roomImages[0].filePath.slice(0, -3)}jpg`:'/img/defaultloading.gif'"
                                        v-bind:alt="packa.roomTypeId.roomImages[0].fileName"
                                      />
                                      <vs-radio
                                        class="text-06 text-left"
                                        v-model="order.package"
                                        vs-value="info"
                                      >{{packa.packageId.packageName}}</vs-radio>
                                    </div>
                                  </div>
                                </slide>
                                <slide></slide>
                              </carousel>
                            </div>
                            <div class="col-4 p-0 m-0">
                              <DropdownListComponent
                                v-bind:label="'Select package'"
                                v-bind:data="getPackage(pac)"
                                @select="changePackage($event)"
                              ></DropdownListComponent>
                            </div>
                            <div class="col-4 p-0 m-0 offset-sm-2 offset-md-2">
                              <DropdownListComponent
                                v-bind:label="'Select option service'"
                                v-bind:data="getOptionService(pac)"
                                @select="order.optionService=$event"
                              ></DropdownListComponent>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 m-0 p-0">
                        <div class="row m-0 p-0 d-flex justify-content-between align-items-center">
                          <span
                            class="text-muted text-08 cursor-pointer"
                            data-toggle="collapse"
                            :href="`#collapseExample${i}`"
                            role="button"
                            aria-expanded="false"
                            :aria-controls="`#collapseExample${i}`"
                          >
                            {{$t('general_showmore')}}
                            <font-awesome-icon icon="chevron-down" class="text-center text-07" />
                          </span>
                          <button
                            class="btn custom-btn-md text-nomal shadow-none custom-btn-outline-x2 border-radius-5"
                            type="button"
                            @click="selectRoomTypeDetail(pac[0])"
                            v-if="pac[0].roomTypeId.roomTypeCode!==formCheck.roomTypeCode"
                            data-toggle="collapse"
                            :data-target="`#collapseOne${i}`"
                            aria-expanded="true"
                            :aria-controls="`collapseOne${i}`"
                          >{{$t('general_select')}}</button>
                        </div>
                        <div
                          class="collapse"
                          :id="`collapseExample${i}`"
                          v-html="pac[0].roomTypeId.roomTypeIntro"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section-tour py-2" id="map">
            <div class="row m-0 p-0 py-2">
              <h3 class="text-xh1 info-title">{{$t('general_sticky_tab_map')}}</h3>
            </div>
            <div class="row p-0 m-0 py-2 text-08">
              <div class="map border-radius-10 w-100">
                <MapComponent v-bind:map="hotelDetail.map"></MapComponent>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 m-0 p-0 pl-3 custom-sticky-component">
          <div class="row m-0 p-0 custom-sticky-top-2rem">
            <div class="card">
              <div class="card-body p-3">
                <div class="row m-0 p-0" v-if="formCheck.packageSelect==true">
                  <div class="col-12 m-0 p-0 height-150">
                    <ModalDetailImageComponent
                      :imgs="order.roomType.roomImages"
                      :root="'lgimg/'"
                      :minheight="'300px'"
                    ></ModalDetailImageComponent>
                  </div>
                </div>
                <div class="row m-0 p-0" v-if="order.checkInDate ==null">
                  <p>
                    <span class="text-09 font-weight-bold text-muted pr-2">tu</span>
                    <span
                      class="text-xh1 font-bold"
                    >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(formCheck.usingDefaultData==true ?pac[0].price*1.3: totalPrice*1.3)}}</span>
                    <span
                      class="text-09 pl-4 font-weight-bold text-muted text-deco-line-through"
                    >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(formCheck.usingDefaultData==true ?pac[0].price*1.3: totalPrice*1.3)}}</span>
                  </p>
                </div>
                <div
                  class="row m-0 p-0 pb-4 border-bottom border-bottom-dash"
                  v-if="order.checkInDate !==null"
                >
                  <p
                    class="text-x1 w-100 font-bold d-flex justify-content-between align-items-center"
                  >
                    <span>{{hotelDetailByLang.hotelName}}</span>
                    <font-awesome-icon
                      icon="pencil-alt"
                      class="text-center text-info text-08 mr-2"
                    />
                  </p>
                  <p class="text-09 text-muted mb-0">
                    <span class="pr-4">in {{order.checkInDate}}</span> |
                    <span class="pl-4">out {{order.checkOutDate}}</span>
                  </p>
                  <p class="text-09 text-muted mb-0">
                    <span class="pr-4">{{$t('general_label_guest')}} x {{order.guest.guest.qty}}</span>
                    <span class="pr-4">
                      {{$t('general_label_child')}}
                      <span class="text-07">(0-4)</span>
                      x {{order.guest.child04.qty}}
                    </span>
                    <span>
                      {{$t('general_label_child')}}
                      <span class="text-07">(4-8)</span>
                      x {{order.guest.child48.qty}}
                    </span>
                  </p>
                </div>
                <div
                  class="row m-0 p-0 py-4 justify-content-between align-items-center"
                  v-if="order.checkInDate !==null"
                >
                  <span class="text-09 text-muted mb-0">{{$t('general_label_total')}}</span>
                  <span
                    class="text-xh1 text-info font-bold"
                  >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice)}}</span>
                </div>
                <div class="row m-0 p-0">
                  <a
                    class="btn btn-info text-nomal w-100"
                    :disabled="order.guest.guest.qty==0"
                    v-bind:class="{'btn-default':order.guest.guest.qty==0}"
                    href="#chon"
                    @click="selectHotelPackage"
                  >{{formCheck.usingDefaultData ==false? $t('general_btn_booknow'):$t('general_btn_selectpackage')}}</a>
                </div>
                <div class="row m-0 p-0 text-muted">
                  <p class="my-1 text-08">
                    <font-awesome-icon icon="bolt" class="text-center text-info text-08 mr-2" />
                    {{$t('photelpackagedetail_text_confirm')}}
                  </p>
                  <p class="my-1 text-08">
                    <font-awesome-icon icon="paper-plane" class="text-center text-08 mr-2" />
                    {{$t('photelpackagedetail_text_receiveorder')}}
                  </p>
                  <p class="my-1 text-08">
                    <font-awesome-icon icon="medal" class="text-center text-08 mr-2" />
                    {{$t('photelpackagedetail_text_bestservice')}}
                  </p>
                </div>
              </div>
              <div class="card-footer p-3 py-2 border-top">
                <div
                  class="row w-100 m-0 p-0 d-flex text-08 text-muted justify-content-between align-items-center"
                >
                  <span>
                    <font-awesome-icon icon="fire-alt" class="text-center text-08 mr-2" />
                    {{hotelDetailByLang.booked}} {{$t('general_peoplehavebook')}}general_views
                  </span>
                  <span class="star font-weight-bold text-info">
                    ({{hotelDetailByLang.view}} {{$t('general_views')}})
                    <font-awesome-icon
                      icon="star"
                      class="text-center text-06"
                      v-for="star in hotelDetailByLang.star"
                      v-bind:key="'start'+star"
                    />
                  </span>
                </div>
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
import { Carousel, Slide } from "vue-carousel";
import lazyLoadComponent from "@/utils/lazy-load-component";
import SkeletonBox from "@/components/SkeletonBox.vue";
import TourService from "@/api/TourService";
import HotelService from "@/api/HotelService";
import DropdownListComponent from "@/components/DropdownListComponent.vue";

import "@lazy-copilot/datetimepicker/dist/datetimepicker.css";
import { DateTimePicker } from "@lazy-copilot/datetimepicker";
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
    DropdownListComponent,
    ModalDetailImageComponent: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/ModalDetailImageComponent.vue"),
      loading: SkeletonBox
    }),
    BackgroundHeaderComponent: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/BackgroundHeaderComponent.vue"),
      loading: SkeletonBox
    }),
    ReviewComponent:lazyLoadComponent({
      componentFactory: () =>
        import("@/components/ReviewComponent.vue"),
      loading: SkeletonBox
    }),
    TopTourPromotionComponent: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/TopTourPromotionComponent.vue"),
      loading: SkeletonBox
    }),
    MapComponent: lazyLoadComponent({
      componentFactory: () => import("@/components/MapComponent.vue"),
      loading: SkeletonBox
    }),
    RoomTypeByHotelComponent: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/RoomTypeByHotelComponent.vue"),
      loading: SkeletonBox
    }),
    PersonPlusMinusComponent: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/PersonPlusMinusComponent.vue"),
      loading: SkeletonBox
    })
  },
  name: "HotelDetailComponent",
  props: {
    msg: String
  },
  data() {
    return {
      packages: [],
      hotelDetail: {},
      componentLoaded: false,
      sectionActive: "thongtin",
      startDate: moment(),
      indexSelect: "",
      formCheck: {
        timeSelect: false,
        packageSelect: false,
        optionService: false,
        usingDefaultData: true,
        roomTypeCode: ""
      },
      order: {
        guest: {
          guest: { qty: 0 },
          child04: { qty: 0 },
          child48: { qty: 0 }
        },
        checkInDate: moment().format("YYYY/DD/MM"),
        checkOutDate: moment().format("YYYY/DD/MM"),
        totalPrice: 0,
        hotel: {},
        roomType: {},
        package: {},
        optionService: {}
      },
    };
  },
  created() {
    this.initial(this.$route.query.hotelid);
    this.getPackageByHotel(this.$route.query.hotelid);
  },
  methods: {
    initialWithParam() {
      this.initial(this.$route.query.hotelid);
    },
    async initial(hotelid) {
      this.$store.commit("showHideLoading", true);
      const responsehotel = await HotelService.getHotelById(hotelid);
      this.hotelDetail = responsehotel.data;
      this.order.hotel = responsehotel.data;
      this.$store.commit("showHideLoading", false);
      this.componentLoaded = true;
    },
    async getPackageByHotel(hotelid) {
      const responsehotel = await HotelService.getPackageByHotel(hotelid);
      this.packages = responsehotel.data;
      this.componentLoaded = true;
    },
    plusPerson(person) {
      person.qty++;
    },
    minusPerson(person) {
      person.qty--;
    },
    onChangeDate(data) {
      this.order.checkInDate = moment(data.startDate).format("YYYY-MM-DD");
      this.order.checkOutDate = moment(data.endDate).format("YYYY-MM-DD");
      this.formCheck.timeSelect = true;
    },
    selectHotelPackage() {
      if (this.formCheck.usingDefaultData == true) {
        location.href = "#chon";
        $(".calendarTrigger").addClass("border-outline-danger-x2");
      } else {
        this.$store.dispatch("updateHotelOrder", this.order);
        // this.$store.dispatch("updateHotelPackageDetail", this.order.hotel);
        this.$router.push(
          `/hoteldetail/confirm?hotelid=${this.hotelDetail._id}&&packageid=${this.order.package.packageId._id}`
        );
      }
    },
    getPackage(pac) {
      const result = [];
      pac.forEach(element => {
        result.push({
          value: element.packageId._id,
          text: element.packageId.packageName,
          raw: element
        });
      });
      return result;
    },
    getOptionService(pac) {
      const result = [];
      pac[0].optionServices.forEach(element => {
        result.push({
          value: element._id,
          text: element.optionServiceName,
          raw: element
        });
      });
      return result;
    },
    changePackage(item) {
      this.order.package = item.raw;
      this.formCheck.packageSelect = true;
      this.formCheck.usingDefaultData = false;
    },
    selectRoomTypeDetail(item) {
      if (this.formCheck.timeSelect === false) {
        $(".calendarTrigger").addClass("border-outline-danger-x2");
      }
      this.order.roomType = item.roomTypeId;
      this.formCheck.roomTypeCode = item.roomTypeId.roomTypeCode;
    },
    getPriceInRange(checkin, checkout, priceRange) {
      var checkIn = moment(checkin);
      var checkOut = moment(checkout);
      let price = 0;
      let startDate;
      let endDate;
      const priceArr = [];
      priceRange.forEach(element => {
        startDate = moment(element.startDate);
        endDate = moment(element.endDate);
        if (checkIn.isAfter(startDate) && checkIn.isBefore(endDate)) {
          if (checkOut.isAfter(endDate)) {
            priceArr.push({
              price: element,
              diffDay: endDate.diff(checkIn, "days"),
              start: checkIn,
              end: endDate
            });
          } else {
            priceArr.push({
              price: element,
              diffDay: checkOut.diff(checkIn, "days"),
              start: checkIn,
              end: checkOut
            });
          }
        }
        if (checkIn.isBefore(startDate) && checkOut.isAfter(startDate)) {
          if (checkOut.isAfter(endDate)) {
            priceArr.push({
              price: element,
              diffDay: endDate.diff(startDate, "days"),
              start: startDate,
              end: endDate
            });
          }
          if (checkOut.isBefore(endDate) && checkOut.isAfter(startDate)) {
            priceArr.push({
              price: element,
              diffDay: checkOut.diff(startDate, "days"),
              start: startDate,
              end: checkOut
            });
          }
        }
      });
      priceArr.forEach(element => {
        price =
          price +
          ((parseFloat(element.diffDay) * parseFloat(element.price.price) +
            parseFloat(element.diffDay) *
              parseFloat(element.price.markUpPlus)) *
            (parseFloat(element.price.markUpPercent) + 100)) /
            100;
      });
      return price;
    }
  },
  watch: {
    // call again the method if the route changes
    $route: "initialWithParam"
  },
  computed: {
    hotelDetailByLang() {
      if (!this.componentLoaded) return null;
      else {
        var result = this.hotelDetail.hotelIntros.filter(item => {
          if (
            item.lang.toUpperCase() ==
            this.$store.state.currentLang.toUpperCase()
          ) {
            this.hotelDetail.hotelName = item.hotelName;
            this.hotelDetail.hotelIntro = item.hotelIntro;
          }
        });
        return this.hotelDetail;
      }
    },
    totalPrice() {
      let timeTotal = 1;
      let total = 0;
      if (this.formCheck.packageSelect == true) {
        total += this.getPriceInRange(
          this.order.checkInDate,
          this.order.checkOutDate,
          this.order.package.priceRanges
        );
      }
      if (this.formCheck.optionService == true) {
        total += this.order.hotel.optionServices;
      }
      this.order.totalPrice = total;
      return total;
    },
    groupPackageByRoomType() {
      return _(this.packages).groupBy(function(o) {
        return o.roomTypeId.roomTypeCode;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.image-city {
  height: 350px;
}
.card-body-bottom-left {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #ffffff;
}
.dateTimePickerWrapper .calendarTrigger {
  min-width: 200px !important;
  height: 40px !important;
}
.img-supplier {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
}
.collapse {
  display: none;
}
.collapse.show {
  display: block;
}
.pac-card {
  height: 120px;
}
.pac-package {
  top: 0;
  left: 0;
  height: 70px;
  width: 100%;
}
.position-relative::after,
.position-relative::before {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  content: "";
  background-image: linear-gradient(0deg, #111 0%, #111 100%);
  z-index: 2;
  opacity: 0.15;
}
.con-vs-radio {
  justify-content: start;
  color: #333;
}
.VueCarousel-inner {
  flex-basis: 10px !important;
  visibility: visible !important;
}
</style>
