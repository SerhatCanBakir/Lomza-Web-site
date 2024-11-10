import React, { useEffect, useState } from 'react';
import {  useSocket } from '../socketComp/socketComp';
function MessageList({room}) {
  const socket = useSocket();
  const [message,setMessage] = useState([]);
  useEffect(()=>{
    if(socket){
      console.log('socket foundend');
      socket.emit('room-switch',room);
      socket.emit('get-all',room);
      socket.on('send-all',message=>{
        setMessage(message);
       
      })
      socket.on('message-get',(msg)=>{
      
        const DTO = {senderId:msg.Sender.id,sender:msg.Sender.username,content:msg.content,}
        setMessage((message)=>[...message,DTO]);
      })


     return ()=>{
      socket.off('send-all');
      
     }
    }
  },[socket])
  
  return (
    <div>
    <h2>Messages:</h2>
    {message.map((msg, index) => (
      <p key={index}>{msg.sender+":"+msg.content}</p>
    ))}
  </div>
);
};

export default MessageList;
