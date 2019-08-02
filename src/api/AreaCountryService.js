import axios from 'axios';

const AreaCountry = {
  getAllAreaCountry() {
    return axios.get('http://103.237.144.222:3000/areacountry/');
  },
  getAreaCountryById(parram) {
    return axios.get('http://103.237.144.222:3000/areacountry/m/getareacountrybyid/' + parram);
  },
  getTopAreaCountry() {
    return axios.get('http://103.237.144.222:3000/areacountry/m/gettop10areacountry');
  },
};

export default AreaCountry;
