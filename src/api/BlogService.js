import axios from 'axios';

const api = 'http://103.237.144.222:3000';
const Blog = {
  getAllMICE() {
    return axios.get(`${api}/mice`);
  },
  getMICEById(parram) {
    return axios.get(`${api}/mice/m/getmicebyid/${parram}`);
  },
  getBlogByMICEId(parram) {
    return axios.get(`${api}/bloglist/m/getbloglistbymiceid/${parram}`);
  },
};

export default Blog;
