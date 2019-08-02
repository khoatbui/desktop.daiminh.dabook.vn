import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

import DestinationView from './views/DestinationView.vue';
import DestinationAllComponent from './components/DestinationAllComponent.vue';
import DestinationDetailComponent from './components/DestinationDetailComponent.vue';
import TravelStyleView from './views/TravelStyleView.vue';
import TravelStyleAllComponent from './components/TravelStyleAllComponent.vue';
import TravelStyleDetailComponent from './components/TravelStyleDetailComponent.vue';
import TravelServiceView from './views/TravelServiceView.vue';
import MICEView from './views/MICEView.vue';
import FITView from './views/FITView.vue';

import TourDetailView from './views/TourDetailView.vue';
import TourDetail from './components/TourDetailComponent.vue';
import TourDetailConfirm from './components/TourDetailConfirmComponent.vue';
import TourDetailRequest from './components/TourDetailRequestComponent.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/destination',
      name: 'destination',
      component: DestinationView,
      children: [
        {
          path: 'detail',
          name: 'destinationdetail',
          component: DestinationDetailComponent,
        },
        {
          path: '',
          name: 'destinatioall',
          component: DestinationAllComponent,
        },
      ],
    },
    {
      path: '/travelstyle',
      name: 'travelstyle',
      component: TravelStyleView,
      children: [
        {
          path: 'detail',
          name: 'travelstyledetail',
          component: TravelStyleDetailComponent,
        },
        {
          path: '',
          name: 'travelstyleall',
          component: TravelStyleAllComponent,
        },
      ],
    },
    {
      path: '/travelservice',
      name: 'travelservice',
      component: TravelServiceView,
    },
    {
      path: '/mice',
      name: 'mice',
      component: MICEView,
    },
    {
      path: '/fit',
      name: 'fit',
      component: FITView,
    },
    {
      path: '/tourdetail',
      name: 'tourdetail',
      component: TourDetailView,
      children: [
        {
          path: 'confirm',
          name: 'tourdetail',
          component: TourDetailConfirm,
        },
        {
          path: 'request',
          name: 'tourdetailrequest',
          component: TourDetailRequest,
        },
        {
          path: '',
          name: 'tourdetailsection',
          component: TourDetail,
        },
      ],
    },
  ],
});
