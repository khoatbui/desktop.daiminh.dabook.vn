import axios from 'axios';

const api = 'http://103.237.144.222:3000';
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
  getTopPromotionHotel() {
    return axios.get(`${api}/hotel/m/getlisthotelpromotion`);
  },
  getHotelPackageByDestination(destinationId) {
    return axios.get(`${api}/packagehotelrel/m/getallpackagebydestination/${destinationId}`);
  },
  getHotelById(hotelId) {
    return axios.get(`${api}/hotel/m/gethotelbyid/${hotelId}`);
  },
  getPackageByHotel(hotelId) {
    return axios.get(`${api}/packagehotelrel/m/getpackagebyhotel/${hotelId}`);
  },
  getAllPackage() {
    return axios.get(`${api}/packagehotelrel/m/getallpackage`);
  },
  getPackageById(packageId) {
    return axios.get(`${api}/packagehotelrel/m/getpackagedetail/${packageId}`);
  },
  getPackageByHotelRoomType(hotelId, roomtypeId) {
    return axios.get(`${api}/packagehotelrel/m/getpackagebyhotelroomtype/${hotelId}&${roomtypeId}`);
  },
  getRoomTypeByHotel(hotelId) {
    return axios.get(`${api}/roomtype/m/getroomtypebyhotel/${hotelId}`);
  },
  getRoomTypeById(roomTypeId) {
    return axios.get(`${api}/roomtype/m/getroomtypebyid/${roomTypeId}`);
  },
};

export default Hotel;
