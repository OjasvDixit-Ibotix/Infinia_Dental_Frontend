import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'sonner';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  const [isunauth,setUnAuth] = useState(false);

  useEffect(()=>{
    if(!token || !user){
      toast.error('You are unauthorized');
      console.log('heuhfu');
      
      setUnAuth(true);
    }
  },[token])

    if (token ||user) {
      return children;
    }
    
  if(isunauth){

    return <Navigate to="/"  />;
  }
  return null; 

};

export default PrivateRoute;
