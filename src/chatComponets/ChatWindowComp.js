import ChatMessageList from './ChatMessageList';
import ChatMessageInput from './ChatMessageInput'
import { SocketProvider } from '../socketComp/socketComp';
import { useState } from 'react';
function ChatWindowComp() {
 const [roomId,setRoomId] = useState('odaiki');

    return (
        <div>
            <SocketProvider>
                <ChatMessageList room={roomId}></ChatMessageList>

                <ChatMessageInput room={roomId}></ChatMessageInput>
            </SocketProvider>



        </div>
    )
}
export default ChatWindowComp