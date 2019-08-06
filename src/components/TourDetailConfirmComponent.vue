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
            <div class="card bg-white mb-1 shadow-none">
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
                      <label class="text-08 mb-1" for="ifirstname">Ten</label>
                      <input
                        class="custom-form-input custom-form-input-md border-radius-5"
                        type="text"
                        id="ifirstname"
                      />
                    </div>
                    <div class="col-4 text-left">
                      <label class="text-08 mb-1" for="ilastname">Ho</label>
                      <input
                        class="custom-form-input custom-form-input-md border-radius-5"
                        type="text"
                        id="ilastname"
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
                      />
                    </div>
                    <div class="col-4 text-left">
                      <label class="text-08 mb-1" for="iphone">So dien thoai</label>
                      <input
                        class="custom-form-input custom-form-input-md border-radius-5"
                        type="text"
                        id="iphone"
                      />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-8 text-left">
                      <label class="text-08 mb-1" for="iemail">Email</label>
                      <input
                        class="custom-form-input custom-form-input-md border-radius-5"
                        type="text"
                        id="iemail"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 text-left">
                      <button class="btn btn-info text-nomal">Tiep tuc</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bg-white mb-1 shadow-none">
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
                    <div class="col-4 text-left">
                      <label class="text-08 mb-1" for="ifirstname">Ma giam gia</label>
                      <input
                        class="custom-form-input custom-form-input-md border-radius-5"
                        type="text"
                        id="ifirstname"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 text-left">
                      <button class="btn btn-info text-nomal">Tiep tuc</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bg-white mb-1 shadow-none">
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
                      />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-8 text-left">
                      <label class="text-08 mb-1" for="ipickuplocation">Dia diem dua don</label>
                      <textarea
                        class="custom-form-input custom-form-text-md border-radius-5"
                        type="text"
                        id="ipickuplocation"
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
                      ></textarea>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 text-left">
                      <button class="btn btn-info text-nomal">Tiep tuc</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bg-white mb-1 shadow-none">
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
                    <div class="col-12 text-left"></div>
                  </div>
                  <div class="row">
                    <div class="col-12 text-left">
                      <button class="btn btn-info text-nomal">Hoan tat</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bg-white mb-1 shadow-none custom-sticky-bottom">
              <div class="card-body">
                <div class="row">
                  <div class="col-6 text-left">
                    <button class="btn btn-info text-nomal">Hoan tat</button>
                  </div>
                  <div class="col-6 text-right">
                    <p>
                      <span class="text-09 font-weight-bold text-muted pr-2">tu</span>
                      <span
                        class="text-xh1 font-bold text-info"
                      >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(1000)}}</span>
                      <span
                        class="text-09 pl-4 font-weight-bold text-muted text-deco-line-through"
                      >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(1000*1.3)}}</span>
                    </p>
                    <p class="text-09 font-bold text-muted">
                      Du lich DaLat 2N1D
                      <span class="mr-2 text-07">2019/26/08</span>
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
                    <TourDetailImageComponent></TourDetailImageComponent>
                  </div>
                  <div class="col-12 m-0 p-0 text-left border-bottom">
                    <h3 class="text-xh1">Trai nghiem dich vu Bay tai Da Nang</h3>
                  </div>
                  <div class="col-12 m-0 p-0 text-left border-bottom">
                    <span class="text-07">Goi dich vu</span>
                    <p>Trai nghiem dich vu Bay tai Da Nang</p>
                  </div>
                   <div class="col-12 m-0 p-0  text-left border-bottom">
                    <span class="text-07">Ngay</span>
                    <p>2019/04/03</p>
                  </div>
                   <div class="col-12 m-0 p-0 text-left border-bottom">
                    <span class="text-07">Khach</span>
                    <p>Nguoi lon x 1</p>
                  </div>
                   <div class="col-12 m-0 p-0 text-left border-bottom">
                    <span class="text-07">Tong so tien</span>
                    <p>2,360,000</p>
                  </div>
                   <div class="col-12 m-0 p-0 text-left border-bottom">
                    <span class="text-07">Luu y</span>
                    <p>Trai nghiem dich vu Bay tai Da Nang</p>
                  </div>
                  <div class="col-12 m-0 p-0 text-left">
                    <span class="text-07">Hotline</span>
                    <p class="text-danger"><font-awesome-icon icon="headset" class="text-08 text-center" /> 19001542</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import CityService from "@/api/CityService";
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
    TourDetailImageComponent: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/TourDetailImageComponent.vue"),
      loading: SkeletonBox
    }),
  },
  name: "TopCityComponent",
  props: {
    msg: String
  },
  data() {
    return {
      componentLoaded: false
    };
  },
  mounted() {
    this.initial();
  },
  methods: {
    async initial() {
      this.$store.commit("showHideLoading", true);
      const response = await CityService.getTopCity();
      this.citys = randomArray(response.data);
      this.$store.commit("showHideLoading", false);
      this.componentLoaded = true;
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
