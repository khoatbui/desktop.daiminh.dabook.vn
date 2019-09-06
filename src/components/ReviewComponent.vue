<template>
  <div class="review-component">
    <div
      class="row w-100 m-0 p-0 pb-3 d-flexjustify-content-start align-items-center border-bottom"
    >
      <div class="col-1 m-0 p-0">
        <span class="bg-info p-2 total-review-point text-x2">4.7</span>
      </div>
      <div class="col-11 m-0 p-0 pl-3">
        <p class="text-info text-x1 m-0">
          <font-awesome-icon icon="star" class="text-center text-1 mr-1" />
          <font-awesome-icon icon="star" class="text-center text-1 mr-1" />
          <font-awesome-icon icon="star" class="text-center text-1 mr-1" />
          <font-awesome-icon icon="star" class="text-center text-1 mr-1" />
        </p>
        <p class="m-0 text-08">{{reviewList.length}} binh luan</p>
      </div>
    </div>
    <div v-if="reviewList.length>0">
      <div
        class="row w-100 m-0 p-0 py-3 d-flexjustify-content-start align-items-start"
        v-for="i in 5"
        :key="i"
      >
        <div class="col-1 m-0 p-0">
          <img class="review-user" src="/img/general/user.jpg" alt="User" />
        </div>
        <div class="col-11 m-0 p-0 pl-3">
          <div class="row">
            <div class="col-12">
              <p class="text-info text-09 m-0">
                <span>
                  <font-awesome-icon icon="star" class="text-center text-1 mr-1" />
                  <font-awesome-icon icon="star" class="text-center text-1 mr-1" />
                  <font-awesome-icon icon="star" class="text-center text-1 mr-1" />
                  <font-awesome-icon icon="star" class="text-center text-1 mr-1" />
                </span>
                <span class="text-main-color text-07 mr-2">Phuong</span>
                <span class="text-muted text-07">28/09/2019</span>
              </p>
              <p class="m-0 text-07 text-muted">Goi dich vu cao cap khach san Vinpear Ha Long</p>
            </div>
            <div class="col-12">
              <div class="second-background p-2">
                <p>Hướng dẫn viên nhiệt tình, chỉ tiếc vì k có n khách sử dụng TA nên phải ghép với đoàn Trung quốc mặc dù có 1 hướng dẫn viên nói TA nữa nhưng vẫn cảm thấy k hài lòng lắm o khoản này, còn lại mọi dvu rất ok. Mọi người nên trải nghiệm đạp xe trên đường: Rail Park nhé, còn Nami thì đẹp k cần bàn nữa a.</p>
                <p class="text-muted text-07 m-0">Binh luan ngay : 28/09/2019</p>
              </div>
              <div class="mt-3 border-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="row w-100 m-0 p-0 py-3 d-flexjustify-content-start align-items-start"
      v-if="reviewList.length==0"
    >
      <div class="col-1 m-0 p-0">
        <img class="review-user" src="/img/general/user.jpg" alt="User" />
      </div>
      <div class="col-11 m-0 p-0 pl-3">
        <div class="row">
          <div class="col-12">
            <p class="text-muted text-09 m-0">
              <span>
                <font-awesome-icon icon="star" class="text-center text-1 mr-1" />
                <font-awesome-icon icon="star" class="text-center text-1 mr-1" />
                <font-awesome-icon icon="star" class="text-center text-1 mr-1" />
                <font-awesome-icon icon="star" class="text-center text-1 mr-1" />
              </span>
            </p>
            <p class="m-0 text-07 text-muted">Goi dich vu cao cap khach san Vinpear Ha Long</p>
          </div>
          <div class="col-12">
            <div class="second-background p-2">
              <p>Chua co binh luan nao cho san pham nay.</p>
            </div>
            <div class="mt-3 border-bottom"></div>
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
    Slide
  },
  name: "ReviewComponent",
  props: {
    productId: String,
    productName:String,
  },
  data() {
    return {
      reviewList: []
    };
  }
};
</script>

<style scoped lang="scss">
.total-review-point {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  color: #fff;
  font-weight: 700;
}
.review-user {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
