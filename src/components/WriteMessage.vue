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
			imageData: "",
			fileName: "",
		}
	},
	setup(props) {
		const chatsStore = useChatsStore()

		return {
			chatsStore,
		}
	},
	mounted() {
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
				image: "",
				type: "own",
			}

			this.chatsStore.chats[this.id-1].messages.push(message)

			this.message = ""
		},
		handleFileChange(event) {
			const files = event.target.files;
			const file = files[0];
			const reader = new FileReader();

			reader.onload = (e) => {
				this.imageData = e.target.result;
				this.fileName = file.name;

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
					imageSrc: this.imageData,
					imageAlt: this.fileName,
					type: "own",
				}

				this.chatsStore.chats[this.id-1].messages.push(message)
			};

			reader.readAsDataURL(file);
		},
	},
})
</script>

<template>
	<div class="write-message">
		<input @change="handleFileChange" id="inputFile" type="file" class="write-message__input-file">
		<label for="inputFile">
			<i-ph-paperclip-light style="width: 24px; height: 24px;"/>
		</label>
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
		&:focus
			outline: none !important
	&__input-file
		width: 0.1px
		height: 0.1px
		opacity: 0
		overflow: hidden
		position: absolute
		z-index: -1
		& + label
			display: block
			cursor: pointer
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
