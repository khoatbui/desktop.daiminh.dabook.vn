<template>
  <nav class="navbar navbar-expand-lg" v-bind:class="classObject" color-on-scroll="100">
    <div class="container">
      <div class="navbar-translate">
        <a class="navbar-brand" href="/">
          <img src="/img/new_logo.jpg" alt height="40px;" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="/" class="nav-link">
              <i class="fa fa-menu"></i> {{$t('na_home')}}
            </a>
          </li>
          <NavigationDestinationComponent></NavigationDestinationComponent>
          <NavigationTravelStyleComponent></NavigationTravelStyleComponent>
          <NavigationTravelServiceComponent></NavigationTravelServiceComponent>
          <NavigationMICEComponent></NavigationMICEComponent>
          <li class="nav-item">
            <a href="/fit" class="nav-link">
              <i class="fa fa-menu"></i> {{$t('na_fit')}}
            </a>
          </li>
          <li class="nav-item">
            <a href="/aboutus" class="nav-link">
              <i class="fa fa-menu"></i>
             {{$t('na_aboutus')}}
            </a>
          </li>
          <li class="nav-item">
            <ul class="navbar-nav">
              <li
              class="cursor-pointer"
                :class="{'hide':getLang !=la.value}"
                v-for="(la,i) in optionLangs"
                v-bind:key="'lang'+i"
                @click="callSetLangActions(la)"
              >
                <a class="nav-link">
                  <img class="language-icon" :src="la.img" :alt="la.text" />
                  | {{la.text}}
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item d-inline-block d-sm-inline-block d-md-none d-lg-none d-xl-none">
            <ul
              class="navbar-nav footer-social d-flex flex-row justify-content-around align-items-center p-4"
            >
              <li>
                <a href="#">
                  <img src="/img/social/kakao.png" alt />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/img/social/facebook.png" alt />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/img/social/skype.png" alt />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/img/social/twitter.png" alt />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/img/social/zalo.png" alt />
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item text-info text-x1 font-bold animation-jump">
            <font-awesome-icon icon="headset" class="text-08 text-center ml-2 mr-1" />19001542
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import moment from "moment";
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
  name: "NavigationComponent",
  components: {
    NavigationDestinationComponent: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/NavigationDestinationComponent.vue"),
      loading: SkeletonBox
    }),
    NavigationTravelStyleComponent: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/NavigationTravelStyleComponent.vue"),
      loading: SkeletonBox
    }),
    NavigationTravelServiceComponent: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/NavigationTravelServiceComponent.vue"),
      loading: SkeletonBox
    }),
    NavigationMICEComponent: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/NavigationMICEComponent.vue"),
      loading: SkeletonBox
    })
  },
  props: {
    isTran: true,
    isFixed: true
  },
  data() {
    return {
      classObject: {
        "navbar-color-on-scroll navbar-transparent": this.isTran,
        "navbar-no-transparent": !this.isTran,
        "fixed-top": this.isFixed,
        "mb-0": !this.isFixed
      },
      optionLangs: [
        {
          text: "EN",
          img: "/img/language/united-kingdom.png",
          value: "en"
        },
        {
          text: "KO",
          img: "/img/language/south-korea.png",
          value: "ko"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    callSetLangActions(item) {
      if (item.value === "en") {
        this.$store.dispatch("setLang", "ko");
        return;
      } else if (item.value === "ko") {
        this.$store.dispatch("setLang", "en");
        return;
      } else {
        this.$store.dispatch("setLang", "en");
        return;
      }
    }
  },
  computed: {
    getLang() {
      return this.$i18n.locale;
    }
  }
};
</script>

<style scoped lang="scss">
.animation-jump {
  -webkit-animation: jump 1s infinite; /* Safari 4.0 - 8.0 */
  animation: jump 1s infinite;
}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes jump {
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(2px);
  }
  50% {
    transform: translateY(4px);
  }
  100% {
    transform: translateY(2px);
  }
}

/* Standard syntax */
@keyframes jump {
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(2px);
  }
  50% {
    transform: translateY(4px);
  }
  100% {
    transform: translateY(2px);
  }
}
.navbar{
  font-size: 14px !important;
  color:#3c4858 !important;
}
.navbar.navbar-expand-lg.navbar-color-on-scroll.fixed-top.navbar-transparent{
  color:#FFFFFF !important;
}
.nav-item a,.nav-item.fullwidth-dropdown a{
  font-weight: bold !important;
}
</style>
