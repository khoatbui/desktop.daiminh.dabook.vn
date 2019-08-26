<template>
  <div class="tour-detail" v-if="componentLoaded.mice">
    <div class="container py-4 my-0">
      <ModalDetailImageComponent :imgs="miceByLang.miceImages" :root="''"></ModalDetailImageComponent>
    </div>
    <div class="container py-4 my-0 custom-sticky-component">
      <div class="row m-0 p-0">
        <div class="col-12 w-100 my-0 p-0 custom-sticky-top sticky-z-index-100 border-bottom">
          <ul
            class="w-100 d-flex flex-row justify-content-start align-items-center bg-white m-0 p-2 sticky-tab"
          >
            <li class="px-4">
              <a
                href="#thongtin"
                @click="sectionActive='thongtin'"
                v-bind:class="{'section-active':sectionActive=='thongtin'}"
              >{{$t('general_sticky_tab_info')}}</a>
            </li>
            <li class="px-4">
              <a
                href="#slide"
                @click="sectionActive='slide'"
                v-bind:class="{'section-active':sectionActive=='slide'}"
              >{{$t('general_sticky_tab_slide')}}</a>
            </li>
            <li class="px-4">
              <a
                href="#danhgia"
                @click="sectionActive='danhgia'"
                v-bind:class="{'section-active':sectionActive=='danhgia'}"
              >{{$t('general_sticky_tab_vote')}}</a>
            </li>
            <li class="px-4">
              <a
                href="#blog"
                @click="sectionActive='blog'"
                v-bind:class="{'section-active':sectionActive=='blog'}"
              >Blog</a>
            </li>
          </ul>
        </div>
        <div class="col-8 m-0 p-0 pr-3 text-left">
          <div class="section-tour py-2" id="thongtin">
            <div class="row m-0 p-0 py-2 d-flex justify-content-between align-items-center">
              <h3 class="text-xh1 font-weight-bold">{{miceByLang.miceName}}</h3>
              <font-awesome-icon icon="heart" class="text-center text-1" />
            </div>
            <div class="row m-0 p-0 py-4 text-08" v-html="miceByLang.miceIntro"></div>
          </div>

          <div class="section-tour w-100 py-2" id="slide">
            <div class="row m-0 p-0 py-2 d-flex justify-content-between align-items-center">
              <h3 class="text-xh1 info-title font-weight-bold">{{$t('general_sticky_tab_slide')}}</h3>
            </div>
            <div class="row p-0 m-0 py-2 text-08 d-flex justify-content-between align-items-center">
              <div class="col-12">
                <carousel :per-page="1" :navigation-enabled="true" :paginationEnabled="false">
                  <slide v-for="(image,i) in miceByLang.miceImages" :key="i">
                    <img class="image-mice border-radius-10" :src="`/smimg/${image.filePath.slice(0, -3)}jpg`" />
                  </slide>
                </carousel>
              </div>
            </div>
          </div>
          <div class="section-tour py-2" id="danhgia">
            <div class="row m-0 p-0 py-2 d-flex justify-content-between align-items-center">
              <h3 class="text-xh1 info-title font-weight-bold">{{$t('general_sticky_tab_vote')}}</h3>
            </div>
            <div class="row p-0 m-0 py-2 text-08 d-flex justify-content-between align-items-center">
              <p>{{$t('general_sticky_tab_vote_empty')}}</p>
            </div>
          </div>
          <div
            class="section-tour py-2"
            id="blog"
            v-if="componentLoaded.mice && miceBlogByLang.length>0"
          >
            <div class="row m-0 p-0 py-2 d-flex justify-content-between align-items-center">
              <h3 class="text-xh1 info-title font-weight-bold">{{$t('general_sticky_tab_blog')}}</h3>
            </div>
            <div
              class="row p-0 m-0 py-2 text-08 d-flex justify-content-between align-items-center accordion"
              id="accordionExample"
            >
              <div class="col-12 px-3 py-1" v-for="(blog,i) in miceBlogByLang" :key="'tsja'+i">
                <div class="card w-100 shadow-none my-3 hotel-card second-background">
                  <div class="row h-100 p-0 m-0">
                    <div class="col-4 img-card h-100 p-0 m-0">
                      <img
                        class="image-package cursor-pointer"
                        v-bind:class="{'small-loading-img':blog.blogImages.length==0}"
                        v-bind:src="blog.blogImages.length>0?`/smimg/${blog.blogImages[0].filePath.slice(0, -3)}jpg`:'/img/defaultloading.gif'"
                        v-bind:alt="blog.blogName"
                        @click="redirectToBlogDetail(blog)"
                      />
                    </div>
                    <div class="col-8 p-3 m-0">
                      <div class="card-body p-0">
                        <div
                          class="card-title m-0 text-color-50 text-06 d-flex justify-content-between align-items-center cursor-pointer"
                          @click="redirectToBlogDetail(blog)"
                        >
                          <h6
                            class="card-title text-x1 text-main-color m-0 mb-1 cursor-pointer flex-grow"
                          >
                            <span class="text-info text-x1 mr-2">
                              <font-awesome-icon icon="bolt" class="text-center" />
                            </span>
                            {{blog.blogName}}
                          </h6>
                          <span class="shadow">
                            <font-awesome-icon icon="heart" class="text-x1 text-center text-muted" />
                          </span>
                        </div>
                        <div class="text-left text-08 text-2line" v-html="blog.blogIntro"></div>
                        <div class="text-muted text-08 d-flex justify-content-between align-items-center">
                            <span>
                            <font-awesome-icon
                              icon="marker"
                              class="text-center mr-2 text-07 text-muted"
                            />
                            <span>{{moment(blog.createDate).format('YYYY-DD-MM')}} by <span class="text-info font-bold">{{blog.createBy}}</span></span></span>
                            <span>
                              <font-awesome-icon
                          icon="arrow-right"
                          class="text-1 text-center text-danger cursor-pointer"
                          @click="redirectToBlogDetail(blog)"
                        />
                            </span>
                        </div>
                        <div class="w-100 m-0 p-0 d-flex justify-content-between align-items-end"></div>
                      </div>
                    </div>
                  </div>
                </div>
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
                      <div class="col-6 text-left">
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
                      <div class="col-6 text-left">
                        <label
                          class="text-08 mb-1"
                          for="ilastname"
                          v-bind:class="formCheck.lastName.label"
                        >{{$t('general_label_lastname')}}</label>
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
                      <div class="col-6 text-left">
                        <label class="text-08 mb-1" for="icountry">{{$t('general_label_country')}}</label>
                        <input
                          class="custom-form-input custom-form-input-md border-radius-5"
                          type="text"
                          id="icountry"
                          v-model="customer.country"
                        />
                      </div>
                      <div class="col-6 text-left">
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
                    class="btn btn-danger text-white text-nomal w-100"
                    @click="requestBooking"
                  >{{$t('general_btn_requestadvisory')}}</a>
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
import i18n from "@/lang/i18n";
import { Carousel, Slide } from "vue-carousel";
import lazyLoadComponent from "@/utils/lazy-load-component";
import SkeletonBox from "@/components/SkeletonBox.vue";
import MICEService from "@/api/MICEService";
import BlogService from "@/api/BlogService";

import "@lazy-copilot/datetimepicker/dist/datetimepicker.css";
import { DateTimePicker } from "@lazy-copilot/datetimepicker";

export default {
  components: {
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
  name: "MICEDetailComponent",
  props: {
    msg: String
  },
  data() {
    return {
      moment:moment,
      componentLoaded: {
        mice: false,
        miceBlog: false
      },
      sectionActive: "thongtin",
      mice: {},
      miceBlog: [],
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
      order: {
        guest: {
          guest: { qty: 1 },
          child: { qty: 0 }
        }
      },
      maplink:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119175.80490038882!2d105.7844322251528!3d21.022924670241864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454aa2523524d%3A0x23546fd77caee54b!2zQ8O0bmcgVHkgVG5oaCBUaMawxqFuZyBN4bqhaSBE4buLY2ggVuG7pSAmIER1IEzhu4tjaCDEkOG6oWkgTWluaCAtIMSQ4bqhaSBNaW5oIFRyYXZlbA!5e0!3m2!1svi!2s!4v1566322188277!5m2!1svi!2s" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    };
  },
  watch: {
    // call again the method if the route changes
    '$route': 'initial'
  },
  created() {
    this.initial();
  },
  methods: {
    initial() {
      this.initialWithParam(this.$route.query.miceid);
    this.getMICEBlogList(this.$route.query.miceid);
    },
    async initialWithParam(id) {
      const responseservice = await MICEService.getMICEById(id);
      this.mice = responseservice.data;
      this.componentLoaded.mice = true;
    },
    async getMICEBlogList(id) {
      const responseservice = await BlogService.getBlogByMICEId(id);
      this.miceBlog = responseservice.data;
      this.componentLoaded.miceBlog = true;
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
    requestBooking() {
      if (this.formChecking()) {
        $("#bookingModal").modal("show");
      }
    },
    redirectToBlogDetail(blog) {
      this.$router.push(
        `/blog?blogid=${blog._id}`
      );
    }
  },
  computed: {
    miceByLang() {
      if (this.componentLoaded.mice === false) {
        return;
      }
      this.mice.miceIntros.forEach(area => {
        if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
          this.mice.miceName = area.miceName;
          this.mice.miceIntro = area.miceIntro;
        }
      });
      return this.mice;
    },
    miceBlogByLang() {
      if (this.componentLoaded.miceBlog === false) {
        return;
      }
      this.miceBlog.forEach(element => {
        element.blogIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.blogName = area.blogName;
            element.blogIntro = area.blogIntro;
          }
        });
      });
      return this.miceBlog;
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
.image-mice {
  max-width: 100%;
  width: 100%;
}
</style>
