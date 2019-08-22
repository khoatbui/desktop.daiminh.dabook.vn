<template>
  <div class="tour-detail" v-if="componentLoaded">
      <div class="container py-4 my-0">
        <ModalDetailImageComponent :imgs="tourDetailByLang.tourId.tourImages" :root="''"></ModalDetailImageComponent>
      </div>
      <div class="container py-4 my-0 custom-sticky-component">
        <div class="row m-0 p-0">
          <div class="col-12 w-100 my-0 p-0 custom-sticky-top sticky-z-index-100 border-bottom">
            <ul
              class="w-100 d-flex flex-row justify-content-between align-items-center bg-white m-0 p-2 sticky-tab"
            >
              <li>
                <a
                  href="#thongtin"
                  @click="sectionActive='thongtin'"
                  v-bind:class="{'section-active':sectionActive=='thongtin'}"
                >{{$t('general_sticky_tab_info')}}</a>
              </li>
              <li>
                <a
                  href="#danhgia"
                  @click="sectionActive='danhgia'"
                  v-bind:class="{'section-active':sectionActive=='danhgia'}"
                >{{$t('general_sticky_tab_vote')}}</a>
              </li>
              <li>
                <a
                  href="#chon"
                  @click="sectionActive='chon'"
                  v-bind:class="{'section-active':sectionActive=='chon'}"
                >{{$t('general_sticky_tab_roomselect')}}</a>
              </li>
              <li>
                <a
                  href="#program"
                  @click="sectionActive='program'"
                  v-bind:class="{'section-active':sectionActive=='program'}"
                >{{$t('general_sticky_tab_program')}}</a>
              </li>
              <li>
                <a
                  href="#service"
                  @click="sectionActive='service'"
                  v-bind:class="{'section-active':sectionActive=='service'}"
                >{{$t('general_sticky_tab_serviceinclude')}}</a>
              </li>
              <li>
                <a
                  href="#nonservice"
                  @click="sectionActive='nonservice'"
                  v-bind:class="{'section-active':sectionActive=='nonservice'}"
                >{{$t('general_sticky_tab_servicenotinclude')}}</a>
              </li>
              <li>
                <a
                  href="#shouldtake"
                  @click="sectionActive='shouldtake'"
                  v-bind:class="{'section-active':sectionActive=='shouldtake'}"
                >{{$t('general_sticky_tab_shouldtake')}}</a>
              </li>
              <li>
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
                <h3 class="text-xh1 font-weight-bold">{{tourDetailByLang.tourId.tourName}}</h3>
                <font-awesome-icon icon="heart" class="text-center text-1" />
              </div>
              <div
                class="row p-0 m-0 py-2 text-08 d-flex justify-content-between align-items-center border-bottom border-info"
              >
                <span class="d-flex align-items-center">
                  <font-awesome-icon icon="calendar" class="text-center mr-2" />{{$t('general_label_timelenght')}} : 1gio
                </span>
                <span class="d-flex align-items-center">
                  <font-awesome-icon icon="tag" class="text-center mr-2" />{{$t('general_label_ticket')}}
                </span>
                <span class="d-flex align-items-center">
                  <font-awesome-icon icon="times-circle" class="text-center mr-2" />{{$t('general_label_noticketchange')}}
                </span>
              </div>
              <div class="row m-0 p-0 py-4 text-08">{{tourDetailByLang.tourId.tourIntro}}</div>
            </div>
            <div class="section-tour py-2" id="danhgia">
              <div class="row m-0 p-0 py-2 d-flex justify-content-between align-items-center">
                <h3 class="text-xh1 info-title font-weight-bold">{{$t('general_sticky_tab_vote')}}</h3>
              </div>
              <div
                class="row p-0 m-0 py-2 text-08 d-flex justify-content-between align-items-center"
              >
                <p>{{$t('general_sticky_tab_vote_empty')}}</p>
              </div>
            </div>
            <div class="section-tour py-2 second-background" id="chon">
              <div class="row m-0 p-0 py-2 d-flex justify-content-between align-items-center">
                <h3 class="text-xh1 info-title font-weight-bold">{{$t('general_sticky_tab_roomselect')}}</h3>
              </div>
              <div
                class="row p-0 m-0 py-2 text-08 d-flex justify-content-between align-items-center"
              >
                <div class="col-4 py-1">
                  <date-time-picker :singleDate="true" @onChange="onChangeDate" />
                </div>
                <div class="col-12 p-3">
                  <div class="row p-0 m-0 bg-white border-radius-5 border border-info">
                    <div
                      class="col-12 py-2 d-flex justify-content-between align-items-center border-bottom"
                    >
                      <span class="text-x1 font-bold">{{tourDetailByLang.tourId.tourName}}</span>
                      <span>
                        <span
                          class="text-07 pr-3 font-weight-bold text-muted text-deco-line-through"
                        >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tourDetailByLang.tourId.price*1.3)}}</span>
                        <span class="text-08 font-bold text-muted pr-1">tu</span>
                        <span
                          class="text-x1 font-bold"
                        >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tourDetailByLang.tourId.price)}}</span>
                      </span>
                    </div>
                    <div
                      class="col-12 py-3 d-flex justify-content-between align-items-center border-bottom"
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
                              <p
                                class="text-09 text-muted mb-0"
                              >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tourDetailByLang.tourId.price)}} / khach</p>
                              <p
                                class="text-07 text-muted text-deco-line-through mb-0"
                              >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tourDetailByLang.tourId.price*1.3)}}</p>
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
                          <div class="row m-0 p-0 border-bottom">
                            <div
                              class="col-6 m-0 p-0 flex-column d-flex justify-content-between align-items-start"
                            >
                              <p class="mb-0">
                                <span class="text-08 font-bold">{{$t('general_label_child04')}}</span>
                                <span class="text-07 text-muted">( Age 00 - 04)</span>
                              </p>
                              <p
                                class="text-09 text-muted mb-0"
                              >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tourDetailByLang.tourId.priceChild04)}}/ trẻ em</p>
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
                                  <button class="btn-plus" @click="plusPerson(order.guest.child04)">
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
                              <p
                                class="text-09 text-muted mb-0"
                              >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tourDetailByLang.tourId.priceChild04)}}/ trẻ em</p>
                            </div>
                            <div
                              class="col-6 m-0 p-0 d-flex justify-content-between align-items-center"
                            >
                              <div class="row">
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
                                  <button class="btn-plus" @click="plusPerson(order.guest.child48)">
                                    <font-awesome-icon icon="plus" class="text-center text-1" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="section-tour py-2" id="program">
              <div class="row m-0 p-0 py-2">
                <h3 class="text-xh1 info-title font-weight-bold">{{$t('general_sticky_tab_program')}}</h3>
              </div>
              <div class="row p-0 m-0 py-2 text-08" v-html="tourDetailByLang.program"></div>
            </div>
            <div class="section-tour py-2" id="service">
              <div class="row m-0 p-0 py-2">
                <h3 class="text-xh1 info-title font-weight-bold">{{$t('general_sticky_tab_serviceinclude')}}</h3>
              </div>
              <div class="row p-0 m-0 py-2 text-08" v-html="tourDetailByLang.serviceInclude"></div>
            </div>
            <div class="section-tour py-2" id="nonservice">
              <div class="row m-0 p-0 py-2">
                <h3 class="text-xh1 info-title font-weight-bold">{{$t('general_sticky_tab_servicenotinclude')}}</h3>
              </div>
              <div class="row p-0 m-0 py-2 text-08" v-html="tourDetailByLang.serviceNotInclude">></div>
            </div>
            <div class="section-tour py-2" id="shouldtake">
              <div class="row m-0 p-0 py-2">
                <h3 class="text-xh1 info-title font-weight-bold">{{$t('general_sticky_tab_shouldtake')}}</h3>
              </div>
              <div class="row p-0 m-0 py-2 text-08" v-html="tourDetailByLang.shouldTake"></div>
            </div>
            <div class="section-tour py-2" id="map">
              <div class="row m-0 p-0 py-2">
                <h3 class="text-xh1 info-title font-weight-bold">{{$t('general_sticky_tab_map')}}</h3>
              </div>
              <div class="row p-0 m-0 py-2 text-08">
                <div class="map border-radius-10 w-100">
                  <iframe
                    class="w-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59587.97785448771!2d105.80194413492788!3d21.02273601629448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1565026713918!5m2!1svi!2s"
                    height="450"
                    frameborder="0"
                    style="border:0"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 m-0 p-0 pl-3 custom-sticky-component">
            <div class="row m-0 p-0 custom-sticky-top-4rem">
              <div class="card">
                <div class="card-body p-3">
                  <div class="row m-0 p-0" v-if="order.selectDate ==null">
                    <p>
                      <span class="text-09 font-weight-bold text-muted pr-2">{{$t('general_from')}}</span>
                      <span
                        class="text-xh1 font-bold"
                      >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice)}}</span>
                      <span
                        class="text-09 pl-4 font-weight-bold text-muted text-deco-line-through"
                      >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice*1.3)}}</span>
                    </p>
                  </div>
                  <div
                    class="row m-0 p-0 pb-4 border-bottom border-bottom-dash"
                    v-if="order.selectDate !==null"
                  >
                    <p
                      class="text-x1 w-100 font-bold d-flex justify-content-between align-items-center"
                    >
                      <span>{{tourDetailByLang.tourId.tourName}}</span>
                      <font-awesome-icon
                        icon="pencil-alt"
                        class="text-center text-info text-08 mr-2"
                      />
                    </p>
                    <p class="text-09 text-muted mb-0">09/08/2019</p>
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
                    v-if="order.selectDate !==null"
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
                      @click="selectPackage"
                    >{{order.selectDate !==null? $t('general_btn_booknow'):$t('general_btn_selectpackage')}}</a>
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
                      <font-awesome-icon icon="fire-alt" class="text-center text-08 mr-2" />8K+ {{$t('general_peoplehavebook')}}
                    </span>
                    <span class="star font-weight-bold text-info">
                      {{tourDetailByLang.tourId.voteScore}}
                      <font-awesome-icon
                        icon="star"
                        class="text-center text-06"
                        v-for="star in tourDetailByLang.tourId.star"
                        v-bind:key="'start'+star"
                      />
                      {{`(${tourDetailByLang.tourId.voteStatus})`}}
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
import i18n from "@/lang/i18n";
import moment from "moment";
import { Carousel, Slide } from "vue-carousel";
import CityService from "@/api/CityService";
import lazyLoadComponent from "@/utils/lazy-load-component";
import SkeletonBox from "@/components/SkeletonBox.vue";
import TourService from "@/api/TourService";
import HotelService from "@/api/HotelService";

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
export default {
  components: {
    DateTimePicker,
    Carousel,
    Slide,
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
  },
  name: "TourDetailComponent",
  props: {
    msg: String
  },
  data() {
    return {
      tourDetail: [],
      top10PromotionHotel: [],
      componentLoaded: false,
      sectionActive: "thongtin",
      startDate: moment(),
      order: {
        guest: {
          guest: { qty: 1 },
          child04: { qty: 0 },
          child48: { qty: 0 }
        },
        selectDate: null,
        totalPrice:0
      }
    };
  },
  watch: {
    // call again the method if the route changes
    '$route': 'initialWithParam'
  },
  created() {
    this.initial(this.$route.query.tourid);
    this.getPromotionHotel();
  },
  methods: {
    initialWithParam() {
      this.initial(this.$route.query.tourid);
    },
    async initial(tourId) {
      this.$store.commit("showHideLoading", true);
      const response = await TourService.GetTourDetailById(tourId);
      this.tourDetail = randomArray(response.data);
      this.$store.commit("showHideLoading", false);
      this.componentLoaded = true;
    },
    async getPromotionHotel() {
      const responsehotel = await HotelService.getTop10PromotionHotel();
      this.top10PromotionHotel = randomArray(responsehotel.data).slice(0, 9);
    },
    plusPerson(person) {
      person.qty++;
    },
    minusPerson(person) {
      person.qty--;
    },
    onChangeDate(data) {
      this.order.selectDate = moment(data).format("YYYY/DD/MM");
    },
    selectPackage(){
      if (this.order.selectDate ==null) {
        location.href = "#chon";
        $('.calendarTrigger').addClass('border-outline-danger');
      }
      else {
        this.$store.dispatch('updateTourOrder', this.order);
        this.$store.dispatch('updateTourDetail', this.tourDetailByLang)
        this.$router.push(`/tourdetail/confirm?tourid=${this.tourDetail[0].tourId._id}`)
      }
    },
  },
  computed: {
    tourDetailByLang() {
      if (!this.componentLoaded) return null;
      else {
        var result = this.tourDetail.filter(item => {
          return (
            item.lang.toUpperCase() ==
            this.$store.state.currentLang.toUpperCase()
          );
        });
        result[0].tourId.tourIntros.forEach(intro => {
          if (
            intro.lang.toUpperCase() ===
            this.$store.state.currentLang.toUpperCase()
          ) {
            result[0].tourId.tourIntro = intro.tourIntro;
            result[0].tourId.tourName = intro.tourName;
            result[0].tourId.from = intro.from;
            result[0].tourId.to = intro.to;
          }
        });
        return result[0];
      }
    },
    totalPrice() {
      const totalPr = (
        this.tourDetailByLang.tourId.price * this.order.guest.guest.qty +
        this.tourDetailByLang.tourId.priceChild04 *
          this.order.guest.child04.qty +
        this.tourDetailByLang.tourId.priceChild48 * this.order.guest.child48.qty
      );
      this.order.totalPrice=totalPr;
      return totalPr;
    }
  },
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
</style>
