<template>
	<div class="chat__wrapper">
		<div class="chat__messages">
			<Message v-for="message in chatStore.getChat(id).messages" :key="message.id" :message="message" />
		</div>
		<WriteMessage :id="id"/>
	</div>
</template>

<script>
import Message from "/components/Message.vue"
import WriteMessage from "../components/WriteMessage.vue";
import {useChatStore} from "../stores/useChatStore.js";

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
	},
	setup() {
		const chatStore = useChatStore()

		return {
			chatStore,
		}
	},
	methods: {
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
