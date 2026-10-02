import { Outlet } from 'react-router-dom';
import Navbar from '@/components/navbar/Navbar';

function ShopLayout() {
  return (
    <div className="athar-container">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default ShopLayout;
