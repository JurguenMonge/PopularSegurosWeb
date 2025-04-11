import axios from "axios";

const apiServiceAuth = axios.create({
    baseURL: import.meta.env.VITE_API_SERVICE1_URL
});

const apiServiceClient = axios.create({
    baseURL: import.meta.env.VITE_API_SERVICE2_URL
});

const apiServicePolicy = axios.create({
    baseURL: import.meta.env.VITE_API_SERVICE3_URL
});

const attachToken = (config) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
};

apiServiceAuth.interceptors.request.use(attachToken, (error) => Promise.reject(error));
apiServiceClient.interceptors.request.use(attachToken, (error) => Promise.reject(error));
apiServicePolicy.interceptors.request.use(attachToken, (error) => Promise.reject(error));

export { apiServiceAuth, apiServiceClient, apiServicePolicy };