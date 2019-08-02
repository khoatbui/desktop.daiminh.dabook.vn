import axios from 'axios';

const TravelStyle = {
  getAllTravelStyle() {
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
  },
};

export default TravelStyle;
