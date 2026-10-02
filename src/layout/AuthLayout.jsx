import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div className="athar-container">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout;
