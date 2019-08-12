import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserSecret, faPlay, faSearch, faMedal, faCommentAlt, faGlobeAsia, faChevronRight, faChevronDown, faArrowRight, faCloudSunRain, faUmbrellaBeach, faHotel, faFireAlt, faPercent, faTag, faHeadset, faHeart, faCalendar, faTimesCircle, faPlus, faMinus, faBolt, faPaperPlane, faPencilAlt,
  faImage, faStar, faPhone, faMapMarkerAlt, faLemon,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import i18n from './lang/i18n';
import store from './store';
import './registerServiceWorker';
import './assets/app.scss';

library.add(faUserSecret, faPlay, faSearch, faMedal, faCommentAlt, faGlobeAsia, faChevronRight, faChevronDown, faArrowRight, faCloudSunRain, faUmbrellaBeach, faHotel, faFireAlt, faPercent, faTag, faHeadset, faImage, faStar, faHeart, faCalendar, faTimesCircle, faPlus, faMinus, faBolt, faPaperPlane, faPencilAlt, faPhone, faMapMarkerAlt, faLemon);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

const app = new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App),
});

export default app;
