import axios from 'axios';

function fetchPixabay(search, page=1) {
axios.defaults.baseURL = 'https://pixabay.com';
const API_KEY = '30284950-1e08157aafd4339d0b59ad3e4';
    return axios
        .get('/api/?', {
            params: {
                q: search,
                page,
                key: API_KEY,
                image_type: "photo",
                orientation: "horizontal",
                per_page: 12,
            },
        })
        .then(response => {
            return response.data;
        })
       
  } 


export default fetchPixabay;
