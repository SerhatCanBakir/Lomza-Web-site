import ChatMessageList from './ChatMessageList';
import ChatMessageInput from './ChatMessageInput'

function ChatWindowComp(){
    return(
        <div>
            <ChatMessageList messages={{sender:'serhat',text:"ne ne !"}}></ChatMessageList>
            <ChatMessageInput></ChatMessageInput>
        </div>
    )
}
export default ChatWindowComp