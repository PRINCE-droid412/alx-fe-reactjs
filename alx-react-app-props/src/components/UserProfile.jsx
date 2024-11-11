import React, { useContext } from 'react';
import UserContext from './UserContext';

// Access user data from UserContext
function UserProfile() {
  const { user } = useContext(UserContext); // Use useContext to get user data from UserContext

  return (
    <div className='User-Profile'>
      <h2>{user?.name}</h2>
      <p>Age: {user?.age}</p>
      <p>Bio: {user?.bio}</p>
    </div>
  );
}

export default UserProfile;
