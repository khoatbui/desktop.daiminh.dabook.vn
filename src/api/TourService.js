import axios from 'axios';

const Tour = {
  getAllTour() {
    return axios.get('http://103.237.144.222:3000/tour/');
  },
  getTopTour() {
    return axios.get('http://103.237.144.222:3000/tour/m/getlisttourpromotion');
  },
  getTopPromotionTourPackage(){
    return axios.get('http://103.237.144.222:3000/tourlist/m/getalltourpromotion'); 
  },
  getTourPackageByDestination(destinationId){
    return axios.get('http://103.237.144.222:3000/tourlist/m/getalltourbydestination/' + destinationId); 
  },
};

export default Tour;
