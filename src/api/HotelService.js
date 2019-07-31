import axios from 'axios';

const Hotel = {
  getAllHotel() {
    return axios.get('http://103.237.144.222:3000/hotel/');
  },
  getTopHotel() {
    return axios.get('http://103.237.144.222:3000/hotel/m/getlisthotelpromotion');
  },
  getTopPromotionHotelPackage(){
    return axios.get('http://103.237.144.222:3000/packagehotelrel/m/getallpromotionpackage');
    
  }
};

export default Hotel;
