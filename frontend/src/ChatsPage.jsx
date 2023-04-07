import { MultiChatSocket,MultiChatWindow,useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = ( props ) => {
    // return <>chats...</> 
    const chatProps = useMultiChatLogic('82966246-0ad0-47c6-8455-b160f1fc438e',props.user.username,props.user.secret);

    return( 
        <div style={{ height: '100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style = {{height: '100%'}} />
        </div>
    );

}

export default ChatsPage;