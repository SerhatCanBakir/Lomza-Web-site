import React, { useEffect, useState } from 'react';
import { useSocket } from '../socketComp/socketComp';
import './MessageList.css'; // CSS dosyasını dahil ediyoruz

function MessageList({ room }) {
  const [messages, setMessages] = useState([]);
  const socket = useSocket();

  function getCookie(name) {
    const value = `; ${document.cookie};`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  useEffect(() => {
    if (socket) {
      socket.emit('room-switch', room);
      socket.emit('get-all', room);

      socket.on('send-all', (messageList) => {
        setMessages(messageList);
      });

      socket.on('message-get', (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });

      return () => {
        socket.off('send-all');
        socket.off('message-get');
      };
    }
  }, [room, socket]);

  return (
    <div className="message-list-container">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.senderId === getCookie('id') ? 'sent' : 'received'}`}>
          <h5>{msg.sender}</h5>
          <p>{msg.content}</p>
          <span className="timestamp">{msg.sendTime}</span>
        </div>
      ))}
    </div>
  );
}

export default MessageList;
