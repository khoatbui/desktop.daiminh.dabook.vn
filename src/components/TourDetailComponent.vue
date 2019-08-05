<template>
  <div class="tour-detail">
    <!-- <BackgroundHeaderComponent :destination="destination"></BackgroundHeaderComponent> -->
    <div class="main-body">
      <div class="container pt-4">
        <TourDetailImageComponent></TourDetailImageComponent>
      </div>
      <div class="container pt-4">
        <div class="row m-0 p-0">
          <div class="col-8 m-0 p-0 pr-3 text-left">
            <div class="section-tour">
              <div class="row m-0 p-0 py-2 d-flex justify-content-between align-items-center">
                <h3 class="text-xh1 font-weight-bold">{{tourDetailByLang.tourId.tourName}}</h3>
                <font-awesome-icon icon="heart" class="text-center text-1" />
              </div>
              <div
                class="row p-0 m-0 py-2 text-08 d-flex justify-content-between align-items-center"
              >
                <span class="d-flex align-items-center">
                  <font-awesome-icon icon="calendar" class="text-center mr-2" />Thoi luong hanh trinh : 1gio
                </span>
                <span class="d-flex align-items-center">
                  <font-awesome-icon icon="tag" class="text-center mr-2" />Ve theo tour co dinh
                </span>
                <span class="d-flex align-items-center">
                  <font-awesome-icon icon="times-circle" class="text-center mr-2" />Khong the doi ve
                </span>
              </div>
              <div
                class="row m-0 p-0 py-2 text-08"
              >{{tourDetailByLang.tourId.tourIntro}}</div>
            </div>
            <div class="section-tour">
              <div class="row m-0 p-0 py-2 d-flex justify-content-between align-items-center">
                <h3 class="text-xh1 font-weight-bold">Danh gia</h3>
              </div>
              <div
                class="row p-0 m-0 py-2 text-08 d-flex justify-content-between align-items-center"
              >
                <p>Hien chua co danh gia nao cho tour nay</p>
              </div>
            </div>
             <div class="section-tour second-background">
              <div class="row m-0 p-0 py-2 d-flex justify-content-between align-items-center">
                <h3 class="text-xh1 font-weight-bold">Chon</h3>
              </div>
              <div class="row p-0 m-0 py-2 text-08 d-flex justify-content-between align-items-center">
                <div class="col-4 py-1">
                  <label class="text-06 mb-1" for="iname">Chon ngay di</label>
                  <input class="custom-form-input" type="text" name="iname"/>
                </div>
                <div class="col-12 p-3">
                  <div class="row p-0 m-0 bg-white border-radius-5 border border-info">
                    <div class="col-12 py-2 d-flex justify-content-between align-items-center border-bottom">
                      <span class="text-x1 font-weight-bold">Ve ngoi du thuyen tai Cau Quay</span>
                      <span>
                      
                    <span
                      class="text-06  pr-4 font-weight-bold text-muted text-deco-line-through"
                    >375,000 VND</span>
                    <span class="text-08 font-weight-bold text-muted pr-2">tu</span>
                    <span class="text-x1 font-weight-bold">375,000 VND</span>
                  </span>
                    </div>
                    <div class="col-12 py-3 d-flex justify-content-between align-items-center border-bottom">
                      <div class="row w-100 p-0 m-0">
                        <div class="col-6 p-0 m-0">
                          <div class="row m-0 p-0">
                            <div class="col-6 m-0 p-0  d-flex flex-column justify-content-between align-items-start">
                              <p class=" mb-0"><span class="text-08 font-weight-bold">Nguoi lon</span><span class="text-07 text-muted"> ( Age 13-99)</span></p>
                              <p class="text-09 text-muted mb-0"> vnd 365.000 / khach</p>
                              <p class="text-07 text-muted text-deco-line-through mb-0"> vnd 365.000</p>
                            </div>
                            <div class="col-6 m-0 p-0 d-flex justify-content-between align-items-start">
                              <div class="row">
                                <div class="col-4 text-right p-0">
                                  <button class="btn-plus"> <font-awesome-icon icon="minus" class="text-center text-1" /> </button>
                                </div>
                                <div class="col-4">
                                  <input class="custom-form-input"/>
                                </div>
                                <div class="col-4 text-left p-0">
                                  <button class="btn-plus"> <font-awesome-icon icon="plus" class="text-center text-1" /> </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-6 p-0 m-0">
                          <div class="row m-0 p-0">
                            <div class="col-6 m-0 p-0 flex-column d-flex justify-content-between align-items-start">
                              <p class=" mb-0"><span class="text-08 font-weight-bold">Tre em</span><span class="text-07 text-muted"> ( Age 00 - 13)</span></p>
                              <p class="text-09 text-muted mb-0"> vnd 365.000 / khach</p>
                            </div>
                            <div class="col-6 m-0 p-0 d-flex justify-content-between align-items-start">
                              <div class="row">
                                <div class="col-4 text-right p-0">
                                  <button class="btn-plus"> <font-awesome-icon icon="minus" class="text-center text-1" /> </button>
                                </div>
                                <div class="col-4">
                                  <input class="custom-form-input"/>
                                </div>
                                <div class="col-4 text-left p-0">
                                  <button class="btn-plus"> <font-awesome-icon icon="plus" class="text-center text-1" /> </button>
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
            <div class="section-tour">
              <div class="row m-0 p-0 py-2">
                <h3 class="text-xh1 font-weight-bold">Program</h3>
              </div>
              <div class="row p-0 m-0 py-2 text-08" v-html="tourDetailByLang.program">
              </div>
            </div>
            
             <div class="section-tour">
              <div class="row m-0 p-0 py-2">
                <h3 class="text-xh1 font-weight-bold">Service Include</h3>
              </div>
              <div
                class="row p-0 m-0 py-2 text-08"
               v-html="tourDetailByLang.serviceInclude">
              </div>
            </div>
            <div class="section-tour">
              <div class="row m-0 p-0 py-2 ">
                <h3 class="text-xh1 font-weight-bold">Service Not Include</h3>
              </div>
              <div
                class="row p-0 m-0 py-2 text-08 "
                v-html="tourDetailByLang.serviceNotInclude">>
              </div>
            </div>
            <div class="section-tour">
              <div class="row m-0 p-0 py-2">
                <h3 class="text-xh1 font-weight-bold">Should Take</h3>
              </div>
              <div
                class="row p-0 m-0 py-2 text-08"
                v-html="tourDetailByLang.shouldTake"
              >
              </div>
            </div>
            <div class="section-tour">
              <div class="row m-0 p-0 py-2">
                <h3 class="text-xh1 font-weight-bold">Ban do</h3>
              </div>
              <div
                class="row p-0 m-0 py-2 text-08"
              >
              <div class="map border-radius-10 w-100">
                <iframe class="w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59587.97785448771!2d105.80194413492788!3d21.02273601629448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1565026713918!5m2!1svi!2s" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
              </div>
              </div>
            </div>
          </div>
          <div class="col-4 m-0 p-0 pl-3 custom-sticky-component">
            <div class="card custom-sticky-top-1rem">
              <div class="card-body p-3">
                <div class="row m-0 p-0">
                  <p>
                    <span class="text-09 font-weight-bold text-muted pr-2">tu</span>
                    <span class="text-xh1 font-weight-bold">375,000 VND</span>
                    <span
                      class="text-09 pl-4 font-weight-bold text-muted text-deco-line-through"
                    >375,000 VND</span>
                  </p>
                </div>
                <div class="row m-0 p-0">
                  <button class="btn btn-danger text-nomal w-100">Chon goi dich vu</button>
                </div>
                <div class="row m-0 p-0  text-muted">
                  <p class="my-1 text-08"><font-awesome-icon icon="bolt" class="text-center text-info text-08 mr-2" />Xac nhan don hang tuc thi</p>
                  <p class="my-1 text-08"><font-awesome-icon icon="paper-plane" class="text-center text-08 mr-2" />Nhan bao gia trong vong 1 ngay lam viec</p>
                  <p class="my-1 text-08"><font-awesome-icon icon="medal" class="text-center text-08 mr-2" />Luon dam bao gia tot nhat va dich vu tot nhat</p>
                </div>
              </div>
              <div class="card-footer p-3 py-2 border-top">
                <div
                  class="row w-100 m-0 p-0 d-flex text-08 text-muted justify-content-between align-items-center"
                >
                  <span>
                    <font-awesome-icon icon="fire-alt" class="text-center text-08 mr-2" />8K+ người đã đặt
                  </span>
                  <span class="star font-weight-bold text-info">
                    5.0
                    <font-awesome-icon icon="star" class="text-center text-06" />
                    <font-awesome-icon icon="star" class="text-center text-06" />
                    <font-awesome-icon icon="star" class="text-center text-06" />
                    <font-awesome-icon icon="star" class="text-center text-06" />
                    <font-awesome-icon icon="star" class="text-center text-06" />(209)
                  </span>
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
import TourService from '@/api/TourService'

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
    BackgroundHeaderComponent: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/BackgroundHeaderComponent.vue"),
      loading: SkeletonBox
    })
  },
  name: "TopCityComponent",
  props: {
    msg: String
  },
  data() {
    return {
      tourDetail: [],
      selectedPayment: {}
    };
  },
  mounted() {
    this.initial(this.$route.query.tourid);
  },
  methods: {
    async initial(tourId) {
      this.$store.commit("showHideLoading", true);
      const response = await TourService.GetTourDetailById(tourId);
      this.tourDetail = randomArray(response.data);
      console.log('tour==============')
      console.log(this.tourDetail);
      this.$store.commit("showHideLoading", false);
    }
  },
  computed: {
    tourDetailByLang(){
      var result= this.tourDetail.filter(item =>{
        return item.lang.toUpperCase()==this.$store.state.currentLang.toUpperCase();
      })
      console.log(result);
      result[0].tourId.tourIntros.forEach(intro => {
          if (intro.lang.toUpperCase()===this.$store.state.currentLang.toUpperCase()) {
            result[0].tourId.tourIntro=intro.tourIntro;
             result[0].tourId.tourName=intro.tourName;
              result[0].tourId.from=intro.from;
              result[0].tourId.to=intro.to;
          }
        });
      return result[0];
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
