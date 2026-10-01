import { Routes, Route } from 'react-router-dom';
import ShopLayout from './layout/ShopLayout';
import AuthLayout from './layout/AuthLayout';
import ProfileLayout from './layout/ProfileLayout';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import About from './pages/about/About';
import ProtectedRoute from './ProtectedRoute';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<ShopLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}
export default Router;
