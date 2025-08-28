import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'sonner';
import Spinner from './customHooks/Spinner';

const PrivateRoute = ({ children, roles }) => {
  const { islogin, loading, user } = useSelector((state) => state.auth);
  const location = useLocation();

  if (loading) {
    return <div className='grid  min-h-screen place-items-center'><Spinner/></div>;
  }

  if (!islogin) {
    console.log('fjeiofjeiofj');
    
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // If roles are required, and we don't have a user object yet, show loading.
  // This handles the case where `islogin` is true from cookies, but the full user object
  // hasn't been fetched yet.
  if (roles && !user) {
    return <div>Loading...</div>;
  }

  if (roles && !roles.includes(user?.user_type)) {
    toast.warning("You are not authorized to view this page.");
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default PrivateRoute;