import axios from 'axios';

const api = 'http://103.237.144.222:3000';
const Search = {
  GetTourBySearch(key) {
    return axios.post(`${api}/tourlist/m/getalltourbysearch`, { keyword: key });
  },
  getHotelBySearch(params) {
    return axios.post(`${api}/hotel/m/posthotelbysearch/`, { keyword: params });
  },
  GetDestinationBySearch(params) {
    return axios.post(`${api}/destination/m/postdestinationbysearch/`, { keyword: params });
  },
  GetHotelPackageBySearch(params) {
    return axios.post(`${api}/packagehotelrel/m/postpackagebysearch/`, { keyword: params });
  },
};

export default Search;
