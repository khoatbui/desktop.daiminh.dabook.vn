<template>
  <div class="tour-detail-confirm second-background" v-if="componentLoaded">
    <div class="container py-4 my-0">
      <div class="row">
        <div class="col-8">
          <div class="row m-0 p-0 text-08 align-items-center">
            <span class="font-bold mr-4">Xac nhan thong tin</span>
            <font-awesome-icon icon="chevron-right" class="text-center text-06 text-1 mr-4" />
            <span class="mr-4 text-muted">Thanh toan</span>
            <font-awesome-icon icon="chevron-right" class="text-center text-06 text-1 mr-4" />
            <span class="text-muted">Hoan tat</span>
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
                    >Thong tin nguoi dat hang</h3>
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
                      >Ten</label>
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
                      >Ho</label>
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
                      <label class="text-08 mb-1" for="icountry">Quoc gia</label>
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
                      >So dien thoai</label>
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
                      >Email</label>
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
                      >Tiep tuc</button>
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
                    >Nhap ma giam gia</h3>
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
                        >Xac nhan</button>
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
                    >Thong tin dua don</h3>
                    <font-awesome-icon
                      icon="chevron-down"
                      class="text-center text-muted text-08 text-1"
                    />
                  </div>
                </div>
                <div class="collapse" id="collapsePickup">
                  <div class="row mb-3">
                    <div class="col-4 text-left">
                      <label class="text-08 mb-1" for="ifirstname">Ngon ngu huong dan vien</label>
                      <input
                        class="custom-form-input custom-form-input-md border-radius-5"
                        type="text"
                        id="ifirstname"
                        v-model="order.translatorLang"
                      />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-8 text-left">
                      <label
                        class="text-08 mb-1"
                        for="ipickuplocation"
                        v-bind:class="formCheck.pickupLocation.label"
                      >Dia diem dua don</label>
                      <textarea
                        class="custom-form-input custom-form-text-md border-radius-5"
                        type="text"
                        id="ipickuplocation"
                        v-model="order.pickupLocation"
                        v-bind:class="formCheck.pickupLocation.input"
                      ></textarea>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-8 text-left">
                      <label class="text-08 mb-1" for="imessage">Thong tin khac</label>
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
                      >Tiep tuc</button>
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
                    >Phuong thuc thanh toan</h3>
                    <font-awesome-icon
                      icon="chevron-down"
                      class="text-center text-muted text-08 text-1"
                    />
                  </div>
                </div>
                <div class="collapse" id="collapsePayment">
                  <div class="row mb-3">
                    <div class="col-12 text-left">
                      <p
                        class="text-08 text-danger"
                      >Luu y: Gia tren chi de tham khao,chung to se gui cho quy khach gia uu dai nhat</p>
                      <p
                        class="text-08 text-danger"
                      >Sau khi nhan confirm tu chung toi,quy khach vui long chuyen khoan theo cac ngan hang sau</p>
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
                    >Hoan tat</button>
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
                      >ngay {{selectedTour.order.selectDate}}</span>
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
                  <ModalDetailImageComponent :imgs="selectedTour.tourDetail.tourId.tourImages"></ModalDetailImageComponent>
                </div>
                <div class="col-12 m-0 p-0 text-left border-bottom">
                  <h3 class="text-xh1">{{selectedTour.tourDetail.tourId.tourName}}</h3>
                </div>
                <div class="col-12 m-0 p-0 text-left border-bottom">
                  <span class="text-07">Goi dich vu</span>
                  <p>{{selectedTour.tourDetail.tourId.tourName}}</p>
                </div>
                <div class="col-12 m-0 p-0 text-left border-bottom">
                  <span class="text-07">Ngay</span>
                  <p>{{selectedTour.order.selectDate}}</p>
                </div>
                <div class="col-12 m-0 p-0 text-left border-bottom">
                  <span class="text-07">Khach</span>
                  <p>
                    <span class="font-bold">Nguoi lon</span>
                    x {{selectedTour.order.guest.guest.qty}}
                    <span
                      class="font-bold ml-2"
                    >Tre em(0-4)</span>
                    x {{selectedTour.order.guest.child04.qty}}
                    <span
                      class="font-bold ml-2"
                    >Tre em(4-8)</span>
                    x {{selectedTour.order.guest.child48.qty}}
                  </p>
                </div>
                <div class="col-12 m-0 p-0 text-left border-bottom">
                  <span class="text-07">Tong so tien</span>
                  <p>{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(selectedTour.order.totalPrice)}}</p>
                </div>
                <div class="col-12 m-0 p-0 text-left border-bottom">
                  <span class="text-07">Luu y</span>
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
              <span class="badge badge-success">{{bookingResult.orderStatus}}</span> CẢM ƠN BẠN ĐÃ SỬ DỤNG DỊCH VỤ CỦA CHUNG TÔI
            </h6>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-left">
            <p>
              <b>TransactionCode :</b>
              {{bookingResult.transactionCode}}
            </p>
            <p
              class="text-mutedt text-08"
            >Chung toi se lien lac lai trong vong {{bookingResult.replyTime}} tieng</p>
          </div>
          <div class="modal-footer">
            <input
              type="text"
              class="invisible"
              aria-label="Username"
              id="ihidden-input"
              v-model="bookingResult.transactionCode"
            />
            <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
            <button
              type="button"
              class="btn btn-primary btn-sm btn-info"
              @click="transactionCopy"
            >copy Code</button>
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
  name: "CarDetailConfirmComponent",
  props: {
    msg: String
  },
  data() {
    return {
      componentLoaded: false,
      order: {
        discountCode: "",
        translatorLang: "",
        pickupLocation: "",
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
          pickupLocation: "",
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
          pickupLocation: "",
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
          pickupLocation: "",
          isFail: false
        };
        window.location.href = "#ithongtindathang";
        $("#collapseCustomer").collapse("show");
        return false;
      } else if (this.order.pickupLocation.length === 0) {
        this.formCheck = {
          firstName: "",
          lastName: "",
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
      } else if (this.customer.lastName.length === 0) {
        this.formCheck = {
          firstName: "",
          lastName: { label: "text-danger", input: "border-outline-danger" },
          email: "",
          phone: "",
          pickupLocation: "",
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
          pickupLocation: "",
          isFail: true
        };
        return true;
      }
    },
    transactionCopy() {}
  },
  computed: {
    selectedTour() {
      if (!this.componentLoaded) return null;
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
</style>
