import React from 'react';

function MessageList({ messages }) {
  if(!Array.isArray(messages)){messages=[messages]}
  return (
    <div>
      <h3>Messages</h3>
      <ul>
        
        {messages.map((message, index) => (
          <li key={index}>
            <strong>{message.sender}:</strong> {message.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MessageList;
