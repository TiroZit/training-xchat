<template>
	<div class="chat__wrapper">
		<Message v-for="message in getChat(id).messages" :key="message.id" :message="message" />
	</div>
</template>

<script>
import {
	useChatsStore
} from "../stores/useChatsStore"
import Message from "/components/Message.vue"

export default {
	name: "Chat",
	components: {
		Message,
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
		console.log(this.getChat(this.id).messages)
	},
}
</script>

<style lang="sass" scoped>
.chat__wrapper
	display: flex
	flex-direction: column
	align-items: flex-start
	justify-content: end
	margin-left: 16px
</style>
