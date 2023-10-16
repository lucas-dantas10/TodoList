import axios from "axios";
import store from './store';
import router from './router/index.js';

const axiosClient = axios.create({
    baseURL: "https://omlyy.com.br/api", // PRODUCTION
    //baseURL: 'http://localhost:8080/api', // ENVIRMONT
});

axiosClient.interceptors.request.use((config) => {
    const token = store.state.user.token;

    config.headers.Authorization = `Bearer ${token}`;
    // config.headers["Content-Type"] = "application/json";
    return config;
});

axiosClient.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status == 401) {
        store.commit('setToken', null);
        router.push({name: 'Login'});
    }
    throw error;
});

export default axiosClient;