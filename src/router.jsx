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
import GuestRoute from './GuestRoute';
import Books from './pages/books/Books';
import Categories from './pages/category/Categories';
import Cart from './pages/cart/Cart';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<ShopLayout />}>
        <Route index element={<Home />} />
        <Route path="books" element={<Books />} />
        <Route path="categories" element={<Categories />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route element={<GuestRoute />}>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<ProfileLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Route>
    </Routes>
  );
}
export default Router;
