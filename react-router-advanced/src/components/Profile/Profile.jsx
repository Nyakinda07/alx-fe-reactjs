cat > src/components/Profile/Profile.jsx << 'EOF'
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  return (
    <div className="profile">
      <h2>User Profile</h2>
      <nav className="profile-nav">
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>
      
      {/* Outlet renders nested routes */}
      <Outlet />
      
      {/* Define nested routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
EOF