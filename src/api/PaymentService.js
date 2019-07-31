import axios from 'axios';

const Payment = {
  getAllPayment() {
    return axios.get('http://103.237.144.222:3000/payment');
  },
};

export default Payment;
