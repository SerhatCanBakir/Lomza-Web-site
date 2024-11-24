import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Yönlendirme için
import './FriendList.css'; // CSS dosyasını ekliyoruz

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function FriendListComp({ changeRoom }) {
  const [Friends, setFriends] = useState([]);
  const navigate = useNavigate(); // Yönlendirme için

  useEffect(() => {
    fetch("http://10.38.56.172:433/getrooms/" + getCookie("id"))
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          alert("Hata");
        }
      })
      .then((data) => {
        setFriends(data.friendsId);
      });
  }, []);

  return (
    <div className="friend-list-container">
      <h2>Friends</h2>
      <ul>
        {Friends.map((element, index) => (
          <li key={index}>
            <button onClick={() => changeRoom(element.toString())}>
              {element}
            </button>
          </li>
        ))}
      </ul>
      <button
        className="add-friend-button"
        onClick={() => navigate("/addfriend")}
      >
        Add Friend
      </button>
    </div>
  );
}

export default FriendListComp;
