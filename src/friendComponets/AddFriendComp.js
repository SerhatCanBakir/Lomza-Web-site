import React, { useState } from 'react';

function AddFriendComponent() {
  const [username, setUsername] = useState('');

  const handleAddFriend = () => {

    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }
    fetch('http://10.38.56.172:433/joinchat/'+username,{method:"POST",
      headers:{'content-Type':"application/json"},
      body:JSON.stringify({token:getCookie('token')})
    }).then(res=>{
      if(res.status===401){
       alert("code:"+401);
      }else if(res.status===406){
       alert("code:"+406);
      }else{
        alert(`Friend request sent to ${username}`);
      }
    })
    
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
