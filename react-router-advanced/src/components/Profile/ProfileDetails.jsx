# Profile Details component
cat > src/components/Profile/ProfileDetails.jsx << 'EOF'
const ProfileDetails = () => {
  return (
    <div className="profile-details">
      <h3>Profile Details</h3>
      <p>User information will appear here</p>
    </div>
  );
};

export default ProfileDetails;
EOF

# Profile Settings component
cat > src/components/Profile/ProfileSettings.jsx << 'EOF'
const ProfileSettings = () => {
  return (
    <div className="profile-settings">
      <h3>Account Settings</h3>
      <p>Settings form will appear here</p>
    </div>
  );
};

export default ProfileSettings;
EOF