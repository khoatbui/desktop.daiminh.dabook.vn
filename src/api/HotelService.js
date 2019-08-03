import axios from 'axios';
const api='http://103.237.144.222:3000'
const Hotel = {
  getAllHotel() {
    return axios.get(`${api}/hotel/`);
  },
  getTopHotel() {
    return axios.get(`${api}/hotel/m/getlisthotelpromotion`);
  },
  getTop10PromotionHotel() {
    return axios.get(`${api}/packagehotelrel/m/getallpromotionpackage`);
  },
  getTopPromotionHotelPackage() {
    return axios.get(`${api}/packagehotelrel/m/getallpromotionpackage`);
  },
  getHotelPackageByDestination(destinationId) {
    return axios.get(`${api}/packagehotelrel/m/getallpackagebydestination/${destinationId}`);
  },
};

export default Hotel;
