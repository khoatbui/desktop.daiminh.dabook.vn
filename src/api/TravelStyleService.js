import axios from 'axios';

const TravelStyle = {
  getAllTravelStyle() {
<<<<<<< HEAD
    return axios.get('http://103.237.144.222:3000/travelstyle/getused');
  },
  getTopTravelStyle() {
    return axios.get('http://103.237.144.222:3000/travelstyle/m/getlisttravelstylepromotion');
  },
  getTopPromotionTravelStylePackage(){
    return axios.get('http://103.237.144.222:3000/travelstylelist/m/getalltravelstylepromotion'); 
  },
  getTravelStylePackageByDestination(destinationId){
    return axios.get('http://103.237.144.222:3000/travelstylelist/m/getalltravelstylebydestination/' + destinationId); 
=======
    return axios.get('http://103.237.144.222:3000/travelstyle/');
  },
  getTravelStyleById(parram) {
    return axios.get('http://103.237.144.222:3000/travelstyle/m/gettravelstylebyid/' + parram);
  },
  getTopTravelStyle() {
    return axios.get('http://103.237.144.222:3000/travelstyle/m/gettop10travelstyle');
>>>>>>> 871c2fa645bd98a223218622c1e1dc7a47a4bf88
  },
};

export default TravelStyle;
