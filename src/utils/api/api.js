// import axios from 'axios';

// const apiClient = axios.create({
//   baseURL: import.meta.env.VITE_BACKEND_URL,
// });

// const publicRoutes = ['/users', '/login'];

// apiClient.interceptors.request.use(
//   (config) => {
//     // If the request is for a public route, send it without modification.
//     if (publicRoutes.includes(config.url)) {
//       return config;
//     }
//     const token = Cookies.get('token');
//     const user = JSON.parse(localStorage.getItem('user'));

//     //  if(token || user){
//     //   config.headers.Authorization = `Bearer ${token}`;
//     //   return config;
//     // }
//     //  (error) => {

//     //     return Promise.reject(error);

//     //   }
    
//     // const authHeader = {
//     //   username: "a49a@gmail.com",
//     //   password: "asdf1234"
//     // };


//     // const basicAuth = "Basic " + btoa(`${authHeader.username}:${authHeader.password}`);

//     //   config.headers.Authorization = basicAuth;

//  //  config.headers["ngrok-skip-browser-warning"] = "true";

    

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default apiClient;


import axios from 'axios';
import Cookies from 'js-cookie'; 
import { Navigate } from 'react-router-dom';
import { toast } from 'sonner';

//  VITE_BACKEND_URL='http://localhost:3000'

const VITE_BACKEND_URL='http://13.217.104.2:8000'

const apiClient = axios.create({
  baseURL: VITE_BACKEND_URL,
});

const publicRoutes = ['/users', '/login','/auth/forget-password/send','/auth/forget-password/verify', '/auth/forget-password'];


apiClient.interceptors.request.use(
  (config) => {
    if (publicRoutes.some(route => config.url.includes(route))) {
      return config;
    }

    const token = Cookies.get('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers['ngrok-skip-browser-warning'] = 'true';
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 403) {
        //   toast.error('Access denied: You do not have permission.');
        Cookies.remove('user');
        Cookies.remove('token');
        window.location.href = '/';
        // setTimeout(() => {   `
          // }, 1500);
        }

      if (status === 401) {
        // toast.error('Session expired. Please log in again.');
        Cookies.remove('token');
        Cookies.remove('user');

          // setTimeout(() => {  
          //  window.location.href = '/';

          //  }, 1500);
        }
       
      
    } 
    // else {
    //   toast.error('Network error. Please try again.');
    // }
    
    return Promise.reject(error);
  }
);

export default apiClient;