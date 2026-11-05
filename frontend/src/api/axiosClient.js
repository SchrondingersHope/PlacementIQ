import axios from "axios";
// import User from "../../../backend/models/User";
import { store, setLogin, setLogout } from "../store";

const axiosClient = axios.create({
    baseURL: 'http://localhost:3000/',
})

axiosClient.interceptors.request.use(
    (config)=>{
    const token = store.getState().auth.token;

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
)

axiosClient.interceptors.response.use(
    (response)=>response,
    (error)=>{
        if (error.response?.status === 401) {
        // Token expired or invalid -> force logout
            const state = store.getState().auth;
            store.dispatch({ type: 'auth/setLogout' });
            // store.setLogout(state);
            // useAuthStore.getState().logout();
            window.location.href = '/login'; 
        }
        return Promise.reject(error);
    }
)

export default axiosClient;