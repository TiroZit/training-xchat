<template>
	<div class="chats">
		<div class="chats__wrapper">
			<div class="chats__header">
				<i-material-symbols-settings-outline style="width: 28px; height: 28px; margin-right: 24px; flex-shrink: 0;"/>
				<div class="search">
					<div class="search__icon">
						<i-material-symbols-search style="width: 24px; height: 24px;"/>
					</div>
					<input v-model="search" type="text" class="search__input" placeholder="Search"/>
				</div>
			</div>
			<div class="chat__body">
				<Chat v-for="chat in filteredList" :key="chat.id" :chat="chat"/>
			</div>
		</div>
	</div>
</template>
<script>
import Chat from "./Chat.vue";
import { useChatsStore } from "../stores/useChatsStore";
import {useUsersStore} from "../stores/useUsersStore.js";

export default {
	name: "ListChats",
	components: {
		Chat,
	},
	data() {
		return {
			search: "",
			chatsId: this.usersStore.getCurrentUser.chatsId,
			chats: [],
		}
	},
	setup() {
		const chatsStore = useChatsStore()
		const usersStore = useUsersStore()

		return {
			chatsStore,
			usersStore,
		}
	},
	mounted() {
		this.chats = this.chatsStore.getDataChat(this.getChats())
	},
	methods: {
		getChats() {
			return this.chatsStore.getChats(this.chatsId).chats
		},
	},
	computed: {
		filteredList() {
			return this.chats.filter(chat => {
				return chat.name.toLowerCase().includes(this.search.toLowerCase())
			})
		},
	},
}
</script>
<style lang="sass" scoped>
.chats
	min-width: 628px
	height: 100%
	border-right: 1px solid #6F91B4
	&__wrapper
		max-width: 627px
		height: 100%
		padding: 32px 32px 0 32px
	&__header
		display: flex
		align-items: center
		color: #6F91B4
		border-bottom: 1px solid #6F91B4
		padding-bottom: 24px

.search
	position: relative
	width: 100%
	&__icon
		position: absolute
		left: 16px
		top: 50%
		transform: translateY(-50%)
	&__input
		width: 100%
		height: 40px
		font-size: 16px
		padding: 11px
		padding-left: 56px
		border: 1px solid #6F91B4
		border-radius: 8px
		&::placeholder
			color: currentColor
</style>
