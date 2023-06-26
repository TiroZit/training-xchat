<template>
	<div class="chat__wrapper">
		<div class="chat__messages">
			<Message v-for="message in getChat(id).messages" :key="message.id" :message="message" />
		</div>
		<WriteMessage :id="id"/>
	</div>
</template>

<script>
import {
	useChatsStore
} from "../stores/useChatsStore"
import Message from "/components/Message.vue"
import WriteMessage from "../components/WriteMessage.vue";

export default {
	name: "Chat",
	components: {
		Message,
		WriteMessage,
	},
	props: {
		id: Number,
	},
	computed: {
		chats() {
			const chatsStore = useChatsStore()
			return chatsStore.chats
		},
	},
	methods: {
		getChat(id) {
			const chatsStore = useChatsStore()
			return chatsStore.getChat(id)
		},
	},
	mounted() {
	},
}
</script>

<style lang="sass" scoped>
.chat__wrapper
	display: flex
	flex-direction: column
	align-items: flex-start
	justify-content: end
	width: 100%
.chat__messages
	display: flex
	flex-direction: column
	align-items: flex-start
	justify-content: end
	overflow: auto
	width: 100%
	padding: 0 16px
</style>
