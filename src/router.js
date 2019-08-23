import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

const CityView = () => import('./views/DestinationView.vue');
const CityAllComponent = () => import('./components/DestinationAllComponent.vue');
const CityDetailComponent = () => import('./components/CityDetailComponent.vue');
const DestinationView = () => import('./views/DestinationView.vue');
const DestinationAllComponent = () => import('./components/DestinationAllComponent.vue');
const DestinationDetailComponent = () => import('./components/DestinationDetailComponent.vue');
const TravelStyleView = () => import('./views/TravelStyleView.vue');
const TravelStyleAllComponent = () => import('./components/TravelStyleAllComponent.vue');
const TravelStyleDetailComponent = () => import('./components/TravelStyleDetailComponent.vue');
const TravelServiceView = () => import('./views/TravelServiceView.vue');
const MICEView = () => import('./views/MICEView.vue');
const MICEAllComponent = () => import('./components/MICEAllComponent.vue');
const MICEDetailComponent = () => import('./components/MICEDetailComponent.vue');
const FITView = () => import('./views/FITView.vue');
const TourDetailView = () => import('./views/TourDetailView.vue');
const TourDetail = () => import('./components/TourDetailComponent.vue');
const TourDetailConfirm = () => import('./components/TourDetailConfirmComponent.vue');
const HotelDetailView = () => import('./views/HotelDetailView.vue');
const HotelDetail = () => import('./components/HotelDetailComponent.vue');
const HotelDetailConfirm = () => import('./components/HotelDetailConfirmComponent.vue');
const HotelPackageDetailView = () => import('./views/HotelPackageDetailView.vue');
const HotelPackageDetail = () => import('./components/HotelPackageDetailComponent.vue');
const RoomTypeDetailView = () => import('./views/RoomTypeDetailView.vue');
const HotelRoomTypePackageDetail = () => import('./components/HotelRoomTypeDetailComponent.vue');
const CarDetailView = () => import('./views/CarDetailView.vue');
const CarDetail = () => import('./components/CarDetailComponent.vue');
const CarDetailConfirm = () => import('./components/CarDetailConfirmComponent.vue');

const TourView = () => import('./views/TourView.vue');
const TourAllComponent = () => import('./components/TourAllComponent.vue');
const HotelView = () => import('./views/HotelView.vue');
const HotelAllComponent = () => import('./components/HotelAllComponent.vue');
const SearchView = () => import('./views/SearchView.vue');
const SearchAllComponent = () => import('./components/SearchAllComponent.vue');

const VisaDetailComponent = () => import('./components/VisaDetailComponent.vue');

const BlogView = () => import('./views/BlogView.vue');
const BlogAllComponent = () => import('./components/BlogAllComponent.vue');
const BlogDetailComponent = () => import('./components/BlogDetailComponent.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
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
      path: '/city',
      component: CityView,
      children: [
        {
          path: 'detail',
          name: 'citydetail',
          component: CityDetailComponent,
        },
        {
          path: '',
          name: 'cityall',
          component: CityAllComponent,
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
      children: [
        {
          path: 'visa',
          name: 'visaservice',
          component: VisaDetailComponent,
        },
        {
          path: 'insurance',
          name: 'insuranceservice',
          component: TravelStyleDetailComponent,
        },
        {
          path: 'car',
          name: 'carservice',
          component: TravelStyleDetailComponent,
        },
        {
          path: 'hotel',
          name: 'hotelservice',
          component: HotelAllComponent,
        },
        {
          path: '',
          name: 'travelserviceall',
          component: TravelStyleAllComponent,
        },
      ],
    },
    {
      path: '/mice',
      name: 'mice',
      component: MICEView,
      children: [
        {
          path: 'detail',
          name: 'micedetail',
          component: MICEDetailComponent,
        },
        {
          path: '',
          name: 'miceall',
          component: MICEAllComponent,
        },
      ],
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
          path: '',
          name: 'tourdetailsection',
          component: TourDetail,
        },
      ],
    },
    {
      path: '/hoteldetail',
      component: HotelDetailView,
      children: [
        {
          path: 'confirm',
          name: 'hoteldetail',
          component: HotelDetailConfirm,
        },
        {
          path: '',
          name: 'hoteldetailsection',
          component: HotelDetail,
        },
      ],
    },
    {
      path: '/roomdetail',
      component: RoomTypeDetailView,
      children: [
        {
          path: 'confirm',
          name: 'roomdetailconfirm',
          component: HotelDetailConfirm,
        },
        {
          path: '',
          name: 'roomdetailsection',
          component: HotelRoomTypePackageDetail,
        },
      ],
    },
    {
      path: '/hotelpackagedetail',
      component: HotelPackageDetailView,
      children: [
        {
          path: 'confirm',
          name: 'packagedetail',
          component: HotelDetailConfirm,
        },
        {
          path: '',
          name: 'hotelpackagedetailsection',
          component: HotelPackageDetail,
        },
      ],
    },
    {
      path: '/cardetail',
      component: CarDetailView,
      children: [
        {
          path: 'confirm',
          name: 'cardetail',
          component: CarDetailConfirm,
        },
        {
          path: '',
          name: 'cardetailsection',
          component: CarDetail,
        },
      ],
    },
    {
      path: '/tour',
      component: TourView,
      children: [
        {
          path: 'search',
          name: 'toursearch',
          component: CarDetailConfirm,
        },
        {
          path: '',
          name: 'tourview',
          component: TourAllComponent,
        },
      ],
    },
    {
      path: '/hotel',
      component: HotelView,
      children: [
        {
          path: 'search',
          name: 'hotelsearch',
          component: CarDetailConfirm,
        },
        {
          path: '',
          name: 'hotelview',
          component: HotelAllComponent,
        },
      ],
    },
    {
      path: '/search',
      component: SearchView,
      children: [
        {
          path: 'search',
          name: 'allsearch',
          component: CarDetailConfirm,
        },
        {
          path: '',
          name: 'defaultsearch',
          component: SearchAllComponent,
        },
      ],
    },
    {
      path: '/blog',
      component: BlogView,
      children: [
        {
          path: 'detail',
          name: 'blogdetail',
          component: BlogDetailComponent,
        },
        {
          path: '',
          name: 'blogall',
          component: BlogAllComponent,
        },
      ],
    },
  ],
});
