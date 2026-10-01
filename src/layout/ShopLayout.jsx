import { Outlet } from 'react-router-dom';
import Navbar from '@/components/navbar/Navbar';

function ShopLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default ShopLayout;
