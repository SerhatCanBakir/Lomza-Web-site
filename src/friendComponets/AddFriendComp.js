import React, { useState } from 'react';

function AddFriendComponent() {
  const [username, setUsername] = useState('');

  const handleAddFriend = () => {
    // Backend’e arkadaş ekleme isteği gönderin.
    alert(`Friend request sent to ${username}`);
    setUsername('');
  };

  return (
    <div>
      <h3>Add Friend</h3>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <button onClick={handleAddFriend}>Add Friend</button>
    </div>
  );
}

export default AddFriendComponent;
