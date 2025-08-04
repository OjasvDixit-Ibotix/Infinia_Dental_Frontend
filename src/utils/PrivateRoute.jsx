import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'sonner';

const PrivateRoute = ({ children }) => {
  // ✅ SINGLE SOURCE OF TRUTH: Only get login status from Redux.
  const islogin = useSelector((state) => state.auth.islogin);
  const loading = useSelector((state) => state.auth.loading);
  const location = useLocation();

  useEffect(() => {
   
    if (!loading && !islogin && location.pathname !== '/') {
        toast.error('You must be logged in to view this page.');
    }
  }, [islogin, loading, location.pathname]);


  if (loading) {
    return <div>Loading...</div>; 
  }

  if (islogin) {
    return children;
  }
  
  return <Navigate to="/" replace />;
};

export default PrivateRoute;