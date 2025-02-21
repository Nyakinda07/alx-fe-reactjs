function UserProfile(props) {
  return (
      <div style={{ border: '2px solid gray', padding: '15px', margin: '10px', borderRadius: '10px', width: '300px' }}>
          <h2 style={{ color: 'blue', textAlign: 'center' }}>{props.name}</h2>
          <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Age: {props.age}</p>
          <p style={{ fontStyle: 'italic' }}>Bio: {props.bio}</p>
      </div>
  );
}

export default UserProfile;
