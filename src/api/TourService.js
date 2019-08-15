import axios from 'axios';

const api = 'http://103.237.144.222:3000';
const Tour = {
  getAllTour() {
    return axios.get(`${api}/tourlist/`);
  },
  getTopTour() {
    return axios.get(`${api}/tour/m/getlisttourpromotion`);
  },
  getTopPromotionTourPackage() {
    return axios.get(`${api}/tourlist/m/getalltourpromotion`);
  },
  getTourPackageByDestination(destinationId) {
    return axios.get(`${api}/tourlist/m/getalltourbydestination/${destinationId}`);
  },
  getTourPackageByStyle(travelStyleId) {
    return axios.get(`${api}/tourlist/m/getalltourbystyle/${travelStyleId}`);
  },
  GetTourDetailById(tourId) {
    return axios.get(`${api}/tourdetail/m/gettourdetailbyid/${tourId}`);
  },
  GetTourBySearch(key) {
    return axios.post(`${api}/tourlist/m/getalltourbysearch`, { keyword: key });
  },
};

export default Tour;
