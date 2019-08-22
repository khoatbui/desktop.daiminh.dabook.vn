<template>
  <div class="tour-detail-confirm second-background" v-if="componentLoaded">
    <div class="container py-4 my-0">
      <div class="row">
        <div class="col-8">
          <div class="row m-0 p-0 text-08 align-items-center">
            <span class="font-bold mr-4">{{$t('general_label_confirm')}}</span>
            <font-awesome-icon icon="chevron-right" class="text-center text-06 text-1 mr-4" />
            <span class="mr-4 text-muted">{{$t('general_label_payment')}}</span>
            <font-awesome-icon icon="chevron-right" class="text-center text-06 text-1 mr-4" />
            <span class="text-muted">{{$t('general_label_finish')}}</span>
          </div>
          <div class="row m-0 p-0 custom-sticky-component">
            <div class="card bg-white mb-1 shadow-none" id="ithongtindathang">
              <div class="card-body">
                <div class="row m-0 p-0 mb-4">
                  <div
                    class="col-12 m-0 p-0 d-flex justify-content-between align-items-center"
                    data-toggle="collapse"
                    href="#collapseCustomer"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseCustomer"
                  >
                    <h3
                      class="text-x1 text-muted font-bold text-left border-left-bold pl-2"
                    >{{$t('general_label_buyer')}}</h3>
                    <font-awesome-icon
                      icon="chevron-down"
                      class="text-center text-muted text-08 text-1"
                    />
                  </div>
                </div>
                <div class="collapse show" id="collapseCustomer">
                  <div class="row mb-3">
                    <div class="col-4 text-left">
                      <label
                        class="text-08 mb-1"
                        for="ifirstname"
                        v-bind:class="formCheck.firstName.label"
                      >{{$t('general_label_firstname')}}</label>
                      <input
                        class="custom-form-input custom-form-input-md border-radius-5"
                        type="text"
                        id="ifirstname"
                        v-model="customer.firstName"
                        v-bind:class="formCheck.firstName.input"
                      />
                    </div>
                    <div class="col-4 text-left">
                      <label
                        class="text-08 mb-1"
                        for="ilastname"
                        v-bind:class="formCheck.lastName.label"
                      >{{$t('general_label_last_name')}}</label>
                      <input
                        class="custom-form-input custom-form-input-md border-radius-5"
                        type="text"
                        id="ilastname"
                        v-model="customer.lastName"
                        v-bind:class="formCheck.lastName.input"
                      />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-4 text-left">
                      <label class="text-08 mb-1" for="icountry">{{$t('general_label_country')}}</label>
                      <input
                        class="custom-form-input custom-form-input-md border-radius-5"
                        type="text"
                        id="icountry"
                        v-model="customer.country"
                      />
                    </div>
                    <div class="col-4 text-left">
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
                    <div class="col-8 text-left">
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
                  <div class="row">
                    <div class="col-12 text-left">
                      <button
                        class="btn btn-info text-nomal"
                        data-toggle="collapse"
                        data-target="#collapseDiscount"
                        aria-expanded="false"
                        aria-controls="collapseDiscount"
                        @click="finishThongTinKhachHang"
                      >{{$t('general_btn_tieptuc')}}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bg-white mb-1 shadow-none" id="imagiamgia">
              <div class="card-body">
                <div class="row m-0 p-0 mb-4">
                  <div
                    class="col-12 m-0 p-0 d-flex justify-content-between align-items-center"
                    data-toggle="collapse"
                    href="#collapseDiscount"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseDiscount"
                  >
                    <h3
                      class="text-x1 text-muted font-bold border-left-bold text-left pl-2"
                    >{{$t('general_label_discount')}}</h3>
                    <font-awesome-icon
                      icon="chevron-down"
                      class="text-center text-muted text-08 text-1"
                    />
                  </div>
                </div>
                <div class="collapse" id="collapseDiscount">
                  <div class="row mb-3">
                    <div class="col-6 text-left">
                      <div class="custom-input-group">
                        <input
                          class="custom-form-input custom-form-input-md border-radius-5"
                          type="text"
                          id="ifirstname"
                          v-model="order.discountCode"
                        />
                        <button
                          class="btn custom-btn-md btn-info px-3 text-nomal"
                          data-toggle="collapse"
                          data-target="#collapsePickup"
                          aria-expanded="false"
                          aria-controls="collapsePickup"
                          @click="finishMaGiamGia"
                        >{{$t('general_btn_confirm')}}</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bg-white mb-1 shadow-none" id="ithongtinduadon">
              <div class="card-body">
                <div class="row m-0 p-0 mb-4">
                  <div
                    class="col-12 m-0 p-0 d-flex justify-content-between align-items-center"
                    data-toggle="collapse"
                    href="#collapsePickup"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapsePickup"
                  >
                    <h3
                      class="text-x1 text-muted font-bold border-left-bold text-left pl-2"
                    >{{$t('general_label_messageus')}}</h3>
                    <font-awesome-icon
                      icon="chevron-down"
                      class="text-center text-muted text-08 text-1"
                    />
                  </div>
                </div>
                <div class="collapse" id="collapsePickup">
                  <div class="row mb-3">
                    <div class="col-8 text-left">
                      <label class="text-08 mb-1" for="imessage">{{$t('general_label_anotherquestion')}}</label>
                      <textarea
                        class="custom-form-input custom-form-text-md border-radius-5"
                        type="text"
                        id="imessage"
                        v-model="order.otherRequest"
                      ></textarea>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 text-left">
                      <button
                        class="btn btn-info text-nomal"
                        data-toggle="collapse"
                        data-target="#collapsePayment"
                        aria-expanded="false"
                        aria-controls="collapsePayment"
                        @click="finishThongTinDuaDon"
                      >{{$t('general_btn_tieptuc')}}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-1 shadow-none" id="iphuongthucthanhtoan">
              <div class="card-body">
                <div class="row m-0 p-0 mb-4">
                  <div
                    class="col-12 m-0 p-0 d-flex justify-content-between align-items-center"
                    data-toggle="collapse"
                    href="#collapsePayment"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapsePayment"
                  >
                    <h3
                      class="text-x1 text-muted font-bold border-left-bold text-left pl-2"
                    >{{$t('general_label_paymentmethod')}}</h3>
                    <font-awesome-icon
                      icon="chevron-down"
                      class="text-center text-muted text-08 text-1"
                    />
                  </div>
                </div>
                <div class="collapse" id="collapsePayment">
                  <div class="row mb-3">
                    <div class="col-12 text-left" v-html="$t('general_body_paymentnote')">
                      <PaymentComponent></PaymentComponent>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bg-white mb-1 shadow-none custom-sticky-bottom" id="ihoantat">
              <div class="card-body">
                <div class="row">
                  <div class="col-6 text-left">
                    <button
                      class="btn btn-danger text-nomal"
                      :disabled="bookingResult.requestStatus"
                      @click="requestBooking"
                    >{{$t('general_btn_completed')}}</button>
                  </div>
                  <div class="col-6 text-right">
                    <p>
                      <span class="text-09 font-weight-bold text-muted pr-2">{{$t('general_from')}}</span>
                      <span
                        class="text-xh1 font-bold text-info"
                      >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(selectedHotel.order.totalPrice)}}</span>
                      <span
                        class="text-09 pl-4 font-weight-bold text-muted text-deco-line-through"
                      >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(selectedHotel.order.totalPrice*1.3)}}</span>
                    </p>
                    <p class="text-09 font-bold text-muted">
                      {{selectedHotel.order.hotel.hotelName}}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 py-4 custom-sticky-component">
          <div class="card vh-100 mb-1 text-muted shadow-none custom-sticky-top">
            <div class="card-body">
              <div class="row m-0 p-0 mb-4">
                <div class="col-12 m-0 p-0 height-150">
                  <ModalDetailImageComponent :imgs="selectedHotel.order.hotel.hotelImages.concat(selectedHotel.order.roomType.roomImages)"  :root="'lgimg/'"></ModalDetailImageComponent>
                </div>
                <div class="col-12 m-0 p-0 text-left border-bottom">
                  <h3 class="text-xh1">{{selectedHotel.order.hotel.hotelName}} | {{selectedHotel.order.roomType.roomTypeName}} </h3>
                </div>
                <div class="col-12 m-0 p-0 text-left border-bottom">
                  <span class="text-07">{{$t('general_label_package')}}</span>
                  <p>{{selectedHotel.order.package.packageId.packageName}}</p>
                </div>
                <div class="col-12 m-0 p-0 text-left border-bottom">
                  <span class="text-07">{{$t('general_label_date')}}</span>
                  <p>{{selectedHotel.order.checkInDate}} | {{selectedHotel.order.checkOutDate}}</p>
                </div>
                <div class="col-12 m-0 p-0 text-left border-bottom">
                  <span class="text-07">{{$t('general_label_guest')}}</span>
                  <p>
                    <span class="font-bold">{{$t('general_label_guest')}}</span>
                    x {{selectedHotel.order.guest.guest.qty}}
                    <span
                      class="font-bold ml-2"
                    >{{$t('general_label_child04')}}</span>
                    x {{selectedHotel.order.guest.child04.qty}}
                    <span
                      class="font-bold ml-2"
                    >{{$t('general_label_child48')}}</span>
                    x {{selectedHotel.order.guest.child48.qty}}
                  </p>
                </div>
                <div class="col-12 m-0 p-0 text-left border-bottom">
                  <span class="text-07">{{$t('general_label_total')}}</span>
                  <p>{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(selectedHotel.order.totalPrice)}}</p>
                </div>
                <div class="col-12 m-0 p-0 text-left border-bottom">
                  <span class="text-07">{{$t('general_label_note')}}</span>
                  <div class="text-08" v-html="selectedHotel.order.package.packageId.note"></div>
                </div>
                <div class="col-12 m-0 p-0 text-left">
                  <span class="text-07">Hotline</span>
                  <p class="text-danger">
                    <font-awesome-icon icon="headset" class="text-08 text-center" />19001542
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
          <TopHotelPromotionComponent :isTitle="true" :paginationEnabled="false"></TopHotelPromotionComponent>  
        </div>
      </div>
    <div
      class="modal fade"
      id="bookingModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="bookingModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header border-bottom pb-3 text-left">
            <h6 class="modal-title" id="bookingModalLabel">
              <span class="badge badge-success">{{bookingResult.orderStatus}}</span> {{$t('general_label_thankyouusingservice')}}
            </h6>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-left">
            <p>
              <b>{{$t('general_label_transactioncode')}} :</b>
              {{bookingResult.transactionCode}}
            </p>
            <p
              class="text-mutedt text-08"
            >{{$t('general_label_wewillcontactat')}} {{bookingResult.replyTime}} {{$t('general_label_hour')}}</p>
          </div>
          <div class="modal-footer">
            <input
              type="text"
              class="invisible"
              aria-label="Username"
              id="ihidden-input"
              v-model="bookingResult.transactionCode"
            />
            <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">{{$t('general_btn_close')}}</button>
            <button
              type="button"
              class="btn btn-primary btn-sm btn-info"
              @click="transactionCopy"
            >{{$t('general_btn_copycode')}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import TourService from "@/api/TourService";
import lazyLoadComponent from "@/utils/lazy-load-component";
import SkeletonBox from "@/components/SkeletonBox.vue";

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
    ModalDetailImageComponent: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/ModalDetailImageComponent.vue"),
      loading: SkeletonBox
    }),
    PaymentComponent: lazyLoadComponent({
      componentFactory: () => import("@/components/PaymentComponent.vue"),
      loading: SkeletonBox
    }),
    TopHotelPromotionComponent: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/TopHotelPromotionComponent.vue"),
      loading: SkeletonBox
    }),
  },
  name: "HotelDetailConfirmComponent",
  props: {
    msg: String
  },
  data() {
    return {
      componentLoaded: false,
      order: {
        discountCode: "",
        translatorLang: "",
        otherRequest: ""
      },
      customer: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: ""
      },
      formCheck: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        isFail: true
      },
      bookingResult: {
        transactionCode: "",
        orderStatus: "",
        replyTime: "",
        requestStatus: false
      }
    };
  },
  mounted() {
    this.initial(this.$route.query.tourid);
  },
  methods: {
    async initial(tourId) {
      this.componentLoaded = true;
    },
    finishThongTinKhachHang() {
      $("#collapseCustomer").collapse("hide");
      $("#collapseDiscount").collapse("show");
      if (
        this.formCheck.firstName != "" &&
        this.formCheck.lastName != "" &&
        this.formCheck.email != "" &&
        this.formCheck.phone != ""
      ) {
        window.location.href = "#imagiamgia";
      }
    },
    finishMaGiamGia() {
      $("#collapseDiscount").collapse("hide");
      $("#collapsePickup").collapse("show");
    },
    finishThongTinDuaDon() {
      $("#collapsePickup").collapse("hide");
      $("#collapsePayment").collapse("show");
      if (this.formCheck.pickupLocation != "") {
        window.location.href = "#iphuongthucthanhtoan";
      }
    },
    requestBooking() {
      if (this.formChecking()) {
        $("#bookingModal").modal("show");
      }
    },
    formChecking() {
      if (this.customer.firstName.length === 0) {
        this.formCheck = {
          firstName: { label: "text-danger", input: "border-outline-danger" },
          lastName: "",
          email: "",
          phone: "",
          isFail: false
        };
        window.location.href = "#ithongtindathang";
        $("#collapseCustomer").collapse("show");
        return false;
      } else if (this.customer.email.length === 0) {
        this.formCheck = {
          firstName: "",
          lastName: "",
          email: { label: "text-danger", input: "border-outline-danger" },
          phone: "",
          isFail: false
        };
        window.location.href = "#ithongtindathang";
        $("#collapseCustomer").collapse("show");
        return false;
      } else if (this.customer.phone.length === 0) {
        this.formCheck = {
          firstName: "",
          lastName: "",
          email: "",
          phone: { label: "text-danger", input: "border-outline-danger" },
          isFail: false
        };
        window.location.href = "#ithongtindathang";
        $("#collapseCustomer").collapse("show");
        return false;
      } else if (this.customer.lastName.length === 0) {
        this.formCheck = {
          firstName: "",
          lastName: { label: "text-danger", input: "border-outline-danger" },
          email: "",
          phone: "",
          isFail: false
        };
        window.location.href = "#ithongtindathang";
        $("#collapseCustomer").collapse("show");
        return false;
      } else {
        this.formCheck = {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          isFail: true
        };
        return true;
      }
    },
    transactionCopy() {}
  },
  computed: {
    selectedHotel() {
      if (!this.componentLoaded) return null;
      return this.$store.state.hotel;
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
</style>
