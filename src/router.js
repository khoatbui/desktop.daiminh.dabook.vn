import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

const DestinationView = () => import('./views/DestinationView.vue');
const DestinationAllComponent = () => import('./components/DestinationAllComponent.vue');
const DestinationDetailComponent = () => import('./components/DestinationDetailComponent.vue');
const TravelStyleView = () => import('./views/TravelStyleView.vue');
const TravelStyleAllComponent = () => import('./components/TravelStyleAllComponent.vue');
const TravelStyleDetailComponent = () => import('./components/TravelStyleDetailComponent.vue');
const TravelServiceView = () => import('./views/TravelServiceView.vue');
const MICEView = () => import('./views/MICEView.vue');
const FITView = () => import('./views/FITView.vue');
const TourDetailView = () => import('./views/TourDetailView.vue');
const TourDetail = () => import('./components/TourDetailComponent.vue');
const TourDetailConfirm = () => import('./components/TourDetailConfirmComponent.vue');
const TourDetailRequest = () => import('./components/TourDetailRequestComponent.vue');

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
