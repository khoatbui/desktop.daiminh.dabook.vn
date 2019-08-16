<template>
  <div class="tour-detail" v-if="componentLoaded">
    <div class="container py-4 my-0">
      <ModalDetailImageComponent :imgs="roomDetailByLang.roomImages"></ModalDetailImageComponent>
    </div>
    <div class="container-fluid my-0 mt-2 py-4 second-background">
      <div class="container p-0">
        <PackageByRoomTypeComponent :isTitle="false" :paginationEnabled="false" :hotelid="$route.query.hotelid" :roomtypeid="$route.query.roomtypeid"></PackageByRoomTypeComponent>
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
              <h3 class="text-xh1 font-weight-bold">{{roomDetailByLang.hotelId.hotelName}} | {{roomDetailByLang.roomTypeName}}</h3>
              <font-awesome-icon icon="heart" class="text-center text-1" />
            </div>
            <div
              class="row p-0 m-0 py-2 text-08 d-flex justify-content-between falign-items-center border-bottom border-info"
            >
              <p>
                <span>
                  <img
                    class="img-supplier"
                    v-bind:class="{'small-loading-img':roomDetailByLang.supplierId.supplierImages.length==0}"
                    v-bind:src="roomDetailByLang.supplierId.supplierImages.length>0?`/webmp/${roomDetailByLang.supplierId.supplierImages[0].filePath.slice(0, -3)}webp`:'/img/defaultloading.gif'"
                    :alt="roomDetailByLang.supplierId.supplierName"
                  />
                </span>
                <span>{{roomDetailByLang.supplierId.supplierName}}</span>
              </p>
            </div>
            <div class="row m-0 p-0 py-4 text-08" v-html="roomDetailByLang.roomTypeIntro"></div>
          </div>
          <div class="section-tour py-2" id="danhgia">
            <div class="row m-0 p-0 py-2 d-flex justify-content-between align-items-center">
              <h3 class="text-xh1 info-title font-weight-bold">Danh gia</h3>
            </div>
            <div class="row p-0 m-0 py-2 text-08 d-flex justify-content-between align-items-center">
              <p>{{$t('general_sticky_tab_vote_empty')}}</p>
            </div>
          </div>
          <div class="section-tour py-2 second-background" id="chon">
            <div class="row m-0 p-0 py-2 d-flex justify-content-between align-items-center">
              <h3 class="text-xh1 info-title font-weight-bold">Chon</h3>
            </div>
            <div
              class="row p-0 m-0 py-2 text-08 d-flex justify-content-between align-items-center accordion"
              id="accordionExample"
            >
              <div class="col-4 py-1">
                <date-time-picker :singleDate="false" ref='rcheckinouttime' @onChange="onChangeDate" />
              </div>
              <div class="col-12 px-3 py-1" v-for="(pac,i) in packageByLang" :key="'hods'+i">
                <div class="card p-0 m-0 shadow-none" :id="`headingOne${i}`" :class="{'border-outline-info':pac.roomTypeId.roomTypeCode==formCheck.roomTypeCode}">
                  <div class="row p-0 m-0 bg-white border-radius-5 overflow-nomal">
                    <div
                      class="col-12 py-2 d-flex justify-content-between align-items-center"
                    >
                      <span class="text-x1 font-bold text-nomal">{{pac.packageId.packageName}}</span>
                      <span>
                        <span
                          class="text-07 pr-3 font-weight-bold text-muted text-deco-line-through"
                        >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format((formCheck.usingDefaultData!==true && pac.roomTypeId.roomTypeCode==formCheck.roomTypeCode) ?totalPrice*1.3:pac.price*1.3)}}</span>
                        <span class="text-08 font-bold text-muted pr-1">tu</span>
                        <span
                          class="text-x1 font-bold"
                        >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format((formCheck.usingDefaultData!==true && pac.roomTypeId.roomTypeCode==formCheck.roomTypeCode) ?totalPrice:pac.price)}}</span>
                      </span>
                    </div>
                    
                    <div
                      class="collapse"
                      :id="`collapseOne${i}`"
                      :aria-labelledby="`headingOne${i}`"
                      data-parent="#accordionExample"
                    >
                      <div
                        class="col-12 py-3 d-flex justify-content-between align-items-center border-bottom border-bottom-dash"
                      >
                        <div class="row w-100 p-0 m-0">
                          <div class="col-6 p-0 m-0">
                            <div class="row m-0 p-0">
                              <div
                                class="col-6 m-0 p-0 d-flex flex-column justify-content-between align-items-start"
                              >
                                <p class="mb-0">
                                  <span class="text-08 font-bold">{{$t('general_label_guest')}}</span>
                                  <span class="text-07 text-muted">( Age 13-99)</span>
                                </p>
                                <!-- <p
                                class="text-09 text-muted mb-0"
                              >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(roomDetailByLang.tourId.price)}} / khach</p>
                              <p
                                class="text-07 text-muted text-deco-line-through mb-0"
                                >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(roomDetailByLang.tourId.price*1.3)}}</p>-->
                                <p
                                  class="text-07 text-danger mb-0"
                                  v-show="order.guest.guest.qty==0"
                                >{{$t('general_label_less1')}}</p>
                              </div>
                              <div
                                class="col-6 m-0 p-0 d-flex justify-content-between align-items-center"
                              >
                                <div class="row">
                                  <div class="col-4 text-right p-0">
                                    <button
                                      class="btn-plus"
                                      :disabled="order.guest.guest.qty==0"
                                      @click="minusPerson(order.guest.guest)"
                                    >
                                      <font-awesome-icon icon="minus" class="text-center text-1" />
                                    </button>
                                  </div>
                                  <div class="col-4">
                                    <input
                                      class="custom-form-input text-center text-muted"
                                      v-model="order.guest.guest.qty"
                                    />
                                  </div>
                                  <div class="col-4 text-left p-0">
                                    <button class="btn-plus" @click="plusPerson(order.guest.guest)">
                                      <font-awesome-icon icon="plus" class="text-center text-1" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-6 p-0 m-0">
                            <div class="row m-0 p-0 pb-2 border-bottom">
                              <div
                                class="col-6 m-0 p-0 flex-column d-flex justify-content-between align-items-start"
                              >
                                <p class="mb-0">
                                  <span class="text-08 font-bold">{{$t('general_label_child04')}}</span>
                                  <span class="text-07 text-muted">( Age 00 - 04)</span>
                                </p>
                                <!-- <p
                                class="text-09 text-muted mb-0"
                                >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(roomDetailByLang.tourId.priceChild04)}}/ trẻ em</p>-->
                              </div>
                              <div
                                class="col-6 m-0 p-0 d-flex justify-content-between align-items-center"
                              >
                                <div class="row">
                                  <div class="col-4 text-right p-0">
                                    <button
                                      class="btn-plus"
                                      :disabled="order.guest.child04.qty==0"
                                      @click="minusPerson(order.guest.child04)"
                                    >
                                      <font-awesome-icon icon="minus" class="text-center text-1" />
                                    </button>
                                  </div>
                                  <div class="col-4">
                                    <input
                                      class="custom-form-input text-center text-muted"
                                      v-model="order.guest.child04.qty"
                                    />
                                  </div>
                                  <div class="col-4 text-left p-0">
                                    <button
                                      class="btn-plus"
                                      @click="plusPerson(order.guest.child04)"
                                    >
                                      <font-awesome-icon icon="plus" class="text-center text-1" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row m-0 p-0 pt-2">
                              <div
                                class="col-6 m-0 p-0 flex-column d-flex justify-content-between align-items-start"
                              >
                                <p class="mb-0">
                                  <span class="text-08 font-bold">{{$t('general_label_child48')}}</span>
                                  <span class="text-07 text-muted">( Age 04 - 08)</span>
                                </p>
                                <!-- <p
                                class="text-09 text-muted mb-0"
                                >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(roomDetailByLang.tourId.priceChild04)}}/ trẻ em</p>-->
                              </div>
                              <div
                                class="col-6 m-0 p-0"
                              >
                                <div class="row d-flex justify-content-between align-items-center">
                                  <div class="col-4 text-right p-0">
                                    <button
                                      class="btn-plus"
                                      :disabled="order.guest.child48.qty==0"
                                      @click="minusPerson(order.guest.child48)"
                                    >
                                      <font-awesome-icon icon="minus" class="text-center text-1" />
                                    </button>
                                  </div>
                                  <div class="col-4">
                                    <input
                                      class="custom-form-input text-center text-muted"
                                      v-model="order.guest.child48.qty"
                                    />
                                  </div>
                                  <div class="col-4 text-left p-0">
                                    <button
                                      class="btn-plus"
                                      @click="plusPerson(order.guest.child48)"
                                    >
                                      <font-awesome-icon icon="plus" class="text-center text-1" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                       <div
                        class="col-12 py-3 border-bottom"
                      >
                      <div class="row w-100 m-0 p-0 d-flex justify-content-between align-items-center">
                        <div class="col-4 p-0 m-0 offset-sm-2 offset-md-2">
                            <DropdownListComponent v-bind:label="'Select option service'" v-bind:data="getOptionService(pac)"  @select="order.optionService=$event"></DropdownListComponent>
                        </div>
                        </div>
                       </div>
                    </div>
                    <div
                      class="col-12 py-2 border-bottom"
                    >
                    <div class="row m-0 p-0 d-flex justify-content-between align-items-center">
                      <span class="text-muted text-08 cursor-pointer" data-toggle="collapse" :href="`#collapseInfo${i}`" role="button" aria-expanded="false" :aria-controls="`collapseInfo${i}`">
                        {{$t('general_showmore')}}
                        <font-awesome-icon icon="chevron-down" class="text-center text-07" />
                      </span>
                      <button
                        class="btn btn-outline-info custom-btn-md text-nomal custom-btn-outline"
                        type="button"
                        data-toggle="collapse"
                        :data-target="`#collapseOne${i}`"
                        aria-expanded="true"
                        :aria-controls="`collapseOne${i}`"
                        @click="selectRoomTypeDetail(pac)"
                        v-if="pac.roomTypeId.roomTypeCode!==formCheck.roomTypeCode"
                      >{{$t('general_sticky_tab_roomselect')}}</button>
                      </div>
                      <div class="collapse row w-100 m-0 p-0" :id="`collapseInfo${i}`" v-html="pac.roomTypeId.roomTypeIntro">
                          
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section-tour py-2" id="map">
            <div class="row m-0 p-0 py-2">
              <h3 class="text-xh1 info-title font-weight-bold">{{$t('general_sticky_tab_map')}}</h3>
            </div>
            <div class="row p-0 m-0 py-2 text-08">
              <div class="map border-radius-10 w-100">
                <MapComponent v-bind:map ="map"></MapComponent>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 m-0 p-0 pl-3 custom-sticky-component">
          <div class="row m-0 p-0 custom-sticky-top-2rem">
            <div class="card">
              <div class="card-body p-3">
                <div class="row m-0 p-0" v-if="formCheck.packageSelect==true">
                  <ModalDetailImageComponent :imgs="order.roomType.roomImages"></ModalDetailImageComponent>
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
                    <span>{{roomDetailByLang.hotelId.hotelName}} | {{roomDetailByLang.roomTypeName}}</span>
                    <font-awesome-icon
                      icon="pencil-alt"
                      class="text-center text-info text-08 mr-2"
                    />
                  </p>
                  <p class="text-09 text-muted mb-0">in {{order.checkInDate}} | out {{order.checkOutDate}}</p>
                  <p class="text-09 text-muted mb-0">
                    <span class="pr-2">{{$t('general_label_guest')}} x {{order.guest.guest.qty}}</span>
                    <span class="pr-2">
                      {{$t('general_label_child04')}}
                      <span class="text-07">(0-4)</span>
                      x {{order.guest.child04.qty}}
                    </span>
                    <span>
                      {{$t('general_label_child48')}}
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
                    class="btn btn-danger text-nomal w-100"
                    :disabled="order.guest.guest.qty==0"
                    v-bind:class="{'btn-default':order.guest.guest.qty==0}"
                    href="#chon"
                    @click="selectHotelPackage"
                  >{{formCheck.usingDefaultData ==false?'ĐẶT NGAY':'Chọn gói dịch vụ'}}</a>
                </div>
                <div class="row m-0 p-0 text-muted">
                  <p class="my-1 text-08">
                    <font-awesome-icon icon="bolt" class="text-center text-info text-08 mr-2" />{{$t('photelpackagedetail_text_confirm')}}
                  </p>
                  <p class="my-1 text-08">
                    <font-awesome-icon icon="paper-plane" class="text-center text-08 mr-2" />{{$t('photelpackagedetail_text_receiveorder')}}
                  </p>
                  <p class="my-1 text-08">
                    <font-awesome-icon icon="medal" class="text-center text-08 mr-2" />{{$t('photelpackagedetail_text_bestservice')}}
                  </p>
                </div>
              </div>
              <div class="card-footer p-3 py-2 border-top">
                <div
                  class="row w-100 m-0 p-0 d-flex text-08 text-muted justify-content-between align-items-center"
                >
                  <span>
                    <font-awesome-icon icon="fire-alt" class="text-center text-08 mr-2" />
                    {{roomDetailByLang.hotelId.booked}} {{$t('general_peoplehavebook')}}
                  </span>
                  <span class="star font-weight-bold text-info">
                    ({{roomDetailByLang.hotelId.view}} {{$t('general_views')}})
                    <font-awesome-icon
                      icon="star"
                      class="text-center text-06"
                      v-for="star in roomDetailByLang.hotelId.star"
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
import CheckBoxGroup from '@/components/CheckboxGroupComponent.vue'
import DropdownListComponent from '@/components/DropdownListComponent.vue'

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
    CheckBoxGroup,
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
    TopTourPromotionComponent: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/TopTourPromotionComponent.vue"),
      loading: SkeletonBox
    }),
    MapComponent: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/MapComponent.vue"),
      loading: SkeletonBox
    }),
    PackageByRoomTypeComponent: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/PackageByRoomTypeComponent.vue"),
      loading: SkeletonBox
    }),
  },
  name: "roomDetailComponent",
  props: {
    msg: String
  },
  data() {
    return {
      packages: [],
      roomDetail: {},
      componentLoaded: false,
      sectionActive: "thongtin",
      startDate: moment(),
      indexSelect:"",
      formCheck: {
        timeSelect: false,
        packageSelect: false,
        optionService: false,
        usingDefaultData: true,
        roomTypeCode:"",
      },
      order: {
        guest: {
          guest: { qty: 1 },
          child04: { qty: 0 },
          child48: { qty: 0 }
        },
        checkInDate: moment().format('YYYY/DD/MM'),
        checkOutDate:moment().format('YYYY/DD/MM'),
        totalPrice: 0,
        hotel: {},
        roomType: {},
        package: {},
        optionService: {},
      },
      map:'<iframe class="w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59587.97785448771!2d105.80194413492788!3d21.02273601629448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1565026713918!5m2!1svi!2s" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    };
  },
  created() {
    this.getPackageByHotel(this.$route.query.hotelid,this.$route.query.roomtypeid);
  },
  methods: {
    initialWithParam() {
      this.getPackageByHotel(this.$route.query.hotelid,this.$route.query.roomtypeid);
    },
    async getPackageByHotel(hotelid,roomTypeId) {
      this.$store.commit("showHideLoading", true);
      const responsehotel = await HotelService.getRoomTypeById(roomTypeId);
      this.roomDetail = responsehotel.data;
      this.order.hotel = responsehotel.data;
      const response = await HotelService.getPackageByHotelRoomType(hotelid,roomTypeId);
      this.packages = response.data;
      this.$store.commit("showHideLoading", false);
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
        $('.calendarTrigger').addClass('border-outline-danger');
      } else {
        this.$store.dispatch("updateHotelOrder", this.order);
        // this.$store.dispatch("updateHotelPackageDetail", this.order.hotel);
        this.$router.push(
          `/roomDetail/confirm?hotelid=${this.roomDetail._id}&&packageid=${this.order.package.packageId._id}`
        );
      }
    },
    getPackage(pac){
      const result =[];
      pac.forEach(element => {
        result.push ({value:element.packageId._id,text:element.packageId.packageName,raw:element})
      });
      return result;
    },
    getOptionService(pac) {
      const result =[];
      pac.optionServices.forEach(element => {
        result.push ({value:element._id,text:element.optionServiceName,raw:element})
      });
      return result;
    },
    changePackage(item) {
      this.order.package=item.raw;
      this.formCheck.packageSelect = true;
      this.formCheck.usingDefaultData=false;
    },
    selectRoomTypeDetail(item) {
      if (this.formCheck.timeSelect===false) {
        $('.calendarTrigger').addClass('border-outline-danger');
      }
      this.order.roomType = item.roomTypeId;
      this.formCheck.roomTypeCode=item.roomTypeId.roomTypeCode;
    },
    getPriceInRange(checkin,checkout,priceRange) {
      var checkIn = moment(checkin);
      var checkOut = moment(checkout);
      let price = 0;
      let startDate;
      let endDate;
      const priceArr=[];
      priceRange.forEach(element => {
        startDate = moment(element.startDate);
        endDate = moment(element.endDate);
        if (checkIn.isAfter(startDate) && checkIn.isBefore(endDate)) {
          if (checkOut.isAfter(endDate)) {
            priceArr.push({
              'price': element,
              'diffDay': endDate.diff(checkIn, 'days'),
              'start': checkIn,
              'end': endDate
            });
          }
          else {
            priceArr.push({
              'price': element,
              'diffDay': checkOut.diff(checkIn, 'days'),
              'start': checkIn,
              'end': checkOut
            });
          }
        }
        if (checkIn.isBefore(startDate) && checkOut.isAfter(startDate)) {
          if (checkOut.isAfter(endDate)) {
             priceArr.push({
              'price': element,
              'diffDay': endDate.diff(startDate, 'days'),
              'start': startDate,
              'end': endDate
            });
          }
          if (checkOut.isBefore(endDate) && checkOut.isAfter(startDate)) {
            priceArr.push({
              'price': element,
              'diffDay': checkOut.diff(startDate, 'days'),
              'start': startDate,
              'end': checkOut
            });
          }
        }
      });
      priceArr.forEach(element => {
        price =price + (parseFloat(element.diffDay)*parseFloat(element.price.price) + parseFloat(element.diffDay)*parseFloat(element.price.markUpPlus))*(parseFloat(element.price.markUpPercent) +100)/100
      });
      return price;
    },
  },
  watch: {
    // call again the method if the route changes
    '$route': 'initialWithParam'
  },
  computed: {
    roomDetailByLang() {
      if (!this.componentLoaded) return null;
      else {
        var result = this.roomDetail.hotelId.hotelIntros.filter(item => {
          if (
            item.lang.toUpperCase() ==
            this.$store.state.currentLang.toUpperCase()
          ) {
            this.roomDetail.hotelId.hotelName = item.hotelName;
            this.roomDetail.hotelId.hotelIntro = item.hotelIntro;
          }
        });
        var result2 = this.roomDetail.roomTypeIntros.filter(item => {
          if (
            item.lang.toUpperCase() ==
            this.$store.state.currentLang.toUpperCase()
          ) {
            this.roomDetail.roomTypeName = item.hotelName;
            this.roomDetail.roomTypeIntro = item.hotelIntro;
          }
        });
        return this.roomDetail;
      }
    },
    totalPrice() {
      let timeTotal =1;
      let total=0;
      if (this.formCheck.packageSelect == true) {
        total += this.getPriceInRange(this.order.checkInDate,this.order.checkOutDate,this.order.package.priceRanges);
      }
      if (this.formCheck.optionService == true) {
        total += this.order.hotel.optionServices;
      }
      this.order.totalPrice = total;
      return total;
    },
    packageByLang() {
      return this.packages;
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
</style>
