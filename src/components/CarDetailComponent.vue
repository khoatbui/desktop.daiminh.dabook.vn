<template>
  <div class="tour-detail" v-if="componentLoaded">
    <div class="container py-4 my-0">
      <ModalDetailImageComponent :imgs="getCarImage" :root="''" :minheight="'300px'"></ModalDetailImageComponent>
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
              >Thong tin</a>
            </li>
            <li>
              <a
                href="#danhgia"
                @click="sectionActive='danhgia'"
                v-bind:class="{'section-active':sectionActive=='danhgia'}"
              >Danh gia</a>
            </li>
            <li>
              <a
                href="#chon"
                @click="sectionActive='chon'"
                v-bind:class="{'section-active':sectionActive=='chon'}"
              >Chon</a>
            </li>
            <li>
              <a
                href="#map"
                @click="sectionActive='map'"
                v-bind:class="{'section-active':sectionActive=='map'}"
              >Ban do</a>
            </li>
          </ul>
        </div>
        <div class="col-8 m-0 p-0 pr-3 text-left">
          <div class="section-tour py-2" id="thongtin">
            <div class="row m-0 p-0 py-2 d-flex justify-content-between align-items-center">
              <h3 class="text-xh1 font-weight-bold">{{carDetailByLang.tripName}}</h3>
              <font-awesome-icon icon="heart" class="text-center text-1" />
            </div>
            <div
              class="row p-0 m-0 py-2 text-08 d-flex justify-content-start align-items-center border-bottom border-info"
            >
              <span class="d-flex mx-2 align-items-center">
                <font-awesome-icon icon="map-marker-alt" class="text-center mr-2" />
                {{carDetailByLang.fromLocation}}
              </span>
              <span class="d-flex mx-2 align-items-center">
                <font-awesome-icon icon="map-marker-alt" class="text-center mr-2" />
                {{carDetailByLang.fromLocation}}
              </span>
              <span class="d-flex mx-2 align-items-center">
                <font-awesome-icon icon="text-width" class="text-center mr-2" />
                {{carDetailByLang.kmTotal}} km
              </span>
            </div>
            <div class="row m-0 p-0 py-4 text-08">{{carDetailByLang.cityId.cityIntro}}</div>
          </div>
          <div class="section-tour py-2" id="danhgia">
            <div class="row m-0 p-0 py-2 d-flex justify-content-between align-items-center">
              <h3 class="text-xh1 info-title font-weight-bold">Danh gia</h3>
            </div>
            <div class="row p-0 m-0 py-2 text-08 d-flex justify-content-between align-items-center">
              <p>Hien chua co danh gia nao cho tour nay</p>
            </div>
          </div>
          <div class="section-tour py-2 second-background" id="chon">
            <div class="row m-0 p-0 py-2 d-flex justify-content-between align-items-center">
              <h3 class="text-xh1 info-title font-weight-bold">Chon</h3>
            </div>
            <div class="row p-0 m-0 py-2 text-08 d-flex justify-content-between align-items-center">
              <div class="col-4 py-1">
                <date-time-picker :singleDate="true" @onChange="onChangeDate" />
              </div>
            </div>
            <div class="row m-0 p-2 accordion" id="accordionExample">
              <div
                class="col-12 m-0 p-0"
                v-for="(pac,i) in carDetailByLang.priceByCarType"
                :key="'hods'+i"
              >
                <div
                  class="card my-2 shadow-none"
                  :class="{'border-outline-info':pac.carTypeName==formCheck.carTypeName}"
                >
                  <div class="card-body">
                    <div class="row">
                      <div
                        class="col-12 p-0 py-2 d-flex justify-content-between align-items-center"
                        :id="`headingOne${i}`"
                      >
                        <span
                          class="text-x1 font-bold text-nomal"
                        >{{pac.carTypeName}} - {{carDetailByLang.tripName}}</span>
                        <span>
                          <span
                            class="text-07 pr-3 font-weight-bold text-muted text-deco-line-through"
                          >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format((formCheck.usingDefaultData!==true && pac.carTypeName==formCheck.carTypeName) ?totalPrice*1.3:pac.price*1.3)}}</span>
                          <span class="text-08 font-bold text-muted pr-1">tu</span>
                          <span
                            class="text-x1 font-bold"
                          >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format((formCheck.usingDefaultData!==true && pac.carTypeName==formCheck.carTypeName) ?totalPrice:pac.price)}}</span>
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
                          v-if="pac.carTypeName==formCheck.carTypeName"
                        ></div>
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
                            @click="selectCarPackageDetail(pac)"
                            v-if="pac.carTypeName!==formCheck.carTypeName"
                            data-toggle="collapse"
                            :data-target="`#collapseOne${i}`"
                            aria-expanded="true"
                            :aria-controls="`collapseOne${i}`"
                          >{{$t('general_select')}}</button>
                        </div>
                        <div class="collapse" :id="`collapseExample${i}`" v-html="pac.carTypeName"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section-tour py-2" id="program">
            <div class="row m-0 p-0 py-2">
              <h3 class="text-xh1 info-title font-weight-bold">Thông tin xe</h3>
            </div>
            <div class="row p-0 m-0 py-2 text-08">
              <div class="col-3 m-0 p-0">
                <b>Mô tả</b>
              </div>
              <div class="col-9 m-0 p-0">
                <span>Inova 24 chỗ</span>
              </div>
            </div>
            <div class="row p-0 m-0 py-2 text-08">
              <div class="col-3 m-0 p-0">
                <b>Tính năng</b>
              </div>
              <div class="col-9 m-0 p-0">
                <span class="mr-2">
                  <font-awesome-icon :icon="['fab', 'bluetooth']" class="text-center text-08 mr-2" />Bluetouch
                </span>
                <span class="mr-2">
                  <font-awesome-icon :icon="['fab', 'usb']" class="text-center text-08 mr-2" />Khe cắm USB
                </span>
                <span class="mr-2">
                  <font-awesome-icon icon="globe" class="text-center text-08 mr-2" />Định vị GPS
                </span>
              </div>
            </div>
            <div class="row p-0 m-0 py-2 text-08">
              <div class="col-3 m-0 p-0">
                <b>Thanh toán</b>
              </div>
              <div class="col-9 m-0 p-0">
                <span>Thỏa thuận trong quá trình làm hợp đồng</span>
              </div>
            </div>
            <div class="row p-0 m-0 py-2 text-08">
              <div class="col-3 m-0 p-0">
                <b>Điều khoản</b>
              </div>
              <div class="col-9 m-0 p-0">
                <p>Xe thuê bao gồm xe và lái xe</p>
                <p>Mọi mất mát, hư hỏng so với hiện trạng ban đầu khách hàng sẽ phải chịu hoàn toàn trách nhiệm.</p>
                <p>Thanh toán đầy đủ100% tiền thuê lúc nhận xe.</p>
                <p>Khi trả xe, khách hàng vui lòng vệ sinh sạch sẽ hoặc gửi phụ thu thêm phí rửa xe, hút bụi nếu xe dơ. (sẽ thu nhiều hơn tuỳ theo mức độ dơ)</p>
                <p>Trân trọng cảm, chúc quý khách có những chuyến đi tuyệt vời!</p>
              </div>
            </div>
          </div>
          <div class="section-tour py-2" id="map">
            <div class="row m-0 p-0 py-2">
              <h3 class="text-xh1 info-title font-weight-bold">Ban do</h3>
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
                 <div class="row m-0 p-0" v-if="order.selectDate !==null">
                  <ModalDetailImageComponent :imgs="order.carType.carImages" :root="''" :minheight="'100px'"></ModalDetailImageComponent>
                </div>
                <div class="row m-0 p-0" v-if="order.selectDate ==null">
                  <p>
                    <span class="text-09 font-weight-bold text-muted pr-2">tu</span>
                    <span
                      class="text-xh1 font-bold"
                    >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order.totalPrice)}}</span>
                    <span
                      class="text-09 pl-4 font-weight-bold text-muted text-deco-line-through"
                    >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order.totalPrice*1.3)}}</span>
                  </p>
                </div>
                <div
                  class="row m-0 p-0 pb-4 border-bottom border-bottom-dash"
                  v-if="order.selectDate !==null"
                >
                  <p
                    class="text-x1 w-100 font-bold d-flex justify-content-between align-items-center"
                  >
                    <span>{{order.carType.carTypeName}} - {{carDetailByLang.tripName}}</span>
                    <font-awesome-icon
                      icon="pencil-alt"
                      class="text-center text-info text-08 mr-2"
                    />
                  </p>
                  <p class="text-09 text-muted mb-0">{{order.selectDate}}</p>
                  <p class="text-09 text-muted mb-0">
                    <span class="pr-2">{{order.package.fromLocation}}</span>
                    <span class="pr-2">{{order.package.fromLocation}}</span>
                  </p>
                </div>
                <div
                  class="row m-0 p-0 py-4 justify-content-between align-items-center"
                  v-if="order.selectDate !==null"
                >
                  <span class="text-09 text-muted mb-0">Tong tien</span>
                  <span
                    class="text-xh1 text-info font-bold"
                  >{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice)}}</span>
                </div>
                <div class="row m-0 p-0">
                  <button
                    class="btn btn-danger text-nomal w-100"
                    @click="selectPackage"
                  >{{order.selectDate !==null?'ĐẶT NGAY':'Chọn gói dịch vụ'}}</button>
                </div>
                <div class="row m-0 p-0 text-muted">
                  <p class="my-1 text-08">
                    <font-awesome-icon icon="bolt" class="text-center text-info text-08 mr-2" />Xac nhan don hang tuc thi
                  </p>
                  <p class="my-1 text-08">
                    <font-awesome-icon icon="paper-plane" class="text-center text-08 mr-2" />Nhan bao gia trong vong 1 ngay lam viec
                  </p>
                  <p class="my-1 text-08">
                    <font-awesome-icon icon="medal" class="text-center text-08 mr-2" />Luon dam bao gia tot nhat va dich vu tot nhat
                  </p>
                </div>
              </div>
              <div class="card-footer p-3 py-2 border-top">
                <div
                  class="row w-100 m-0 p-0 d-flex text-08 text-muted justify-content-between align-items-center"
                >
                  <span>
                    <font-awesome-icon icon="fire-alt" class="text-center text-08 mr-2" />20+ người đã đặt
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
import { Carousel, Slide } from "vue-carousel";
import CityService from "@/api/CityService";
import lazyLoadComponent from "@/utils/lazy-load-component";
import SkeletonBox from "@/components/SkeletonBox.vue";
import TourService from "@/api/TourService";
import HotelService from "@/api/HotelService";
import CarService from "@/api/CarService";

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
    })
  },
  name: "CarDetailComponent",
  props: {
    msg: String
  },
  data() {
    return {
      carDetail: [],
      top10PromotionHotel: [],
      componentLoaded: false,
      sectionActive: "thongtin",
      startDate: moment(),
      order: {
        selectDate: null,
        totalPrice: 0,
        package: {},
        carType: {},
        optionService: {}
      },
      formCheck: {
        timeSelect: false,
        packageSelect: false,
        optionService: false,
        usingDefaultData: true,
        carTypeName: ""
      }
    };
  },
  created() {
    this.initial(this.$route.query.tripid);
    this.getPromotionHotel();
  },
  methods: {
    async initial(tripid) {
      this.$store.commit("showHideLoading", true);
      const response = await CarService.getCarTripById(tripid);
      this.carDetail = response.data;

      console.log(this.carDetail);
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
    selectPackage() {
      if (this.order.selectDate == null) {
        window.location.href = "#chon";
        $(".calendarTrigger").addClass("border-outline-danger-x2");
      } else {
        this.$store.dispatch("updateCarOrder", this.order);
        this.$store.dispatch("updateCarDetail", this.carDetailByLang);
        this.$router.push(`/cardetail/confirm?tripid=${this.carDetail._id}`);
      }
    },
    selectCarPackageDetail(item) {
      if (this.formCheck.timeSelect === false) {
        $(".calendarTrigger").addClass("border-outline-danger-x2");
      }
      this.order.carType = item;
      this.formCheck.carTypeName = item.carTypeName;
    }
  },
  computed: {
    carDetailByLang() {
      if (!this.componentLoaded) return null;
      else {
        this.carDetail.tripIntros.forEach(intro => {
          if (
            intro.lang.toUpperCase() ===
            this.$store.state.currentLang.toUpperCase()
          ) {
            this.carDetail.tripName = intro.tripName;
            this.carDetail.fromLocation = intro.fromLocation;
            this.carDetail.toLocation = intro.toLocation;
          }
        });
        return this.carDetail;
      }
    },
    getCarImage() {
      if (!this.componentLoaded) return null;
      else {
        var temp = [];
        this.carDetail.priceByCarType.forEach(intro => {
          temp.push(intro.carImages[0]);
        });
        console.log(temp);
        return temp;
      }
    },
    totalPrice() {
      let timeTotal = 1;
      let total = this.order.carType.price;
      this.order.totalPrice = total;
      return total;
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
.collapse {
  display: none;
}
.collapse.show {
  display: block;
}
</style>
