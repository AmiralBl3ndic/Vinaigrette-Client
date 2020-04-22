<template>

<div>
    <beautiful-chat
    :participants = "roomParticipants"
    :onMessageWasSent = "onMessageWasSent"
    :messageList = "messageList"
    :newMessagesCount = "newMessagesCount"
    :isOpen = "isChatOpen"
    :close = "closeChat"
    :open = "openChat"
    :colors = "colors"
    :alwaysScrollToBottom = "alwaysScrollToBottom"
    :messageStyling = "messageStyling"
    >
      <template v-slot:header>
        <div class="d-flex align-center">
          <span class="title">Chat room</span>
        </div>
      </template>

      <template v-slot:user-avatar>
        <div class="avatar d-none"></div>
      </template>

      <template v-slot:text-message-body="{ message }">
        <div>
          <span v-if="message.author !== 'me'" class="font-weight-bold mb-2">{{ message.author }}</span>
          <div class="d-flex align-center body-2">
            {{ message.data.text }}
          </div>
        </div>
      </template>
    </beautiful-chat>
</div>
</template>

<script>
export default {
  name: 'Chat',

  data () {
    return {
      participants: [], // name, id
      messageList: [], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      colors: {
        header: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        launcher: {
          bg: '#4e8cff'
        },
        messageList: {
          bg: '#ffffff'
        },
        sentMessage: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        receivedMessage: {
          bg: '#eaeaea',
          text: '#222222'
        },
        userInput: {
          bg: '#f4f7f9',
          text: '#565867'
        }
      },
      alwaysScrollToBottom: true,
      messageStyling: false
    }
  },

  sockets: {
    chat (data) {
      this.messageList.push({
        id: Date.now(),
        author: this.$store.getters.username === data.username ? 'me' : data.username,
        type: 'text',
        data: {
          text: data.message
        }
      })
      this.isChatOpen = true
    }
  },

  computed: {
    roomParticipants () {
      return this.$store.getters.chatParticipants
    }
  },

  methods: {
    sendMessage (text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
        this.onMessageWasSent({ author: '', type: 'text', data: { text } })
      }
    },
    onMessageWasSent (message) {
      // called when the user sends a message
      this.$socket.emit('chat', message.data.text)
    },
    openChat () {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true
      this.newMessagesCount = 0
    },
    closeChat () {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false
    }
  }
}

</script>

<style>
.avatar {
  width: 0 !important;
  height: 0 !important;
}
</style>
