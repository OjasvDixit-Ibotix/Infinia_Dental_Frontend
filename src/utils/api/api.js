import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

const publicRoutes = ['/users', '/login'];

apiClient.interceptors.request.use(
  (config) => {
    // If the request is for a public route, send it without modification.
    if (publicRoutes.includes(config.url)) {
      return config;
    }
    // const token = localStorage.getItem('token');
    // const user = JSON.parse(localStorage.getItem('user'));

    //  if(token || user){
    //   config.headers.Authorization = `Bearer ${token}`;
    //   return config;
    // }
    //  (error) => {

    //     return Promise.reject(error);

    //   }
    
    const authHeader = {
      username: "a49a@gmail.com",
      password: "asdf1234"
    };

    const basicAuth = "Basic " + btoa(`${authHeader.username}:${authHeader.password}`);

      config.headers.Authorization = basicAuth;

     config.headers["ngrok-skip-browser-warning"] = "true";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
