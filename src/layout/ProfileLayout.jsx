import { Outlet } from 'react-router-dom';

function ProfileLayout() {
  return (
    <div className="athar-container">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default ProfileLayout;
