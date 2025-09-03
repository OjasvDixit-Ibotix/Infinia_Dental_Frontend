import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'sonner';
import Spinner from './customHooks/Spinner';
import cookies from 'js-cookie';
const PrivateRoute = ({ children, roles }) => {
  const { islogin, loading, user } = useSelector((state) => state.auth);
  const location = useLocation();
  const token = cookies.get('token');

  if (loading) {
    return <div className='grid min-h-screen place-items-center'><Spinner/></div>;
  }
  if ( !token) {
    console.log('fjeiofjeiofj');
    
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  
  if (roles && !user) {
    return <div>Loading...</div>;
  }

  if (roles && !roles.includes(user?.user_type.toLowerCase())) {
    console.log('oiefiefeiof',user?.user_type.toLowerCase());
    
    toast.warning("You are not authorized to view this page.");
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default PrivateRoute;