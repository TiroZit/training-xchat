<script>
import {defineComponent} from 'vue'
import {useChatsStore} from "../stores/useChatsStore.js";

export default defineComponent({
	name: "WriteMessage",
	props: {
		id: "",
	},
	data() {
		return {
			message: "",
		}
	},
	setup(props) {
		const chatsStore = useChatsStore().chats[props.id-1].messages

		return {
			chatsStore,
		}
	},
	mounted() {
		console.log(this.chatsStore)
	},
	methods: {
		sendMessage() {
			if (this.message === "") return
			let message = {
				id: this.chatsStore.length + 1,
				time: new Date().toLocaleTimeString('en-US',
					{
						hour12: false,
						hour: "numeric",
						minute: "numeric"
					}
				),
				text: this.message,
				type: "own",
			}

			this.chatsStore.push(message)

			this.message = ""
		},
	},
})
</script>

<template>
	<div class="write-message">
		<button class="write-message__clip">
			<i-ph-paperclip-light style="width: 24px; height: 24px;"/>
		</button>
		<input v-model="message" @keypress.enter="sendMessage" type="text" class="write-message__input" placeholder="Write a message...">
		<button @click="sendMessage" class="write-message__send">
			<i-majesticons-send-line/>
		</button>
	</div>
</template>

<style scoped lang="sass">
.write-message
	display: flex
	align-items: center
	color: #6F91B4
	background-color: #fff
	width: 100%
	padding: 8px 16px
	&__input
		flex: 1 1 auto
		font-size: 16px
		font-weight: 500
		line-height: 18px
		border: none
		margin: 0 24px
		padding: 0
	&__send
		display: flex
		align-items: center
		justify-content: center
		width: 34px
		height: 34px
		border-radius: 50%
		background-color: #6F91B4
		color: #fff
</style>
