<template>

<div>
    <ChatHeader :colors = "colors" :chosenColor= "chosenColor" />
    <beautiful-chat
    :participants = "participants"
    :onMessageWasSent = "onMessageWasSent"
    :messageList = "messageList"
    :newMessagesCount = "newMessagesCount"
    :isOpen = "isChatOpen"
    :close = "closeChat"
    :icons = "icons"
    :open = "openChat"
    :colors = "colors"
    :alwaysScrollToBottom = "alwaysScrollToBottom"
    :messageStyling = "messageStyling"
    />
</div>
</template>

<script>
import ChatHeader from './ChatHeader.vue'
import ChatFooter from './ChatFooter.vue'

export default {
    name: 'Chat',
    components: {
    ChatHeader, ChatFooter
    },
    data() {
        return {
            participants: 
        }
    }


}
</script>

<style>

</style>
