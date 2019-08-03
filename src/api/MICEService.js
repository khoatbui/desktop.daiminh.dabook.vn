import axios from 'axios';

const api = 'http://103.237.144.222:3000';
const MICE = {
  getAllMICE() {
    return axios.get(`${api}/mice`);
  },
  getMICEById(parram) {
    return axios.get(`${api}/mice/m/getmicebyid/${parram}`);
  },
};

export default MICE;
