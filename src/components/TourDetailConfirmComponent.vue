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
            <span class="text-muted">{{$t('general_btn_completed')}}</span>
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
                    >{{$t('general_label_customerinfo')}}</h3>
                    <font-awesome-icon
                      icon="chevron-down"
                      class="text-center text-muted text-08 text-1"
                    />
                  </div>
                </div>
                <div class="collapse show" id="collapseCustomer">
                  <div class="row mb-3">
                    <div class="col-8 text-left">
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
                    <div class="col-8 text-left">
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
                    >{{$t('general_label_pickupinfo')}}</h3>
                    <font-awesome-icon
                      icon="chevron-down"
                      class="text-center text-muted text-08 text-1"
                    />
                  </div>
                </div>
                <div class="collapse" id="collapsePickup">
                  <div class="row mb-3">
                    <div class="col-8 text-left">
                      <label
                        class="text-08 mb-1"
                        for="itranslatorLang"
                      >{{$t('general_label_guidlinelanguage')}}</label>
                      <div class="d-flex justify-content-start align-items-center">
                        <vs-radio
                          v-model="order.translatorLang"
                          vs-name="translatorLang"
                          vs-value="English"
                          class="mr-2"
                          selected
                        >English</vs-radio>
                        <vs-radio
                          v-model="order.translatorLang"
                          vs-name="translatorLang"
                          vs-value="Vietnamese"
                          class="mr-2"
                        >Vietnamese</vs-radio>
                        <vs-radio
                          v-model="order.translatorLang"
                          vs-name="translatorLang"
                          vs-value="Korean"
                          class="mr-2"
                        >Korean</vs-radio>
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-8 text-left">
                      <label
                        class="text-08 mb-1"
                        for="ipickuplocation"
                        v-bind:class="formCheck.pickupLocation.label"
                      >{{$t('general_label_pickuplocation')}}</label>
                      <input
                        class="custom-form-input custom-form-input-md border-radius-5"
                        type="text"
                        id="ipickuplocation"
                        v-model="order.pickupLocation"
                        v-bind:class="formCheck.pickupLocation.input"
                      />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-8 text-left">
                      <label
                        class="text-08 mb-1"
                        for="imessage"
                      >{{$t('general_label_anotherquestion')}}</label>
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
                      class="btn btn-info text-nomal"
                      :disabled="bookingResult.requestStatus"
                      @click="requestBooking"
                    >{{$t('general_btn_completed')}}</button>
                  </div>
                  <div class="col-6 text-right">
                    <p>
                      <span class="text-09 font-weight-bold text-muted pr-2">tu</span>
                      <span
                        class="text-xh1 font-bold text-info"
                      >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(selectedTour.order.totalPrice)}}</span>
                      <span
                        class="text-09 pl-4 font-weight-bold text-muted text-deco-line-through"
                      >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(selectedTour.order.totalPrice*1.3)}}</span>
                    </p>
                    <p class="text-09 font-bold text-muted">
                      {{selectedTour.tourDetail.tourId.tourName}}
                      <span
                        class="ml-4 text-07"
                      >{{$t('general_label_date')}} {{selectedTour.order.selectDate}}</span>
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
                  <ModalDetailImageComponent
                    :imgs="selectedTour.tourDetail.tourId.tourImages"
                    :root="''"
                    :minheight="'300px'"
                  ></ModalDetailImageComponent>
                </div>
                <div class="col-12 m-0 p-0 text-left border-bottom">
                  <h3 class="text-xh1">{{selectedTour.tourDetail.tourId.tourName}}</h3>
                </div>
                <div class="col-12 m-0 p-0 text-left border-bottom">
                  <span class="text-07">{{$t('general_label_package')}}</span>
                  <p>{{selectedTour.tourDetail.tourId.tourName}}</p>
                </div>
                <div class="col-12 m-0 p-0 text-left border-bottom">
                  <span class="text-07">{{$t('general_label_date')}}</span>
                  <p>{{selectedTour.order.selectDate}}</p>
                </div>
                <div class="col-12 m-0 p-0 text-left border-bottom">
                  <span class="text-07">{{$t('general_label_guest')}}</span>
                  <p>
                    <span class="font-bold">{{$t('general_label_guest')}}</span>
                    x {{selectedTour.order.guest.guest.qty}}
                    <span
                      class="font-bold ml-2"
                    >{{$t('general_label_child04')}}</span>
                    x {{selectedTour.order.guest.child04.qty}}
                    <span
                      class="font-bold ml-2"
                    >{{$t('general_label_child48')}}</span>
                    x {{selectedTour.order.guest.child48.qty}}
                  </p>
                </div>
                <div class="col-12 m-0 p-0 text-left border-bottom">
                  <span class="text-07">Tong so tien</span>
                  <p>{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(selectedTour.order.totalPrice)}}</p>
                </div>
                <div class="col-12 m-0 p-0 text-left border-bottom">
                  <span class="text-07">{{$t('general_label_note')}}</span>
                  <div class="text-08" v-html="selectedTour.tourDetail.shouldTake"></div>
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
              <span class="badge badge-success">{{bookingResult.orderStatus}}</span>
              {{$t('general_label_thankyouusingservice')}}
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
            <button
              type="button"
              class="btn btn-secondary btn-sm"
              data-dismiss="modal"
            >{{$t('general_btn_close')}}</button>
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
import TourService from "@/api/TourService";
import lazyLoadComponent from "@/utils/lazy-load-component";
import SkeletonBox from "@/components/SkeletonBox.vue";
import MailService from "@/api/MailService";

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
    })
  },
  name: "TourDetailConfirmComponent",
  props: {
    msg: String
  },
  data() {
    return {
      componentLoaded: false,
      order: {
        discountCode: "",
        translatorLang: "English",
        pickupLocation: "",
        otherRequest: ""
      },
      customer: {
        fullName: "",
        email: "",
        phone: "",
        country: ""
      },
      formCheck: {
        fullName: "",
        email: "",
        phone: "",
        pickupLocation: "",
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
      this.$store.commit("showHideLoading", true);
      const response = await TourService.GetTourDetailById(tourId);
      this.citys = randomArray(response.data);
      this.$store.commit("showHideLoading", false);
      this.componentLoaded = true;
    },
    finishThongTinKhachHang() {
      $("#collapseCustomer").collapse("hide");
      $("#collapseDiscount").collapse("show");
      if (
        this.formCheck.fullName !== "" &&
        this.formCheck.email !== "" &&
        this.formCheck.phone !== ""
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
      if (this.formCheck.pickupLocation !== "") {
        window.location.href = "#iphuongthucthanhtoan";
      }
    },
    requestBooking() {
      if (this.formChecking()) {
        var parram = {
          customer: this.customer,
          order: this.$store.state.tour.order,
          tour: {
            tourId: this.$store.state.tour.tourDetail._id,
            tourCode: this.$store.state.tour.tourDetail.tourId.tourCode,
            tourName: this.$store.state.tour.tourDetail.tourId.tourName,
            from: this.$store.state.tour.tourDetail.tourId.from,
            to: this.$store.state.tour.tourDetail.tourId.to
          },
          request: this.order
        };
        const response = MailService.sendMailWithTourBooking(parram);
        response.then(
          result => {
            console.log(result);
            this.bookingResult.transactionCode=result.data.orderCode;
            this.bookingResult.orderStatus=result.data.requestStatus;
            this.bookingResult.replyTime=result.data.feedbackTime;
            $("#bookingModal").modal("show");
          },
          error => alert(error) // doesn't run
        );
      }
    },
    formChecking() {
      if (this.customer.fullName.length === 0) {
        this.formCheck = {
          fullName: {
            label: "text-danger",
            input: "border-outline-danger"
          },
          email: "",
          phone: "",
          pickupLocation: "",
          isFail: false
        };
        window.location.href = "#ithongtindathang";
        $("#collapseCustomer").collapse("show");
        return false;
      }
      if (this.customer.email.length === 0) {
        this.formCheck = {
          fullName: "",
          email: {
            label: "text-danger",
            input: "border-outline-danger"
          },
          phone: "",
          pickupLocation: "",
          isFail: false
        };
        window.location.href = "#ithongtindathang";
        $("#collapseCustomer").collapse("show");
        return false;
      }
      if (this.customer.phone.length === 0) {
        this.formCheck = {
          fullName: "",
          email: "",
          phone: {
            label: "text-danger",
            input: "border-outline-danger"
          },
          pickupLocation: "",
          isFail: false
        };
        window.location.href = "#ithongtindathang";
        $("#collapseCustomer").collapse("show");
        return false;
      }
      if (this.order.pickupLocation.length === 0) {
        this.formCheck = {
          fullName: "",
          email: "",
          phone: "",
          pickupLocation: {
            label: "text-danger",
            input: "border-outline-danger"
          },
          isFail: false
        };
        window.location.href = "#ithongtinduadon";
        $("#collapsePickup").collapse("show");
        return false;
      } else {
        this.formCheck = {
          fullName: "",
          email: "",
          phone: "",
          pickupLocation: "",
          isFail: true
        };
        return true;
      }
    },
    transactionCopy() {
      this.$vs.notify({
            title: "Copied!",
            color: "primary"
          });
    }
  },
  computed: {
    selectedTour() {
      if (!this.componentLoaded) return null;
      console.log(this.$store.state.tour);
      return this.$store.state.tour;
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
.collapse {
  display: none;
}
.collapse.show {
  display: block;
}
</style>
