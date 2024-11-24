import React, { useState, useEffect } from 'react';
import './GroupAndFriendManager.css';

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function GroupAndFriendManager() {
  const [friendId, setFriendId] = useState('');
  const [friendRequests, setFriendRequests] = useState([]);
  const [groupName, setGroupName] = useState('');
  const [memberIds, setMemberIds] = useState([]);
  const [currentId, setCurrentId] = useState('');
  const [userId, setUserId] = useState('');

  // Kullanıcı ID'sini yükle
  useEffect(() => {
    const id = getCookie('id');
    setUserId(id || 'Unknown');
  }, []);

  // Arkadaşlık isteklerini yükleme
  useEffect(() => {
    fetch('http://10.38.56.172:433/friendrequests')
      .then((response) => response.json())
      .then((data) => setFriendRequests(data.requests || []))
      .catch(() => alert('Failed to load friend requests.'));
  }, []);

  // Arkadaş ekleme
  const handleAddFriend = () => {
    if (friendId.trim() === '') {
      alert('Please enter a valid user ID.');
      return;
    }
    fetch('http://10.38.56.172:433/addfriend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ friendId }),
    })
      .then((response) => {
        if (response.ok) {
          alert('Friend added successfully!');
          setFriendId('');
        } else {
          alert('Failed to add friend.');
        }
      })
      .catch(() => {
        alert('An error occurred while adding the friend.');
      });
  };

  // Arkadaşlık isteğini kabul etme
  const handleAcceptRequest = (id) => {
    fetch(`http://10.38.56.172:433/friendrequests/${id}/accept`, {
      method: 'POST',
    })
      .then((response) => {
        if (response.ok) {
          setFriendRequests((prev) => prev.filter((req) => req.id !== id));
          alert('Friend request accepted!');
        } else {
          alert('Failed to accept friend request.');
        }
      });
  };

  // Arkadaşlık isteğini reddetme
  const handleDeclineRequest = (id) => {
    fetch(`http://10.38.56.172:433/friendrequests/${id}/decline`, {
      method: 'POST',
    })
      .then((response) => {
        if (response.ok) {
          setFriendRequests((prev) => prev.filter((req) => req.id !== id));
          alert('Friend request declined.');
        } else {
          alert('Failed to decline friend request.');
        }
      });
  };

  // Üye ekleme
  const handleAddMember = () => {
    if (currentId.trim() === '') {
      alert('Please enter a valid user ID.');
      return;
    }
    setMemberIds((prev) => [...prev, currentId]);
    setCurrentId('');
  };

  // Grup oluşturma
  const handleCreateGroup = () => {
    if (groupName.trim() === '' || memberIds.length === 0) {
      alert('Please enter a group name and at least one member.');
      return;
    }
    fetch('http://10.38.56.172:433/creategroup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ groupName, members: memberIds }),
    })
      .then((response) => {
        if (response.ok) {
          alert('Group created successfully!');
          setGroupName('');
          setMemberIds([]);
        } else {
          alert('Failed to create group.');
        }
      })
      .catch(() => {
        alert('An error occurred while creating the group.');
      });
  };

  return (
    <div className="manager-container">
      {/* Kullanıcı ID'si */}
      <div className="user-info">
        <h3>Your ID: {userId}</h3>
      </div>

      {/* Arkadaş Ekleme */}
      <div className="friend-add-section">
        <h2>Add a Friend</h2>
        <input
          type="text"
          placeholder="Enter Friend ID"
          value={friendId}
          onChange={(e) => setFriendId(e.target.value)}
        />
        <button onClick={handleAddFriend}>Add Friend</button>
      </div>

      {/* Arkadaşlık İstekleri */}
      <div className="friend-requests-section">
        <h2>Friend Requests</h2>
        <ul>
          {friendRequests.map((request) => (
            <li key={request.id}>
              {request.name} ({request.id})
              <button onClick={() => handleAcceptRequest(request.id)}>
                Accept
              </button>
              <button onClick={() => handleDeclineRequest(request.id)}>
                Decline
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Grup Oluşturma */}
      <div className="group-create-section">
        <h2>Create a Group</h2>
        <input
          type="text"
          placeholder="Enter Group Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <div>
          <input
            type="text"
            placeholder="Enter Member ID"
            value={currentId}
            onChange={(e) => setCurrentId(e.target.value)}
          />
          <button onClick={handleAddMember}>Add Member</button>
        </div>
        <ul>
          {memberIds.map((id, index) => (
            <li key={index}>{id}</li>
          ))}
        </ul>
        <button onClick={handleCreateGroup}>Create Group</button>
      </div>
    </div>
  );
}

export default GroupAndFriendManager;
