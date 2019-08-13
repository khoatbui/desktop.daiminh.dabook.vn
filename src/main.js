import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserSecret, faPlay, faSearch, faMedal, faCommentAlt, faGlobeAsia, faChevronRight, faChevronDown, faArrowRight, faCloudSunRain, faUmbrellaBeach, faHotel, faFireAlt, faPercent, faTag, faHeadset, faHeart, faCalendar, faTimesCircle, faPlus, faMinus, faBolt, faPaperPlane, faPencilAlt, faClock,
  faImage, faStar, faPhone, faMapMarkerAlt, faLemon,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker';
import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
import { vsCheckbox, vsIcon } from 'vuesax';
import 'vuesax/dist/vuesax.css';
import App from './App.vue';
import router from './router';
import i18n from './lang/i18n';
import store from './store';
import './registerServiceWorker';
import './assets/app.scss';

library.add(faUserSecret, faPlay, faSearch, faMedal, faCommentAlt, faGlobeAsia, faChevronRight, faChevronDown, faArrowRight, faCloudSunRain, faUmbrellaBeach, faHotel, faFireAlt, faPercent, faTag, faHeadset, faImage, faStar, faHeart, faCalendar, faTimesCircle, faPlus, faMinus, faBolt, faPaperPlane, faPencilAlt, faPhone, faMapMarkerAlt, faLemon, faClock);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('VueSlider', VueSlider);
Vue.config.productionTip = false;
// see docs for available options
const datepickerOptions = {
  colors: {
    selected: '#0149ff',
    inRange: '#FF0039',
    selectedText: '#FFF',
    text: '#565a5c',
    inRangeBorder: '#FF0039',
    disabled: '#fff',
    hoveredInRange: '#FF0039',
  },
};

// make sure we can use it in our components
Vue.use(AirbnbStyleDatepicker, datepickerOptions);
Vue.use(vsCheckbox, vsIcon);
const app = new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App),
});

export default app;
