import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com';
const API_KEY = '30284950-1e08157aafd4339d0b59ad3e4';
function fetchPixabay(search, page = 1) {

    return axios
        .get('/api', {
            params: {
                q: search,
                page,
                key: API_KEY,
                per_page: 12,
            },
        })
        .then(response => {
            return response.data;
        })
       
  } 


export default fetchPixabay;
//`key=${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
