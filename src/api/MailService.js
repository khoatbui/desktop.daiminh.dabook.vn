import axios from 'axios';
// 103.237.144.222
const api = 'http://localhost:3001';
const Mail = {
  sendMailWithGeneralQuestion(parram) {
    return axios.post(`${api}/mail/generalrequest`,{customer:parram});
  },
  sendMailWithTourBooking(parram){
    return axios.post(`${api}/mail/tour-booking`,parram);
  }
};

export default Mail;
