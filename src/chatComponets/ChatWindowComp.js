import { useEffect, useState } from 'react';
import ChatMessageList from './ChatMessageList';
import ChatMessageInput from './ChatMessageInput';
import { SocketProvider } from '../socketComp/socketComp';
import AddFriendComponent from '../friendComponets/AddFriendComp';
import FriendListComp from '../friendComponets/FriendListComp';
import './ChatWindow.css'; // CSS dosyasını dahil ediyoruz

function ChatWindowComp() {
    const [roomId, setRoomId] = useState('ilkoda');

    const changeRoom = (room) => {
        setRoomId(room);
    };

    useEffect(() => {
        console.log('Current roomId:', roomId);
    }, [roomId]);

    return (
        <div className="chat-window-container">
            <SocketProvider>
                {/* Mesaj listesi */}
                <div className="message-list-container">
                    <ChatMessageList room={roomId} />
                </div>

                {/* Mesaj giriş alanı */}
                <div className="message-input-container">
                    <ChatMessageInput room={roomId} />
                </div>
            </SocketProvider>

            {/* Arkadaş listesi */}
            <div className="friend-list-container">
                <FriendListComp changeRoom={changeRoom} />
            </div>
        </div>
    );
}

export default ChatWindowComp;
