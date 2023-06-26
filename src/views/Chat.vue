<template>
	<div class="chat__wrapper">
		<Message v-for="message in getChat(id).messages" :key="message.id" :message="message" />
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
	margin-left: 16px
</style>
