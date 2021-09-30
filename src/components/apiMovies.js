import axios from 'axios';

const apiMovies = axios.create({
    baseURL: 'https://api.nasa.gov/'
})

export default apiMovies;

const token ='YH8yexBFORTiDuAASZIQexiDJDlXNoZ1cpq7mfBj';

apiMovies.interceptors.request.use( (request) => {
    request.headers['Authorization'] = "Bearer " + token;
    return request;
}

)