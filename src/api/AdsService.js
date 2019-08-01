import axios from 'axios';

const Ads = {
  getAllAds() {
    return axios.get('http://103.237.144.222:3000/ads/');
  },
  getAllAdsByType(parram) {
    console.log(parram);
    return axios.get(`http://103.237.144.222:3000/ads/m/getadsbytype/${parram}`);
  },
  getTopAds() {
    return axios.get('http://103.237.144.222:3000/ads/m/getlistadspromotion');
  },
  getTopPromotionAdsPackage() {
    return axios.get('http://103.237.144.222:3000/adslist/m/getalladspromotion');
  },
};

export default Ads;
