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
  getAllBlog() {
    return axios.get(`${api}/bloglist/getusedblog`);
  },
  getAllBlogType() {
    return axios.get(`${api}/blogtype/getused`);
  },
  getBlogById(parram) {
    return axios.get(`${api}/bloglist/m/getbloglistbyid/${parram}`);
  },
  getBlogDetailById(parram) {
    return axios.get(`${api}/blogdetail/m/getblogdetailbyid/${parram}`);
  },
};

export default Blog;
