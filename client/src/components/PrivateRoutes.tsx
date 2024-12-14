// components/PrivateRoute.js

import { Outlet, Navigate } from 'react-router';
import useAuthStore from '../stores/useAuthStore';

const PrivateRoutes = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
    
  return isAuthenticated ? <Outlet /> : <Navigate to='/login-register' />;
};

export default PrivateRoutes;

