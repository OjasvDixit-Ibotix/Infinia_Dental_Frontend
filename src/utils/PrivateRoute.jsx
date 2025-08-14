import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'sonner';

const PrivateRoute = ({ children ,roles}) => {
  
  const islogin = useSelector((state) => state.auth.islogin);
  const loading = useSelector((state) => state.auth.loading);
  const {user} = useSelector((state) => state.auth);

  const location = useLocation();

  // useEffect(() => {
   
  //   if (!loading && !islogin && location.pathname !== '/') {
  //       toast.error('You must be logged in to view this page.');
  //   }
  // }, [islogin, loading, location.pathname]);

  if(!islogin){
     return <Navigate to="/" state={{ from: location }} replace />;
  }


  if (roles && !roles.includes(user?.user_type)) {
    // If the user's role is not permitted, redirect them to their dashboard.
    // This prevents employees from accessing admin-only pages.
    console.log('oihgjkhfg');
    
    toast.warning('You are not auto')
    return <Navigate to="/dashboard" replace />;
  }


  if (loading) {
    return <div>Loading...</div>; 
  }


  if (islogin) {
    return children;
  }
  
  return <Navigate to="/" replace />;
};

export default PrivateRoute;