import React, { useState, useEffect } from 'react';
import './UserProfile.css';

function UserProfile({ userId }) {
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [newPicture, setNewPicture] = useState(null);

  useEffect(() => {
    // Kullanıcı verilerini yükleme
    fetch(`http://localhost:3000/get-user/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUsername(data.username || '');
        setStatus(data.status || '');
        setProfilePicture(data.profilePicture || null);
      });
  }, [userId]);

  const handleProfileUpdate = () => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('status', status);
    if (newPicture) {
      formData.append('profilePicture', newPicture);
    }

    fetch(`http://localhost:3000/update-user/${userId}`, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.text())
      .then((message) => alert(message));
  };

  const handlePictureChange = (e) => {
    setNewPicture(e.target.files[0]);
  };

  return (
    <div className="user-profile-container">
      <h2>Edit Profile</h2>
      <div className="profile-picture">
        <img
          src={
            newPicture
              ? URL.createObjectURL(newPicture)
              : `data:image/jpeg;base64,${profilePicture}`
          }
          alt="Profile"
        />
        <input type="file" onChange={handlePictureChange} />
      </div>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Status</label>
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>
      <button onClick={handleProfileUpdate}>Save Changes</button>
    </div>
  );
}

export default UserProfile;
