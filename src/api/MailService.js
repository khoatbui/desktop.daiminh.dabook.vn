import axios from 'axios';

const api = 'http://103.237.144.222:3000';
const Mail = {
  sendMailWithGeneralQuestion(parram) {
    return axios.post(`${api}/mail/generalrequest`,{customer:parram});
  },
  sendMailWithTourBooking(parram){
    return axios.post(`${api}/mail/tour-booking`,parram);
  }
};

export default Mail;
