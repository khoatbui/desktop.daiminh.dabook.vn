<template>
  <div class="tour-detail" v-if="componentLoaded">
    <div class="container py-4 my-0">
      <ModalDetailImageComponent
        :imgs="travelServicesByLang.travelServiceImages"
        :root="''"
        :minheight="'300px'"
      ></ModalDetailImageComponent>
    </div>
    <div class="container py-4 my-0 custom-sticky-component">
      <div class="row m-0 p-0">
        <div class="col-12 w-100 my-0 p-0 custom-sticky-top sticky-z-index-100 border-bottom">
          <ul
            class="w-100 d-flex flex-row justify-content-start align-items-center bg-white m-0 p-2 sticky-tab"
          >
            <li class="pr-4">
              <a
                href="#thongtin"
                @click="sectionActive='thongtin'"
                v-bind:class="{'section-active':sectionActive=='thongtin'}"
              >{{$t('general_sticky_tab_info')}}</a>
            </li>
            <li class="pr-4">
              <a
                href="#danhgia"
                @click="sectionActive='danhgia'"
                v-bind:class="{'section-active':sectionActive=='danhgia'}"
              >{{$t('general_sticky_tab_vote')}}</a>
            </li>
            <li class="pr-4">
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
              <h3 class="text-xh1">Dich vu xin visa du lich Viet Nam, Han Quoc</h3>
              <font-awesome-icon icon="heart" class="text-center text-1" />
            </div>
            <div
              class="row m-0 p-0 py-4 text-08 text-left d-block"
              v-html="travelServicesByLang.travelServiceIntro"
            ></div>
          </div>
          <div class="section-tour py-2" id="danhgia">
            <div class="row m-0 p-0 py-2 d-flex justify-content-between align-items-center">
              <h3 class="text-xh12 info-title">{{$t('general_sticky_tab_vote')}}</h3>
            </div>
            <div class="row w-100 p-0 m-0 py-2 text-08">
              <ReviewComponent class="w-100"></ReviewComponent>
              <!-- <p>{{$t('general_sticky_tab_vote_empty')}}</p> -->
            </div>
          </div>
          <!-- <div class="section-tour py-2 second-background" id="blog">
            <div class="row m-0 p-0 py-2 d-flex justify-content-between align-items-center">
              <h3
                class="text-xh12 info-title"
              >{{$t('general_sticky_tab_roomselect')}}</h3>
            </div>
            <div
              class="row p-0 m-0 py-2 text-08 d-flex justify-content-between align-items-center accordion"
              id="accordionExample"
            >
              <div class="col-12 px-3 py-1">
              </div>
            </div>
          </div>-->
          <div class="section-tour py-2" id="map">
            <div class="row m-0 p-0 py-2">
              <h3 class="text-xh12 info-title">{{$t('general_sticky_tab_map')}}</h3>
            </div>
            <div class="row p-0 m-0 py-2 text-08">
              <div class="map border-radius-10 w-100">
                <MapComponent v-bind:map="maplink"></MapComponent>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 m-0 p-0 pl-3 custom-sticky-component">
          <div class="row m-0 p-0 custom-sticky-top-2rem">
            <div class="card">
              <div class="card-body p-3">
                <div class="row m-0 p-0 pb-4 border-bottom border-bottom-dash">
                  <p
                    class="text-x1 w-100 font-bold d-flex justify-content-between align-items-center"
                  >
                    <span>Contact us for advisory</span>
                    <font-awesome-icon
                      icon="pencil-alt"
                      class="text-center text-info text-08 mr-2"
                    />
                  </p>
                </div>
                <div class="row m-0 p-0 py-4 justify-content-between align-items-center">
                  <div class="col-12 m-0 p-0">
                    <div class="row mb-3">
                      <div class="col-12 text-left">
                        <label
                          class="text-08 mb-1"
                          for="ifullname"
                          v-bind:class="formCheck.fullName.label"
                        >{{$t('general_label_fullname')}}</label>
                        <input
                          class="custom-form-input custom-form-input-md border-radius-5"
                          type="text"
                          id="ifullname"
                          v-model="customer.fullName"
                          v-bind:class="formCheck.fullName.input"
                        />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-12 text-left">
                        <label
                          class="text-08 mb-1"
                          for="iphone"
                          v-bind:class="formCheck.phone.label"
                        >{{$t('general_label_phone')}}</label>
                        <input
                          class="custom-form-input custom-form-input-md border-radius-5"
                          type="text"
                          id="iphone"
                          v-model="customer.phone"
                          v-bind:class="formCheck.phone.input"
                        />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-12 text-left">
                        <label
                          class="text-08 mb-1"
                          for="iemail"
                          v-bind:class="formCheck.email.label"
                        >{{$t('general_label_email')}}</label>
                        <input
                          class="custom-form-input custom-form-input-md border-radius-5"
                          type="text"
                          id="iemail"
                          v-model="customer.email"
                          v-bind:class="formCheck.email.input"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row m-0 p-0">
                  <a
                    class="btn btn-info text-white text-nomal w-100"
                    @click="requestBooking"
                  >Nhan tu van</a>
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
import TravelService from "@/api/TravelService";
import DropdownListComponent from "@/components/DropdownListComponent.vue";
import MailService from "@/api/MailService";

import "@lazy-copilot/datetimepicker/dist/datetimepicker.css";
import { DateTimePicker } from "@lazy-copilot/datetimepicker";

export default {
  components: {
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
    ReviewComponent: lazyLoadComponent({
      componentFactory: () => import("@/components/ReviewComponent.vue"),
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
    })
  },
  name: "VisaDetailComponent",
  props: {
    msg: String
  },
  data() {
    return {
      componentLoaded: false,
      sectionActive: "thongtin",
      travelServices: {},
      customer: {
        fullName: "",
        email: "",
        phone: "",
        message: "Request for advisory",
        requestType: "VISA"
      },
      formCheck: {
        fullName: "",
        email: "",
        phone: "",
        isFail: true
      },
      maplink:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119175.80490038882!2d105.7844322251528!3d21.022924670241864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454aa2523524d%3A0x23546fd77caee54b!2zQ8O0bmcgVHkgVG5oaCBUaMawxqFuZyBN4bqhaSBE4buLY2ggVuG7pSAmIER1IEzhu4tjaCDEkOG6oWkgTWluaCAtIMSQ4bqhaSBNaW5oIFRyYXZlbA!5e0!3m2!1svi!2s!4v1566322188277!5m2!1svi!2s" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    };
  },
  created() {
    this.initialWithParam();
  },
  methods: {
    async initialWithParam() {
      const responseservice = await TravelService.getTravelServiceByCode(
        "VISA"
      );
      this.travelServices = responseservice.data;
      this.componentLoaded = true;
    },
    formChecking() {
      if (this.customer.fullName.length === 0) {
        this.formCheck = {
          fullName: { label: "text-danger", input: "border-outline-danger" },
          email: "",
          phone: "",
          isFail: false
        };
        window.location.href = "#ithongtindathang";
        $("#collapseCustomer").collapse("show");
        return false;
      } else if (this.customer.email.length === 0) {
        this.formCheck = {
          fullName: "",
          email: { label: "text-danger", input: "border-outline-danger" },
          phone: "",
          isFail: false
        };
        window.location.href = "#ithongtindathang";
        $("#collapseCustomer").collapse("show");
        return false;
      } else if (this.customer.phone.length === 0) {
        this.formCheck = {
          fullName: "",
          email: "",
          phone: { label: "text-danger", input: "border-outline-danger" },
          isFail: false
        };
        window.location.href = "#ithongtindathang";
        $("#collapseCustomer").collapse("show");
        return false;
      } else {
        this.formCheck = {
          fullName: "",
          email: "",
          phone: "",
          isFail: true
        };
        return true;
      }
    },
    requestBooking() {
      if (this.formChecking()) {
        const response = MailService.sendMailWithGeneralQuestion(this.customer);
        response.then(
          result => {
            this.$vs.notify({
              title: "Thank you",
              text: "We will call you back",
              color: "primary",
              position:'top-right'
            });
          },
          error => {
            this.$vs.notify({
            title: "Opp!",
            text: "We have backend error, Please call 19001542 to direct advisory",
            color: "danger",
            position:'top-right'
          });
          } // doesn't run
        );
      }
    }
  },
  watch: {
    $route: "initialWithParam"
  },
  computed: {
    travelServicesByLang() {
      return this.travelServices;
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
