import axios from 'axios';

const api = 'http://103.237.144.222:3000';
const RoomType = {
  getAllRoomType() {
    return axios.get(`${api}/roomtype`);
  },
  getRoomTypeBySupplier(id) {
    return axios.get(`${api}/roomtype/getroomtypebysupplier/${id}`);
  },
};

export default RoomType;
