<template>
  <div class="request-custom-car">
    <div class="row m-0 p-0">
      <div class="col-12 m-0 p-0">
        <div class="card shadow-none gradient-card m-0 p-0">
          <div class="card-body m-0 p-0">
            <div
              class="row m-0 p-2 custom-bg-danger text-white d-flex justify-content-between align-items-center"
              data-toggle="collapse"
              :data-target="`#collapseCustomCar${colapsekey}`"
              aria-expanded="false"
              :aria-controls="`collapseCustomCar${colapsekey}`"
            >
              <h6 class="p-0 text-x1 text-nomal">{{$t(`${quote}`)}}</h6>
              <button class="custom-btn">{{$t(`${action}`)}}</button>
            </div>
            <div class="collapse" :id="`collapseCustomCar${colapsekey}`">
              <div class="row m-0 p-0">
                <div class="col-6">
                    <img class="w-100" src="/img/general/car.jpg" alt="">
                </div>
                <div class="col-6">
                  <div class="row m-0 p-3">
                    <div class="col-6 py-1 m-0">
                      <label class="text-06 mb-1" for="iname">{{$t('general_label_pickuplocation')}}</label>
                      <input
                        class="custom-form-input"
                        type="text"
                        name="iname"
                        v-model="customInfo.pickUp"
                      />
                    </div>
                    <div class="col-6 py-1 m-0">
                      <label class="text-06 mb-1" for="iname">{{$t('general_label_dropoff')}}</label>
                      <input
                        class="custom-form-input"
                        type="text"
                        name="iname"
                        v-model="customInfo.dropOff"
                      />
                    </div>
                     <div class="col-12 py-1">
                       <label class="text-06 mb-1" for="iname">{{$t('ptourall_filter_cartype')}}</label>
                       <div class="d-flex justify-content-start align-items-center flex-wrap w-100 m-0">
                        <vs-radio class="mr-2 text-08" v-for="(car,i) in carTypeByLang" :key="'type'+i" v-model="customInfo.carType" vs-name="carType" :vs-value="car">{{car.carTypeName}}</vs-radio>
                       </div>
                     </div>
                    <div class="col-12 py-1">
                      <label
                        class="text-06 mb-1"
                        for="iname"
                      >{{$t('default_contact_form_yourname')}}</label>
                      <input
                        class="custom-form-input"
                        type="text"
                        name="iname"
                        v-model="customInfo.fullName"
                      />
                    </div>
                    <div class="col-12 py-1">
                      <label
                        class="text-06 mb-1"
                        for="imail"
                      >{{$t('default_contact_form_youremail')}}</label>
                      <input
                        class="custom-form-input"
                        type="text"
                        name="imail"
                        v-model="customInfo.email"
                      />
                    </div>
                    <div class="col-12 py-1">
                      <label
                        class="text-06 mb-1"
                        for="iphone"
                      >{{$t('default_contact_form_yourphone')}}</label>
                      <input
                        class="custom-form-input"
                        type="text"
                        name="iphone"
                        v-model="customInfo.phone"
                      />
                    </div>
                    <div class="col-12 py-1">
                      <label
                        class="text-06 mb-1"
                        for="imessage"
                      >{{$t('default_contact_form_yourrequest')}}</label>
                      <textarea
                        class="custom-form-input"
                        type="text"
                        name="imessage"
                        v-model="customInfo.message"
                      ></textarea>
                    </div>
                    <div class="col-12 py-1 text-right">
                      <button
                        class="btn btn-sm custom-bg-danger border-radius-100"
                      >{{$t('default_contact_form_btnsendrequest')}}</button>
                    </div>
                    <div class="col-12 py-1 text-right">
                      <small class="text-06">
                        <font-awesome-icon icon="headset" class="text-08 text-center" />Hotline
                        <span class="text-danger text-08 font-weight-bold">19001542</span> 24/7
                      </small>
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
</template>
<script>
import moment from "moment";
import i18n from "@/lang/i18n";
import { Carousel, Slide } from "vue-carousel";
import lazyLoadComponent from "@/utils/lazy-load-component";
import SkeletonBox from "@/components/SkeletonBox.vue";

import "@lazy-copilot/datetimepicker/dist/datetimepicker.css";
import { DateTimePicker } from "@lazy-copilot/datetimepicker";
import CarService from "@/api/CarService";

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
  },
  name: "CarCustomRequestComponent",
  props: {
    quote: String,
    action: String,
    colapsekey:Number,
  },
  data() {
    return {
      carType:[],
      customInfo: {
        pickUp: "",
        fullName: "",
        email: "",
        password: "",
        phone: "",
        message: ""
      }
    };
  },
  watch: {},
  created() {
    this.getCarType();
  },
  methods: {
    async getCarType() {
      const response = await CarService.getCarType();
      this.carType = response.data;
    },
  },
  computed: {
    carTypeByLang () {
      return this.carType;
    },
  },
  watch: {}
};
</script>

<style scoped lang="scss">
.collapse {
  display: none;
}
.collapse.show {
  display: block;
}
.custom-btn {
  border: none;
  border-radius: 100px;
  width: 100px;
  height: 30px;
  line-height: 15px;
  background: #fff;
  color: #f9748f;
  cursor: pointer;
}
.custom-btn:hover {
  box-sizing: border-box;
  border: 2px solid #f9748f;
  box-shadow: 0 2px 2px 0 #f78ca0, 0 3px 1px -2px #f78ca0, 0 1px 5px 0 #f78ca0;
}
</style>
