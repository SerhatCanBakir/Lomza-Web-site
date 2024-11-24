import React, { useEffect, useState } from 'react';
import EmojiPicker from './EmojiPickerComp';
import { useSocket } from '../socketComp/socketComp';
import './MessageInput.css'; // CSS dosyasını ekledik

function MessageInput({ room }) {
  const [message, setMessage] = useState('');
  const [roomId, setRoomId] = useState('ilkoda');
  const socket = useSocket();

  useEffect(() => {
    setRoomId(room);
  }, [room]);

  const handleSend = () => {
    if (message.trim()) {
      SendMessage(message);
      setMessage('');
    }
  };

  function onSelectEmoji(emoji) {
    setMessage(message + emoji);
  }

  function getCookie(name) {
    const value = `; ${document.cookie};`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  const takeNameAndIdFromCookie = () => {
    let id = getCookie('id');
    let username = getCookie('username');
    return { id: id, username: username };
  };

  const SendMessage = (message) => {
    if (socket) {
      let sender = takeNameAndIdFromCookie();
      socket.emit('message-send', { chatId: roomId, Sender: sender, content: message });
    }
  };

  return (
    <div className="message-input-container">
      <div className="emoji-picker-container">
        <EmojiPicker onSelectEmoji={onSelectEmoji} />
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default MessageInput;
