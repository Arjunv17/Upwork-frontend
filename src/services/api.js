import axios from 'axios';
import toast from 'react-hot-toast';

const token = localStorage.getItem('upwork_user_data')?.token;

const api = axios.create({
    baseURL: "http://localhost:8000/v1/api"
});

// Set the token in the Authorization header for all requests
if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
}

// Interceptor to handle unauthorized errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            const currentPath = window.location.pathname;
            if (currentPath !== '/') {
                window.location.replace('/');
                toast.error("Unauthorized User");
            }
        }
        return Promise.reject(error);
    }
);

export default api;
