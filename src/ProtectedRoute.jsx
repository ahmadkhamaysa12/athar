import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '@/store/useAuthStore';
function ProtectedRoute() {
  
const Token = useAuthStore((state) => state.token);
  if (!Token) {
    return <Navigate to="/auth/login" replace />;
  }
  
  return <Outlet />;
}

export default ProtectedRoute;